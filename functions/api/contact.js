const MAX_FIELD_LENGTH = 5000;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });
}

function clean(value) {
  return String(value || '').trim().slice(0, MAX_FIELD_LENGTH);
}

function escapeHtml(value) {
  return clean(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function verifyTurnstile(token, secret, ip) {
  if (!secret) return true;
  if (!token) return false;

  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form
  });

  if (!response.ok) return false;
  const result = await response.json();
  return Boolean(result.success);
}

export async function onRequestPost({ request, env }) {
  let formData;

  try {
    formData = await request.formData();
  } catch {
    return json({ error: 'Invalid form submission.' }, 400);
  }

  if (clean(formData.get('company'))) {
    return Response.redirect(new URL('/thank-you/', request.url), 303);
  }

  const name = clean(formData.get('name'));
  const email = clean(formData.get('email'));
  const phone = clean(formData.get('phone'));
  const projectType = clean(formData.get('projectType'));
  const message = clean(formData.get('message'));
  const token = clean(formData.get('cf-turnstile-response'));

  if (!name || !email || !phone || !projectType || !message) {
    return json({ error: 'Please complete all required fields.' }, 400);
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400);
  }

  const turnstileOk = await verifyTurnstile(
    token,
    env.TURNSTILE_SECRET_KEY,
    request.headers.get('CF-Connecting-IP')
  );

  if (!turnstileOk) {
    return json({ error: 'Security verification failed.' }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_FROM_EMAIL) {
    return json({ error: 'Contact form is not configured.' }, 500);
  }

  const to = env.CONTACT_TO_EMAIL || 'frank@econstructinc.com';
  const subject = `New econstruct inquiry: ${projectType}`;
  const html = `
    <h1>New econstruct inquiry</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to,
      reply_to: email,
      subject,
      html
    })
  });

  if (!resendResponse.ok) {
    return json({ error: 'Message could not be sent right now.' }, 502);
  }

  return Response.redirect(new URL('/thank-you/', request.url), 303);
}

export async function onRequestGet() {
  return json({ error: 'Method not allowed.' }, 405);
}

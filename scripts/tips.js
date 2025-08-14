const form = document.getElementById('questionForm');
const statusEl = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.email || !data.msg) {
      statusEl.textContent = 'Please fill out all fields.';
      return;
    }

    const key = `question:${Date.now()}`;
    localStorage.setItem(key, JSON.stringify(data));

    form.reset();
    statusEl.textContent = 'Thanks! We received your question.';
    setTimeout(() => statusEl.textContent = '', 4000);
  });
}

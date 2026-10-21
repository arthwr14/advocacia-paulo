const WHATSAPP = '5511942491462';

// menu mobile
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// animação de entrada
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// formulário -> WhatsApp
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  let ok = true;
  ['nome', 'tel'].forEach(n => {
    const bad = !f[n].value.trim();
    f[n].classList.toggle('err', bad);
    if (bad) ok = false;
  });
  if (!ok) return;
  const text = `Olá, meu nome é ${f.nome.value.trim()}.\nTelefone: ${f.tel.value.trim()}\nÁrea: ${f.area.value}\n${f.msg.value.trim()}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

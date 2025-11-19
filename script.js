
// Theme toggle + persist in localStorage
const themeToggle = document.getElementById('themeToggle');
function applyTheme(theme){
  if(theme === 'dark'){
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('havana-theme','dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('havana-theme');
  }
}
themeToggle.addEventListener('click', () => {
  const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(t === 'dark' ? 'dark' : 'light');
});

// initialize
if(localStorage.getItem('havana-theme') === 'dark'){
  applyTheme('dark');
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Modal QR
const qrModal = document.getElementById('qrModal');
const openQR = document.getElementById('openQR');
const closeQR = document.getElementById('closeQR');
openQR.addEventListener('click', ()=>{ qrModal.setAttribute('aria-hidden','false'); });
closeQR.addEventListener('click', ()=>{ qrModal.setAttribute('aria-hidden','true'); });

// Intersection reveal animation
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('reveal');
      io.unobserve(e.target);
    }
  });
},{threshold:0.15});
document.querySelectorAll('.card, .branches, .download').forEach(el=>io.observe(el));

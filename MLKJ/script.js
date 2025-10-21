const countdownEl = document.getElementById('countdown');
const scene = document.getElementById('scene');
const happy = document.getElementById('happy');
const pages = document.querySelectorAll('.page');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const hearts = document.getElementById('hearts');
const playBtn = document.getElementById('play');
const music = document.getElementById('music');

const contents = [
  { img: 'assets/images/1.jpg', text: '¡Que tu día esté lleno de alegría!' },
  { img: 'assets/images/2.jpg', text: 'Te mereces lo mejor hoy y siempre.' },
  { img: 'assets/images/3.jpg', text: 'Celebra cada momento con una sonrisa.' },
  { img: 'assets/images/4.jpg', text: 'Que cumplas muchos más, llenos de amor.' },
  { img: 'assets/images/5.jpg', text: 'Hoy celebramos tu vida y tu luz.' },
  { img: 'assets/images/6.jpg', text: 'Amor, risas y abrazos para ti.' },
  { img: 'assets/images/7.jpg', text: 'Eres increíble tal como eres.' },
  { img: 'assets/images/8.jpg', text: '¡Feliz cumpleaños! 🎂'}
];

contents.forEach((c,i) => {
  const pg = pages[i];
  const img = document.createElement('img');
  img.src = c.img;
  img.alt = c.text;
  pg.appendChild(img);
  const span = document.createElement('span');
  span.textContent = c.text;
  pg.appendChild(span);
});

let idx = 0;
function showPage(i){
  pages.forEach((pg,j) => {
    pg.style.transform = j <= i ? 'rotateY(-180deg)' : 'rotateY(0deg)';
  });
  emitHearts();
}

function emitHearts(){
  for (let i = 0; i < 6; i++){
    const h = document.createElement('div');
    h.className = 'heart';
    h.style.left = `${20 + Math.random() * 60}%`;
    hearts.appendChild(h);
    setTimeout(()=>h.remove(), 1200);
  }
}

next.onclick = () => { if (idx < pages.length - 1) idx++; showPage(idx); };
prev.onclick = () => { if (idx > 0) idx--; showPage(idx); };

playBtn.onclick = () => {
  if (music.paused) { music.play(); playBtn.textContent = '⏸️'; }
  else { music.pause(); playBtn.textContent = '▶️'; }
};

let count = 3;
countdownEl.textContent = count;
const iv = setInterval(() => {
  count--;
  if (count > 0) countdownEl.textContent = count;
  else {
    clearInterval(iv);
    countdownEl.style.display = 'none';
    scene.style.display = 'block';
    setTimeout(() => { happy.style.opacity = 1; }, 500);
  }
}, 1000);


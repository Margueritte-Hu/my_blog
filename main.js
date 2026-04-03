document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // 星星
  const stars = [];
  const count = 2000;
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      o: Math.random() * 0.8 + 0.2
    });
  }

  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.x - canvas.width / 2) * 0.0004;
    my = (e.y - canvas.height / 2) * 0.0004;
  });

  function animate() {
    ctx.fillStyle = '#050814';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const s of stars) {
      s.z -= 0.8;
      if (s.z <= 0) {
        s.z = canvas.width;
        s.x = Math.random() * canvas.width;
        s.y = Math.random() * canvas.height;
      }
      const scale = canvas.width / (canvas.width + s.z);
      const x = (s.x - canvas.width/2 + mx*s.z) * scale + canvas.width/2;
      const y = (s.y - canvas.height/2 + my*s.z) * scale + canvas.height/2;
      const r = 1.2 * scale;
      ctx.fillStyle = `rgba(255,255,255,${s.o * scale})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(animate);
  }
  animate();

  // 滚动控制开屏
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      splash.classList.add('hide');
    } else {
      splash.classList.remove('hide');
    }
  });
});

//每日一句
const quotes = [
  "慢慢来，谁不是摸着石头过河。",
  "技术是生活的工具，不是枷锁。",
  "保持简单，就是最高级的复杂。",
  "今天也要认真生活，认真写代码。",
  "安静努力，不必声张。",
  "把日子过成自己喜欢的样子。"
];

    const q = document.getElementById("quote");
    q.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
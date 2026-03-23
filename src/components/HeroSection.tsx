import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/2155d47d-f268-4b3c-ac09-3950b6f66307/files/a109ce4f-e8ad-4a0b-8d04-2464718b5d37.jpg';

const stats = [
  { value: '20', label: 'лет на рынке', suffix: '' },
  { value: '800', label: 'завершённых проектов', suffix: '+' },
  { value: '89', label: 'регионов России', suffix: '' },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Береговые сооружения"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-88" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* Animated particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }} />

      {/* Diagonal accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-40 pb-32">
        <div className="max-w-3xl">
          <div className="section-tag mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Научно-проектный центр
          </div>

          <h1
            className="font-display font-bold text-white text-5xl md:text-7xl leading-none uppercase mb-6"
            style={{ animation: 'fadeUp 0.7s ease 0.2s both' }}
          >
            Инженерная<br />
            <span className="text-gradient">Берегозащита</span>
          </h1>

          <p
            className="text-white/70 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl"
            style={{ animation: 'fadeUp 0.7s ease 0.35s both' }}
          >
            Проектирование и строительство гидротехнических сооружений,
            защита берегов рек и морей, искусственные пляжи и яхтенные порты.
          </p>

          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.7s ease 0.5s both' }}
          >
            <button
              className="orange-btn px-8 py-4 rounded font-display font-semibold text-base tracking-wide uppercase"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши проекты
            </button>
            <button
              className="border border-white/30 text-white px-8 py-4 rounded font-display font-semibold text-base tracking-wide uppercase hover:bg-white/10 transition-all"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться с нами
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-8 mt-16"
          style={{ animation: 'fadeUp 0.7s ease 0.65s both' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div>
                <div className="font-display font-bold text-4xl md:text-5xl text-orange-400 leading-none">
                  {s.value}<span className="text-orange-500">{s.suffix}</span>
                </div>
                <div className="text-white/60 text-sm font-body mt-1">{s.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-12 bg-white/20 ml-4 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-40 right-8 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-16 bg-white" />
        <Icon name="ChevronDown" size={16} className="text-white animate-bounce" />
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const MARINA_IMG = 'https://cdn.poehali.dev/projects/2155d47d-f268-4b3c-ac09-3950b6f66307/files/98c25155-cea9-4f60-9ecb-d85ecfd67302.jpg';

const advantages = [
  { icon: 'FlaskConical', title: 'Научный подход', desc: 'Доктора и кандидаты технических наук в штате компании' },
  { icon: 'Globe', title: 'Широкая география', desc: 'Реализованные проекты в 89 регионах России' },
  { icon: 'ShieldCheck', title: 'Допуски СРО', desc: 'Член СРО «Проектировщики», «КубаньСтройИзыскания»' },
  { icon: 'History', title: '20 лет опыта', desc: 'С 2006 года на базе сектора НИиПИР ГУСНПП «Краснодарберегозащита»' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <div className="section-tag mb-4 reveal">О компании</div>
            <h2 className="section-title text-4xl md:text-5xl mb-6 reveal">
              НПЦ «Берегозащита» —<br />
              <span className="text-[hsl(213,80%,28%)]">эксперты в своей отрасли</span>
            </h2>
            <div className="divider-orange mb-8 reveal" />

            <p className="text-gray-600 font-body leading-relaxed mb-5 reveal">
              Научно-проектный центр «Берегозащита» — специализированное комплексное
              научно-исследовательское и проектно-изыскательское предприятие. Основное
              направление — инженерная защита территорий от опасных геологических и
              гидрологических процессов.
            </p>
            <p className="text-gray-600 font-body leading-relaxed mb-8 reveal">
              Центр создан в 2006 году на базе НИиПИР ГУСНПП «Краснодарберегозащита»,
              обладает богатым опытом по научному и практическому обоснованию,
              строительству берегозащитных сооружений на Азово-Черноморском побережье
              Краснодарского края.
            </p>

            <div className="grid grid-cols-2 gap-4 reveal">
              {advantages.map((a, i) => (
                <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-9 h-9 rounded-lg bg-[hsl(213,80%,22%)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={a.icon} size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-[hsl(213,85%,15%)] uppercase mb-1">
                      {a.title}
                    </div>
                    <div className="text-gray-500 text-xs font-body leading-snug">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="mt-8 orange-btn px-7 py-3 rounded font-display font-semibold text-sm tracking-wide uppercase reveal"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться с нами
            </button>
          </div>

          {/* Image side */}
          <div className="relative reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={MARINA_IMG} alt="Проект компании" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(213,85%,10%)]/60 to-transparent" />

              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex gap-6">
                  {[
                    { v: '800+', l: 'проектов' },
                    { v: '89', l: 'регионов' },
                    { v: '20', l: 'лет опыта' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display font-bold text-2xl text-[#0476BB]">{s.v}</div>
                      <div className="text-white/70 text-xs font-body">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -top-6 -right-6 bg-[hsl(213,85%,15%)] text-white rounded-xl p-5 shadow-xl border border-white/10 animate-float">
              <div className="font-display font-bold text-3xl text-[#0476BB]">СРО</div>
              <div className="text-white/70 text-xs font-body mt-1">Допуски и свидетельства</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
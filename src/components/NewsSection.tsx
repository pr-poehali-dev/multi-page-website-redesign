import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const IMG1 = 'https://cdn.poehali.dev/projects/2155d47d-f268-4b3c-ac09-3950b6f66307/files/a109ce4f-e8ad-4a0b-8d04-2464718b5d37.jpg';
const IMG2 = 'https://cdn.poehali.dev/projects/2155d47d-f268-4b3c-ac09-3950b6f66307/files/98c25155-cea9-4f60-9ecb-d85ecfd67302.jpg';
const IMG3 = 'https://cdn.poehali.dev/projects/2155d47d-f268-4b3c-ac09-3950b6f66307/files/f77672b6-c4e0-411e-8580-d62dc3f2d6d9.jpg';

const news = [
  {
    id: 1,
    img: IMG1,
    date: '27 декабря 2023',
    title: 'Реконструкция пляжного комплекса санатория «Голубая горка»',
    excerpt: 'Уведомление о проведении общественных обсуждений (в форме общественных слушаний) материалов проектной документации по объекту.',
    tag: 'Проекты',
  },
  {
    id: 2,
    img: IMG2,
    date: '19 марта 2024',
    title: 'Пляжная зона и морские гидротехнические сооружения',
    excerpt: 'Уведомление о проведении общественных обсуждений в форме опроса по проектной документации объекта.',
    tag: 'Уведомления',
  },
  {
    id: 3,
    img: IMG3,
    date: '3 сентября 2024',
    title: 'Уведомление о проведении общественных обсуждений',
    excerpt: 'Компания объявляет о проведении общественных обсуждений нового проекта защиты береговой линии.',
    tag: 'Уведомления',
  },
];

export default function NewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [featured, ...rest] = news;

  return (
    <section id="news" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="reveal">
            <div className="section-tag mb-4">Новости</div>
            <h2 className="section-title text-4xl md:text-5xl">Последние новости</h2>
            <div className="divider-orange mt-4" />
          </div>
          <button className="reveal flex items-center gap-2 text-[hsl(213,80%,22%)] font-body font-semibold text-sm hover:text-[#0476BB] transition-colors">
            Все новости
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured news */}
          <div className="lg:col-span-3 reveal group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden h-72 mb-5">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(213,85%,10%)]/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#0476BB] text-white text-xs font-body font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {featured.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-white/60 text-xs font-body mb-2">
                  <Icon name="Calendar" size={12} />
                  {featured.date}
                </div>
                <h3 className="font-display font-bold text-white text-xl uppercase leading-snug group-hover:text-[#5ab5e8] transition-colors">
                  {featured.title}
                </h3>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-body leading-relaxed">
              {featured.excerpt}
            </p>
            <button className="mt-4 flex items-center gap-2 text-[hsl(213,80%,22%)] font-body font-semibold text-sm hover:text-[#0476BB] transition-colors group-hover:text-[#0476BB]">
              Читать далее
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          {/* Side news */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.map(n => (
              <div key={n.id} className="reveal group cursor-pointer flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="relative rounded-lg overflow-hidden w-28 h-24 flex-shrink-0">
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[hsl(213,85%,10%)]/20" />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[#0476BB] text-xs font-body font-semibold uppercase tracking-wider">
                      {n.tag}
                    </span>
                    <h3 className="font-display font-semibold text-[hsl(213,85%,15%)] text-sm uppercase leading-snug mt-1 group-hover:text-[#0476BB] transition-colors">
                      {n.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-body">
                    <Icon name="Calendar" size={11} />
                    {n.date}
                  </div>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div className="reveal bg-gradient-to-br from-[hsl(213,85%,15%)] to-[hsl(213,70%,25%)] rounded-xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0476BB]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="font-display font-bold text-xl uppercase mb-2">Подпишитесь на новости</div>
              <p className="text-white/60 text-xs font-body mb-4">Будьте в курсе событий компании</p>
              <button className="orange-btn px-5 py-2.5 rounded font-display font-semibold text-sm tracking-wide uppercase w-full">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
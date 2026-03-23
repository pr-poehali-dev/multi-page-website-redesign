import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const articles = [
  {
    id: 1,
    date: '29.01.2026',
    title: 'Водный кодекс Российской Федерации: плюсы и минусы Статьи 67.1',
    excerpt: '12 апреля 2006 года Государственной думой РФ был принят новый Водный кодекс РФ от 03.06.2006 № 74-ФЗ. Таким образом, скоро этому концептуальному федеральному закону исполнится 20 лет.',
    tags: ['Законодательство', 'Водный кодекс'],
    featured: true,
  },
  {
    id: 2,
    date: '26.02.2026',
    title: 'Водный кодекс. Проблемы применения статей',
    excerpt: 'Водные ресурсы — стратегически важный природный ресурс, от состояния и правильного регулирования которого зависит экологическая безопасность, сельское хозяйство.',
    tags: ['Практика', 'Водный кодекс'],
    featured: false,
  },
  {
    id: 3,
    date: '26.02.2026',
    title: 'Инженерная защита берегов: современные технологии',
    excerpt: 'Обзор современных методов берегоукрепления и защиты береговой линии от эрозии. Применение геосинтетических материалов в гидротехническом строительстве.',
    tags: ['Технологии', 'Берегозащита'],
    featured: false,
  },
  {
    id: 4,
    date: '15.01.2026',
    title: 'Искусственные пляжи: методология проектирования',
    excerpt: 'Методология расчёта и проектирования искусственных пляжных полос. Опыт реализации проектов на Черноморском побережье Краснодарского края.',
    tags: ['Методология', 'Пляжи'],
    featured: false,
  },
];

export default function ArticlesSection() {
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

  const [featured, ...rest] = articles;

  return (
    <section id="articles" ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="reveal">
            <div className="section-tag mb-4">Публикации</div>
            <h2 className="section-title text-4xl md:text-5xl">Научные статьи</h2>
            <div className="divider-orange mt-4" />
          </div>
          <button className="reveal flex items-center gap-2 text-[hsl(213,80%,22%)] font-body font-semibold text-sm hover:text-[#0476BB] transition-colors">
            Все статьи
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured article */}
          <div className="lg:col-span-1 reveal">
            <div className="bg-gradient-to-br from-[hsl(213,85%,12%)] to-[hsl(213,70%,22%)] rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0476BB]/10 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/4" />

              <div className="relative">
                <div className="flex gap-2 flex-wrap mb-5">
                  {featured.tags.map(t => (
                    <span key={t} className="text-xs font-body font-semibold bg-[#0476BB]/20 text-[#5ab5e8] px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-white text-xl uppercase leading-snug mb-4">
                  {featured.title}
                </h3>
                <p className="text-white/60 text-sm font-body leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>

              <div className="relative mt-8">
                <div className="flex items-center gap-2 text-white/40 text-xs font-body mb-4">
                  <Icon name="Calendar" size={12} />
                  {featured.date}
                </div>
                <button className="flex items-center gap-2 text-[#0476BB] font-body font-semibold text-sm hover:text-[#5ab5e8] transition-colors">
                  Читать далее
                  <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Article list */}
          <div className="lg:col-span-2 flex flex-col divide-y divide-gray-200">
            {rest.map(a => (
              <div key={a.id} className="reveal group cursor-pointer py-6 first:pt-0 hover:bg-white/60 px-4 -mx-4 rounded-xl transition-colors">
                <div className="flex gap-4">
                  {/* Date block */}
                  <div className="text-center w-12 flex-shrink-0">
                    <div className="font-display font-bold text-2xl text-[hsl(213,80%,22%)] leading-none">
                      {a.date.slice(0, 2)}
                    </div>
                    <div className="text-gray-400 text-xs font-body mt-0.5">
                      {a.date.slice(3, 5)}.{a.date.slice(8)}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex gap-2 flex-wrap mb-2">
                      {a.tags.map(t => (
                        <span key={t} className="text-xs font-body text-[#0476BB] font-semibold uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display font-semibold text-[hsl(213,85%,15%)] text-lg uppercase leading-snug mb-2 group-hover:text-[#0476BB] transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-body leading-relaxed line-clamp-2">
                      {a.excerpt}
                    </p>
                    <button className="mt-3 flex items-center gap-1.5 text-[#0476BB] text-xs font-body font-semibold hover:text-[#035a8f] transition-colors">
                      Читать далее
                      <Icon name="ArrowRight" size={12} />
                    </button>
                  </div>

                  <div className="hidden sm:block w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-50 transition-colors">
                    <Icon name="ChevronRight" size={14} className="text-gray-400 group-hover:text-[#0476BB]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
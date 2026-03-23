import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG1 = 'https://cdn.poehali.dev/projects/2155d47d-f268-4b3c-ac09-3950b6f66307/files/a109ce4f-e8ad-4a0b-8d04-2464718b5d37.jpg';
const IMG2 = 'https://cdn.poehali.dev/projects/2155d47d-f268-4b3c-ac09-3950b6f66307/files/98c25155-cea9-4f60-9ecb-d85ecfd67302.jpg';
const IMG3 = 'https://cdn.poehali.dev/projects/2155d47d-f268-4b3c-ac09-3950b6f66307/files/f77672b6-c4e0-411e-8580-d62dc3f2d6d9.jpg';

const categories = ['Все', 'Берегозащита', 'Порты', 'Пляжи', 'Гидротехника'];

const projects = [
  {
    id: 1,
    img: IMG1,
    title: 'Реконструкция пляжного комплекса санатория «Голубая горка»',
    cat: 'Пляжи',
    year: '2023',
    location: 'Геленджик',
    tag: 'Завершён',
  },
  {
    id: 2,
    img: IMG2,
    title: 'Устройство стоянки судов Береговой охраны Пограничной службы ФСБ',
    cat: 'Порты',
    year: '2022',
    location: 'Краснодарский край',
    tag: 'Завершён',
  },
  {
    id: 3,
    img: IMG3,
    title: 'Пляжная зона и морские гидротехнические сооружения',
    cat: 'Берегозащита',
    year: '2024',
    location: 'Анапа',
    tag: 'В работе',
  },
  {
    id: 4,
    img: IMG1,
    title: 'Берегозащитные работы по реке Томь, г. Новокузнецк',
    cat: 'Гидротехника',
    year: '2023',
    location: 'Кемеровская обл.',
    tag: 'Завершён',
  },
  {
    id: 5,
    img: IMG2,
    title: 'Противооползневые мероприятия ЧПК «Самшитовая роща»',
    cat: 'Берегозащита',
    year: '2022',
    location: 'Сочи',
    tag: 'Завершён',
  },
  {
    id: 6,
    img: IMG3,
    title: 'Яхтенный порт «Новороссийск» — реконструкция причалов',
    cat: 'Порты',
    year: '2024',
    location: 'Новороссийск',
    tag: 'В работе',
  },
];

// Interactive map dots
const mapDots = [
  { x: 52, y: 62, label: 'Краснодар', count: 120 },
  { x: 55, y: 65, label: 'Новороссийск', count: 45 },
  { x: 50, y: 67, label: 'Анапа', count: 38 },
  { x: 57, y: 66, label: 'Геленджик', count: 52 },
  { x: 61, y: 64, label: 'Туапсе', count: 29 },
  { x: 65, y: 62, label: 'Сочи', count: 67 },
  { x: 40, y: 30, label: 'Москва', count: 15 },
  { x: 60, y: 20, label: 'Екатеринбург', count: 12 },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('Все');
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  const filtered = projects.filter(p => activeCategory === 'Все' || p.cat === activeCategory);

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="reveal">
            <div className="section-tag mb-4">Портфолио</div>
            <h2 className="section-title text-4xl md:text-5xl">Наши проекты</h2>
            <div className="divider-orange mt-4" />
          </div>
          <div className="flex flex-wrap gap-2 reveal">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
                  activeCategory === c
                    ? 'bg-[hsl(213,80%,22%)] text-white shadow'
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((p) => (
            <div key={p.id} className="reveal group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden bg-gray-200 h-56 mb-4">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(213,85%,10%)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tag */}
                <div className={`absolute top-3 left-3 text-xs font-body font-semibold px-2.5 py-1 rounded-full ${
                  p.tag === 'В работе' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-[hsl(213,80%,22%)] text-white'
                }`}>
                  {p.tag}
                </div>

                {/* Hover overlay content */}
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-2 text-white text-sm font-body font-semibold bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                    <Icon name="Eye" size={14} />
                    Подробнее
                  </button>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-orange-500 font-body font-semibold uppercase tracking-wider">{p.cat}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-400 font-body">{p.year}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-400 font-body flex items-center gap-1">
                    <Icon name="MapPin" size={11} />
                    {p.location}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-[hsl(213,85%,15%)] text-lg leading-snug uppercase group-hover:text-orange-500 transition-colors">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map */}
        <div className="reveal">
          <div className="text-center mb-10">
            <div className="section-tag mb-3">География</div>
            <h3 className="section-title text-3xl">Карта объектов</h3>
          </div>

          <div className="bg-[hsl(213,85%,12%)] rounded-2xl overflow-hidden relative" style={{ height: 420 }}>
            <div className="grid-pattern absolute inset-0 opacity-30" />

            {/* Simplified Russia map SVG representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Map background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(213,85%,8%)] to-[hsl(213,70%,16%)]" />

                {/* Decorative wave lines */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border border-white/5 rounded-full"
                    style={{
                      width: `${(i + 1) * 120}px`,
                      height: `${(i + 1) * 60}px`,
                      bottom: '10%',
                      left: '55%',
                      transform: 'translate(-50%, 50%)',
                    }}
                  />
                ))}

                {/* Map dots */}
                {mapDots.map((dot, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                    onMouseEnter={() => setHoveredDot(i)}
                    onMouseLeave={() => setHoveredDot(null)}
                  >
                    <div className="map-marker" />

                    {/* Tooltip */}
                    {hoveredDot === i && (
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-2xl p-3 min-w-max z-10">
                        <div className="font-display font-semibold text-[hsl(213,85%,15%)] text-sm uppercase">
                          {dot.label}
                        </div>
                        <div className="text-orange-500 text-xs font-body font-semibold mt-0.5">
                          {dot.count} проектов
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-2 h-2 bg-white rotate-45 -mt-1" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-white/90 font-display text-sm uppercase font-semibold mb-3">Статистика</div>
                  {[
                    { label: 'Регионов охвачено', v: '89' },
                    { label: 'Объектов на карте', v: '800+' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between gap-8 py-1 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-xs font-body">{s.label}</span>
                      <span className="text-orange-400 font-display font-bold text-base">{s.v}</span>
                    </div>
                  ))}
                </div>

                {/* Compass */}
                <div className="absolute bottom-5 right-5 opacity-30">
                  <Icon name="Compass" size={40} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

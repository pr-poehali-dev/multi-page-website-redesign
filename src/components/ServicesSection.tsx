import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Waves',
    num: '01',
    title: 'Берегозащитные сооружения',
    desc: 'Проектирование и строительство сооружений для защиты берегов рек, морей и водохранилищ от размыва и оползней.',
  },
  {
    icon: 'Anchor',
    num: '02',
    title: 'Гидротехнические объекты',
    desc: 'Создание яхтенных портов, причальных сооружений, пирсов и волноломов на акваториях водных объектов.',
  },
  {
    icon: 'Mountain',
    num: '03',
    title: 'Искусственные пляжи',
    desc: 'Проектирование и намыв искусственных пляжей, восстановление пляжных полос в акваториях морей и озёр.',
  },
  {
    icon: 'Droplets',
    num: '04',
    title: 'Мелиоративные системы',
    desc: 'Проектирование систем противооползневого водопонижения и водоотведения, геотехнические мероприятия.',
  },
  {
    icon: 'FileCheck',
    num: '05',
    title: 'Государственная экспертиза',
    desc: 'Сопровождение проектной документации в государственной экологической и строительной экспертизе.',
  },
  {
    icon: 'Search',
    num: '06',
    title: 'Инженерные изыскания',
    desc: 'Комплексные инженерно-геологические, топографические и гидрометеорологические изыскания.',
  },
];

export default function ServicesSection() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 reveal">
          <div className="section-tag mb-4">Услуги</div>
          <h2 className="section-title text-4xl md:text-5xl">
            Основные виды<br />деятельности
          </h2>
          <div className="divider-orange mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="reveal group relative bg-white border border-gray-100 rounded-xl p-8 card-hover overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-4 font-display font-bold text-6xl text-gray-50 select-none leading-none group-hover:text-orange-50 transition-colors">
                {s.num}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-navy-mid rounded-lg flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                <Icon name={s.icon} size={22} className="text-white" />
              </div>

              <h3 className="font-display font-semibold text-xl text-[hsl(213,85%,15%)] uppercase mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">
                {s.desc}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
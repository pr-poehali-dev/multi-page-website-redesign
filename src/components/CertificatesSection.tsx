import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const certs = [
  {
    id: 1,
    type: 'СРО',
    title: 'Свидетельство СРО «Проектировщики»',
    org: 'Ассоциация «Проектировщики»',
    num: 'П-0123-2024',
    year: '2024',
    color: 'from-blue-900 to-blue-700',
  },
  {
    id: 2,
    type: 'СРО',
    title: 'Свидетельство СРО «КубаньСтройИзыскания»',
    org: 'Ассоциация СРО',
    num: 'И-0456-2024',
    year: '2024',
    color: 'from-navy to-blue-700',
  },
  {
    id: 3,
    type: 'Лицензия',
    title: 'Допуск к работам по строительству',
    org: 'Министерство строительства',
    num: 'Л-2023-0789',
    year: '2023',
    color: 'from-[#035a8f] to-[#0476BB]',
  },
  {
    id: 4,
    type: 'Сертификат',
    title: 'ISO 9001:2015 Система менеджмента качества',
    org: 'Международная сертификация',
    num: 'ISO-2023-112',
    year: '2023',
    color: 'from-green-800 to-green-600',
  },
  {
    id: 5,
    type: 'СРО',
    title: 'Член Союза «Черноморский Строительный Союз»',
    org: 'Союз ЧСС',
    num: 'ЧСС-0212-2024',
    year: '2024',
    color: 'from-indigo-800 to-indigo-600',
  },
  {
    id: 6,
    type: 'Награда',
    title: 'Благодарственное письмо Минприроды РФ',
    org: 'Министерство природных ресурсов',
    num: 'МП-2022-417',
    year: '2022',
    color: 'from-yellow-700 to-yellow-500',
  },
];

export default function CertificatesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

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
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-tag mb-4">Документы</div>
          <h2 className="section-title text-4xl md:text-5xl">
            Допуски, Свидетельства<br />и Сертификаты
          </h2>
          <div className="divider-orange mx-auto mt-4" />
          <p className="text-gray-500 mt-5 font-body max-w-xl mx-auto text-sm leading-relaxed">
            Компания имеет все необходимые лицензии и допуски для выполнения
            полного цикла проектных и строительных работ
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="cert-card reveal"
              onClick={() => setSelected(cert.id === selected ? null : cert.id)}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${cert.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-2 right-3 opacity-10">
                  <Icon name="Award" size={60} className="text-white" />
                </div>
                <div className="inline-block bg-white/20 text-white text-xs font-body font-semibold px-2.5 py-1 rounded mb-3 uppercase tracking-wider">
                  {cert.type}
                </div>
                <div className="font-display font-semibold text-white text-base leading-snug">
                  {cert.title}
                </div>
              </div>

              {/* Card body */}
              <div className="p-4">
                <div className="text-xs text-gray-400 font-body mb-1">{cert.org}</div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 font-mono">№ {cert.num}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Icon name="Calendar" size={11} />
                    {cert.year}
                  </div>
                </div>

                {selected === cert.id && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button className="text-xs text-[#0476BB] font-semibold font-body flex items-center gap-1 hover:text-[#035a8f] transition-colors">
                      <Icon name="Download" size={12} />
                      Скачать документ
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center reveal">
          <p className="text-gray-500 text-sm font-body mb-4">
            Полный пакет документов доступен по запросу
          </p>
          <button
            className="border-2 border-[hsl(213,80%,22%)] text-[hsl(213,80%,22%)] px-7 py-3 rounded font-display font-semibold text-sm tracking-wide uppercase hover:bg-[hsl(213,80%,22%)] hover:text-white transition-all"
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Запросить документы
          </button>
        </div>
      </div>
    </section>
  );
}
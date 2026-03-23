import Icon from '@/components/ui/icon';

const navLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'О компании', href: '#about' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Новости', href: '#news' },
  { label: 'Статьи', href: '#articles' },
  { label: 'Контакты', href: '#contacts' },
];

const services = [
  'Берегозащитные сооружения',
  'Яхтенные порты и причалы',
  'Искусственные пляжи',
  'Мелиорация и водоотведение',
  'Государственная экспертиза',
  'Инженерные изыскания',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(213,90%,8%)] text-white relative overflow-hidden">
      <div className="border-t border-white/10" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0476BB] to-[#035a8f] flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg">Б</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-base uppercase leading-none">Берегозащита</div>
                <div className="text-white/40 text-[10px] font-body tracking-widest uppercase">НПЦ</div>
              </div>
            </div>
            <p className="text-white/40 text-xs font-body leading-relaxed mb-5">
              Научно-проектный центр по инженерной защите территорий от опасных
              геологических и гидрологических процессов.
            </p>
            <div className="flex gap-3">
              {['Mail', 'Phone'].map(icon => (
                <div key={icon} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0476BB]/20 transition-colors cursor-pointer">
                  <Icon name={icon} size={14} className="text-[#0476BB]" />
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Навигация
            </div>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-white/50 text-xs font-body hover:text-[#0476BB] transition-colors flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-[#0476BB]/50" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Услуги
            </div>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s} className="text-white/50 text-xs font-body hover:text-[#0476BB] transition-colors cursor-pointer flex items-center gap-2">
                  <span className="w-3 h-px bg-[#0476BB]/50" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Контакты
            </div>
            <div className="space-y-4">
              {[
                { icon: 'Phone', v: '+7 (861) 251-93-59', href: 'tel:+78612519359' },
                { icon: 'Mail', v: 'bz@kuban-bz.ru', href: 'mailto:bz@kuban-bz.ru' },
                { icon: 'MapPin', v: 'г. Краснодар, ул. Чапаева, 127', href: '#' },
              ].map((c, i) => (
                <a key={i} href={c.href} className="flex items-start gap-2.5 group">
                  <Icon name={c.icon} size={14} className="text-[#0476BB] mt-0.5 flex-shrink-0" />
                  <span className="text-white/50 text-xs font-body group-hover:text-[#5ab5e8] transition-colors">
                    {c.v}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white/30 text-xs font-body">
            © 2006–2026 НПЦ «Берегозащита». Все права защищены.
          </div>
          <div className="text-white/20 text-xs font-body">
            ИНН 2312132620 · ОГРН 1062312046174
          </div>
        </div>
      </div>
    </footer>
  );
}
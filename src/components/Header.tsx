import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', href: '#home' },
  { label: 'О компании', href: '#about' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Новости', href: '#news' },
  { label: 'Статьи', href: '#articles' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navItems.map(i => i.href.slice(1));
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[hsl(213,85%,12%)] shadow-2xl py-0'
          : 'bg-transparent py-0'
      }`}
    >
      {/* Top bar */}
      <div className={`border-b border-white/10 transition-all duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-2">
          <div className="flex items-center gap-6 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <Icon name="MapPin" size={12} className="text-orange-400" />
              г. Краснодар, ул. Чапаева, 127
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Clock" size={12} className="text-orange-400" />
              Пн–Пт: 9:00 – 18:00
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs text-white/60">
            <a href="mailto:bz@kuban-bz.ru" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <Icon name="Mail" size={12} />
              bz@kuban-bz.ru
            </a>
            <button className="text-xs bg-orange-500/20 border border-orange-500/40 text-orange-300 px-3 py-1 rounded hover:bg-orange-500/30 transition-colors">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-white text-lg">Б</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-white text-lg tracking-wider uppercase leading-none">
                Берегозащита
              </div>
              <div className="text-white/50 text-[10px] font-body tracking-widest uppercase">
                Научно-проектный центр
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Phone */}
          <a
            href="tel:+78612519359"
            className="hidden lg:flex items-center gap-2 text-white font-body font-semibold text-lg hover:text-orange-400 transition-colors"
          >
            <Icon name="Phone" size={16} className="text-orange-400" />
            +7 (861) 251-93-59
          </a>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(213,85%,12%)] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-left text-white/80 hover:text-white font-body text-sm py-2 border-b border-white/10"
            >
              {item.label}
            </button>
          ))}
          <a href="tel:+78612519359" className="text-orange-400 font-semibold text-lg pt-2">
            +7 (861) 251-93-59
          </a>
        </div>
      )}
    </header>
  );
}

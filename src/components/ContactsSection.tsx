import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Phone', label: 'Телефон', value: '+7 (861) 251-93-59', href: 'tel:+78612519359' },
  { icon: 'Phone', label: 'Доп. телефон', value: '+7 (861) 255-57-69', href: 'tel:+78612555769' },
  { icon: 'Mail', label: 'Email', value: 'bz@kuban-bz.ru', href: 'mailto:bz@kuban-bz.ru' },
  { icon: 'MapPin', label: 'Адрес', value: 'г. Краснодар, ул. Чапаева, 127', href: '#' },
  { icon: 'Clock', label: 'Режим работы', value: 'Пн – Пт: 9:00 – 18:00', href: '#' },
];

const legalInfo = [
  { label: 'Организация', value: 'ООО НПЦ «Берегозащита»' },
  { label: 'ИНН/КПП', value: '2312132620 / 231201001' },
  { label: 'ОГРН', value: '1062312046174' },
];

export default function ContactsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" ref={sectionRef} className="py-24 bg-[hsl(213,85%,12%)] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 reveal">
          <div className="section-tag mb-4">Контакты</div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl uppercase">
            Отвечаем на вопросы,<br />
            <span className="text-gradient">принимаем предложения</span>
          </h2>
          <div className="divider-orange mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: contacts + legal */}
          <div className="lg:col-span-2">
            <div className="space-y-4 mb-10">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className="reveal flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors border border-white/10">
                    <Icon name={c.icon} size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-body uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-white font-body font-medium text-sm group-hover:text-orange-300 transition-colors">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Legal */}
            <div className="reveal bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="font-display font-semibold text-white/70 text-xs uppercase tracking-wider mb-4">
                Реквизиты
              </div>
              {legalInfo.map((l, i) => (
                <div key={i} className="flex justify-between gap-4 py-2 border-b border-white/10 last:border-0">
                  <span className="text-white/40 text-xs font-body">{l.label}</span>
                  <span className="text-white/80 text-xs font-body font-medium text-right">{l.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form + map */}
          <div className="lg:col-span-3">
            {/* Form */}
            <div className="reveal bg-white rounded-2xl p-8 mb-6">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-[hsl(213,85%,15%)] text-xl uppercase mb-2">
                    Сообщение отправлено!
                  </h3>
                  <p className="text-gray-500 font-body text-sm">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', phone: '', message: '' }); }}
                    className="mt-6 text-sm text-[hsl(213,80%,30%)] font-body font-semibold hover:text-orange-500 transition-colors"
                  >
                    Отправить ещё одно сообщение
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="font-display font-bold text-[hsl(213,85%,15%)] text-xl uppercase mb-6">
                    Напишите нам
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs text-gray-400 font-body uppercase tracking-wider mb-1.5">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Иван Иванов"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[hsl(213,80%,40%)]/30 focus:border-[hsl(213,80%,40%)] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 font-body uppercase tracking-wider mb-1.5">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="+7 (000) 000-00-00"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[hsl(213,80%,40%)]/30 focus:border-[hsl(213,80%,40%)] transition-all"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs text-gray-400 font-body uppercase tracking-wider mb-1.5">
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Опишите ваш вопрос или предложение..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[hsl(213,80%,40%)]/30 focus:border-[hsl(213,80%,40%)] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="orange-btn w-full py-4 rounded-lg font-display font-semibold tracking-wide uppercase"
                  >
                    Отправить сообщение
                  </button>
                </form>
              )}
            </div>

            {/* Map placeholder */}
            <div className="reveal bg-[hsl(213,80%,16%)] rounded-2xl overflow-hidden h-44 relative border border-white/10">
              <div className="absolute inset-0 grid-pattern opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border-2 border-orange-500/40 animate-pulse-orange">
                  <Icon name="MapPin" size={18} className="text-orange-400" />
                </div>
                <div className="text-center">
                  <div className="text-white font-body font-medium text-sm">г. Краснодар, ул. Чапаева, 127</div>
                  <button className="mt-2 text-orange-400 text-xs font-body hover:text-orange-300 transition-colors flex items-center gap-1 mx-auto">
                    <Icon name="ExternalLink" size={11} />
                    Открыть на Яндекс.Картах
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

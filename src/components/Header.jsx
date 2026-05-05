import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#pecas', label: 'Peças' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-carbon-950/85 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            onError={(e) => { e.currentTarget.src = '/logo.svg'; }}
            alt="Recuperadora Menegatti"
            className="h-11 md:h-12 w-auto select-none drop-shadow-[0_4px_18px_rgba(139,0,0,0.45)]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-white/65 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/552137954001?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Menegatti."
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com Especialista
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/5 bg-carbon-950/95 backdrop-blur-xl"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg text-white/80 hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <a href="https://wa.me/552137954001" target="_blank" rel="noreferrer" className="btn-primary mt-2">
                <MessageCircle className="h-4 w-4" /> Falar com Especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

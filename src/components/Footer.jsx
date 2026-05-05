import { Facebook, Globe } from 'lucide-react';

const quick = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#pecas', label: 'Peças' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-carbon-900/60">
      <div className="container-x py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img
              src="/logo.png"
              onError={(e) => { e.currentTarget.src = '/logo.svg'; }}
              alt="Recuperadora Menegatti"
              className="h-14 w-auto"
            />
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-sm">
              Engenharia de precisão, recuperação de peças críticas e usinagem CNC. Rio de Janeiro — RJ.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-white/45 font-semibold">Navegação</div>
            <ul className="mt-4 space-y-2">
              {quick.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 hover:text-crimson-400 transition">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-white/45 font-semibold">Redes</div>
            <div className="mt-4 flex gap-3">
              <a href="https://www.google.com/search?q=Recuperadora+Menegatti" target="_blank" rel="noreferrer" className="rim inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:border-crimson-500/40 hover:text-crimson-400 transition" aria-label="Google">
                <Globe className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="rim inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:border-crimson-500/40 hover:text-crimson-400 transition" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/55">(21) 3795-4001</p>
            <p className="text-sm text-white/55">Av. dos Democráticos, 515 — RJ</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Recuperadora Menegatti. Todos os direitos reservados.</p>
          <p>Engenharia de precisão · Tornos CNC · Usinagem</p>
        </div>
      </div>
    </footer>
  );
}

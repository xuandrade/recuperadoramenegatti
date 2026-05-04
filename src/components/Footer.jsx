import { Wrench, Facebook, Globe } from 'lucide-react';

const quick = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#pecas', label: 'Peças' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-carbon-900/60">
      <div className="container-x py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ember-gradient">
                <Wrench className="h-5 w-5 text-carbon-950" strokeWidth={2.5} />
              </span>
              <span className="font-display font-extrabold text-lg">MENEGATTI <span className="text-ember-500">&</span> 2R</span>
            </div>
            <p className="mt-4 text-sm text-white/55 leading-relaxed max-w-sm">
              Engenharia automotiva de precisão, recuperação de peças críticas e usinagem de alta performance no Rio de Janeiro.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 font-semibold">Navegação</div>
            <ul className="mt-4 space-y-2">
              {quick.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 hover:text-ember-500 transition">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/45 font-semibold">Redes</div>
            <div className="mt-4 flex gap-3">
              <a href="https://www.google.com/search?q=Recuperadora+Menegatti+%26+2R" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:border-ember-500/40 hover:text-ember-500 transition" aria-label="Google">
                <Globe className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:border-ember-500/40 hover:text-ember-500 transition" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/55">(21) 3795-4001</p>
            <p className="text-sm text-white/55">Av. dos Democráticos, 515 — RJ</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Recuperadora Menegatti & 2R. Todos os direitos reservados.</p>
          <p>Site desenvolvido com engenharia de precisão.</p>
        </div>
      </div>
    </footer>
  );
}

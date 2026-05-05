import { motion } from 'framer-motion';
import { Microscope, Ruler, Factory, ArrowUpRight } from 'lucide-react';

const parts = [
  'Alavanca de Câmbio',
  'Barra de Direção (Curva ou Longa)',
  'Barra do Estabilizador',
  'Caixa de Satélite Nº 366',
  'Tubo da Admissão',
  'Volante do Motor (1418/1722)',
  'Canhão',
  'Coluna de Direção (Sem a junta)',
  'Cubo e Eixo de Embreagem',
  'Varão da Porta e Garfo de Embreagem',
  'Roda e Tambor de Freio',
  'Transmissão Intermediária e Traseira (1418/1722 VW Micro)',
];

const showcase = [
  { tag: 'Tornearia CNC', title: 'Eixos e Buchas', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85' },
  { tag: 'Fresa', title: 'Fabricação Sob Medida', img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85' },
  { tag: 'Solda', title: 'Reparo Estrutural', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85' },
];

const stats = [
  { icon: Ruler, k: '0,01mm', v: 'Tolerância' },
  { icon: Microscope, k: '100%', v: 'Inspeção' },
  { icon: Factory, k: 'OEM', v: 'Padrão fábrica' },
];

const ease = [0.22, 1, 0.36, 1];

export default function PartsTech() {
  return (
    <section id="pecas" className="relative py-28 md:py-36 border-t border-white/[0.05]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="max-w-2xl"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }} className="eyebrow">
              <span className="h-px w-6 bg-crimson-500" /> Peças
            </motion.span>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="section-title mt-4">
              Componentes que recuperamos <span className="text-crimson-500">com padrão técnico.</span>
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="mt-5 text-white/55 text-base md:text-lg leading-relaxed">
              Catálogo de peças críticas restauradas com tornos CNC e equipamentos calibrados para especificação original.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md">
            {stats.map((s) => (
              <div key={s.v} className="rim glass rounded-xl p-3 md:p-4 text-center">
                <s.icon className="h-4 w-4 text-crimson-400 mx-auto" />
                <div className="mt-2 font-display font-extrabold text-base md:text-lg tracking-tight">{s.k}</div>
                <div className="text-[10px] md:text-[11px] text-white/50 leading-tight mt-0.5 uppercase tracking-[0.15em]">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-2"
          >
            {parts.map((p, i) => (
              <motion.li
                key={p}
                variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }}
                className="group flex items-start gap-3 px-4 py-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-crimson-500/30 transition"
              >
                <span className="mt-1 font-mono text-[10px] text-crimson-400/80 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm md:text-[15px] text-white/85 leading-snug">{p}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-white/20 group-hover:text-crimson-400 transition" />
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-5 grid grid-cols-2 gap-3 auto-rows-[180px] md:auto-rows-[200px]"
          >
            {showcase.map((g, i) => (
              <motion.figure
                key={g.title}
                variants={{ hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } } }}
                whileHover={{ y: -4 }}
                className={`rim group relative rounded-2xl overflow-hidden border border-white/10 ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img src={g.img} alt={g.title} className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/50 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-crimson-400">{g.tag}</div>
                  <div className="mt-1 font-display font-bold text-sm md:text-base leading-tight">{g.title}</div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

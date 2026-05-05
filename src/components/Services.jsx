import { motion } from 'framer-motion';
import { Wrench, Cog, Drill, Hammer, Gauge, Scale, Settings2, Disc3, Cpu, Layers } from 'lucide-react';

const services = [
  { icon: Wrench, title: 'Usinagem e Solda' },
  { icon: Cog, title: 'Fresa em Geral' },
  { icon: Drill, title: 'Furadeira Radial' },
  { icon: Hammer, title: 'Fabricação de Peças' },
  { icon: Gauge, title: 'Prensa Hidráulica' },
  { icon: Scale, title: 'Balanceamento' },
  { icon: Settings2, title: 'Desempeno de Transmissão' },
  { icon: Disc3, title: 'Retífica de Peças' },
  { icon: Cpu, title: 'Serviços em Tornos CNC' },
  { icon: Layers, title: 'Recuperação de Carcaças' },
];
const ease = [0.22, 1, 0.36, 1];

export default function Services() {
  return (
    <section id="servicos" className="relative py-28 md:py-36">
      <div className="container-x">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="max-w-3xl">
          <motion.span variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }} className="eyebrow">
            <span className="h-px w-6 bg-crimson-500" /> Serviços
          </motion.span>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="section-title mt-4">
            Capacidade técnica completa <span className="text-crimson-500">sob o mesmo teto.</span>
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="mt-5 text-white/55 text-base md:text-lg leading-relaxed">
            Operação verticalizada com maquinário pesado, tornos CNC e equipe especializada em recuperação de peças críticas.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {services.map((s) => (
            <motion.article key={s.title} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} whileHover={{ y: -6 }} className="rim group relative glass rounded-2xl p-5 overflow-hidden">
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-crimson-700/15 via-transparent to-transparent pointer-events-none" />
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-crimson-700/10 border border-crimson-500/30 text-crimson-400 group-hover:bg-crimson-gradient group-hover:text-white group-hover:border-transparent transition">
                  <s.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display font-bold text-[15px] md:text-base leading-snug tracking-tight">{s.title}</h3>
                <div className="mt-4 h-px w-8 bg-crimson-500/60 group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

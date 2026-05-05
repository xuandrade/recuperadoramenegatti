import { motion } from 'framer-motion';
import { Wallet, Leaf, Timer, GraduationCap, Check } from 'lucide-react';

const reasons = [
  { icon: Wallet, title: 'Custo-benefício', desc: 'Recuperação técnica com economia significativa frente à substituição por peça nova.' },
  { icon: Leaf, title: 'Sustentabilidade', desc: 'Prolongamos a vida útil de componentes nobres e reduzimos descarte de metais.' },
  { icon: Timer, title: 'Agilidade', desc: 'Fluxo de produção otimizado, prazos claros e entrega no menor tempo possível.' },
  { icon: GraduationCap, title: 'Expertise', desc: 'Equipe técnica especializada em retífica, usinagem CNC, solda e desempeno.' },
];

const checks = [
  'Diagnóstico técnico sem compromisso',
  'Garantia formal em todos os serviços',
  'Especificação OEM ou superior',
  'Atendimento direto com o especialista',
];

const ease = [0.22, 1, 0.36, 1];

export default function WhyChoose() {
  return (
    <section id="diferenciais" className="relative py-28 md:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[460px] w-[460px] rounded-full bg-crimson-700/10 blur-3xl" />
      </div>
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }} className="eyebrow">
            <span className="h-px w-6 bg-crimson-500" /> Diferenciais
          </motion.span>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="section-title mt-4">
            Precisão como vantagem <span className="text-crimson-500">competitiva.</span>
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="mt-5 text-white/55 text-base md:text-lg leading-relaxed">
            Combinamos tradição oficinal e engenharia moderna em uma operação técnica de alta confiabilidade.
          </motion.p>
          <motion.ul variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mt-8 space-y-3">
            {checks.map((c) => (
              <motion.li
                key={c}
                variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson-gradient text-white shadow-glow">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-white/85">{c}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              whileHover={{ y: -4 }}
              className={`rim glass rounded-2xl p-6 ${i % 2 === 1 ? 'sm:translate-y-6' : ''}`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-crimson-700/15 border border-crimson-500/30 text-crimson-400">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display font-bold text-lg tracking-tight">{r.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

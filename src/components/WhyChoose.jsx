import { motion } from 'framer-motion';
import { Wallet, Leaf, Timer, GraduationCap, Check } from 'lucide-react';

const reasons = [
  {
    icon: Wallet,
    title: 'Custo-benefício real',
    desc: 'Recuperar uma peça crítica pode custar até 70% menos do que a substituição por uma nova — com o mesmo desempenho.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade industrial',
    desc: 'Reduzimos descarte de metais e prolongamos a vida útil de componentes nobres, alinhados às melhores práticas de economia circular.',
  },
  {
    icon: Timer,
    title: 'Agilidade na entrega',
    desc: 'Fluxo de produção otimizado e prazos transparentes. Sua peça volta para a operação no menor tempo possível.',
  },
  {
    icon: GraduationCap,
    title: 'Expertise técnica',
    desc: 'Equipe formada por mecânicos, torneiros e soldadores com décadas de estrada — e atualização constante em novas tecnologias.',
  },
];

const checks = [
  'Diagnóstico técnico sem compromisso',
  'Garantia formal em todos os serviços',
  'Comunicação direta com o especialista',
  'Padrão de acabamento OEM ou superior',
];

export default function WhyChoose() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-ember-600/10 blur-3xl" />
      </div>
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">Por que escolher</span>
          <h2 className="section-title mt-3">Menegatti & 2R — onde precisão vira vantagem competitiva.</h2>
          <p className="mt-5 text-white/60 text-lg leading-relaxed">
            Quando a peça é crítica, improvisação não é uma opção. Combinamos tradição oficinal, engenharia moderna e atendimento consultivo para entregar resultados que duram.
          </p>
          <ul className="mt-8 space-y-3">
            {checks.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember-gradient text-carbon-950">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-white/85">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`glass rounded-2xl p-6 ${i % 2 === 1 ? 'sm:translate-y-6' : ''}`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-500">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display font-bold text-lg">{r.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

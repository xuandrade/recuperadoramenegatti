import { motion } from 'framer-motion';
import { Award, Cpu, ShieldCheck, Headset } from 'lucide-react';

const items = [
  { icon: Award, label: 'Anos de Experiência' },
  { icon: Cpu, label: 'Tecnologia de Ponta' },
  { icon: ShieldCheck, label: 'Garantia de Qualidade' },
  { icon: Headset, label: 'Atendimento Exclusivo' },
];

export default function AuthorityBar() {
  return (
    <section className="relative -mt-6 z-10">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 shadow-soft"
        >
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-500">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-semibold text-white/90 text-sm md:text-base">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

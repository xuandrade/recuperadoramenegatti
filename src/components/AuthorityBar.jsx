import { motion } from 'framer-motion';
import { Award, Cpu, ShieldCheck, Headset } from 'lucide-react';

const items = [
  { icon: Award, label: 'Tradição Industrial' },
  { icon: Cpu, label: 'Tornos CNC' },
  { icon: ShieldCheck, label: 'Garantia Técnica' },
  { icon: Headset, label: 'Atendimento Direto' },
];
const ease = [0.22, 1, 0.36, 1];

export default function AuthorityBar() {
  return (
    <section className="relative -mt-10 z-10">
      <div className="container-x">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="rim glass-strong rounded-2xl px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 shadow-luxe">
          {items.map(({ icon: Icon, label }) => (
            <motion.div key={label} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-crimson-700/15 border border-crimson-500/30 text-crimson-400">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-semibold text-white/90 text-sm md:text-base tracking-tight">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

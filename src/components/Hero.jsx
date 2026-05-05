import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2400&q=85')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,9,11,0.55)_0%,rgba(8,9,11,0.85)_60%,#08090B_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/40 via-transparent to-carbon-950" />
        <div className="absolute inset-0 bg-grid-faint [background-size:36px_36px] opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-crimson-700/15 blur-3xl" />
      </div>

      <div className="container-x relative pt-28 pb-20 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } } }}
          className="flex flex-col items-center"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
            className="eyebrow"
          >
            <span className="h-px w-8 bg-crimson-500" />
            Engenharia de Precisão · Rio de Janeiro
            <span className="h-px w-8 bg-crimson-500" />
          </motion.span>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease } } }}
            className="mt-8 font-display font-extrabold tracking-ultratight leading-[0.95] text-white"
          >
            <span className="block text-sm md:text-base font-medium tracking-[0.42em] text-white/55 uppercase mb-5">
              Recuperadora
            </span>
            <span className="block text-[clamp(3rem,11vw,9.5rem)]">
              <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">MENEGATTI</span>
            </span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, scaleX: 0 }, show: { opacity: 1, scaleX: 1, transition: { duration: 0.9, ease } } }}
            className="mt-8 h-px w-40 origin-center bg-gradient-to-r from-transparent via-crimson-500 to-transparent"
          />

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
            className="mt-8 max-w-xl text-white/65 text-base md:text-lg leading-relaxed"
          >
            Usinagem, retífica e recuperação de peças críticas — com tecnologia de tornos CNC e padrão técnico OEM.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <a href="https://wa.me/552137954001?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noreferrer" className="btn-primary">
              Solicitar Orçamento <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicos" className="btn-secondary">
              Ver Serviços
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/45 hover:text-white transition flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}

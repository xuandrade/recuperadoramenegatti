import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1632933060412-29d5d7c2f0d3?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/70 via-carbon-950/85 to-carbon-950" />
        <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-50" />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-ember-600/20 blur-3xl" />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="eyebrow mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Engenharia automotiva de alta performance
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Engenharia de <span className="bg-ember-gradient bg-clip-text text-transparent">Precisão</span> e Recuperação Automotiva de Alta Performance.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Especialistas em usinagem e recuperação de peças críticas no Rio de Janeiro. Tecnologia, acabamento e tolerâncias que <span className="text-white font-medium">superam o original de fábrica</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://wa.me/552137954001?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Solicitar Orçamento <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicos" className="btn-secondary">
              Conhecer Nossos Serviços
            </a>
          </div>

          <div className="mt-14 flex items-center gap-6 text-sm text-white/60">
            <div className="flex -space-x-2">
              {[0,1,2].map((i) => (
                <div key={i} className="h-9 w-9 rounded-full border-2 border-carbon-950 bg-gradient-to-br from-carbon-700 to-carbon-800" />
              ))}
            </div>
            <p>
              <span className="text-white font-semibold">+1.500</span> peças recuperadas com garantia técnica.
            </p>
          </div>
        </motion.div>
      </div>

      <a href="#servicos" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

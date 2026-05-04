import { motion } from 'framer-motion';
import { Cog, GitBranchPlus, CircleDot, Flame, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Cog,
    title: 'Recuperação de Transmissão e Câmbio',
    desc: 'Diagnóstico minucioso e recuperação de caixas de câmbio manuais e diferenciais. Restabelecemos a engrenagem original com tolerâncias rigorosas para máxima durabilidade.',
  },
  {
    icon: GitBranchPlus,
    title: 'Volantes do Motor e Barras de Direção',
    desc: 'Retífica de volantes e recuperação estrutural de barras de direção, garantindo balanceamento perfeito e segurança absoluta na condução.',
  },
  {
    icon: CircleDot,
    title: 'Usinagem de Alta Precisão',
    desc: 'Tornearia industrial com maquinário moderno para fabricação e ajuste de peças sob medida — milésimos de milímetro fazem diferença, e nós entregamos.',
  },
  {
    icon: Flame,
    title: 'Soldas Especiais e Estruturais',
    desc: 'Soldagem TIG, MIG e eletrodo em ferro fundido, alumínio e aço. Reparos estruturais com penetração controlada e acabamento de excelência.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Nossos Serviços</span>
          <h2 className="section-title mt-3">Soluções técnicas para quem não aceita aproximações.</h2>
          <p className="mt-5 text-white/60 text-lg leading-relaxed">
            Cada peça que sai da Menegatti & 2R passa por inspeção dimensional e testes de qualidade. Aqui, recuperação não é remendo — é engenharia.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-ember-500/10 via-transparent to-transparent" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-500 group-hover:bg-ember-500 group-hover:text-carbon-950 transition">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display font-bold text-lg leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ember-500 group-hover:gap-2 transition-all">
                  Saber mais <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

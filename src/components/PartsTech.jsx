import { motion } from 'framer-motion';
import { Microscope, Ruler, Factory } from 'lucide-react';

const gallery = [
  { tag: 'Antes & Depois', title: 'Volante de Motor Retificado', img: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?auto=format&fit=crop&w=1200&q=80' },
  { tag: 'Usinagem CNC', title: 'Eixo de Precisão Sob Medida', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80' },
  { tag: 'Solda Estrutural', title: 'Reparo em Ferro Fundido', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80' },
  { tag: 'Tornearia', title: 'Buchas e Pinos Customizados', img: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=80' },
];

const stats = [
  { icon: Ruler, k: '0,01mm', v: 'Tolerância dimensional' },
  { icon: Microscope, k: '100%', v: 'Inspeção pré-entrega' },
  { icon: Factory, k: 'Padrão OEM', v: 'Especificação de fábrica' },
];

export default function PartsTech() {
  return (
    <section id="pecas" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Peças e Tecnologia</span>
            <h2 className="section-title mt-3">Maquinário avançado. Resultado de fábrica.</h2>
            <p className="mt-5 text-white/60 text-lg leading-relaxed">
              Trabalhamos com tornos, fresadoras e equipamentos de medição calibrados para entregar peças que respeitam — e muitas vezes superam — os padrões originais do fabricante.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md">
            {stats.map((s) => (
              <div key={s.v} className="glass rounded-xl p-3 md:p-4 text-center">
                <s.icon className="h-5 w-5 text-ember-500 mx-auto" />
                <div className="mt-2 font-display font-extrabold text-lg md:text-xl">{s.k}</div>
                <div className="text-[10px] md:text-xs text-white/55 leading-tight mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((g, i) => (
            <motion.figure
              key={g.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
            >
              <img src={g.img} alt={g.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/40 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ember-500">{g.tag}</div>
                <div className="mt-1 font-display font-bold leading-tight">{g.title}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

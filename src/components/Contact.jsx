import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Send, CheckCircle2 } from 'lucide-react';

const infos = [
  { icon: MapPin, title: 'Endereço', body: 'Av. dos Democráticos, 515\nHigienópolis · Rio de Janeiro / RJ' },
  { icon: Clock, title: 'Horário', body: 'Seg. a Sex.: 08h00 às 18h00\nSábado: 08h00 às 14h00' },
  { icon: Phone, title: 'Telefone / WhatsApp', body: '(21) 3795-4001', href: 'https://wa.me/552137954001' },
];

const ease = [0.22, 1, 0.36, 1];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Olá, sou ${form.name}. Telefone: ${form.phone}. Serviço de interesse: ${form.service}. ${form.message}`);
    window.open(`https://wa.me/552137954001?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contato" className="relative py-28 md:py-36 border-t border-white/[0.05]">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-2xl"
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }} className="eyebrow">
            <span className="h-px w-6 bg-crimson-500" /> Contato
          </motion.span>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="section-title mt-4">
            Solicite um orçamento <span className="text-crimson-500">técnico.</span>
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="mt-5 text-white/55 text-base md:text-lg leading-relaxed">
            Descreva a peça ou serviço necessário. Resposta direta com o especialista.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="rim lg:col-span-3 glass-strong rounded-3xl p-6 md:p-8 shadow-luxe"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome" name="name" value={form.name} onChange={handle} placeholder="Seu nome completo" required />
              <Field label="Telefone" name="phone" value={form.phone} onChange={handle} placeholder="(21) 99999-0000" required />
            </div>
            <Field label="Serviço de interesse" name="service" value={form.service} onChange={handle} placeholder="Ex.: Retífica, usinagem CNC, solda..." />
            <div className="mt-4">
              <label className="text-[11px] uppercase tracking-[0.2em] text-white/55 font-semibold">Mensagem</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                rows={5}
                placeholder="Descreva a peça, o problema e prazos..."
                className="mt-2 w-full bg-white/[0.03] border border-white/10 focus:border-crimson-500/60 focus:bg-white/[0.05] rounded-xl px-4 py-3 outline-none transition placeholder:text-white/30"
              />
            </div>
            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              {sent ? <><CheckCircle2 className="h-4 w-4" /> Enviado</> : <><Send className="h-4 w-4" /> Enviar via WhatsApp</>}
            </button>
            <p className="mt-3 text-xs text-white/40">Você é direcionado(a) ao nosso WhatsApp para atendimento imediato.</p>
          </motion.form>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {infos.map((i) => (
              <motion.a
                key={i.title}
                href={i.href || '#'}
                target={i.href ? '_blank' : undefined}
                rel="noreferrer"
                variants={{ hidden: { opacity: 0, x: 16 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } } }}
                whileHover={{ y: -3 }}
                className="rim glass rounded-2xl p-5 flex gap-4 hover:border-crimson-500/30 transition"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-crimson-700/15 border border-crimson-500/30 text-crimson-400">
                  <i.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-semibold">{i.title}</div>
                  <div className="mt-1 text-white/85 whitespace-pre-line leading-relaxed">{i.body}</div>
                </div>
              </motion.a>
            ))}

            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } } }}
              className="rim glass rounded-2xl overflow-hidden h-56 relative"
            >
              <iframe
                title="Mapa Recuperadora Menegatti"
                src="https://www.google.com/maps?q=Av.+dos+Democr%C3%A1ticos+515,+Higien%C3%B3polis,+Rio+de+Janeiro&output=embed"
                className="absolute inset-0 h-full w-full grayscale contrast-125 brightness-75"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div className="mt-4 sm:mt-0">
      <label className="text-[11px] uppercase tracking-[0.2em] text-white/55 font-semibold">{label}</label>
      <input
        {...props}
        className="mt-2 w-full bg-white/[0.03] border border-white/10 focus:border-crimson-500/60 focus:bg-white/[0.05] rounded-xl px-4 py-3 outline-none transition placeholder:text-white/30"
      />
    </div>
  );
}

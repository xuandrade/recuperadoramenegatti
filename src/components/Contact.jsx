import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Send, CheckCircle2 } from 'lucide-react';

const infos = [
  {
    icon: MapPin,
    title: 'Endereço',
    body: 'Av. dos Democráticos, 515\nHigienópolis · Rio de Janeiro / RJ',
  },
  {
    icon: Clock,
    title: 'Horário de atendimento',
    body: 'Segunda a Sexta: 08h00 às 18h00\nSábados: 08h00 às 14h00',
  },
  {
    icon: Phone,
    title: 'Telefone / WhatsApp',
    body: '(21) 3795-4001',
    href: 'https://wa.me/552137954001',
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, sou ${form.name}. Telefone: ${form.phone}. Serviço de interesse: ${form.service}. ${form.message}`
    );
    window.open(`https://wa.me/552137954001?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Contato & Localização</span>
          <h2 className="section-title mt-3">Pronto para resolver com a equipe certa.</h2>
          <p className="mt-5 text-white/60 text-lg leading-relaxed">
            Conte-nos sobre a sua peça ou demanda. Respondemos rápido — orçamento técnico, sem letras miúdas.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-strong rounded-3xl p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome" name="name" value={form.name} onChange={handle} placeholder="Seu nome completo" required />
              <Field label="Telefone" name="phone" value={form.phone} onChange={handle} placeholder="(21) 99999-0000" required />
            </div>
            <Field label="Serviço de interesse" name="service" value={form.service} onChange={handle} placeholder="Ex.: Retífica de volante, usinagem..." />
            <div className="mt-4">
              <label className="text-xs uppercase tracking-[0.18em] text-white/55 font-semibold">Mensagem</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                rows={5}
                placeholder="Descreva a peça, o problema e prazos..."
                className="mt-2 w-full bg-white/[0.03] border border-white/10 focus:border-ember-500/60 focus:bg-white/[0.05] rounded-xl px-4 py-3 outline-none transition placeholder:text-white/30"
              />
            </div>
            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              {sent ? <><CheckCircle2 className="h-4 w-4" /> Enviado</> : <><Send className="h-4 w-4" /> Enviar via WhatsApp</>}
            </button>
            <p className="mt-3 text-xs text-white/40">Ao enviar, você é direcionado(a) ao nosso WhatsApp para atendimento imediato.</p>
          </motion.form>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {infos.map((i, idx) => (
              <motion.a
                key={i.title}
                href={i.href || '#'}
                target={i.href ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="glass rounded-2xl p-5 flex gap-4 hover:border-ember-500/30 transition"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-500">
                  <i.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/45 font-semibold">{i.title}</div>
                  <div className="mt-1 text-white/85 whitespace-pre-line leading-relaxed">{i.body}</div>
                </div>
              </motion.a>
            ))}

            <div className="glass rounded-2xl overflow-hidden h-56 relative">
              <iframe
                title="Mapa Menegatti & 2R"
                src="https://www.google.com/maps?q=Av.+dos+Democr%C3%A1ticos+515,+Higien%C3%B3polis,+Rio+de+Janeiro&output=embed"
                className="absolute inset-0 h-full w-full grayscale contrast-125 brightness-75"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div className="mt-4 sm:mt-0">
      <label className="text-xs uppercase tracking-[0.18em] text-white/55 font-semibold">{label}</label>
      <input
        {...props}
        className="mt-2 w-full bg-white/[0.03] border border-white/10 focus:border-ember-500/60 focus:bg-white/[0.05] rounded-xl px-4 py-3 outline-none transition placeholder:text-white/30"
      />
    </div>
  );
}

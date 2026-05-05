import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/552137954001?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Recuperadora%20Menegatti."
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 240, damping: 18 }}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] animate-pulseGlow hover:scale-110 transition"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.21c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53-.18-.01-.38-.01-.58-.01-.2 0-.53.07-.8.38-.27.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.24 5.13 4.54.72.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35z"/>
        <path d="M26.6 5.4A14.86 14.86 0 0 0 16 1C7.72 1 1 7.72 1 16c0 2.66.7 5.26 2.02 7.55L1 31l7.66-2.01A14.94 14.94 0 0 0 16 31c8.28 0 15-6.72 15-15 0-4.01-1.56-7.78-4.4-10.6zM16 28.5c-2.31 0-4.57-.62-6.55-1.79l-.47-.28-4.55 1.19 1.21-4.43-.31-.49A12.43 12.43 0 0 1 3.5 16C3.5 9.1 9.1 3.5 16 3.5S28.5 9.1 28.5 16 22.9 28.5 16 28.5z"/>
      </svg>
    </motion.a>
  );
}

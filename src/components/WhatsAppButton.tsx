import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const whatsappUrl =
  "https://wa.me/5561993972226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=float&utm_content=whatsapp_float";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 15000);

    // Show first tooltip after 5 seconds
    const initial = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-3 glass-card-gold rounded-lg px-4 py-2.5 whitespace-nowrap shadow-gold"
          >
            <span className="text-sm font-medium">Fale conosco! 💬</span>
            {/* Arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-card/50 border-r border-b border-primary/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow pulse-ring text-white"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;

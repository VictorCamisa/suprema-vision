import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const whatsappUrl = "https://wa.me/556133638060?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Shineray%20T30.&utm_source=site&utm_medium=float&utm_content=whatsapp_float";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} className="text-foreground" />
    </motion.a>
  );
};

export default WhatsAppButton;

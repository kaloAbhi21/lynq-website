import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919875635062", "_blank", "noopener,noreferrer");
  };

  if (!isLoaded) return null;

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 
        bg-green-500 hover:bg-green-600
        text-white
        rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-smooth
        hover:scale-110
        focus:outline-none focus:ring-4 focus:ring-green-500/30
        animate-fade-in-up
        md:w-16 md:h-16
        group
      `}
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle 
        className="w-7 h-7 md:w-8 md:h-8 mx-auto group-hover:animate-pulse" 
        strokeWidth={2}
      />
    </button>
  );
};

export default WhatsAppButton;
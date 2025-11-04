import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingChat = () => {
  const handleChatClick = () => {
    // Open WhatsApp chat
    window.open("https://wa.me/2348000000000?text=Hello%20Albarka+", "_blank");
  };

  return (
    <Button
      onClick={handleChatClick}
      variant="hero"
      size="icon"
      className="fixed bottom-8 left-8 z-50 h-14 w-14 rounded-full shadow-glow animate-pulse hover:animate-none"
      aria-label="Chat with us"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default FloatingChat;

import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/2348000000000?text=Hello%20Albarka+,%20I%20need%20help", "_blank");
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 p-4 shadow-glow animate-fade-in z-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">How can we help?</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="h-4 w-4 text-green-600" />
              Chat on WhatsApp
            </Button>
            
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Need help with:</p>
              <ul className="space-y-1 text-xs">
                <li>• Product inquiries</li>
                <li>• Payment plans</li>
                <li>• Order tracking</li>
                <li>• Account support</li>
              </ul>
            </div>
          </div>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-110 z-50"
        variant="hero"
        size="icon"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 animate-pulse" />
        )}
      </Button>
    </>
  );
};

export default FloatingChat;

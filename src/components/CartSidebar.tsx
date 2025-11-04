import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export interface CartItem {
  id: string;
  title: string;
  brand: string;
  price: number;
  dailyPlan: string;
  image: string;
  quantity: number;
}

interface CartSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartSidebar = ({ open, onOpenChange, items, onUpdateQuantity, onRemoveItem }: CartSidebarProps) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-elegant animate-slide-in-right md:animate-slide-in-right sm:animate-slide-in-bottom">
        <SheetHeader className="space-y-4">
          <SheetTitle className="flex items-center gap-2 text-2xl font-heading">
            <ShoppingBag className="h-6 w-6 text-primary" />
            Your Cart 🛍️
          </SheetTitle>
          <Separator className="bg-border/50" />
        </SheetHeader>

        <div className="flex flex-col h-full py-6">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-fade-in">
                <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <p className="text-lg font-medium text-muted-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-2">Add some products to get started!</p>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl p-4 transition-all duration-300 hover:bg-accent/10 border border-transparent hover:border-primary/20 hover:shadow-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-soft-blue flex-shrink-0 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-primary mb-1">{item.brand}</p>
                          <h4 className="font-semibold text-sm line-clamp-2 leading-tight">
                            {item.title}
                          </h4>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onRemoveItem(item.id)}
                          className="h-8 w-8 -mt-1 -mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-destructive hover:bg-destructive/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-2 mt-2">
                        <p className="text-lg font-bold text-primary">
                          ₦{item.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          or {item.dailyPlan}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="h-8 w-8 rounded-lg border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-12 text-center font-semibold text-base">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 rounded-lg border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Section - Subtotal & Actions */}
          {items.length > 0 && (
            <div className="border-t border-border/50 pt-6 mt-6 space-y-4 animate-fade-in">
              <div className="flex items-center justify-between text-lg bg-soft-blue rounded-xl p-4">
                <span className="font-medium text-foreground">Subtotal</span>
                <span className="font-bold text-2xl text-primary">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>

              <div className="space-y-3">
                <Button className="w-full h-12 text-base shadow-card hover:shadow-elegant transition-all" variant="hero">
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 text-base border-primary/30 hover:bg-primary/5"
                  onClick={() => onOpenChange(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;

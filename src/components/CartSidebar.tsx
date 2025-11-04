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
      <SheetContent className="w-full sm:max-w-lg bg-background/95 backdrop-blur-xl border-l shadow-2xl">
        <SheetHeader className="space-y-4">
          <SheetTitle className="flex items-center gap-2 text-2xl">
            <ShoppingBag className="h-6 w-6 text-primary" />
            Your Cart 🛍️
          </SheetTitle>
          <Separator />
        </SheetHeader>

        <div className="flex flex-col h-full py-6">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <p className="text-lg font-medium text-muted-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-2">Add some products to get started!</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl p-4 transition-all duration-300 hover:bg-accent/50 border border-transparent hover:border-primary/20 hover:shadow-card"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-soft-blue flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
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
                          className="h-8 w-8 -mt-1 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity hover:text-destructive"
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
                            className="h-8 w-8 rounded-lg"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 rounded-lg"
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
            <div className="border-t pt-6 mt-6 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold text-2xl text-primary">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>

              <div className="space-y-3">
                <Button className="w-full h-12 text-base" variant="hero">
                  Proceed to Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 text-base"
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

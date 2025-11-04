import { ShoppingCart, Wallet, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: ShoppingCart,
    title: "Choose Your Item",
    description: "Browse our catalog and select the product you want to own",
    step: "01",
  },
  {
    icon: Wallet,
    title: "Save or Pay Daily",
    description: "Make flexible daily payments that fit your income schedule",
    step: "02",
  },
  {
    icon: Key,
    title: "Own It - Smartly!",
    description: "Complete your payments and receive your item. It's yours!",
    step: "03",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How Albarka+ Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to smart ownership
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold shadow-glow">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 mt-4 rounded-2xl bg-soft-blue flex items-center justify-center">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-heading font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Connector Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

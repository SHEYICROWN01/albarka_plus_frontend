import MainLayout from "@/layouts/MainLayout";
import { Search, FileCheck, Wallet, Calendar, Truck, Key, Shield, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Browse & Select",
      description: "Explore our catalog of quality products from trusted brands. Choose the item that fits your needs and budget.",
      details: [
        "Wide range of electronics, appliances, and gadgets",
        "Verified products from authorized dealers",
        "Detailed product specifications and images",
        "Customer reviews and ratings"
      ]
    },
    {
      icon: FileCheck,
      number: "02",
      title: "Quick Application",
      description: "Submit a simple credit request. Our smart system evaluates your eligibility within minutes.",
      details: [
        "Minimal documentation required",
        "Instant approval for verified customers",
        "Flexible payment terms",
        "No hidden fees or charges"
      ]
    },
    {
      icon: Wallet,
      number: "03",
      title: "Choose Your Plan",
      description: "Select a payment schedule that matches your income flow. Daily, weekly, or monthly - it's your choice.",
      details: [
        "Flexible daily payment options",
        "Weekly or monthly installments available",
        "Customize your payment schedule",
        "Adjust plans based on your cash flow"
      ]
    },
    {
      icon: Calendar,
      number: "04",
      title: "Continue Saving",
      description: "Keep making your regular savings contributions while we process your request.",
      details: [
        "Maintain your savings routine",
        "Build credit history automatically",
        "Track your payment progress",
        "Automated payment reminders"
      ]
    },
    {
      icon: Truck,
      number: "05",
      title: "Receive Your Item",
      description: "Once approved, your product is delivered to your doorstep or pickup location.",
      details: [
        "Fast and secure delivery",
        "Multiple pickup locations available",
        "Track your delivery in real-time",
        "Product warranty included"
      ]
    },
    {
      icon: Key,
      number: "06",
      title: "Own It Smartly",
      description: "Complete your payments and the item is officially yours. Build your financial future, one smart purchase at a time.",
      details: [
        "Ownership transfer upon completion",
        "Build your credit score",
        "Unlock better offers and limits",
        "Join our community of smart owners"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your data and payments are protected with bank-level security"
    },
    {
      icon: TrendingUp,
      title: "Build Credit",
      description: "Every payment improves your credit score and unlocks better terms"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join 5,000+ Nigerians achieving their ownership goals"
    },
    {
      icon: CheckCircle,
      title: "Zero Interest",
      description: "Pay only the product price with no hidden fees or interest charges"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              How Albarka+ Works
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Your journey from browsing to ownership in six simple steps
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              We've made it incredibly easy to own the products you need while building your financial future. 
              Here's exactly how our smart installment system works.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 mb-20 last:mb-0`}>
                  {/* Icon & Number */}
                  <div className="flex-shrink-0 flex flex-col items-center md:w-48">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                        <Icon className="h-16 w-16 text-white" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block w-1 h-20 bg-gradient-to-b from-primary to-transparent mt-8" />
                    )}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-soft-blue">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose Albarka+
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than just installment payments - we're your partner in smart ownership
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Real Example: How Sarah Got Her Laptop
              </h2>
              <p className="text-lg text-muted-foreground">
                See how one of our customers used Albarka+ to own her dream laptop
              </p>
            </div>

            <Card className="bg-soft-blue border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Sarah browsed our catalog</p>
                      <p className="text-muted-foreground">She found a HP Pavilion laptop for ₦520,000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold mb-1">She chose a 30-day payment plan</p>
                      <p className="text-muted-foreground">Just ₦17,333 per day - matching her daily savings routine</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Approved in 2 hours</p>
                      <p className="text-muted-foreground">Her laptop was delivered the next day</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-semibold mb-1">She completed payments in 30 days</p>
                      <p className="text-muted-foreground">Now owns her laptop and improved her credit score for future purchases</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/10 rounded-xl border-2 border-primary/20">
                  <p className="text-center font-semibold text-lg">
                    "Albarka+ made it so easy! I got the laptop I needed for work without breaking the bank."
                  </p>
                  <p className="text-center text-muted-foreground mt-2">
                    - Sarah O., Lagos
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Ownership Journey?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of smart savers who are achieving their goals with Albarka+
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button variant="accent" size="lg" className="group">
                Browse Products
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HowItWorks;

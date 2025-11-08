import MainLayout from "@/layouts/MainLayout";
import { Search, FileCheck, Wallet, Calendar, Truck, Key, Shield, TrendingUp, Users, CheckCircle, ArrowRight, Sparkles, Star, Zap } from "lucide-react";
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
      color: "from-blue-500 to-cyan-500",
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
      color: "from-purple-500 to-pink-500",
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
      color: "from-green-500 to-emerald-500",
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
      color: "from-orange-500 to-amber-500",
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
      color: "from-red-500 to-rose-500",
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
      color: "from-indigo-500 to-violet-500",
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
      description: "Your data and payments are protected with bank-level security",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Build Credit",
      description: "Every payment improves your credit score and unlocks better terms",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join 5,000+ Nigerians achieving their ownership goals",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "Zero Interest",
      description: "Pay only the product price with no hidden fees or interest charges",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <MainLayout>
    {/* Hero Section with Enhanced Design */ }
    < section className = "relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 md:py-32 overflow-hidden" >
      {/* Animated Background Elements */ }
      < div className = "absolute inset-0 overflow-hidden" >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" > </div>
          < div className = "absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style = {{ animationDelay: '1s' }
}> </div>
  < div className = "absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse" style = {{ animationDelay: '2s' }}> </div>
    </div>

{/* Grid Pattern Overlay */ }
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" > </div>

  < div className = "container relative z-10" >
    <div className="max-w-4xl mx-auto text-center" >
      {/* Floating Badge */ }
      < div className = "inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 animate-fade-in shadow-lg" >
        <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
          <span className="text-sm font-semibold text-white" > Simple, Transparent & Smart </span>
            </div>

            < h1 className = "text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in leading-tight" style = {{ animationDelay: '0.1s' }}>
              How Albarka + Works
                </h1>
                < p className = "text-xl md:text-2xl text-white/95 mb-6 animate-fade-in font-medium" style = {{ animationDelay: '0.2s' }}>
                  Your journey from browsing to ownership in six simple steps
                    </p>
                    < p className = "text-lg text-white/85 max-w-2xl mx-auto animate-fade-in leading-relaxed" style = {{ animationDelay: '0.3s' }}>
                      We've made it incredibly easy to own the products you need while building your financial future. 
              Here's exactly how our smart installment system works.
  </p>

{/* Stats Row */ }
<div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12 animate-fade-in" style = {{ animationDelay: '0.4s' }}>
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20" >
    <div className="text-3xl font-bold mb-1" > 5,000 + </div>
      < div className = "text-sm text-white/80" > Happy Users </div>
        </div>
        < div className = "bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20" >
          <div className="text-3xl font-bold mb-1" > 2hrs </div>
            < div className = "text-sm text-white/80" > Avg.Approval </div>
              </div>
              < div className = "bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20" >
                <div className="text-3xl font-bold mb-1" > 0 % </div>
                  < div className = "text-sm text-white/80" > Interest Rate </div>
                    </div>
                    </div>
                    </div>
                    </div>

{/* Wave Divider */ }
<div className="absolute bottom-0 left-0 right-0" >
  <svg viewBox="0 0 1440 120" className = "w-full h-auto" >
    <path fill="white" d = "M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" > </path>
      </svg>
      </div>
      </section>

{/* Steps Section with Enhanced Design */ }
<section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden" >
  {/* Decorative Background Elements */ }
  < div className = "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" >
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" > </div>
      < div className = "absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" > </div>
        </div>

        < div className = "container relative z-10" >
          <div className="max-w-6xl mx-auto" >
          {
            steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key= { index }
              className = {`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 mb-24 last:mb-0 animate-fade-in`
            }
                  style = {{ animationDelay: `${index * 0.15}s` }}
            >
            {/* Icon & Number - Enhanced */ }
            < div className = "flex-shrink-0 flex flex-col items-center md:w-56" >
              <div className="relative group" >
                {/* Glow Effect */ }
                < div className = {`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}> </div>

{/* Main Icon Container */ }
<div className={ `relative w-36 h-36 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300` }>
  <Icon className="h-16 w-16 text-white" strokeWidth = { 1.5} />
    </div>

{/* Number Badge */ }
<div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center border-4 border-slate-100" >
  <span className="text-3xl font-bold bg-gradient-to-br from-slate-700 to-slate-900 bg-clip-text text-transparent" >
    { step.number }
    </span>
    </div>

{/* Sparkle Accent */ }
<Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-yellow-400 animate-pulse" />
  </div>

{/* Connector Line */ }
{
  index < steps.length - 1 && (
    <div className={ `hidden md:block w-1 h-24 bg-gradient-to-b ${step.color} opacity-30 mt-8` } />
                    )
}
</div>

{/* Content Card - Enhanced */ }
<Card className="flex-1 border-2 hover:border-transparent hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white" >
  {/* Gradient Border Effect */ }
  < div className = {`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}> </div>
    < div className = "absolute inset-[2px] bg-white rounded-lg z-0" > </div>

      < CardContent className = "p-8 md:p-10 relative z-10" >
        <div className="flex items-start justify-between mb-4" >
          <h3 className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent" >
            { step.title }
            </h3>
            < Star className = "w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              < p className = "text-lg text-slate-600 mb-8 leading-relaxed" >
                { step.description }
                </p>

                < div className = "space-y-4" >
                {
                  step.details.map((detail, idx) => (
                    <div 
                            key= { idx } 
                            className = "flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200"
                            style = {{ animationDelay: `${(index * 0.15) + (idx * 0.05)}s` }}
                  >
                  <div className={ `flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mt-0.5` }>
                    <CheckCircle className="h-4 w-4 text-white" strokeWidth = { 2.5} />
                      </div>
                      < span className = "text-slate-700 leading-relaxed" > { detail } </span>
                        </div>
                        ))}
</div>
  </CardContent>
  </Card>
  </div>
              );
            })}
</div>
  </div>
  </section>

{/* Benefits Section - Redesigned */ }
<section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden" >
  {/* Animated Background */ }
  < div className = "absolute inset-0 overflow-hidden" >
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" > </div>
      < div className = "absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style = {{ animationDelay: '1.5s' }}> </div>
        </div>

        < div className = "container relative z-10" >
          <div className="text-center mb-16" >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 animate-fade-in" >
              <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold" > Amazing Benefits </span>
                  </div>

                  < h2 className = "text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in" style = {{ animationDelay: '0.1s' }}>
                    Why Choose Albarka +
                      </h2>
                      < p className = "text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style = {{ animationDelay: '0.2s' }}>
                        More than just installment payments - we're your partner in smart ownership
                          </p>
                          </div>

                          < div className = "grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto" >
                          {
                            benefits.map((benefit, index) => {
                              const Icon = benefit.icon;
                              return (
                                <Card 
                  key= { index }
                              className = "text-center bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group animate-fade-in"
                              style = {{ animationDelay: `${0.3 + index * 0.1}s` }
                            }
                >
                              <CardContent className="p-8" >
                              {/* Icon with Gradient */ }
                            < div className = "relative mx-auto mb-6 w-20 h-20" >
                            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} > </div>
                            < div className = {`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                              <Icon className="h-10 w-10 text-white" strokeWidth = { 2} />
                                </div>
                                </div>

                                < h3 className = "text-2xl font-heading font-bold mb-3 text-white" >
                                  { benefit.title }
                                  </h3>
                                  < p className = "text-white/80 leading-relaxed" >
                                    { benefit.description }
                                    </p>
                                    </CardContent>
                                    </Card>
              );
            })}
</div>
  </div>
  </section>

{/* Example Section - Enhanced */ }
<section className="py-24 bg-gradient-to-b from-white to-slate-50" >
  <div className="container" >
    <div className="max-w-5xl mx-auto" >
      <div className="text-center mb-16" >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6 animate-fade-in" >
          <Star className="w-5 h-5 text-purple-600 fill-purple-600" />
            <span className="text-sm font-semibold text-purple-900" > Success Story </span>
              </div>

              < h2 className = "text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent animate-fade-in" style = {{ animationDelay: '0.1s' }}>
                Real Example: How Sarah Got Her Laptop
                  </h2>
                  < p className = "text-xl text-slate-600 animate-fade-in" style = {{ animationDelay: '0.2s' }}>
                    See how one of our customers used Albarka + to own her dream laptop
                      </p>
                      </div>

                      < Card className = "bg-gradient-to-br from-purple-50 via-white to-pink-50 border-2 border-purple-200 shadow-2xl overflow-hidden animate-fade-in" style = {{ animationDelay: '0.3s' }}>
                        <CardContent className="p-10 md:p-14" >
                          <div className="space-y-8" >
                          {
                            [
                              {
                                title: "Sarah browsed our catalog",
                                desc: "She found a HP Pavilion laptop for ₦520,000",
                                gradient: "from-blue-500 to-cyan-500"
                              },
                              {
                                title: "She chose a 30-day payment plan",
                                desc: "Just ₦17,333 per day - matching her daily savings routine",
                                gradient: "from-purple-500 to-pink-500"
                              },
                              {
                                title: "Approved in 2 hours",
                                desc: "Her laptop was delivered the next day",
                                gradient: "from-green-500 to-emerald-500"
                              },
                              {
                                title: "She completed payments in 30 days",
                                desc: "Now owns her laptop and improved her credit score for future purchases",
                                gradient: "from-orange-500 to-amber-500"
                              }
                            ].map((step, idx) => (
                              <div key= { idx } className = "flex items-start gap-6 group" >
                              <div className="flex-shrink-0 relative" >
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} > </div>
                            < div className = {`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform`}>
                              { idx + 1}
</div>
  </div>
  < div className = "flex-1" >
    <p className="font-bold text-xl mb-2 text-slate-800" > { step.title } </p>
      < p className = "text-slate-600 leading-relaxed text-lg" > { step.desc } </p>
        </div>
        </div>
                  ))}
</div>

{/* Testimonial Quote */ }
<div className="mt-12 p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl relative overflow-hidden" >
  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" > </div>
    < div className = "relative" >
      <div className="flex items-center gap-3 mb-4" >
        <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
          <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  </div>
                  < p className = "text-white font-semibold text-2xl mb-4 leading-relaxed" >
                    "Albarka+ made it so easy! I got the laptop I needed for work without breaking the bank."
                    </p>
                    < p className = "text-white/90 text-lg font-medium" >
                      - Sarah O., Lagos
                        </p>
                        </div>
                        </div>
                        </CardContent>
                        </Card>
                        </div>
                        </div>
                        </section>

{/* CTA Section - Enhanced */ }
<section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden" >
  {/* Animated Background */ }
  < div className = "absolute inset-0 overflow-hidden" >
    <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" > </div>
      < div className = "absolute bottom-1/3 right-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style = {{ animationDelay: '1s' }}> </div>
        </div>

        < div className = "container text-center relative z-10" >
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-300 animate-pulse" />

            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in" >
              Ready to Start Your Ownership Journey ?
                </h2>
                < p className = "text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in" style = {{ animationDelay: '0.1s' }}>
                  Join thousands of smart savers who are achieving their goals with Albarka +
                  </p>

                  < div className = "flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style = {{ animationDelay: '0.2s' }}>
                    <Link to="/catalog" >
                      <Button 
                size="lg"
className = "group px-8 py-7 text-lg bg-white text-purple-600 hover:bg-white/90 shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300 rounded-2xl font-bold"
  >
  Browse Products
    < ArrowRight className = "h-6 w-6 ml-2 transition-transform group-hover:translate-x-2" />
      </Button>
      </Link>
      < Link to = "/login" >
        <Button 
                size="lg"
className = "px-8 py-7 text-lg bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl font-bold"
  >
  Create Free Account
    </Button>
    </Link>
    </div>

{/* Trust Indicators */ }
<div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm animate-fade-in" style = {{ animationDelay: '0.3s' }}>
  <div className="flex items-center gap-2" >
    <Shield className="w-5 h-5" />
      <span>Bank - Level Security </span>
        </div>
        < div className = "flex items-center gap-2" >
          <CheckCircle className="w-5 h-5" />
            <span>No Hidden Fees </span>
              </div>
              < div className = "flex items-center gap-2" >
                <Users className="w-5 h-5" />
                  <span>5,000 + Happy Users </span>
                    </div>
                    </div>
                    </div>
                    </section>

                    < style > {`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
  </MainLayout>
  );
};

export default HowItWorks;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Albarka+
            </h1>
            <p className="text-xl text-white/90">
              Empowering Nigerians to own their dreams through smart, flexible installment payments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                We believe everyone deserves access to quality products without the burden of upfront costs. 
                Albarka+ is revolutionizing e-commerce in Nigeria by making premium products accessible through 
                flexible, small-small payments.
              </p>
              <p className="text-lg text-muted-foreground">
                No more waiting, no more saving for months. Start using what you need today, and pay comfortably over time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl shadow-card">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">10,000+</h3>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-card">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">5,000+</h3>
                <p className="text-sm text-muted-foreground">Products Available</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-card">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">99%</h3>
                <p className="text-sm text-muted-foreground">Approval Rate</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-card">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">24/7</h3>
                <p className="text-sm text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-soft-blue dark:bg-card">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Customer First
              </h3>
              <p className="text-muted-foreground">
                Every decision we make prioritizes your experience, security, and satisfaction.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Transparency
              </h3>
              <p className="text-muted-foreground">
                No hidden fees, no surprises. We believe in honest, clear communication always.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                We continuously improve our platform to serve you better with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-gradient-primary rounded-3xl p-12 text-center shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of Nigerians who are already owning their dreams.
            </p>
            <Link to="/catalog">
              <Button size="lg" className="h-12 bg-white text-primary hover:bg-white/90 font-semibold shadow-lg">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </MainLayout>
  );
};

export default About;

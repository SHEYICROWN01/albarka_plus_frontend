import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Amina Yusuf",
    city: "Lagos",
    rating: 5,
    text: "Albarka+ made it so easy for me to get my dream phone. The daily savings plan fits perfectly with my income. I'm so grateful!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina",
  },
  {
    name: "Chukwudi Okafor",
    city: "Abuja",
    rating: 5,
    text: "I never thought I could afford a laptop for my business. Thanks to Albarka+, I now have one and I'm paying comfortably every day.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chukwudi",
  },
  {
    name: "Fatima Ibrahim",
    city: "Kano",
    rating: 5,
    text: "The customer service is excellent. They explained everything clearly and the process was smooth from start to finish.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
  },
  {
    name: "Emmanuel Eze",
    city: "Port Harcourt",
    rating: 5,
    text: "Smart ownership indeed! I got my TV in less than a week and the daily payment is so manageable. Highly recommend!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emmanuel",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who are owning smartly with Albarka+
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full bg-soft-blue"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    
                    <p className="text-sm text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;

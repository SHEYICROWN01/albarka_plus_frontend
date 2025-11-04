import { Card } from "@/components/ui/card";

const brands = [
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
  { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
];

const BrandCarousel = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
            Trusted Brands
          </h2>
          <p className="text-muted-foreground">
            Shop from the world's leading electronics brands
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <Card
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center p-4 hover:shadow-card transition-shadow duration-300 bg-card"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter dark:invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;

import { Card, CardContent } from "@/components/ui/card";
import {
  CheckSquare,
  MapPin,
  MessageSquare,
  Briefcase,
  Zap,
  Building2,
  Monitor,
} from "lucide-react";

const services = [
  {
    title: "Elbesiktning",
    description:
      "Vi säkerställer att din elanläggning uppfyller alla krav på säkerhet och funktion.",
    icon: CheckSquare,
  },
  {
    title: "Projektering",
    description:
      "Vi utför Idéskisser, Förstudier, Systemhandlingar Förfrågningsunderlag, Bygghandling, Underlag för PREFAB, Relationshandlingar, Drift och Skötselinstruktioner, CE Märkning mm",
    icon: MapPin,
  },
  {
    title: "Konsultation",
    description:
      "Rådgivning och stöd i eltekniska frågor – från idé till färdig lösning.",
    icon: MessageSquare,
  },
  {
    title: "Projektledning",
    description:
      "Leder el- och byggprojekt med struktur, kvalitet och tidhållning i fokus.",
    icon: Briefcase,
  },
  {
    title: "Drift & Teknikstöd",
    description:
      "Support och rådgivning vid drift och tekniska utmaningar inom el och fastighet.",
    icon: Zap,
  },
  {
    title: "Byggledning & Idrifttagning",
    description:
      "Vi ser till att byggprojekt följer plan och att systemen fungerar vid uppstart.",
    icon: Building2,
  },
  {
    title: "Webbutveckling",
    description:
      "Vi skapar moderna, responsiva hemsidor – precis som den du tittar på just nu.",
    icon: Monitor,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-foreground animate-fade-in-up">
          Våra Tjänster
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group bg-card border-border hover:shadow-[var(--card-hover-shadow)] transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-block p-4 rounded-xl bg-accent/10">
                    <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

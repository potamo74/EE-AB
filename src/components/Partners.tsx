import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "SEFAB",
    url: "https://svensk-entreprenad.se",
    description:
      "Trygg leverantör som erbjuder helhetslösningar inom elinstallation, projektledning och besiktningar",
  },
  {
    name: "Vimmerbyhus",
    url: "https://www.vimmerbyhus.se",
    description: "Designar och bygger kundunika hem sedan 1955",
  },
  {
    name: "MA&RO",
    url: "https://partner2.se",
    description: "Professionell partner inom bygg och anläggning",
  },
  {
    name: "Fridhems EL",
    url: "https://www.fridhemsel.se",
    description:
      "Utför felsökningar, service, reparationer, ombyggnationer, nyinstallationer, rotarbeten och mycket mer!",
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-foreground animate-fade-in-up">
          Samarbetspartners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group bg-background border-border hover:shadow-[var(--card-hover-shadow)] transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center min-h-[280px] flex flex-col justify-center">
                <h4 className="text-2xl font-semibold mb-4">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors duration-200"
                  >
                    {partner.name}
                  </a>
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

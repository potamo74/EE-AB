import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(45, 42, 36, 0.95) 0%, rgba(45, 42, 36, 0.85) 100%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Välkommen till
            <br />
            <span className="font-light text-4xl md:text-6xl lg:text-7xl">
              Elkonsulten i Eskilstuna AB
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
            Din partner inom elbesiktning, projektering och konsultation
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            Kontakta oss
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

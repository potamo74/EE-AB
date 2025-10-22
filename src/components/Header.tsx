import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img src="/EE-AB-vit.png" alt="Elkonsulten Eskilstuna AB" className="h-8 w-auto" />
          </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: "Hem", id: "home" },
              { label: "Tjänster", id: "services" },
              { label: "Partners", id: "partners" },
              { label: "Kontakt", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

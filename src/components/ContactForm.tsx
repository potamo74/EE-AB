import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  useEffect(() => {
    // Load the form handling script
    const script = document.createElement("script");
    script.src = "/main.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-foreground animate-fade-in-up">
          Kontakta oss
        </h2>
        <div className="max-w-2xl mx-auto">
          <form
            id="contactForm"
            action="https://formsubmit.co/ajax/info@elkonsulteneskilstuna.se"
            method="POST"
            className="space-y-6 animate-scale-in"
          >
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Ditt namn"
                required
                className="h-12 text-base bg-card border-border"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Din e-post"
                required
                className="h-12 text-base bg-card border-border"
              />
            </div>
            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Telefon (valfritt)"
                className="h-12 text-base bg-card border-border"
              />
            </div>
            <div>
              <Textarea
                name="message"
                rows={6}
                placeholder="Ditt meddelande"
                required
                className="text-base bg-card border-border resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-medium transition-all duration-300 hover:scale-[1.02]"
            >
              Skicka
            </Button>

            {/* Hidden fields */}
            <input
              type="hidden"
              name="_subject"
              value="Kontakt från hemsidan"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

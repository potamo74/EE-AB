import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

import { MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo Badge */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="TopoAgro"
              className="h-24 md:h-32 drop-shadow-2xl"
            />
          </div>

          {/* H1 - Company Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            TopoAgro
          </h1>

          {/* H2 - Description */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-4 max-w-3xl mx-auto">
            Especialistas em topografia, georreferenciamento e agrimensura para imóveis rurais e urbanos
          </h2>

          {/* Slogan */}
          <p className="text-lg md:text-xl text-primary font-bold mb-8 tracking-wide">
            Serviço top é TopoAgro, sempre ao lado do homem do campo.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-white/80 mb-10">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Frutal - MG e região</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5534996406868"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Solicitar orçamento
            </a>
            <button
              onClick={() => scrollToSection("#servicos")}
              className="btn-hero-outline"
            >
              Conheça nossos serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

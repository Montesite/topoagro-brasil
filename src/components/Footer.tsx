import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-foreground text-white">
      <div className="container-custom section-padding pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <img
              src="/logo.png"
              alt="TopoAgro"
              className="h-12 sm:h-14 md:h-16 mb-3 sm:mb-4"
            />
            <p className="text-white/70 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Serviço top é TopoAgro, sempre ao lado do homem do campo.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.instagram.com/topoagrofrutal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da TopoAgro"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.facebook.com/topoagrofrutal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da TopoAgro"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Links rápidos</h4>
            <nav className="space-y-1.5 sm:space-y-2">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "Sobre nós" },
                { href: "#servicos", label: "Serviços" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-white/70 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Serviços</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-white/70 text-sm sm:text-base">
              <li>Georreferenciamento</li>
              <li>CAR - Reserva legal</li>
              <li>Levantamentos</li>
              <li>Mapeamento com drones</li>
              <li>Topografia geral</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contato</h4>
            <div className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
              <a
                href="tel:+553434239185"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                (34) 3423-9185
              </a>
              <a
                href="https://wa.me/5534996406868"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                (34) 99640-6868
              </a>
              <a
                href="mailto:topoagro.adm@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">topoagro.adm@gmail.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Praça da Bandeira, nº 27
                  <br />
                  XV de Novembro - Frutal/MG
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm">
            © {currentYear} TopoAgro. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs mt-1.5 sm:mt-2">
            CNPJ: 21.673.953/0001-90
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

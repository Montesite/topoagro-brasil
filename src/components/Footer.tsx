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
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/logo.png"
              alt="TopoAgro"
              className="h-16 mb-4"
            />
            <p className="text-white/70 leading-relaxed mb-4">
              Serviço top é TopoAgro, sempre ao lado do homem do campo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/topoagrofrutal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da TopoAgro"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/topoagrofrutal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da TopoAgro"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links rápidos</h4>
            <nav className="space-y-2">
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
                  className="block text-white/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/70">
              <li>Georreferenciamento</li>
              <li>CAR - Reserva legal</li>
              <li>Levantamentos</li>
              <li>Mapeamento com drones</li>
              <li>Topografia geral</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-white/70">
              <a
                href="tel:+553434239185"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (34) 3423-9185
              </a>
              <a
                href="https://wa.me/5534996406868"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (34) 99640-6868
              </a>
              <a
                href="mailto:topoagro.adm@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                topoagro.adm@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
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
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} TopoAgro. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs mt-2">
            CNPJ: 21.673.953/0001-90
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

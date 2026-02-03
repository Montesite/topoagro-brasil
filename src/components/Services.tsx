import {
  MapPin,
  FileText,
  Compass,
  Mountain,
  Layers,
  Building,
  Plane,
  BarChart3,
  TreePine,
  Repeat,
  Phone,
} from "lucide-react";
import surveyorImage from "@/assets/surveyor-work.jpg";
import droneImage from "@/assets/drone-mapping.jpg";
import gpsImage from "@/assets/gps-equipment.jpg";
import teamImage from "@/assets/team-work.jpg";
import digitalMapImage from "@/assets/digital-map.jpg";
import droneFlightImage from "@/assets/drone-flight.jpg";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Georreferenciamento de imóveis rurais",
      description:
        "Certificação de imóveis rurais junto ao INCRA com precisão e agilidade.",
    },
    {
      icon: TreePine,
      title: "CAR - Averbação de reserva legal",
      description:
        "Cadastro ambiental rural e averbação de reserva legal conforme legislação.",
    },
    {
      icon: Building,
      title: "Georreferenciamento urbano",
      description:
        "Levantamentos precisos para regularização de imóveis urbanos.",
    },
    {
      icon: FileText,
      title: "Consultoria de compra e venda",
      description:
        "Assessoria completa para transações de imóveis rurais com segurança.",
    },
    {
      icon: Compass,
      title: "Levantamento cadastral",
      description:
        "Mapeamento detalhado de propriedades para fins cadastrais e documentais.",
    },
    {
      icon: Mountain,
      title: "Levantamento planialtimétrico",
      description:
        "Determinação de altimetria e planimetria com alta precisão técnica.",
    },
    {
      icon: Layers,
      title: "Curva de nível",
      description:
        "Elaboração de curvas de nível para projetos agrícolas e de irrigação.",
    },
    {
      icon: Repeat,
      title: "Retificação e desmembramento",
      description:
        "Correção de áreas e divisão de propriedades rurais e urbanas.",
    },
    {
      icon: BarChart3,
      title: "Inventário e partilha de glebas",
      description:
        "Levantamentos para processos de inventário e partilha de terras.",
    },
    {
      icon: Plane,
      title: "Mapeamento com drones",
      description:
        "Aerofotogrametria e mapeamento aéreo com tecnologia de ponta.",
    },
  ];

  const additionalServices = [
    "Conferência de compra e venda",
    "Loteamentos urbanos e rurais",
    "Projetos para divisão de pastos",
    "Confinamentos",
    "Topografia em geral",
  ];

  const galleryImages = [
    {
      src: surveyorImage,
      alt: "Profissional de topografia utilizando equipamento de medição em campo",
      title: "Trabalho em campo",
    },
    {
      src: droneImage,
      alt: "Vista aérea de propriedade rural com demarcação de limites",
      title: "Mapeamento aéreo",
    },
    {
      src: gpsImage,
      alt: "Equipamento GPS de precisão para levantamento topográfico",
      title: "Equipamentos de precisão",
    },
    {
      src: teamImage,
      alt: "Equipe de topógrafos trabalhando em campo",
      title: "Equipe profissional",
    },
    {
      src: digitalMapImage,
      alt: "Mapa digital topográfico em tablet mostrando curvas de nível",
      title: "Tecnologia digital",
    },
    {
      src: droneFlightImage,
      alt: "Drone profissional em voo para mapeamento aéreo",
      title: "Mapeamento com drones",
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Soluções completas em topografia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma ampla gama de serviços para atender todas as necessidades
            de topografia e agrimensura na área rural e urbana.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-primary-foreground font-bold text-lg p-6">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 card-hover group"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-secondary rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-secondary-foreground mb-6 text-center">
            Também realizamos
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalServices.map((service, index) => (
              <span
                key={index}
                className="bg-white/20 text-secondary-foreground px-5 py-2.5 rounded-full font-medium text-sm backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 text-lg">
            Precisa de um serviço personalizado? Entre em contato conosco!
          </p>
          <a
            href="https://wa.me/5534996406868"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

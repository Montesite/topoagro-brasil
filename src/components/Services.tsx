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
import { motion } from "framer-motion";
import surveyorImage from "@/assets/surveyor-work.jpg";
import droneImage from "@/assets/drone-mapping.jpg";
import gpsImage from "@/assets/gps-equipment.jpg";
import teamImage from "@/assets/team-work.jpg";
import digitalMapImage from "@/assets/digital-map.jpg";
import droneFlightImage from "@/assets/drone-flight.jpg";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Georreferenciamento de imóveis rurais",
      description:
        "Certificação de imóveis rurais junto ao INCRA com precisão e agilidade.",
      image: surveyorImage,
    },
    {
      icon: TreePine,
      title: "CAR - Averbação de reserva legal",
      description:
        "Cadastro ambiental rural e averbação de reserva legal conforme legislação.",
      image: droneImage,
    },
    {
      icon: Building,
      title: "Georreferenciamento urbano",
      description:
        "Levantamentos precisos para regularização de imóveis urbanos.",
      image: gpsImage,
    },
    {
      icon: FileText,
      title: "Consultoria de compra e venda",
      description:
        "Assessoria completa para transações de imóveis rurais com segurança.",
      image: teamImage,
    },
    {
      icon: Compass,
      title: "Levantamento cadastral",
      description:
        "Mapeamento detalhado de propriedades para fins cadastrais e documentais.",
      image: digitalMapImage,
    },
    {
      icon: Mountain,
      title: "Levantamento planialtimétrico",
      description:
        "Determinação de altimetria e planimetria com alta precisão técnica.",
      image: surveyorImage,
    },
    {
      icon: Layers,
      title: "Curva de nível",
      description:
        "Elaboração de curvas de nível para projetos agrícolas e de irrigação.",
      image: digitalMapImage,
    },
    {
      icon: Repeat,
      title: "Retificação e desmembramento",
      description:
        "Correção de áreas e divisão de propriedades rurais e urbanas.",
      image: gpsImage,
    },
    {
      icon: BarChart3,
      title: "Inventário e partilha de glebas",
      description:
        "Levantamentos para processos de inventário e partilha de terras.",
      image: teamImage,
    },
    {
      icon: Plane,
      title: "Mapeamento com drones",
      description:
        "Aerofotogrametria e mapeamento aéreo com tecnologia de ponta.",
      image: droneFlightImage,
    },
  ];

  const additionalServices = [
    "Conferência de compra e venda",
    "Loteamentos urbanos e rurais",
    "Projetos para divisão de pastos",
    "Confinamentos",
    "Topografia em geral",
  ];

  return (
    <section id="servicos" className="section-padding bg-muted overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
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
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-1 bg-primary mx-auto rounded-full mt-6 origin-center"
          />
        </AnimatedSection>

        {/* Main Services Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12" staggerDelay={0.08}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden h-full group"
              >
                {/* Service Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-3 left-3 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                </div>
                
                {/* Service Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional Services */}
        <AnimatedSection>
          <div className="bg-secondary rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-6 text-center">
              Também realizamos
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalServices.map((service, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/20 text-secondary-foreground px-5 py-2.5 rounded-full font-medium text-sm backdrop-blur-sm cursor-default"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12">
          <p className="text-muted-foreground mb-6 text-lg">
            Precisa de um serviço personalizado? Entre em contato conosco!
          </p>
          <motion.a
            href="https://wa.me/5534996406868"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5" />
            Solicitar orçamento
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;

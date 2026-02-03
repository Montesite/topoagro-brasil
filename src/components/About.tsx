import { Award, Users, Target, Shield, Leaf, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import officeImage from "@/assets/office.webp";
import { AnimatedSection, StaggerContainer, StaggerItem, CountUp } from "@/components/ui/animations";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Compromisso com o cliente",
      description: "Foco total na satisfação do produtor rural e proprietários de terras",
    },
    {
      icon: Target,
      title: "Precisão técnica",
      description: "Excelência em cada levantamento com equipamentos de última geração",
    },
    {
      icon: Shield,
      title: "Ética e transparência",
      description: "Responsabilidade profissional em todos os projetos",
    },
    {
      icon: Leaf,
      title: "Respeito ao meio ambiente",
      description: "Compromisso com a legislação vigente e sustentabilidade",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-white overflow-hidden">
      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Sobre nós
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
            Conheça a TopoAgro
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-1 bg-primary mx-auto rounded-full origin-left"
          />
        </AnimatedSection>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <AnimatedSection direction="left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Desde 2008 atuando com excelência
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">TopoAgro</strong> é uma empresa no ramo de topografia
                que está desde 2008 no mercado, atuando na cidade de Frutal e região. Nossa equipe é
                formada por um corpo técnico composto de profissionais com registro no CREA, CFT e CFTA
                e credenciados pelo INCRA.
              </p>
              <p>
                Sob a responsabilidade do empresário e agrimensor <strong className="text-foreground">Reinaldo
                Nunes "Gabiru"</strong>, que desde 2004 vem atuando na área, a empresa é referência no segmento
                e conta com experiência e atualização constante de conhecimentos.
              </p>
              <p>
                Trabalhamos com tecnologias avançadas e um serviço com altíssima qualidade e maior precisão,
                agindo sempre com respeito ao meio ambiente, colaboradores e clientes.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={officeImage}
                alt="Escritório da TopoAgro em Frutal - MG"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Mission, Vision, Values */}
        <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16" staggerDelay={0.15}>
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-muted rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6"
              >
                <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Missão</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Prestar serviços de topografia, agrimensura e georreferenciamento com precisão técnica,
                responsabilidade e confiabilidade, atendendo projetos rurais e urbanos com foco em
                segurança, regularização e desenvolvimento sustentável.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full sm:col-span-2 md:col-span-1"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6"
              >
                <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-secondary-foreground" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-secondary-foreground mb-3 sm:mb-4">Visão</h3>
              <p className="text-sm sm:text-base text-secondary-foreground/90 leading-relaxed">
                Ser reconhecida como empresa referência em topografia e geotecnologias, destacando-se
                pela qualidade dos serviços, inovação tecnológica e proximidade com produtores rurais,
                empresas e proprietários de terras.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-muted rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6"
              >
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Valores</h3>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                {[
                  "Compromisso com o cliente",
                  "Precisão e excelência técnica",
                  "Ética e transparência",
                  "Inovação tecnológica",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Values Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6" staggerDelay={0.1}>
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                >
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </motion.div>
                <h4 className="font-bold text-sm sm:text-base text-foreground mb-1 sm:mb-2">{value.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;

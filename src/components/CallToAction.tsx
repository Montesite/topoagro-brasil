import { motion } from "framer-motion";
import droneImage from "@/assets/drone-mapping.jpg";
import { AnimatedSection, CountUp } from "@/components/ui/animations";

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${droneImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <AnimatedSection direction="left">
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
              Tecnologia de ponta
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6">
              Precisão que faz a diferença no seu projeto
            </h2>
            <p className="text-primary-foreground/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
              Utilizamos equipamentos de última geração, incluindo drones para mapeamento aéreo, 
              GPS de alta precisão e softwares especializados para garantir resultados 
              confiáveis em todos os nossos levantamentos.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: 18, suffix: "+", label: "Anos de experiência" },
              { text: "CREA", label: "Profissionais registrados" },
              { text: "INCRA", label: "Credenciamento" },
              { value: 100, suffix: "%", label: "Comprometimento" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value ? (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </div>
                <div className="text-primary-foreground/80 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

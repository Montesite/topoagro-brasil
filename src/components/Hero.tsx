import { MapPin, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 md:px-8 lg:px-12 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Logo Badge - smaller size */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 flex justify-center">
            <motion.img
              src="/logo.png"
              alt="Topoagro"
              className="h-28 sm:h-36 md:h-44 lg:h-52 xl:h-60 drop-shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* H1 - Company Name (hidden visually for SEO but present in DOM) */}
          <h1 className="sr-only">Topoagro</h1>

          {/* H2 - Description */}
          <motion.h2
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 font-medium mb-3 sm:mb-4 max-w-3xl mx-auto px-2"
          >
            Especialistas em topografia, consultoria ambiental, georreferenciamento e agrimensura em geral
          </motion.h2>

          {/* Slogan */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-primary font-bold mb-6 sm:mb-8 tracking-wide px-2"
          >
            Serviço top é Topoagro, sempre ao lado do homem do campo.
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-white/80 mb-8 sm:mb-10"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base md:text-lg">Frutal - MG e região</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <motion.a
              href="https://wa.me/5534996406868"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              Solicitar orçamento
            </motion.a>
            <motion.button
              onClick={() => scrollToSection("#servicos")}
              className="btn-hero-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Conheça nossos serviços
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

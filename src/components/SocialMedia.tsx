import { Instagram, Facebook, Users } from "lucide-react";
import { motion } from "framer-motion";
import teamImage from "@/assets/team-work.jpg";
import { AnimatedSection } from "@/components/ui/animations";

const SocialMedia = () => {
  const socials = [
    {
      name: "Instagram",
      handle: "@topoagrofrutal",
      url: "https://www.instagram.com/topoagrofrutal/",
      icon: Instagram,
      gradient: "from-instagram-from to-instagram-to",
      description: "Acompanhe nossos projetos, bastidores e novidades do dia a dia.",
    },
    {
      name: "Facebook",
      handle: "Topoagro Frutal",
      url: "https://www.facebook.com/topoagrofrutal",
      icon: Facebook,
      gradient: "from-facebook to-facebook",
      description: "Curta nossa página e fique por dentro das atualizações.",
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Image Side */}
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={teamImage}
                alt="Equipe Topoagro trabalhando em campo"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection direction="right" className="order-1 lg:order-2">
            {/* Section Header */}
            <div className="mb-6 sm:mb-8 md:mb-10">
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Redes sociais
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
                Siga a Topoagro
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                Acompanhe nosso trabalho e fique por dentro das novidades do mundo da topografia e agrimensura.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-20 h-1 bg-primary rounded-full mt-6 origin-left"
              />
            </div>

            {/* Social Cards */}
            <div className="space-y-3 sm:space-y-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  className="group bg-muted rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 flex items-center gap-3 sm:gap-4 md:gap-5 block"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <social.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
                  </motion.div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-0.5 sm:mb-1">
                      {social.name}
                    </h3>
                    <p className="text-primary font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{social.handle}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm hidden sm:block">
                      {social.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Hashtag */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-8"
            >
              <p className="text-muted-foreground text-sm sm:text-base">
                Compartilhe usando{" "}
                <span className="text-primary font-bold text-base sm:text-lg">#Topoagro</span>
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;

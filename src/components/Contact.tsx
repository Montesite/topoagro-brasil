import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animations";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      content: (
        <div className="space-y-1">
          <a
            href="tel:+553434239185"
            className="block hover:text-primary transition-colors"
          >
            (34) 3423-9185
          </a>
          <a
            href="https://wa.me/5534996406868"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-primary transition-colors"
          >
            (34) 99640-6868
          </a>
        </div>
      ),
    },
    {
      icon: Mail,
      title: "E-mail",
      content: (
        <a
          href="mailto:topoagro.adm@gmail.com"
          className="hover:text-primary transition-colors"
        >
          topoagro.adm@gmail.com
        </a>
      ),
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: (
        <address className="not-italic">
          Praça da Bandeira, nº 27
          <br />
          Bairro: XV de Novembro
          <br />
          Frutal - MG
        </address>
      ),
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: (
        <div>
          <p>Segunda a sexta: 07:30 às 18:00</p>
          <p className="text-sm text-muted-foreground">
            (Fechado para almoço das 11:30 às 12:30)
          </p>
          <p className="mt-1">Sábado e domingo: Fechado</p>
        </div>
      ),
    },
  ];

  return (
    <section id="contato" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Fale conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Entre em contato para solicitar um orçamento ou tirar suas dúvidas.
            Estamos sempre prontos para atendê-lo.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-1 bg-primary mx-auto rounded-full mt-6 origin-center"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="flex gap-4 p-6 bg-muted rounded-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <div className="text-muted-foreground">{info.content}</div>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="https://www.instagram.com/topoagrofrutal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da TopoAgro"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-br from-instagram-from to-instagram-to rounded-lg flex items-center justify-center text-primary-foreground"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/topoagrofrutal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da TopoAgro"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-facebook rounded-lg flex items-center justify-center text-primary-foreground"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </AnimatedSection>

          {/* CTA Card */}
          <AnimatedSection direction="right">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-10 text-white h-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Entre em contato conosco pelo WhatsApp e receba um atendimento
                personalizado. Nossos profissionais estão prontos para oferecer a
                melhor solução para sua necessidade.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/5534996406868"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-primary font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 text-lg block"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chamar no WhatsApp
                </motion.a>

                <motion.a
                  href="tel:+553434239185"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/20 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 text-lg border border-white/40 block"
                >
                  <Phone className="w-6 h-6" />
                  Ligar agora
                </motion.a>
              </div>

              {/* Company Info */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm">
                  <strong>CNPJ:</strong> 21.673.953/0001-90
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;

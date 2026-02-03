import { Instagram, Facebook, Users } from "lucide-react";

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
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Redes sociais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Siga a TopoAgro
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Acompanhe nosso trabalho e fique por dentro das novidades do mundo da topografia e agrimensura.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 card-hover flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <social.icon className="w-10 h-10 text-primary-foreground" />
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {social.name}
              </h3>
              <p className="text-primary font-semibold mb-3">{social.handle}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {social.description}
              </p>

              {/* CTA */}
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                <Users className="w-5 h-5" />
                Seguir agora
              </span>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Compartilhe suas experiências conosco usando{" "}
            <span className="text-primary font-semibold">#TopoAgro</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;

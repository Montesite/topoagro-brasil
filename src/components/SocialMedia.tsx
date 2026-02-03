import { Instagram, Facebook, Users } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";

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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teamImage}
                alt="Equipe TopoAgro trabalhando em campo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            {/* Section Header */}
            <div className="mb-10">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Redes sociais
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                Siga a TopoAgro
              </h2>
              <p className="text-muted-foreground text-lg">
                Acompanhe nosso trabalho e fique por dentro das novidades do mundo da topografia e agrimensura.
              </p>
              <div className="w-20 h-1 bg-primary rounded-full mt-6" />
            </div>

            {/* Social Cards */}
            <div className="space-y-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-muted rounded-xl p-6 card-hover flex items-center gap-5"
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <social.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {social.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-1">{social.handle}</p>
                    <p className="text-muted-foreground text-sm">
                      {social.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Users className="w-6 h-6" />
                  </div>
                </a>
              ))}
            </div>

            {/* Hashtag */}
            <div className="mt-8">
              <p className="text-muted-foreground">
                Compartilhe usando{" "}
                <span className="text-primary font-bold text-lg">#TopoAgro</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;

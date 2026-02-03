import { Award, Users, Target, Shield, Leaf, CheckCircle } from "lucide-react";

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
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Sobre nós
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Conheça a TopoAgro
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Desde 2008 atuando com excelência
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
          </div>

          <div className="animate-fade-in-right">
            <div className="bg-accent rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">18+</div>
                  <div className="text-muted-foreground font-medium">Anos de experiência</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">CREA</div>
                  <div className="text-muted-foreground font-medium">Profissionais registrados</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">INCRA</div>
                  <div className="text-muted-foreground font-medium">Credenciamento oficial</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground font-medium">Comprometimento</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-muted rounded-2xl p-8 card-hover">
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Prestar serviços de topografia, agrimensura e georreferenciamento com precisão técnica,
              responsabilidade e confiabilidade, atendendo projetos rurais e urbanos com foco em
              segurança, regularização e desenvolvimento sustentável.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-8 card-hover">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-secondary-foreground mb-4">Visão</h3>
            <p className="text-secondary-foreground/90 leading-relaxed">
              Ser reconhecida como empresa referência em topografia e geotecnologias, destacando-se
              pela qualidade dos serviços, inovação tecnológica e proximidade com produtores rurais,
              empresas e proprietários de terras.
            </p>
          </div>

          <div className="bg-muted rounded-2xl p-8 card-hover">
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Valores</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                Compromisso com o cliente
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                Precisão e excelência técnica
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                Ética e transparência
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                Inovação tecnológica
              </li>
            </ul>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-xl p-6 text-center card-hover"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

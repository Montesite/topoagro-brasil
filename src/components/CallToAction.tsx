import droneImage from "@/assets/drone-mapping.jpg";

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
      <div className="relative z-10 container-custom px-4 md:px-8">
        <div className="max-w-3xl">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Tecnologia de ponta
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Precisão que faz a diferença no seu projeto
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-8">
            Utilizamos equipamentos de última geração, incluindo drones para mapeamento aéreo, 
            GPS de alta precisão e softwares especializados para garantir resultados 
            confiáveis em todos os nossos levantamentos.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">18+</div>
              <div className="text-primary-foreground/80 text-sm">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">CREA</div>
              <div className="text-primary-foreground/80 text-sm">Profissionais registrados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">INCRA</div>
              <div className="text-primary-foreground/80 text-sm">Credenciamento</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-primary-foreground/80 text-sm">Comprometimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

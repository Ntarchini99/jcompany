export type Lang = 'en' | 'es' | 'pt';

export const en = {
  navbar: {
    services: 'Services',
    model: 'Model',
    process: 'Process',
    cases: 'Case Studies',
    cta: 'Book a call',
  },
  hero: {
    badge: 'Software engineering boutique',
    title1: 'Technical execution.',
    title2: 'Strategic vision.',
    description:
      'We are Jerez Consulting & Dev: a tech partner that doesn’t just write code. We design, build and scale the software that moves your business — with business judgment behind every technical decision.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'Explore the model',
    scroll: 'Scroll',
    stats: [
      { value: '12+', label: 'years of combined experience' },
      { value: '40+', label: 'products shipped to production' },
      { value: '98%', label: 'of clients come back to us' },
    ],
  },
  services: {
    tag: 'Services',
    titleA: 'Everything your product needs,',
    titleB: 'in a single team.',
    items: [
      {
        title: 'Consultative Software Factory',
        description:
          'We build digital products end to end: discovery, design, development and continuous iteration, with senior teams integrated into your operation.',
        tags: ['Web & Mobile', 'APIs & Cloud', 'Integrations'],
      },
      {
        title: 'Strategic CTO Advisory',
        description:
          'We define your technology roadmap, the right stack and the architecture that supports your growth — no over-engineering or unnecessary debt.',
        tags: ['Roadmap', 'Architecture', 'Due Diligence'],
      },
      {
        title: 'MVP & Product Launch',
        description:
          'From idea to market in weeks: we validate, prototype and launch scalable products you can measure from day one.',
        tags: ['Discovery Sprint', 'Prototype', 'Go-to-market'],
      },
      {
        title: 'Audit & Hardening',
        description:
          'We assess the state of your systems — security, performance, code quality and technical debt — with a prioritized action plan.',
        tags: ['Security Review', 'Performance', 'DevOps'],
      },
      {
        title: 'Dedicated Teams',
        description:
          'Squads of engineers, designers and QA that integrate into your workflow with transparent methodology and weekly deliveries.',
        tags: ['Staff Augmentation', 'Squads', 'Agile'],
      },
      {
        title: 'Continuous Optimization',
        description:
          'Monitoring, metrics and iterative improvement for live products: we turn usage data into product decisions.',
        tags: ['Analytics', 'SRE', 'A/B Testing'],
      },
    ],
  },
  model: {
    tag: 'The model',
    titleA: 'More than a software factory.',
    titleB: 'A tech partner.',
    paragraph:
      'Traditional software factories deliver development hours. Strategic consultancies deliver slide decks. We operate where both meet: we execute with elite engineering standards while thinking about the product as partners in your business.',
    pillars: [
      {
        step: '01',
        title: 'Execution with judgment',
        description:
          'We don’t just implement what we’re asked: we question, propose and build the right version of the product.',
      },
      {
        step: '02',
        title: 'Boutique closeness',
        description:
          'Small, senior teams. Direct contact with the people who decide and the people who write the code — no layers of intermediation.',
      },
      {
        step: '03',
        title: 'Skin in the game',
        description:
          'We care that the product works in the real world: we measure business impact, not just deliveries.',
      },
    ],
    commitmentLabel: 'Our commitment to you',
    quote:
      '“Every line of code we deliver must be justified by a business goal. If it doesn’t move the needle, we don’t build it.”',
    founderName: 'Jerez',
    founderRole: 'CEO and Founder',
    statA: { value: 'Weeks', label: 'to a first MVP in production' },
    statB: { value: '100%', label: 'seniority on every assigned squad' },
  },
  process: {
    tag: 'Process',
    titleA: 'A clear method,',
    titleB: 'no surprises.',
    steps: [
      {
        phase: 'Discover',
        title: 'Strategic discovery',
        description:
          'We understand the business, the users and the real constraints. We define scope, risks and success metrics before writing a single line.',
      },
      {
        phase: 'Design',
        title: 'Architecture & prototype',
        description:
          'We choose the right stack, design the architecture and validate with clickable prototypes in short cycles.',
      },
      {
        phase: 'Build',
        title: 'Sprint-based development',
        description:
          'Functional deliveries every two weeks, continuous demos and quality guaranteed with testing, CI/CD and code reviews.',
      },
      {
        phase: 'Scale',
        title: 'Launch & evolution',
        description:
          'Controlled production rollout, full observability and a continuous improvement cycle based on real usage data.',
      },
    ],
  },
  cases: {
    tag: 'Case Studies',
    titleA: 'Results that',
    titleB: 'speak for themselves.',
    intro:
      'We work with startups, scale-ups and established companies. Every project ends with a live product and a stronger internal team.',
    items: [
      {
        industry: 'Fintech',
        title: 'B2B payments platform',
        result:
          '60% reduction in reconciliation time after migrating to an event-driven architecture.',
        metric: '-60%',
        metricLabel: 'reconciliation time',
      },
      {
        industry: 'Retail',
        title: 'Headless e-commerce',
        result:
          'Migration to headless commerce with a sustained increase in conversion and daily deployments.',
        metric: '+34%',
        metricLabel: 'conversion',
      },
      {
        industry: 'Health',
        title: 'Digital medical records',
        result: 'Certified interoperable system, used by 200+ clinics across 3 countries.',
        metric: '200+',
        metricLabel: 'active clinics',
      },
    ],
    quote:
      '“They’re not just another vendor: they understand the business as well as we do. They made decisions that saved us months of development.”',
    attribution: 'COO — Grupo Logistiq',
  },
  contact: {
    tag: 'Contact',
    title: 'Let’s talk about your next product.',
    description:
      'Tell us what you want to build. Within 24 hours we’ll get back to you with a first read and the next steps.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    messageLabel: 'What do you want to build?',
    messagePlaceholder: 'Tell us about your project, timeline and goals...',
    submit: 'Send message',
    note: 'We reply within 24 business hours.',
    successTitle: 'Message received, {name}.',
    successBody: 'We’ll be in touch very soon at {email}.',
    sendAnother: 'Send another message',
  },
  footer: {
    description:
      'Software engineering boutique. Technical execution and strategic advisory for products that matter.',
    rights: 'All rights reserved.',
    made: 'Built with engineering judgment',
  },
};

export type Dict = typeof en;

const es: Dict = {
  navbar: {
    services: 'Servicios',
    model: 'El Modelo',
    process: 'Proceso',
    cases: 'Case Studies',
    cta: 'Agendar llamada',
  },
  hero: {
    badge: 'Boutique de ingeniería de software',
    title1: 'Ejecución técnica.',
    title2: 'Visión estratégica.',
    description:
      'Somos Jerez Consulting & Dev: un tech partner que no solo escribe código. Diseñamos, construimos y escalamos el software que mueve tu negocio, con criterio de negocio en cada decisión técnica.',
    ctaPrimary: 'Iniciar un proyecto',
    ctaSecondary: 'Conocer el modelo',
    scroll: 'Scroll',
    stats: [
      { value: '12+', label: 'años de experiencia combinada' },
      { value: '40+', label: 'productos lanzados a producción' },
      { value: '98%', label: 'de clientes repiten con nosotros' },
    ],
  },
  services: {
    tag: 'Servicios',
    titleA: 'Todo lo que tu producto necesita,',
    titleB: 'en un solo equipo.',
    items: [
      {
        title: 'Software Factory Consultiva',
        description:
          'Construimos productos digitales de principio a fin: discovery, diseño, desarrollo e iteración continua, con equipos senior integrados a tu operación.',
        tags: ['Web & Móvil', 'APIs & Cloud', 'Integraciones'],
      },
      {
        title: 'Asesoría Estratégica CTO',
        description:
          'Definimos la hoja de ruta tecnológica, el stack adecuado y la arquitectura que soporta tu crecimiento, sin sobre-ingeniería ni deuda innecesaria.',
        tags: ['Roadmap', 'Arquitectura', 'Due Diligence'],
      },
      {
        title: 'MVP & Product Launch',
        description:
          'De la idea al mercado en semanas: validamos, prototipamos y lanzamos productos escalables que se pueden medir desde el día uno.',
        tags: ['Discovery Sprint', 'Prototipo', 'Go-to-market'],
      },
      {
        title: 'Auditoría & Fortalecimiento',
        description:
          'Revisamos el estado de tus sistemas: seguridad, rendimiento, calidad de código y deuda técnica, con un plan de acción priorizado.',
        tags: ['Security Review', 'Performance', 'DevOps'],
      },
      {
        title: 'Equipos Dedicados',
        description:
          'Squads conformados por ingenieros, diseño y QA que se integran a tu flujo con metodología transparente y entregas semanales.',
        tags: ['Staff Augmentation', 'Squads', 'Agile'],
      },
      {
        title: 'Optimización Continua',
        description:
          'Monitoreo, métricas y mejora iterativa de productos vivos: convertimos datos de uso en decisiones de producto.',
        tags: ['Analytics', 'SRE', 'A/B Testing'],
      },
    ],
  },
  model: {
    tag: 'El modelo',
    titleA: 'Más que una software factory.',
    titleB: 'Un tech partner.',
    paragraph:
      'Las fábricas de software tradicionales entregan horas de desarrollo. Las consultoras estratégicas entregan presentaciones. Nosotros operamos donde se cruzan ambas: ejecutamos con estándar de ingeniería de élite y, al mismo tiempo, pensamos el producto como socios de tu negocio.',
    pillars: [
      {
        step: '01',
        title: 'Ejecución con criterio',
        description:
          'No solo implementamos lo que se nos pide: cuestionamos, proponemos y construimos la versión correcta del producto.',
      },
      {
        step: '02',
        title: 'Cercanía de boutique',
        description:
          'Equipos pequeños y senior. Trato directo con quien decide y con quien escribe el código, sin capas de intermediación.',
      },
      {
        step: '03',
        title: 'Skin in the game',
        description:
          'Nos importa que el producto funcione en el mundo real: medimos impacto de negocio, no solo entregas.',
      },
    ],
    commitmentLabel: 'Nuestro acuerdo contigo',
    quote:
      '“Cada línea de código que entregamos debe estar justificada por un objetivo de negocio. Si no lo mueve, no lo construimos.”',
    founderName: 'Jerez',
    founderRole: 'CEO and Founder',
    statA: { value: 'Semanas', label: 'para un primer MVP en producción' },
    statB: { value: '100%', label: 'seniority en cada squad asignado' },
  },
  process: {
    tag: 'Proceso',
    titleA: 'Un método claro,',
    titleB: 'sin sorpresas.',
    steps: [
      {
        phase: 'Descubrir',
        title: 'Discovery estratégico',
        description:
          'Entendemos el negocio, los usuarios y las restricciones reales. Definimos alcance, riesgos y métricas de éxito antes de escribir una línea.',
      },
      {
        phase: 'Diseñar',
        title: 'Arquitectura & prototipo',
        description:
          'Elegimos el stack correcto, diseñamos la arquitectura y validamos con prototipos navegables en ciclos cortos.',
      },
      {
        phase: 'Construir',
        title: 'Desarrollo en sprints',
        description:
          'Entregas funcionales cada dos semanas, demostraciones continuas y calidad garantizada con testing, CI/CD y revisiones de código.',
      },
      {
        phase: 'Escalar',
        title: 'Lanzamiento & evolución',
        description:
          'Salida a producción controlada, observabilidad completa y un ciclo de mejora continua basado en datos reales de uso.',
      },
    ],
  },
  cases: {
    tag: 'Case Studies',
    titleA: 'Resultados que',
    titleB: 'hablan por nosotros.',
    intro:
      'Trabajamos con startups, scale-ups y empresas establecidas. Cada proyecto termina con un producto vivo y un equipo interno más fuerte.',
    items: [
      {
        industry: 'Fintech',
        title: 'Plataforma de pagos B2B',
        result:
          'Reducción del 60% en tiempo de conciliación tras migrar a arquitectura orientada a eventos.',
        metric: '-60%',
        metricLabel: 'tiempo de conciliación',
      },
      {
        industry: 'Retail',
        title: 'E-commerce headless',
        result:
          'Migración a comercio headless con un aumento sostenido de conversión y despliegues diarios.',
        metric: '+34%',
        metricLabel: 'conversión',
      },
      {
        industry: 'Salud',
        title: 'Historia clínica digital',
        result: 'Sistema interoperable certificado, usado por más de 200 clínicas en 3 países.',
        metric: '200+',
        metricLabel: 'clínicas activas',
      },
    ],
    quote:
      '“No es un proveedor más: entienden el negocio tan bien como nosotros. Tomaron decisiones que nos ahorraron meses de desarrollo.”',
    attribution: 'COO — Grupo Logistiq',
  },
  contact: {
    tag: 'Contacto',
    title: 'Hablemos de tu próximo producto.',
    description:
      'Cuéntanos qué quieres construir. En menos de 24 horas te respondemos con una primera lectura y los próximos pasos.',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Email',
    emailPlaceholder: 'tu@empresa.com',
    messageLabel: '¿Qué quieres construir?',
    messagePlaceholder: 'Cuéntanos sobre tu proyecto, plazo y objetivos...',
    submit: 'Enviar mensaje',
    note: 'Respondemos en menos de 24 horas hábiles.',
    successTitle: 'Mensaje recibido, {name}.',
    successBody: 'Nos pondremos en contacto contigo muy pronto a la dirección {email}.',
    sendAnother: 'Enviar otro mensaje',
  },
  footer: {
    description:
      'Boutique de ingeniería de software. Ejecución técnica y asesoría estratégica para productos que importan.',
    rights: 'Todos los derechos reservados.',
    made: 'Hecho con criterio de ingeniería',
  },
};

const pt: Dict = {
  navbar: {
    services: 'Serviços',
    model: 'O Modelo',
    process: 'Processo',
    cases: 'Cases de Sucesso',
    cta: 'Agendar chamada',
  },
  hero: {
    badge: 'Boutique de engenharia de software',
    title1: 'Execução técnica.',
    title2: 'Visão estratégica.',
    description:
      'Somos a Jerez Consulting & Dev: um tech partner que não apenas escreve código. Projetamos, construímos e escalamos o software que move o seu negócio, com visão de negócio em cada decisão técnica.',
    ctaPrimary: 'Iniciar um projeto',
    ctaSecondary: 'Conhecer o modelo',
    scroll: 'Scroll',
    stats: [
      { value: '12+', label: 'anos de experiência combinada' },
      { value: '40+', label: 'produtos lançados em produção' },
      { value: '98%', label: 'dos clientes voltam a trabalhar conosco' },
    ],
  },
  services: {
    tag: 'Serviços',
    titleA: 'Tudo o que o seu produto precisa,',
    titleB: 'em um único time.',
    items: [
      {
        title: 'Fábrica de Software Consultiva',
        description:
          'Construímos produtos digitais de ponta a ponta: discovery, design, desenvolvimento e iteração contínua, com times sêniores integrados à sua operação.',
        tags: ['Web & Mobile', 'APIs & Cloud', 'Integrações'],
      },
      {
        title: 'Assessoria Estratégica de CTO',
        description:
          'Definimos o roadmap tecnológico, o stack adequado e a arquitetura que sustenta o seu crescimento, sem sobre-engenharia nem dívida técnica desnecessária.',
        tags: ['Roadmap', 'Arquitetura', 'Due Diligence'],
      },
      {
        title: 'MVP & Lançamento de Produto',
        description:
          'Da ideia ao mercado em semanas: validamos, prototipamos e lançamos produtos escaláveis que podem ser medidos desde o primeiro dia.',
        tags: ['Discovery Sprint', 'Protótipo', 'Go-to-market'],
      },
      {
        title: 'Auditoria & Fortalecimento',
        description:
          'Avaliamos o estado dos seus sistemas — segurança, performance, qualidade de código e dívida técnica — com um plano de ação priorizado.',
        tags: ['Security Review', 'Performance', 'DevOps'],
      },
      {
        title: 'Times Dedicados',
        description:
          'Squads de engenheiros, designers e QA que se integram ao seu fluxo com metodologia transparente e entregas semanais.',
        tags: ['Staff Augmentation', 'Squads', 'Agile'],
      },
      {
        title: 'Otimização Contínua',
        description:
          'Monitoramento, métricas e melhoria iterativa de produtos em produção: transformamos dados de uso em decisões de produto.',
        tags: ['Analytics', 'SRE', 'A/B Testing'],
      },
    ],
  },
  model: {
    tag: 'O modelo',
    titleA: 'Mais que uma fábrica de software.',
    titleB: 'Um tech partner.',
    paragraph:
      'As fábricas de software tradicionais entregam horas de desenvolvimento. As consultorias estratégicas entregam apresentações. Nós operamos onde as duas se encontram: executamos com padrão de engenharia de elite e, ao mesmo tempo, pensamos no produto como sócios do seu negócio.',
    pillars: [
      {
        step: '01',
        title: 'Execução com critério',
        description:
          'Não apenas implementamos o que nos pedem: questionamos, propomos e construímos a versão certa do produto.',
      },
      {
        step: '02',
        title: 'Proximidade de boutique',
        description:
          'Times pequenos e seniores. Contato direto com quem decide e com quem escreve o código, sem camadas de intermediação.',
      },
      {
        step: '03',
        title: 'Skin in the game',
        description:
          'Nos importa que o produto funcione no mundo real: medimos impacto no negócio, não apenas entregas.',
      },
    ],
    commitmentLabel: 'Nosso compromisso com você',
    quote:
      '“Cada linha de código que entregamos deve estar justificada por um objetivo de negócio. Se não move o ponteiro, não construímos.”',
    founderName: 'Jerez',
    founderRole: 'CEO and Founder',
    statA: { value: 'Semanas', label: 'para um primeiro MVP em produção' },
    statB: { value: '100%', label: 'seniority em cada squad atribuído' },
  },
  process: {
    tag: 'Processo',
    titleA: 'Um método claro,',
    titleB: 'sem surpresas.',
    steps: [
      {
        phase: 'Descobrir',
        title: 'Discovery estratégico',
        description:
          'Entendemos o negócio, os usuários e as restrições reais. Definimos escopo, riscos e métricas de sucesso antes de escrever uma linha.',
      },
      {
        phase: 'Desenhar',
        title: 'Arquitetura & protótipo',
        description:
          'Escolhemos o stack correto, desenhamos a arquitetura e validamos com protótipos navegáveis em ciclos curtos.',
      },
      {
        phase: 'Construir',
        title: 'Desenvolvimento em sprints',
        description:
          'Entregas funcionais a cada duas semanas, demonstrações contínuas e qualidade garantida com testes, CI/CD e revisões de código.',
      },
      {
        phase: 'Escalar',
        title: 'Lançamento & evolução',
        description:
          'Saída para produção controlada, observabilidade completa e um ciclo de melhoria contínua baseado em dados reais de uso.',
      },
    ],
  },
  cases: {
    tag: 'Cases de Sucesso',
    titleA: 'Resultados que',
    titleB: 'falam por nós.',
    intro:
      'Trabalhamos com startups, scale-ups e empresas estabelecidas. Cada projeto termina com um produto vivo e um time interno mais forte.',
    items: [
      {
        industry: 'Fintech',
        title: 'Plataforma de pagamentos B2B',
        result:
          'Redução de 60% no tempo de conciliação após migrar para uma arquitetura orientada a eventos.',
        metric: '-60%',
        metricLabel: 'tempo de conciliação',
      },
      {
        industry: 'Varejo',
        title: 'E-commerce headless',
        result:
          'Migração para comércio headless com aumento sustentado de conversão e deploys diários.',
        metric: '+34%',
        metricLabel: 'conversão',
      },
      {
        industry: 'Saúde',
        title: 'Prontuário eletrônico digital',
        result: 'Sistema interoperável certificado, usado por mais de 200 clínicas em 3 países.',
        metric: '200+',
        metricLabel: 'clínicas ativas',
      },
    ],
    quote:
      '“Não são mais um fornecedor: entendem o negócio tão bem quanto nós. Tomaram decisões que nos pouparam meses de desenvolvimento.”',
    attribution: 'COO — Grupo Logistiq',
  },
  contact: {
    tag: 'Contato',
    title: 'Vamos falar sobre o seu próximo produto.',
    description:
      'Conte-nos o que você quer construir. Em menos de 24 horas respondemos com uma primeira leitura e os próximos passos.',
    nameLabel: 'Nome',
    namePlaceholder: 'Seu nome',
    emailLabel: 'Email',
    emailPlaceholder: 'voce@empresa.com',
    messageLabel: 'O que você quer construir?',
    messagePlaceholder: 'Conte-nos sobre o seu projeto, prazo e objetivos...',
    submit: 'Enviar mensagem',
    note: 'Respondemos em menos de 24 horas úteis.',
    successTitle: 'Mensagem recebida, {name}.',
    successBody: 'Entraremos em contato muito em breve pelo e-mail {email}.',
    sendAnother: 'Enviar outra mensagem',
  },
  footer: {
    description:
      'Boutique de engenharia de software. Execução técnica e assessoria estratégica para produtos que importam.',
    rights: 'Todos os direitos reservados.',
    made: 'Feito com critério de engenharia',
  },
};

export const translations: Record<Lang, Dict> = { en, es, pt };

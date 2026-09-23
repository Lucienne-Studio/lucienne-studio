export interface Project {
  slug: string;
  title: string;
  metadata: string[];
  description: string;

  mainMedia: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    poster?: string;
  };

  desktopVideoSrc: string;
  mobileVideoSrc: string;
  liveSite?: string;
}

export const projects: Project[] = [
  {
    slug: 'monte-pia',

    title: 'MONTE\nPIA',

    metadata: [
      'MONTE PIA',
      '2026',
      'WEB DEV',
      'WEB DESIGN',
    ],

    description: "Monte Pia is a Franco-Italian lifestyle brand created for a client, spanning brand identity, apparel, and a complete ecommerce experience. The creative direction draws from the understated elegance of the European Riviera — the timeless atmosphere of 1960s country clubs on the French Riviera and Lake Como, interpreted through a contemporary lens. I developed the Monte Pia identity and designed the full range of garments and canvas totes, creating a visual language that feels refined without becoming nostalgic or overly referential. The logo was designed to communicate the brand's Franco-Italian pedigree without becoming caricatured — distinctive, memorable, and carrying a quiet sense of gravitas. The ecommerce experience follows the same philosophy: minimalist and deliberately restrained, allowing crisp product imagery, considered typography, and generous space to do the talking. The result is an identity that could feel perfectly at home at a country club on Lake Como in the 1960s, while remaining completely natural and modern today. The store was built from the ground up with Next.js, Tailwind CSS, Stripe, and Sanity, delivering a complete ecommerce system across the storefront, product catalogue, content management, checkout, payments, and fulfilment infrastructure.",

    mainMedia: {
      type: 'video',
      src: '/vids/montetab.mp4',
      poster: '/imgs/monte-pia-hero.jpg',
      alt: 'MONTE PIA project',
    },

    desktopVideoSrc: '/vids/montedeskret.mp4',

    mobileVideoSrc: '/vids/montehandy.mp4',
    liveSite: 'https://ymjr-paris.myshopify.com/',
  },

  {
    slug: 'monolith-studios',

    title: 'MONOTLITH\nSTUDIOS',

    metadata: [
      'MONOLITH STUDIOS',
      '2026',
      'WEB DESIGN',
      'ART DIRECTION',
    ],

    description:
      'The visual direction began with an existing Figma concept I had originally developed for a different purpose: a coffee-table book company. Although the original project did not ultimately proceed, the visual language had already established a strong foundation — restrained typography, generous negative space and a highly minimal graphic system.Rather than discarding that direction, I explored how effectively it could translate to a different subject: a conceptual architectural practice specialising in concrete, steel and glass, with an emphasis on contemporary Brutalism and a neo-noir sensibility. The connection felt natural. The existing graphic language is deliberately quiet. Its minimal typography, controlled spacing and lack of visual ornament create a refined framework in which the architecture becomes the primary expression. Against this restraint, the physical qualities of Brutalist architecture — mass, texture, geometry, shadow and scale — become considerably more powerful. Restraint as Prestige. The design intentionally avoids the visual language typically associated with luxury branding. There are no unnecessary effects, decorative elements or attempts to overstate the work. Instead, the site relies on confidence through restraint. The minimal interface gives the architecture room to speak for itself. Large-scale imagery, precise typography and generous negative space create an editorial quality, allowing each structure to become visually striking without requiring additional graphic treatment. This was particularly important to the neo-noir direction. Deep shadows, exposed concrete, steel and glass naturally provide a dramatic visual vocabulary, while the restrained interface prevents that atmosphere from becoming theatrical or overly stylised. The result is intended to communicate a particular kind of understated prestige: nothing is trying too hard to convince you of its value. The architecture is presented with enough confidence that it does not need embellishment. Architecture as the Graphic Element. Rather than placing a graphic identity over the imagery, the architecture itself becomes the visual identity. Concrete surfaces provide texture. Structural forms provide geometry. Glass introduces reflection and transparency. Steel creates contrast and precision. Light and shadow establish atmosphere. The interface therefore acts almost as a frame around the work rather than competing with it. This relationship between minimal graphic design and visually assertive architecture became the central principle of the concept: the quieter the interface becomes, the more powerful the architecture feels..',

    mainMedia: {
      type: 'video',
      src: '/vids/monolithtab.mp4',
      alt: 'WEBSITE FOR BRUTALIST ARCHITECTURAL FIRM project',
    },

    desktopVideoSrc: '/vids/monolithdeskret.mp4',

    mobileVideoSrc: '/vids/monolithandypor.mp4',
    liveSite: 'https://your-actual-site.com',
  },

    {
    slug: 'aeterna',

    title: 'Aeterna',

    metadata: [
      'Aeterna',
      '2026',
      'WEB DESIGN',
      'WEB Dev',
    ],

    description: "'A focused digital flagship built around cinematic imagery, modernist typography, and Riviera-inspired nostalgia. OBJECTIVE: To create a singular ecommerce experience for a timepiece inspired by the iconic geometry of Cartier's Tank—demonstrating how digital environments can evoke the same emotional resonance as a physical object. NARRATIVE: Set against a sun-drenched Monaco backdrop, the project draws upon the romance of mid-century luxury, blending campaign-driven storytelling with disciplined modernist design principles. The result is a digital experience that feels both timeless and contemporary—honouring the past without becoming trapped within it. ANATOMY: Luxury is often found in restraint. Generous negative space, measured typography, and deliberate pacing allow the product to command attention without distraction. Every design decision exists to elevate the object and strengthen the narrative surrounding it. A digital presence that communicates confidence, clarity, and permanence—qualities shared by many of the world's most respected luxury maisons. Experience the romance.",

    mainMedia: {
      type: 'video',
      src: '/vids/aeternatab.mp4',
      alt: 'Angel New York project',
    },

    desktopVideoSrc: '/vids/aeternadesk.mp4',

    mobileVideoSrc: '/vids/aeternahandy.mp4',
    liveSite: 'https://aeterna-git-vercel-react-serv-e55673-lucienne-studio-s-projects.vercel.app/',
  },
  {
    slug: 'ymjr-paris',

    title: 'YMJR-Paris',

    metadata: [
      'YMJR-Paris',
      '2026',
      'WEB DESIGN',
      'WEB Dev',
    ],

    description: "A ready-to-deploy Shopify foundation created for emerging luxury brands and modern start-ups. Inspired by the quiet confidence of established fashion houses, YMJR-PARIS was designed to solve a simple problem: new brands often need the presence of an established house long before they have the time or resources to build one from scratch. By distilling the visual principles employed by many of the world's most respected luxury brands into a fully bespoke and highly adaptable foundation, YMJR-PARIS allows founders to launch with clarity, credibility, and authority from day one. The result is a dramatically reduced design timeline, a refined digital presence, and complete freedom to develop a distinctive identity as the brand grows. Experience the architecture.",

    mainMedia: {
      type: 'video',
      src: '/vids/ymjr-tab.mp4',
      alt: 'YMJR-Paris Shopify ecommerce store',
    },

    desktopVideoSrc: '/vids/ymjr-deskclassic.mp4',

    mobileVideoSrc: '/vids/ymjr-handy.mp4',
    liveSite: 'https://ymjr-paris.myshopify.com/',
  },
];
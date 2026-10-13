import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Scissors,
  Sparkles,
  X,
} from "lucide-react";

type Language = "en" | "es" | "pt" | "fr";

type Copy = {
  code: string;
  languageName: string;
  nav: { story: string; services: string; gallery: string; visit: string };
  sections: { story: string; services: string; gallery: string; visit: string };
  accessibility: { home: string; navigation: string; selectLanguage: string; openMenu: string; closeMenu: string };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    location: string;
    experience: string;
    experienceDetail: string;
    imageAlt: string;
  };
  intro: { kicker: string; title: string; body: string; link: string; badge: string };
  services: {
    kicker: string;
    title: string;
    body: string;
    note: string;
    items: { title: string; body: string; label: string }[];
    cta: string;
  };
  gallery: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
    caption: string;
    fadeAlt: string;
    detailAlt: string;
    kidsAlt: string;
  };
  visit: {
    kicker: string;
    title: string;
    body: string;
    addressLabel: string;
    address: string;
    bookingLabel: string;
    bookingBody: string;
    bookingCta: string;
    directions: string;
    instagram: string;
    hoursTitle: string;
    hoursBody: string;
  };
  footer: { line: string; social: string; privacy: string };
  mobileCta: string;
};

const bookingUrl = "https://fidelisbarber.booksy.com/a";
const instagramUrl = "https://www.instagram.com/fidelisbarbershop_/";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=52A+Court+St%2C+Plymouth%2C+Massachusetts";

const copy: Record<Language, Copy> = {
  en: {
    code: "en",
    languageName: "English",
    nav: { story: "Our story", services: "Services", gallery: "The work", visit: "Find us" },
    sections: { story: "Story", services: "Services", gallery: "Gallery", visit: "Visit" },
    accessibility: { home: "Fidelis Barbershop home", navigation: "Primary navigation", selectLanguage: "Select language", openMenu: "Open menu", closeMenu: "Close menu" },
    hero: {
      eyebrow: "Plymouth, Massachusetts",
      title: "Look sharp.\nStay Fidelis.",
      body: "Elevated grooming for the moments that matter. A premium barbershop experience, built around precision, presence and a chair you can count on.",
      primary: "Book your chair",
      secondary: "See the work",
      location: "52A Court St",
      experience: "Premium experience",
      experienceDetail: "Plymouth, MA",
      imageAlt: "Fidelis barber styling a fresh cut",
    },
    intro: {
      kicker: "The Fidelis standard",
      title: "A sharper ritual for everyday life.",
      body: "Fidelis Barbershop brings a considered, modern grooming experience to Plymouth. Every cut is personal, every finish is intentional and every visit is a reason to leave feeling like your best self.",
      link: "Read our approach",
      badge: "Elevated grooming",
    },
    services: {
      kicker: "The menu",
      title: "Clean lines.\nFresh confidence.",
      body: "Choose your next look, then reserve a time that works for you through our online booking page.",
      note: "Service availability, pricing and timing are listed on Booksy.",
      items: [
        { title: "Signature cuts", body: "Modern shape, considered detail and a finish made for you.", label: "01" },
        { title: "Skin fades", body: "Crisp transitions and clean edges with a polished finish.", label: "02" },
        { title: "Beard detailing", body: "Defined lines, balanced shape and a fresh, refined finish.", label: "03" },
        { title: "Kids cuts", body: "Patient, confident grooming for the next generation of sharp.", label: "04" },
      ],
      cta: "Explore availability",
    },
    gallery: {
      kicker: "From the chair",
      title: "The craft speaks\nfor itself.",
      body: "A few looks from the Fidelis chair. Follow along on Instagram for the latest cuts and shop updates.",
      cta: "Follow @fidelisbarbershop_",
      caption: "Cuts, fades and details — captured in the shop.",
      fadeAlt: "Fresh fade haircut at Fidelis Barbershop",
      detailAlt: "Detailed barber cut at Fidelis Barbershop",
      kidsAlt: "Kids haircut at Fidelis Barbershop",
    },
    visit: {
      kicker: "Make the visit",
      title: "Your next cut\nstarts here.",
      body: "Find us in the heart of Plymouth, or reserve your next appointment online in a few clicks.",
      addressLabel: "Visit",
      address: "52A Court St\nPlymouth, Massachusetts",
      bookingLabel: "Book online",
      bookingBody: "Choose a service, pick a time and we’ll take it from there.",
      bookingCta: "Open Booksy",
      directions: "Get directions",
      instagram: "Message on Instagram",
      hoursTitle: "Appointment-first",
      hoursBody: "Live availability and current opening times are managed on Booksy.",
    },
    footer: {
      line: "Elevated grooming — Premium experience",
      social: "Instagram",
      privacy: "Public information sourced from the Fidelis Barbershop profile.",
    },
    mobileCta: "Book now",
  },
  es: {
    code: "es",
    languageName: "Español",
    nav: { story: "Nuestra historia", services: "Servicios", gallery: "El trabajo", visit: "Encuéntranos" },
    sections: { story: "Historia", services: "Servicios", gallery: "Galería", visit: "Visita" },
    accessibility: { home: "Inicio de Fidelis Barbershop", navigation: "Navegación principal", selectLanguage: "Seleccionar idioma", openMenu: "Abrir menú", closeMenu: "Cerrar menú" },
    hero: {
      eyebrow: "Plymouth, Massachusetts",
      title: "Vístete de estilo.\nSé Fidelis.",
      body: "Cuidado personal elevado para los momentos que importan. Una experiencia premium, pensada para la precisión, la presencia y una silla en la que puedes confiar.",
      primary: "Reserva tu silla",
      secondary: "Ver el trabajo",
      location: "52A Court St",
      experience: "Experiencia premium",
      experienceDetail: "Plymouth, MA",
      imageAlt: "Barbero de Fidelis trabajando un corte",
    },
    intro: {
      kicker: "El estándar Fidelis",
      title: "Un ritual más preciso para cada día.",
      body: "Fidelis Barbershop ofrece una experiencia moderna y cuidada en Plymouth. Cada corte es personal, cada acabado es intencional y cada visita es una razón para salir sintiéndote mejor.",
      link: "Conoce nuestro enfoque",
      badge: "Cuidado elevado",
    },
    services: {
      kicker: "El menú",
      title: "Líneas limpias.\nConfianza renovada.",
      body: "Elige tu próximo look y reserva el horario que mejor te funcione desde nuestra página de reservas.",
      note: "La disponibilidad, los precios y la duración aparecen en Booksy.",
      items: [
        { title: "Cortes signature", body: "Forma moderna, detalle cuidado y un acabado hecho para ti.", label: "01" },
        { title: "Skin fades", body: "Transiciones limpias y bordes definidos con acabado pulido.", label: "02" },
        { title: "Perfilado de barba", body: "Líneas definidas, forma equilibrada y un acabado refinado.", label: "03" },
        { title: "Cortes infantiles", body: "Cuidado paciente y seguro para la próxima generación de estilo.", label: "04" },
      ],
      cta: "Ver disponibilidad",
    },
    gallery: {
      kicker: "Desde la silla",
      title: "El trabajo habla\npor sí solo.",
      body: "Algunos looks de la silla Fidelis. Síguenos en Instagram para ver los últimos cortes y novedades.",
      cta: "Seguir @fidelisbarbershop_",
      caption: "Cortes, fades y detalles — capturados en la barbería.",
      fadeAlt: "Corte fade fresco en Fidelis Barbershop",
      detailAlt: "Corte de barbero detallado en Fidelis Barbershop",
      kidsAlt: "Corte infantil en Fidelis Barbershop",
    },
    visit: {
      kicker: "Haz la visita",
      title: "Tu próximo corte\nempieza aquí.",
      body: "Encuéntranos en el corazón de Plymouth o reserva tu próxima cita online en pocos pasos.",
      addressLabel: "Visita",
      address: "52A Court St\nPlymouth, Massachusetts",
      bookingLabel: "Reserva online",
      bookingBody: "Elige un servicio, selecciona un horario y nosotros nos encargamos del resto.",
      bookingCta: "Abrir Booksy",
      directions: "Cómo llegar",
      instagram: "Escribir por Instagram",
      hoursTitle: "Con cita previa",
      hoursBody: "La disponibilidad y los horarios actuales se gestionan en Booksy.",
    },
    footer: {
      line: "Cuidado personal elevado — Experiencia premium",
      social: "Instagram",
      privacy: "Información pública tomada del perfil de Fidelis Barbershop.",
    },
    mobileCta: "Reservar",
  },
  pt: {
    code: "pt-BR",
    languageName: "Português",
    nav: { story: "Nossa história", services: "Serviços", gallery: "O trabalho", visit: "Onde estamos" },
    sections: { story: "História", services: "Serviços", gallery: "Galeria", visit: "Visite" },
    accessibility: { home: "Início da Fidelis Barbershop", navigation: "Navegação principal", selectLanguage: "Selecionar idioma", openMenu: "Abrir menu", closeMenu: "Fechar menu" },
    hero: {
      eyebrow: "Plymouth, Massachusetts",
      title: "Visual afiado.\nSempre Fidelis.",
      body: "Grooming elevado para os momentos que importam. Uma experiência premium de barbearia, feita de precisão, presença e uma cadeira em que você pode confiar.",
      primary: "Agende seu horário",
      secondary: "Ver o trabalho",
      location: "52A Court St",
      experience: "Experiência premium",
      experienceDetail: "Plymouth, MA",
      imageAlt: "Barbeiro da Fidelis trabalhando um corte",
    },
    intro: {
      kicker: "O padrão Fidelis",
      title: "Um ritual mais preciso para todos os dias.",
      body: "A Fidelis Barbershop leva uma experiência moderna e cuidadosa para Plymouth. Cada corte é pessoal, cada acabamento é intencional e cada visita é um motivo para sair se sentindo no seu melhor.",
      link: "Conheça nossa abordagem",
      badge: "Grooming elevado",
    },
    services: {
      kicker: "O menu",
      title: "Linhas limpas.\nConfiança renovada.",
      body: "Escolha seu próximo visual e reserve um horário pelo nosso sistema de agendamento online.",
      note: "Disponibilidade, preços e duração dos serviços aparecem no Booksy.",
      items: [
        { title: "Cortes signature", body: "Formato moderno, detalhe cuidadoso e acabamento feito para você.", label: "01" },
        { title: "Skin fades", body: "Transições precisas e contornos limpos com acabamento polido.", label: "02" },
        { title: "Barba detalhada", body: "Linhas definidas, formato equilibrado e acabamento refinado.", label: "03" },
        { title: "Cortes infantis", body: "Cuidado paciente e seguro para a próxima geração de estilo.", label: "04" },
      ],
      cta: "Ver disponibilidade",
    },
    gallery: {
      kicker: "Da cadeira",
      title: "O trabalho fala\npor si.",
      body: "Alguns visuais da cadeira Fidelis. Acompanhe o Instagram para ver os cortes e novidades mais recentes.",
      cta: "Seguir @fidelisbarbershop_",
      caption: "Cortes, fades e detalhes — registrados na barbearia.",
      fadeAlt: "Corte fade feito na Fidelis Barbershop",
      detailAlt: "Corte detalhado feito na Fidelis Barbershop",
      kidsAlt: "Corte infantil feito na Fidelis Barbershop",
    },
    visit: {
      kicker: "Faça sua visita",
      title: "Seu próximo corte\ncomeça aqui.",
      body: "Estamos no coração de Plymouth. Ou agende seu próximo horário online em poucos cliques.",
      addressLabel: "Visite",
      address: "52A Court St\nPlymouth, Massachusetts",
      bookingLabel: "Agende online",
      bookingBody: "Escolha o serviço, selecione o horário e deixe o resto com a gente.",
      bookingCta: "Abrir Booksy",
      directions: "Traçar rota",
      instagram: "Mensagem no Instagram",
      hoursTitle: "Com hora marcada",
      hoursBody: "A disponibilidade e os horários atuais são gerenciados pelo Booksy.",
    },
    footer: {
      line: "Grooming elevado — Experiência premium",
      social: "Instagram",
      privacy: "Informações públicas baseadas no perfil da Fidelis Barbershop.",
    },
    mobileCta: "Agendar",
  },
  fr: {
    code: "fr",
    languageName: "Français",
    nav: { story: "Notre histoire", services: "Services", gallery: "Le travail", visit: "Nous trouver" },
    sections: { story: "Histoire", services: "Services", gallery: "Galerie", visit: "Visiter" },
    accessibility: { home: "Accueil de Fidelis Barbershop", navigation: "Navigation principale", selectLanguage: "Choisir la langue", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu" },
    hero: {
      eyebrow: "Plymouth, Massachusetts",
      title: "Un style net.\nToujours Fidelis.",
      body: "Un grooming élevé pour les moments qui comptent. Une expérience premium, pensée autour de la précision, de la présence et d’un fauteuil sur lequel vous pouvez compter.",
      primary: "Réserver votre fauteuil",
      secondary: "Voir le travail",
      location: "52A Court St",
      experience: "Expérience premium",
      experienceDetail: "Plymouth, MA",
      imageAlt: "Barbier Fidelis réalisant une coupe",
    },
    intro: {
      kicker: "Le standard Fidelis",
      title: "Un rituel plus précis, chaque jour.",
      body: "Fidelis Barbershop propose une expérience de grooming moderne et soignée à Plymouth. Chaque coupe est personnelle, chaque finition est pensée et chaque visite est une raison de repartir au meilleur de soi-même.",
      link: "Découvrir notre approche",
      badge: "Grooming élevé",
    },
    services: {
      kicker: "La carte",
      title: "Des lignes nettes.\nUne confiance nouvelle.",
      body: "Choisissez votre prochain style, puis réservez le créneau qui vous convient via notre page de réservation.",
      note: "La disponibilité, les prix et la durée sont indiqués sur Booksy.",
      items: [
        { title: "Coupes signature", body: "Une forme moderne, un détail précis et une finition faite pour vous.", label: "01" },
        { title: "Skin fades", body: "Des transitions nettes et des contours propres pour une finition soignée.", label: "02" },
        { title: "Taille de barbe", body: "Des lignes définies, une forme équilibrée et une finition raffinée.", label: "03" },
        { title: "Coupes enfants", body: "Un grooming patient et sûr pour la prochaine génération de style.", label: "04" },
      ],
      cta: "Voir les disponibilités",
    },
    gallery: {
      kicker: "Depuis le fauteuil",
      title: "Le savoir-faire\nse suffit à lui-même.",
      body: "Quelques looks réalisés chez Fidelis. Suivez-nous sur Instagram pour les dernières coupes et actualités.",
      cta: "Suivre @fidelisbarbershop_",
      caption: "Coupes, fades et détails — capturés dans la boutique.",
      fadeAlt: "Coupe fade réalisée chez Fidelis Barbershop",
      detailAlt: "Coupe détaillée réalisée chez Fidelis Barbershop",
      kidsAlt: "Coupe enfant réalisée chez Fidelis Barbershop",
    },
    visit: {
      kicker: "Faire le déplacement",
      title: "Votre prochaine coupe\ncommence ici.",
      body: "Retrouvez-nous au cœur de Plymouth ou réservez votre prochain rendez-vous en ligne en quelques clics.",
      addressLabel: "Visiter",
      address: "52A Court St\nPlymouth, Massachusetts",
      bookingLabel: "Réserver en ligne",
      bookingBody: "Choisissez un service, sélectionnez un créneau et nous nous occupons du reste.",
      bookingCta: "Ouvrir Booksy",
      directions: "Itinéraire",
      instagram: "Écrire sur Instagram",
      hoursTitle: "Sur rendez-vous",
      hoursBody: "Les disponibilités et horaires actuels sont gérés sur Booksy.",
    },
    footer: {
      line: "Grooming élevé — Expérience premium",
      social: "Instagram",
      privacy: "Informations publiques issues du profil Fidelis Barbershop.",
    },
    mobileCta: "Réserver",
  },
};

const assets = {
  mark: { primary: "/images/fidelis-mark.jpg", fallback: "/manus-storage/fidelis-mark_c3e16a1f.jpg" },
  portrait: { primary: "/images/gallery-portrait.jpg", fallback: "/manus-storage/gallery-portrait_1abd3f75.jpg" },
  fade: { primary: "/images/gallery-fade.jpg", fallback: "/manus-storage/gallery-fade_155ae900.jpg" },
  detail: { primary: "/images/gallery-detail.jpg", fallback: "/manus-storage/gallery-detail_37a95705.jpg" },
  kids: { primary: "/images/gallery-kids.jpg", fallback: "/manus-storage/gallery-kids_e1223fdc.jpg" },
};

function AssetImage({
  asset,
  alt,
  className,
}: {
  asset: { primary: string; fallback: string };
  alt: string;
  className?: string;
}) {
  const [src, setSrc] = useState(asset.primary);
  return <img className={className} src={src} alt={alt} onError={() => setSrc(asset.fallback)} loading="lazy" />;
}

function AppMark({ compact = false, homeLabel }: { compact?: boolean; homeLabel: string }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label={homeLabel}>
      <span className="brand__mark"><AssetImage asset={assets.mark} alt="" /></span>
      <span className="brand__text">
        <span>Fidelis</span>
        {!compact && <small>Barbershop</small>}
      </span>
    </a>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useMemo(() => copy[language], [language]);

  useEffect(() => {
    document.documentElement.lang = t.code;
  }, [t.code]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell" id="top">
      <div className="announcement">
        <span className="announcement__dot" />
        <span>{t.hero.experience}</span>
        <span className="announcement__divider">—</span>
        <a href={bookingUrl} target="_blank" rel="noreferrer">{t.hero.primary}</a>
        <ArrowUpRight size={14} aria-hidden="true" />
      </div>

      <header className="site-header">
        <AppMark homeLabel={t.accessibility.home} />
        <nav className={`desktop-nav ${menuOpen ? "desktop-nav--open" : ""}`} aria-label={t.accessibility.navigation}>
          <button onClick={() => goTo("story")}>{t.nav.story}</button>
          <button onClick={() => goTo("services")}>{t.nav.services}</button>
          <button onClick={() => goTo("gallery")}>{t.nav.gallery}</button>
          <button onClick={() => goTo("visit")}>{t.nav.visit}</button>
        </nav>
        <div className="header-actions">
          <label className="language-select">
            <span className="sr-only">{t.accessibility.selectLanguage}</span>
            <select value={language} onChange={(event) => setLanguage(event.target.value as Language)} aria-label={t.accessibility.selectLanguage}>
              {(Object.keys(copy) as Language[]).map((key) => (
                <option key={key} value={key}>{key.toUpperCase()} · {copy[key].languageName}</option>
              ))}
            </select>
            <ChevronDown size={14} aria-hidden="true" />
          </label>
          <a className="header-book" href={bookingUrl} target="_blank" rel="noreferrer">
            {t.hero.primary} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? t.accessibility.closeMenu : t.accessibility.openMenu} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__line" />{t.hero.eyebrow}</p>
            <h1 id="hero-title">{t.hero.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="hero__body">{t.hero.body}</p>
            <div className="hero__actions">
              <a className="button button--primary" href={bookingUrl} target="_blank" rel="noreferrer">
                <CalendarDays size={17} aria-hidden="true" /> {t.hero.primary}
              </a>
              <button className="button button--text" onClick={() => goTo("gallery")}>
                {t.hero.secondary} <ArrowDown size={16} aria-hidden="true" />
              </button>
            </div>
            <div className="hero__meta">
              <div><MapPin size={17} aria-hidden="true" /><span>{t.hero.location}<small>Plymouth, MA</small></span></div>
              <div><Sparkles size={17} aria-hidden="true" /><span>{t.hero.experience}<small>{t.hero.experienceDetail}</small></span></div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-frame">
              <AssetImage asset={assets.portrait} alt={t.hero.imageAlt} className="hero__image" />
              <div className="hero__stamp" aria-hidden="true"><span>F</span><small>FIDELIS</small><strong>PLYMOUTH</strong></div>
            </div>
            <div className="hero__vertical">FIDELIS&nbsp;&nbsp; / &nbsp;&nbsp;PLYMOUTH&nbsp;&nbsp; / &nbsp;&nbsp;MA</div>
          </div>
        </section>

        <section className="intro section-pad" id="story" aria-labelledby="intro-title">
          <div className="section-index">01 <span /> {t.sections.story}</div>
          <div className="intro__grid">
            <p className="eyebrow"><span className="eyebrow__line" />{t.intro.kicker}</p>
            <div>
              <h2 id="intro-title">{t.intro.title}</h2>
              <p className="lead-copy">{t.intro.body}</p>
              <button className="underlined-link" onClick={() => goTo("visit")}>{t.intro.link} <ArrowUpRight size={16} /></button>
            </div>
            <div className="intro__badge"><span>F</span><strong>Fidelis</strong><small>{t.intro.badge}</small></div>
          </div>
        </section>

        <section className="services section-pad" id="services" aria-labelledby="services-title">
          <div className="section-index">02 <span /> {t.sections.services}</div>
          <div className="services__heading">
            <div><p className="eyebrow"><span className="eyebrow__line" />{t.services.kicker}</p><h2 id="services-title">{t.services.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div>
            <div className="services__aside"><p>{t.services.body}</p><span>{t.services.note}</span></div>
          </div>
          <div className="service-list">
            {t.services.items.map((item, index) => (
              <article className="service-card" key={item.label}>
                <div className="service-card__number">{item.label}</div>
                <div className="service-card__icon">{index === 0 ? <Scissors size={24} /> : index === 1 ? <Sparkles size={24} /> : index === 2 ? <Check size={24} /> : <MessageCircle size={24} />}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <a href={bookingUrl} target="_blank" rel="noreferrer" aria-label={`${t.services.cta}: ${item.title}`}><ArrowUpRight size={18} /></a>
              </article>
            ))}
          </div>
          <a className="button button--outline" href={bookingUrl} target="_blank" rel="noreferrer">{t.services.cta} <ArrowUpRight size={17} /></a>
        </section>

        <section className="gallery section-pad" id="gallery" aria-labelledby="gallery-title">
          <div className="section-index">03 <span /> {t.sections.gallery}</div>
          <div className="gallery__top">
            <div><p className="eyebrow"><span className="eyebrow__line" />{t.gallery.kicker}</p><h2 id="gallery-title">{t.gallery.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div>
            <div className="gallery__aside"><p>{t.gallery.body}</p><a className="underlined-link" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> {t.gallery.cta}</a></div>
          </div>
          <div className="gallery-grid">
            <div className="gallery-grid__main"><AssetImage asset={assets.fade} alt={t.gallery.fadeAlt} /><span>01 / 04</span></div>
            <div className="gallery-grid__small gallery-grid__small--top"><AssetImage asset={assets.detail} alt={t.gallery.detailAlt} /><span>02</span></div>
            <div className="gallery-grid__small gallery-grid__small--bottom"><AssetImage asset={assets.kids} alt={t.gallery.kidsAlt} /><span>03</span></div>
            <div className="gallery-grid__quote"><span className="quote-mark">“</span><p>{t.gallery.caption}</p><span className="quote-line" /></div>
          </div>
        </section>

        <section className="visit section-pad" id="visit" aria-labelledby="visit-title">
          <div className="visit__glow" aria-hidden="true" />
          <div className="section-index">04 <span /> {t.sections.visit}</div>
          <div className="visit__grid">
            <div>
              <p className="eyebrow eyebrow--light"><span className="eyebrow__line" />{t.visit.kicker}</p>
              <h2 id="visit-title">{t.visit.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
              <p className="visit__body">{t.visit.body}</p>
              <div className="visit__actions">
                <a className="button button--accent" href={bookingUrl} target="_blank" rel="noreferrer"><CalendarDays size={17} /> {t.visit.bookingCta} <ArrowUpRight size={16} /></a>
                <a className="button button--dark-outline" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /> {t.visit.instagram}</a>
              </div>
            </div>
            <div className="visit__cards">
              <a className="visit-card" href={mapsUrl} target="_blank" rel="noreferrer">
                <div className="visit-card__top"><span>{t.visit.addressLabel}</span><ArrowUpRight size={17} /></div>
                <MapPin size={25} />
                <strong>{t.visit.address.split("\n").map((line) => <span key={line}>{line}</span>)}</strong>
                <small>{t.visit.directions}</small>
              </a>
              <div className="visit-card visit-card--muted">
                <div className="visit-card__top"><span>{t.visit.hoursTitle}</span><Clock3 size={17} /></div>
                <p>{t.visit.hoursBody}</p>
                <a className="card-link" href={bookingUrl} target="_blank" rel="noreferrer">{t.visit.bookingLabel} <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div><AppMark compact homeLabel={t.accessibility.home} /><p>{t.footer.line}</p></div>
        <div className="footer-right"><a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> {t.footer.social}</a><small>{t.footer.privacy}</small></div>
      </footer>

      <a className="mobile-book" href={bookingUrl} target="_blank" rel="noreferrer"><CalendarDays size={17} /> {t.mobileCta} <ArrowUpRight size={16} /></a>
    </div>
  );
}

export type Language = 'nl' | 'fr' | 'en' | 'ru';

export const languageNames: Record<Language, string> = {
  nl: 'Nederlands',
  fr: 'Français',
  en: 'English',
  ru: 'Русский',
};

type TranslationKeys = {
  nav: {
    home: string;
    weddingRings: string;
    engagementRings: string;
    diamondJewelry: string;
    customDesign: string;
    contact: string;
    about: string;
    cashForGold: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    cta: string;
  };
  sections: {
    collections: string;
    collectionsSubtitle: string;
    reviews: string;
    reviewsSubtitle: string;
    visitUs: string;
    visitUsSubtitle: string;
    hours: string;
    hoursDetail: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    whatsapp: string;
    callUs: string;
    businessHours: string;
    address: string;
  };
  about: {
    title: string;
    subtitle: string;
    story: string;
    storyText: string;
    values: string;
    craftsmanship: string;
    craftsmanshipText: string;
    excellence: string;
    excellenceText: string;
    trust: string;
    trustText: string;
  };
  pages: {
    heroSubtitle: string;
    exploreCollection: string;
    gallery: string;
    contactCta: string;
    contactCtaText: string;
    bookAppointment: string;
  };
  wedding: {
    title: string;
    subtitle: string;
    description: string;
  };
  engagement: {
    title: string;
    subtitle: string;
    description: string;
  };
  diamond: {
    title: string;
    subtitle: string;
    description: string;
  };
  custom: {
    title: string;
    subtitle: string;
    description: string;
  };
  cashForGold: {
    title: string;
    subtitle: string;
    description: string;
    bestPrice: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
  reviews: {
    r1: { name: string; text: string };
    r2: { name: string; text: string };
    r3: { name: string; text: string };
    r4: { name: string; text: string };
  };
};

export const translations: Record<Language, TranslationKeys> = {
  nl: {
    nav: {
      home: 'Home',
      weddingRings: 'Trouwringen',
      engagementRings: 'Verlovingsringen',
      diamondJewelry: 'Diamant Juwelen',
      customDesign: 'Op Maat',
      contact: 'Contact',
      about: 'Over Ons',
      cashForGold: 'Inkoop Goud',
    },
    hero: {
      tagline: 'Tijdloze Elegantie in het Hart van Antwerpen',
      subtitle: 'Exclusieve juwelen, vakmanschap en diamanten van de hoogste kwaliteit',
      cta: 'Ontdek Onze Collecties',
    },
    sections: {
      collections: 'Onze Collecties',
      collectionsSubtitle: 'Ontdek onze zorgvuldig samengestelde collecties van de finest juwelen',
      reviews: 'Wat Onze Klanten Zeggen',
      reviewsSubtitle: 'Ervaringen van onze gewaardeerde klanten',
      visitUs: 'Bezoek Ons',
      visitUsSubtitle: 'Gelegen in het hart van Antwerpen, tegenover het Centraal Station',
      hours: 'Openingsuren',
      hoursDetail: 'Dagelijks 9:00 – 19:00',
    },
    contact: {
      title: 'Contacteer Ons',
      subtitle: 'Wij staan klaar om u te helpen met al uw vragen',
      name: 'Naam',
      email: 'E-mail',
      phone: 'Telefoon',
      message: 'Bericht',
      send: 'Verstuur',
      whatsapp: 'WhatsApp Ons',
      callUs: 'Bel Ons',
      businessHours: 'Dagelijks 9:00 – 19:00',
      address: 'Koningin Astridplein 31, 2018 Antwerpen',
    },
    about: {
      title: 'Over Golden Dream Jewellery',
      subtitle: 'Vakmanschap, passie en traditie sinds onze oprichting',
      story: 'Ons Verhaal',
      storyText: 'Golden Dream Jewellery is gelegen in het hart van Antwerpen, de diamanthoofdstad van de wereld. Wij bieden een exclusieve selectie van de finest juwelen, verlovingsringen, trouwringen en op maat gemaakte creaties. Ons team van ervaren juweliers combineert traditioneel vakmanschap met modern design.',
      values: 'Onze Waarden',
      craftsmanship: 'Vakmanschap',
      craftsmanshipText: 'Elk juweel wordt met de grootste zorg en precisie vervaardigd.',
      excellence: 'Excellentie',
      excellenceText: 'Wij gebruiken alleen de hoogste kwaliteit diamanten en edelmetalen.',
      trust: 'Vertrouwen',
      trustText: 'Transparantie en eerlijkheid staan centraal in alles wat we doen.',
    },
    pages: {
      heroSubtitle: 'Ontdek onze exclusieve collectie',
      exploreCollection: 'Bekijk Collectie',
      gallery: 'Galerij',
      contactCta: 'Interesse?',
      contactCtaText: 'Maak een afspraak voor een persoonlijke consultatie in onze showroom.',
      bookAppointment: 'Maak een Afspraak',
    },
    wedding: {
      title: 'Trouwringen',
      subtitle: 'Symbolen van eeuwige liefde, met de hand vervaardigd',
      description: 'Onze trouwringen worden vervaardigd uit de finest materialen – van klassiek goud tot platina – en kunnen volledig naar wens worden gepersonaliseerd.',
    },
    engagement: {
      title: 'Verlovingsringen',
      subtitle: 'Het begin van een nieuw hoofdstuk',
      description: 'Kies de perfecte verlovingsring uit onze exclusieve collectie. Elk stuk is een uniek meesterwerk, bezet met briljante diamanten.',
    },
    diamond: {
      title: 'Diamant Juwelen',
      subtitle: 'Schitterend vakmanschap, adembenemende schoonheid',
      description: 'Van halskettingen tot armbanden, onze diamanten juwelen worden geselecteerd op hun uitzonderlijke schittering en zuiverheid.',
    },
    custom: {
      title: 'Op Maat Gemaakt',
      subtitle: 'Uw droom, ons vakmanschap',
      description: 'Laat ons uw visie werkelijkheid maken. Ons team ontwerpt en vervaardigt unieke juwelen op maat, perfect afgestemd op uw wensen.',
    },
    cashForGold: {
      title: 'Inkoop Goud',
      subtitle: 'Beste prijs voor uw goud',
      description: 'Wij bieden de beste prijzen voor uw goud. Kom langs voor een gratis en vrijblijvende taxatie.',
      bestPrice: 'Beste Prijs Garantie',
    },
    footer: {
      rights: '© 2026 Golden Dream Jewellery. Alle rechten voorbehouden.',
      privacy: 'Privacybeleid',
      terms: 'Algemene Voorwaarden',
    },
    reviews: {
      r1: { name: 'Sophie V.', text: 'Prachtige trouwringen! Het vakmanschap is werkelijk uitzonderlijk. Golden Dream heeft onze droomringen werkelijkheid gemaakt.' },
      r2: { name: 'Mohammed A.', text: 'De beste juwelier in Antwerpen. Eerlijke prijzen, prachtige diamanten en een uitstekende service.' },
      r3: { name: 'Elena K.', text: 'Mijn verlovingsring is adembenemend mooi. Het team heeft perfect naar mijn wensen geluisterd.' },
      r4: { name: 'Thomas D.', text: 'Fantastische ervaring bij Golden Dream. Professioneel advies en een resultaat dat alle verwachtingen overtreft.' },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      weddingRings: 'Alliances',
      engagementRings: 'Bagues de Fiançailles',
      diamondJewelry: 'Bijoux Diamant',
      customDesign: 'Sur Mesure',
      contact: 'Contact',
      about: 'À Propos',
      cashForGold: 'Rachat d\'Or',
    },
    hero: {
      tagline: 'Élégance Intemporelle au Cœur d\'Anvers',
      subtitle: 'Bijoux exclusifs, artisanat et diamants de la plus haute qualité',
      cta: 'Découvrir Nos Collections',
    },
    sections: {
      collections: 'Nos Collections',
      collectionsSubtitle: 'Découvrez nos collections soigneusement sélectionnées des plus beaux bijoux',
      reviews: 'Ce Que Disent Nos Clients',
      reviewsSubtitle: 'Expériences de nos clients estimés',
      visitUs: 'Visitez-Nous',
      visitUsSubtitle: 'Situé au cœur d\'Anvers, en face de la Gare Centrale',
      hours: 'Heures d\'Ouverture',
      hoursDetail: 'Tous les jours 9h00 – 19h00',
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Nous sommes à votre disposition pour toutes vos questions',
      name: 'Nom',
      email: 'E-mail',
      phone: 'Téléphone',
      message: 'Message',
      send: 'Envoyer',
      whatsapp: 'WhatsApp',
      callUs: 'Appelez-Nous',
      businessHours: 'Tous les jours 9h00 – 19h00',
      address: 'Koningin Astridplein 31, 2018 Anvers',
    },
    about: {
      title: 'À Propos de Golden Dream Jewellery',
      subtitle: 'Artisanat, passion et tradition depuis notre fondation',
      story: 'Notre Histoire',
      storyText: 'Golden Dream Jewellery est situé au cœur d\'Anvers, la capitale mondiale du diamant. Nous proposons une sélection exclusive des plus beaux bijoux, bagues de fiançailles, alliances et créations sur mesure. Notre équipe de joailliers expérimentés allie artisanat traditionnel et design moderne.',
      values: 'Nos Valeurs',
      craftsmanship: 'Artisanat',
      craftsmanshipText: 'Chaque bijou est fabriqué avec le plus grand soin et précision.',
      excellence: 'Excellence',
      excellenceText: 'Nous utilisons uniquement des diamants et métaux précieux de la plus haute qualité.',
      trust: 'Confiance',
      trustText: 'Transparence et honnêteté sont au cœur de tout ce que nous faisons.',
    },
    pages: {
      heroSubtitle: 'Découvrez notre collection exclusive',
      exploreCollection: 'Voir la Collection',
      gallery: 'Galerie',
      contactCta: 'Intéressé?',
      contactCtaText: 'Prenez rendez-vous pour une consultation personnelle dans notre showroom.',
      bookAppointment: 'Prendre Rendez-vous',
    },
    wedding: {
      title: 'Alliances',
      subtitle: 'Symboles d\'amour éternel, fabriqués à la main',
      description: 'Nos alliances sont fabriquées à partir des matériaux les plus fins – de l\'or classique au platine – et peuvent être entièrement personnalisées.',
    },
    engagement: {
      title: 'Bagues de Fiançailles',
      subtitle: 'Le début d\'un nouveau chapitre',
      description: 'Choisissez la bague de fiançailles parfaite dans notre collection exclusive. Chaque pièce est un chef-d\'œuvre unique, serti de diamants brillants.',
    },
    diamond: {
      title: 'Bijoux Diamant',
      subtitle: 'Artisanat brillant, beauté époustouflante',
      description: 'Des colliers aux bracelets, nos bijoux en diamant sont sélectionnés pour leur éclat et leur pureté exceptionnels.',
    },
    custom: {
      title: 'Créations Sur Mesure',
      subtitle: 'Votre rêve, notre artisanat',
      description: 'Laissez-nous réaliser votre vision. Notre équipe conçoit et fabrique des bijoux uniques sur mesure, parfaitement adaptés à vos souhaits.',
    },
    cashForGold: {
      title: 'Rachat d\'Or',
      subtitle: 'Meilleur prix pour votre or',
      description: 'Nous offrons les meilleurs prix pour votre or. Venez pour une estimation gratuite et sans engagement.',
      bestPrice: 'Garantie Meilleur Prix',
    },
    footer: {
      rights: '© 2026 Golden Dream Jewellery. Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions Générales',
    },
    reviews: {
      r1: { name: 'Sophie V.', text: 'De magnifiques alliances! L\'artisanat est vraiment exceptionnel. Golden Dream a réalisé nos alliances de rêve.' },
      r2: { name: 'Mohammed A.', text: 'Le meilleur joaillier d\'Anvers. Prix honnêtes, beaux diamants et un service excellent.' },
      r3: { name: 'Elena K.', text: 'Ma bague de fiançailles est à couper le souffle. L\'équipe a parfaitement écouté mes souhaits.' },
      r4: { name: 'Thomas D.', text: 'Expérience fantastique chez Golden Dream. Conseils professionnels et un résultat qui dépasse toutes les attentes.' },
    },
  },
  en: {
    nav: {
      home: 'Home',
      weddingRings: 'Wedding Rings',
      engagementRings: 'Engagement Rings',
      diamondJewelry: 'Diamond Jewelry',
      customDesign: 'Custom Design',
      contact: 'Contact',
      about: 'About Us',
      cashForGold: 'Cash for Gold',
    },
    hero: {
      tagline: 'Timeless Elegance in the Heart of Antwerp',
      subtitle: 'Exclusive jewelry, craftsmanship and diamonds of the highest quality',
      cta: 'Discover Our Collections',
    },
    sections: {
      collections: 'Our Collections',
      collectionsSubtitle: 'Discover our carefully curated collections of the finest jewelry',
      reviews: 'What Our Clients Say',
      reviewsSubtitle: 'Experiences from our valued customers',
      visitUs: 'Visit Us',
      visitUsSubtitle: 'Located in the heart of Antwerp, opposite Central Station',
      hours: 'Opening Hours',
      hoursDetail: 'Daily 9:00 AM – 7:00 PM',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are ready to assist you with all your questions',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send: 'Send',
      whatsapp: 'WhatsApp Us',
      callUs: 'Call Us',
      businessHours: 'Daily 9:00 AM – 7:00 PM',
      address: 'Koningin Astridplein 31, 2018 Antwerp',
    },
    about: {
      title: 'About Golden Dream Jewellery',
      subtitle: 'Craftsmanship, passion and tradition since our founding',
      story: 'Our Story',
      storyText: 'Golden Dream Jewellery is located in the heart of Antwerp, the diamond capital of the world. We offer an exclusive selection of the finest jewelry, engagement rings, wedding rings and custom-made creations. Our team of experienced jewelers combines traditional craftsmanship with modern design.',
      values: 'Our Values',
      craftsmanship: 'Craftsmanship',
      craftsmanshipText: 'Every piece of jewelry is crafted with the utmost care and precision.',
      excellence: 'Excellence',
      excellenceText: 'We use only the highest quality diamonds and precious metals.',
      trust: 'Trust',
      trustText: 'Transparency and honesty are at the core of everything we do.',
    },
    pages: {
      heroSubtitle: 'Discover our exclusive collection',
      exploreCollection: 'View Collection',
      gallery: 'Gallery',
      contactCta: 'Interested?',
      contactCtaText: 'Schedule an appointment for a personal consultation in our showroom.',
      bookAppointment: 'Book Appointment',
    },
    wedding: {
      title: 'Wedding Rings',
      subtitle: 'Symbols of eternal love, handcrafted to perfection',
      description: 'Our wedding rings are crafted from the finest materials – from classic gold to platinum – and can be fully personalized to your wishes.',
    },
    engagement: {
      title: 'Engagement Rings',
      subtitle: 'The beginning of a new chapter',
      description: 'Choose the perfect engagement ring from our exclusive collection. Each piece is a unique masterpiece, set with brilliant diamonds.',
    },
    diamond: {
      title: 'Diamond Jewelry',
      subtitle: 'Brilliant craftsmanship, breathtaking beauty',
      description: 'From necklaces to bracelets, our diamond jewelry is selected for its exceptional brilliance and purity.',
    },
    custom: {
      title: 'Custom Design',
      subtitle: 'Your dream, our craftsmanship',
      description: 'Let us bring your vision to life. Our team designs and creates unique custom jewelry, perfectly tailored to your wishes.',
    },
    cashForGold: {
      title: 'Cash for Gold',
      subtitle: 'Best price for your gold',
      description: 'We offer the best prices for your gold. Visit us for a free, no-obligation appraisal.',
      bestPrice: 'Best Price Guarantee',
    },
    footer: {
      rights: '© 2026 Golden Dream Jewellery. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
    reviews: {
      r1: { name: 'Sophie V.', text: 'Beautiful wedding rings! The craftsmanship is truly exceptional. Golden Dream made our dream rings a reality.' },
      r2: { name: 'Mohammed A.', text: 'The best jeweler in Antwerp. Fair prices, beautiful diamonds and excellent service.' },
      r3: { name: 'Elena K.', text: 'My engagement ring is breathtakingly beautiful. The team listened perfectly to my wishes.' },
      r4: { name: 'Thomas D.', text: 'Fantastic experience at Golden Dream. Professional advice and a result that exceeds all expectations.' },
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      weddingRings: 'Обручальные Кольца',
      engagementRings: 'Помолвочные Кольца',
      diamondJewelry: 'Бриллиантовые Украшения',
      customDesign: 'На Заказ',
      contact: 'Контакты',
      about: 'О Нас',
      cashForGold: 'Скупка Золота',
    },
    hero: {
      tagline: 'Вечная Элегантность в Сердце Антверпена',
      subtitle: 'Эксклюзивные ювелирные изделия, мастерство и бриллианты высочайшего качества',
      cta: 'Откройте Наши Коллекции',
    },
    sections: {
      collections: 'Наши Коллекции',
      collectionsSubtitle: 'Откройте для себя наши тщательно подобранные коллекции изысканных украшений',
      reviews: 'Отзывы Наших Клиентов',
      reviewsSubtitle: 'Опыт наших уважаемых клиентов',
      visitUs: 'Посетите Нас',
      visitUsSubtitle: 'Расположен в самом сердце Антверпена, напротив Центрального Вокзала',
      hours: 'Часы Работы',
      hoursDetail: 'Ежедневно 9:00 – 19:00',
    },
    contact: {
      title: 'Свяжитесь с Нами',
      subtitle: 'Мы готовы помочь вам с любыми вопросами',
      name: 'Имя',
      email: 'Эл. почта',
      phone: 'Телефон',
      message: 'Сообщение',
      send: 'Отправить',
      whatsapp: 'Написать в WhatsApp',
      callUs: 'Позвоните Нам',
      businessHours: 'Ежедневно 9:00 – 19:00',
      address: 'Koningin Astridplein 31, 2018 Антверпен',
    },
    about: {
      title: 'О Golden Dream Jewellery',
      subtitle: 'Мастерство, страсть и традиции с момента основания',
      story: 'Наша История',
      storyText: 'Golden Dream Jewellery расположен в самом сердце Антверпена — бриллиантовой столицы мира. Мы предлагаем эксклюзивный выбор изысканных украшений, помолвочных колец, обручальных колец и изделий на заказ. Наша команда опытных ювелиров сочетает традиционное мастерство с современным дизайном.',
      values: 'Наши Ценности',
      craftsmanship: 'Мастерство',
      craftsmanshipText: 'Каждое украшение создается с величайшей тщательностью и точностью.',
      excellence: 'Совершенство',
      excellenceText: 'Мы используем только бриллианты и драгоценные металлы высочайшего качества.',
      trust: 'Доверие',
      trustText: 'Прозрачность и честность лежат в основе всего, что мы делаем.',
    },
    pages: {
      heroSubtitle: 'Откройте для себя нашу эксклюзивную коллекцию',
      exploreCollection: 'Смотреть Коллекцию',
      gallery: 'Галерея',
      contactCta: 'Заинтересовались?',
      contactCtaText: 'Запишитесь на персональную консультацию в нашем шоуруме.',
      bookAppointment: 'Записаться',
    },
    wedding: {
      title: 'Обручальные Кольца',
      subtitle: 'Символы вечной любви, ручной работы',
      description: 'Наши обручальные кольца изготовлены из лучших материалов — от классического золота до платины — и могут быть полностью персонализированы.',
    },
    engagement: {
      title: 'Помолвочные Кольца',
      subtitle: 'Начало новой главы',
      description: 'Выберите идеальное помолвочное кольцо из нашей эксклюзивной коллекции. Каждое изделие — уникальный шедевр с бриллиантами.',
    },
    diamond: {
      title: 'Бриллиантовые Украшения',
      subtitle: 'Блестящее мастерство, захватывающая красота',
      description: 'От колье до браслетов, наши бриллиантовые украшения отобраны за исключительный блеск и чистоту.',
    },
    custom: {
      title: 'На Заказ',
      subtitle: 'Ваша мечта, наше мастерство',
      description: 'Позвольте нам воплотить ваше видение в жизнь. Наша команда создаёт уникальные ювелирные изделия на заказ.',
    },
    cashForGold: {
      title: 'Скупка Золота',
      subtitle: 'Лучшая цена за ваше золото',
      description: 'Мы предлагаем лучшие цены за ваше золото. Приходите для бесплатной оценки без обязательств.',
      bestPrice: 'Гарантия Лучшей Цены',
    },
    footer: {
      rights: '© 2026 Golden Dream Jewellery. Все права защищены.',
      privacy: 'Политика Конфиденциальности',
      terms: 'Условия и Положения',
    },
    reviews: {
      r1: { name: 'Софи В.', text: 'Великолепные обручальные кольца! Мастерство действительно исключительное. Golden Dream воплотил наши мечты в реальность.' },
      r2: { name: 'Мохаммед А.', text: 'Лучший ювелир в Антверпене. Честные цены, прекрасные бриллианты и отличный сервис.' },
      r3: { name: 'Елена К.', text: 'Моё помолвочное кольцо захватывает дух. Команда идеально прислушалась к моим пожеланиям.' },
      r4: { name: 'Томас Д.', text: 'Фантастический опыт в Golden Dream. Профессиональные советы и результат, превосходящий все ожидания.' },
    },
  },
};

export const PHONE_DISPLAY = "0570567188";
export const PHONE_TEL = "tel:+966570567188";
export const EMAIL_ADDRESS = "njeerijully@gmail.com";
export const EMAIL_MAILTO = `mailto:${EMAIL_ADDRESS}`;
export const WHATSAPP_NUMBER = "966570567188";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Real WhatsApp chat deep link with a prefilled first message (no chat widget). */
export function whatsappLink(lang: "en" | "ar", extra?: string) {
  const base =
    lang === "ar"
      ? "السلام عليكم، أرغب في الاستفسار عن خدمات العمالة المنزلية في الرياض."
      : "Hello, I would like to ask about your maid & home care services in Riyadh.";
  const text = extra ? `${base}\n${extra}` : base;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export type Lang = "en" | "ar";

export type ServiceKey =
  | "maid"
  | "cleaning"
  | "deep"
  | "cooking"
  | "child"
  | "elderly";

export interface Content {
  lang: Lang;
  dir: "ltr" | "rtl";
  htmlLang: string;
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  brand: string;
  banner: { availability: string; call: string; whatsapp: string };
  nav: {
    services: string;
    why: string;
    faq: string;
    contact: string;
    callNow: string;
  };
  switcher: { toEn: string; toAr: string; label: string };
  hero: {
    h1: string;
    sub: string;
    locality: string;
    availability: string;
    primary: string;
    secondary: string;
    imageAlt: string;
  };
  trust: { heading: string; items: string[] };
  services: {
    heading: string;
    intro: string;
    items: {
      key: ServiceKey;
      title: string;
      desc: string;
      cta: string;
      alt: string;
    }[];
  };
  booking: { heading: string; note: string; items: { title: string; desc: string }[] };
  why: { heading: string; items: { title: string; desc: string }[] };
  how: { heading: string; steps: { title: string; desc: string }[]; cta: string };
  areas: { heading: string; body: string[] };
  form: {
    heading: string;
    sub: string;
    name: string;
    phone: string;
    service: string;
    basis: string;
    datetime: string;
    message: string;
    submit: string;
    submitting: string;
    callLine: string;
    choose: string;
    success: string;
    errors: { name: string; phone: string; service: string; basis: string; generic: string };
  };
  phoneBlock: { heading: string; sub: string; cta: string };
  faq: { heading: string; items: { q: string; a: string }[] };
  finalCta: { heading: string; sub: string };
  footer: {
    tagline: string;
    servicesTitle: string;
    contactTitle: string;
    location: string;
    privacy: string;
    terms: string;
    rights: string;
  };
}

const bookingBasesEn = ["Hourly", "Weekly", "Monthly", "Long-Term"];
const bookingBasesAr = ["بالساعة", "أسبوعي", "شهري", "طويل الأمد"];

export const bookingBasisOptions = (lang: Lang) =>
  lang === "en" ? bookingBasesEn : bookingBasesAr;

export const en: Content = {
  lang: "en",
  dir: "ltr",
  htmlLang: "en",
  seo: {
    title: "Maid Services Riyadh | Home & Deep Cleaning, Care — 24/7",
    description:
      "Maid services in Riyadh: home cleaning, deep cleaning, cooking, child care and elderly care. Available 24/7. Hourly, weekly, monthly or long-term. Call 0570567188.",
    ogTitle: "Reliable Maid & Home Care Services in Riyadh",
    ogDescription:
      "Cleaning, deep cleaning, cooking, child care and elderly care for Riyadh homes. Available 24/7 — hourly, weekly, monthly and long-term bookings.",
  },
  brand: "Riyadh Home Care",
  banner: {
    availability: "Available 24/7",
    call: `Call ${PHONE_DISPLAY}`,
    whatsapp: "Chat on WhatsApp",
  },
  nav: {
    services: "Services",
    why: "Why Choose Us",
    faq: "FAQs",
    contact: "Contact",
    callNow: `Call Now — ${PHONE_DISPLAY}`,
  },
  switcher: { toEn: "English", toAr: "العربية", label: "Language" },
  hero: {
    h1: "Reliable Maid & Home Care Services in Riyadh",
    sub: "Professional cleaning, deep cleaning, cooking, childcare and elderly care services for homes and families in Riyadh.",
    locality: "Serving Riyadh, Saudi Arabia",
    availability: "Available 24/7 · Hourly, Weekly, Monthly & Long-Term Bookings",
    primary: `Call Now — ${PHONE_DISPLAY}`,
    secondary: "Request a Quote",
    imageAlt:
      "Professional maid in uniform cleaning a kitchen counter in a bright Riyadh home",
  },
  trust: {
    heading: "Why families in Riyadh call us",
    items: [
      "Professional Service",
      "Reliable & Convenient",
      "Home Service",
      "Riyadh Based",
      "Quick Response",
      "Customer Focused",
      "Available 24/7",
      "Flexible Hourly/Weekly/Monthly/Long-Term Booking",
    ],
  },
  services: {
    heading: "Our Home Services in Riyadh",
    intro:
      "Six home services, one phone number. Book any of them by the hour, week, month or long-term — any time of day or night.",
    items: [
      {
        key: "maid",
        title: "Maid Services",
        desc: "Everyday household help — tidying, laundry, dishes and general upkeep of your home.",
        cta: "Book Maid Service",
        alt: "Housekeeper folding fresh laundry in a tidy bedroom",
      },
      {
        key: "cleaning",
        title: "Home Cleaning",
        desc: "Regular cleaning for apartments and villas across Riyadh, on the schedule you choose.",
        cta: "Book Cleaning",
        alt: "Clean and bright living room in a Riyadh home after cleaning",
      },
      {
        key: "deep",
        title: "Deep Cleaning",
        desc: "Thorough top-to-bottom cleaning for kitchens, bathrooms, floors and hard-to-reach areas.",
        cta: "Request Deep Cleaning",
        alt: "Deep cleaning of a bathroom with professional equipment",
      },
      {
        key: "cooking",
        title: "Cooking Services",
        desc: "Home cooking help for daily meals, family gatherings or weekly meal preparation.",
        cta: "Ask About Cooking Service",
        alt: "Home cook preparing fresh vegetables in a home kitchen",
      },
      {
        key: "child",
        title: "Child Care",
        desc: "Attentive care and supervision for your children in the comfort of your own home.",
        cta: "Ask About Child Care",
        alt: "Caregiver playing with young children in a family living room",
      },
      {
        key: "elderly",
        title: "Elderly Care",
        desc: "Respectful day-to-day assistance and companionship for elderly family members at home.",
        cta: "Ask About Elderly Care",
        alt: "Caregiver assisting a smiling elderly person at home",
      },
    ],
  },
  booking: {
    heading: "Book on your terms — and at any hour",
    note: "Every service above is available 24/7 on the booking basis that suits your household.",
    items: [
      { title: "Hourly", desc: "For one-off or occasional needs" },
      { title: "Weekly", desc: "Recurring help on a set day and time" },
      { title: "Monthly", desc: "Ongoing regular service" },
      { title: "Long-Term", desc: "Extended, continuous placement" },
    ],
  },
  why: {
    heading: "Why Choose Us",
    items: [
      {
        title: "Convenient Home Service",
        desc: "Our team comes to your home in Riyadh — you don't have to arrange anything else.",
      },
      {
        title: "Easy Booking",
        desc: "One call to 0570567188 and we arrange the service, schedule and details with you.",
      },
      {
        title: "Multiple Home Services in One Place",
        desc: "Cleaning, cooking, child care and elderly care from a single point of contact.",
      },
      {
        title: "Riyadh-Focused",
        desc: "We serve homes and families in Riyadh, Saudi Arabia.",
      },
      {
        title: "Customer-Focused",
        desc: "We listen to what your home needs and arrange the service around it.",
      },
      {
        title: "Available 24/7",
        desc: "Call us any time, day or night, to discuss what you need.",
      },
      {
        title: "Flexible Booking Options",
        desc: "Hourly, weekly, monthly and long-term arrangements are all available.",
      },
    ],
  },
  how: {
    heading: "How It Works",
    steps: [
      {
        title: "Contact Us",
        desc: `Call ${PHONE_DISPLAY} and tell us what you need help with at home.`,
      },
      {
        title: "Discuss Your Requirement",
        desc: "We go through your home, the service type and the schedule that works for you.",
      },
      {
        title: "Arrange Your Service",
        desc: "We confirm the details and timing, and your service is arranged.",
      },
    ],
    cta: `Call Now — ${PHONE_DISPLAY}`,
  },
  areas: {
    heading: "Maid & Home Services in Riyadh",
    body: [
      "We provide maid services, home cleaning, deep cleaning, cooking, child care and elderly care for homes and families in Riyadh, Saudi Arabia.",
      "Whether you live in an apartment or a villa, our team comes to your home. Call 0570567188 at any time to check availability for your address and preferred schedule.",
    ],
  },
  form: {
    heading: "Need Help at Home? Get in Touch Today",
    sub: "Send your details and we'll get back to you to arrange the service.",
    name: "Name",
    phone: "Phone Number",
    service: "Service Required",
    basis: "Booking Basis",
    datetime: "Preferred Date/Time",
    message: "Message",
    submit: "Request a Quote",
    submitting: "Sending…",
    callLine: `Prefer to speak directly? Call ${PHONE_DISPLAY}`,
    choose: "Please choose",
    success:
      "Thank you — your request has been received. We'll contact you shortly. For an immediate response, call 0570567188.",
    errors: {
      name: "Please enter your name.",
      phone: "Please enter a valid phone number.",
      service: "Please select a service.",
      basis: "Please select a booking basis.",
      generic: "Something went wrong. Please try again or call 0570567188.",
    },
  },
  phoneBlock: {
    heading: "Need a Maid or Home Service in Riyadh?",
    sub: "We're available 24/7 — hourly, weekly, monthly or long-term.",
    cta: `Call Now — ${PHONE_DISPLAY}`,
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      { q: "What areas do you serve?", a: "We serve Riyadh, Saudi Arabia." },
      {
        q: "What services do you provide?",
        a: "Maid services, home cleaning, deep cleaning, cooking services, child care and elderly care.",
      },
      {
        q: "How can I book a service?",
        a: `Call ${PHONE_DISPLAY} and we'll arrange it with you.`,
      },
      {
        q: "Can I request a quote?",
        a: `Yes — call ${PHONE_DISPLAY} or send the request form on this page.`,
      },
      {
        q: "Do you provide home services?",
        a: "Yes, all of our services are carried out at the customer's home.",
      },
      {
        q: "How quickly can I get a response?",
        a: `Call ${PHONE_DISPLAY} and we'll discuss current availability with you.`,
      },
      {
        q: "Are you available 24/7?",
        a: `Yes. You can contact us at any time on ${PHONE_DISPLAY}.`,
      },
      {
        q: "Can I book by the hour, week, month, or long-term?",
        a: "Yes — hourly, weekly, monthly and long-term bookings are all available. Call us to discuss what fits your needs.",
      },
    ],
  },
  finalCta: {
    heading: "Looking for Reliable Home Services in Riyadh?",
    sub: "Call us now or send a quote request — we're available 24/7.",
  },
  footer: {
    tagline:
      "Maid and home care services for homes and families in Riyadh, Saudi Arabia. Available 24/7.",
    servicesTitle: "Services",
    contactTitle: "Contact",
    location: "Riyadh, Saudi Arabia",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    rights: "All rights reserved.",
  },
};

export const ar: Content = {
  lang: "ar",
  dir: "rtl",
  htmlLang: "ar",
  seo: {
    title: "خدمات منزلية الرياض | عاملة منزلية وتنظيف منازل على مدار الساعة",
    description:
      "خدمات منزلية في الرياض: عاملة منزلية، تنظيف منازل، تنظيف عميق، طبخ، رعاية أطفال ورعاية مسنين. متوفرون على مدار الساعة، وحجز بالساعة أو أسبوعي أو شهري. اتصل 0570567188.",
    ogTitle: "خدمات منزلية وعاملات منزل موثوقة في الرياض",
    ogDescription:
      "تنظيف منازل، تنظيف عميق، طبخ، رعاية أطفال ورعاية مسنين في الرياض. متوفرون على مدار الساعة · حجز بالساعة، أسبوعي، شهري أو طويل الأمد.",
  },
  brand: "الرياض للخدمات المنزلية",
  banner: {
    availability: "متوفرون على مدار الساعة",
    call: `اتصل ${PHONE_DISPLAY}`,
    whatsapp: "تواصل عبر واتساب",
  },
  nav: {
    services: "خدماتنا",
    why: "لماذا تختارنا",
    faq: "الأسئلة الشائعة",
    contact: "تواصل معنا",
    callNow: `اتصل الآن — ${PHONE_DISPLAY}`,
  },
  switcher: { toEn: "English", toAr: "العربية", label: "اللغة" },
  hero: {
    h1: "خدمات منزلية وعاملات منزل موثوقة في الرياض",
    sub: "خدمات تنظيف احترافية، تنظيف عميق، طبخ، رعاية أطفال ورعاية مسنين لمنازل وعائلات الرياض.",
    locality: "نخدم مدينة الرياض، المملكة العربية السعودية",
    availability:
      "متوفرون على مدار الساعة طوال أيام الأسبوع · حجز بالساعة، أسبوعي، شهري، أو طويل الأمد",
    primary: `اتصل الآن — ${PHONE_DISPLAY}`,
    secondary: "اطلب عرض سعر",
    imageAlt: "عاملة منزلية محترفة تنظف مطبخ منزل حديث في الرياض",
  },
  trust: {
    heading: "لماذا تتصل بنا عائلات الرياض",
    items: [
      "خدمة احترافية",
      "موثوقية وراحة",
      "الخدمة في منزلك",
      "مقرنا الرياض",
      "استجابة سريعة",
      "اهتمام بالعميل",
      "متوفر على مدار الساعة",
      "حجز مرن بالساعة / أسبوعي / شهري / طويل الأمد",
    ],
  },
  services: {
    heading: "خدماتنا المنزلية في الرياض",
    intro:
      "ست خدمات منزلية برقم واحد. احجز أي منها بالساعة أو أسبوعياً أو شهرياً أو طويل الأمد، في أي وقت ليلاً أو نهاراً.",
    items: [
      {
        key: "maid",
        title: "خدمات العاملة المنزلية",
        desc: "مساعدة يومية في المنزل: الترتيب، الغسيل، الأواني والعناية العامة بالمنزل.",
        cta: "احجز عاملة منزلية",
        alt: "عاملة منزلية ترتب الملابس النظيفة في غرفة نوم مرتبة",
      },
      {
        key: "cleaning",
        title: "تنظيف المنازل",
        desc: "تنظيف دوري للشقق والفلل في جميع أنحاء الرياض، وفق الجدول الذي يناسبك.",
        cta: "احجز خدمة تنظيف",
        alt: "غرفة معيشة نظيفة ومشرقة في منزل بالرياض بعد التنظيف",
      },
      {
        key: "deep",
        title: "تنظيف عميق",
        desc: "تنظيف شامل للمطابخ ودورات المياه والأرضيات والأماكن التي يصعب الوصول إليها.",
        cta: "اطلب تنظيفاً عميقاً",
        alt: "تنظيف عميق لدورة مياه باستخدام معدات احترافية",
      },
      {
        key: "cooking",
        title: "خدمات الطبخ",
        desc: "مساعدة في الطبخ المنزلي للوجبات اليومية أو المناسبات العائلية أو تحضير وجبات الأسبوع.",
        cta: "استفسر عن خدمة الطبخ",
        alt: "طاهية منزلية تحضّر خضاراً طازجة في مطبخ المنزل",
      },
      {
        key: "child",
        title: "رعاية الأطفال",
        desc: "رعاية ومتابعة باهتمام لأطفالك داخل منزلكم وفي بيئة مألوفة لهم.",
        cta: "استفسر عن رعاية الأطفال",
        alt: "مربية تلعب مع طفلين في غرفة معيشة عائلية",
      },
      {
        key: "elderly",
        title: "رعاية كبار السن",
        desc: "مساعدة يومية باحترام ومؤانسة لكبار السن في المنزل.",
        cta: "استفسر عن رعاية كبار السن",
        alt: "مقدمة رعاية تساعد مسناً مبتسماً في المنزل",
      },
    ],
  },
  booking: {
    heading: "احجز بالطريقة التي تناسبك — وفي أي وقت",
    note: "جميع الخدمات أعلاه متوفرة على مدار الساعة وبنوع الحجز الذي يناسب منزلك.",
    items: [
      { title: "بالساعة", desc: "للاحتياجات المؤقتة أو من حين لآخر" },
      { title: "أسبوعي", desc: "مساعدة متكررة في يوم ووقت محددين" },
      { title: "شهري", desc: "خدمة منتظمة ومستمرة" },
      { title: "طويل الأمد", desc: "تعاقد ممتد ومستمر" },
    ],
  },
  why: {
    heading: "لماذا تختارنا",
    items: [
      {
        title: "الخدمة في منزلك",
        desc: "فريقنا يصل إلى منزلك في الرياض دون أي ترتيبات إضافية منك.",
      },
      {
        title: "حجز سهل",
        desc: "اتصال واحد على 0570567188 ونرتب معك الخدمة والموعد والتفاصيل.",
      },
      {
        title: "خدمات منزلية متعددة في مكان واحد",
        desc: "تنظيف وطبخ ورعاية أطفال ورعاية كبار السن من خلال جهة اتصال واحدة.",
      },
      { title: "تركيز على الرياض", desc: "نخدم منازل وعائلات مدينة الرياض." },
      {
        title: "اهتمام بالعميل",
        desc: "نستمع لاحتياج منزلك ونرتب الخدمة بما يناسبه.",
      },
      {
        title: "متوفرون على مدار الساعة",
        desc: "اتصل بنا في أي وقت، ليلاً أو نهاراً، لمناقشة ما تحتاجه.",
      },
      {
        title: "خيارات حجز مرنة",
        desc: "حجز بالساعة أو أسبوعي أو شهري أو طويل الأمد.",
      },
    ],
  },
  how: {
    heading: "كيف تتم الخدمة",
    steps: [
      {
        title: "تواصل معنا",
        desc: `اتصل على ${PHONE_DISPLAY} وأخبرنا بما تحتاجه في منزلك.`,
      },
      {
        title: "نناقش طلبك",
        desc: "نتحدث عن المنزل ونوع الخدمة والجدول الزمني المناسب لك.",
      },
      {
        title: "نرتّب الخدمة",
        desc: "نؤكد التفاصيل والتوقيت ويتم ترتيب الخدمة.",
      },
    ],
    cta: `اتصل الآن — ${PHONE_DISPLAY}`,
  },
  areas: {
    heading: "خدمات منزلية وعاملات منزل في الرياض",
    body: [
      "نقدم خدمات العاملة المنزلية، تنظيف المنازل، التنظيف العميق، الطبخ، رعاية الأطفال ورعاية كبار السن لمنازل وعائلات الرياض، المملكة العربية السعودية.",
      "سواء كنت تسكن في شقة أو فيلا، يصل فريقنا إلى منزلك. اتصل على 0570567188 في أي وقت للاستفسار عن التوفر لعنوانك والموعد الذي تفضله.",
    ],
  },
  form: {
    heading: "تحتاج مساعدة في منزلك؟ تواصل معنا اليوم",
    sub: "أرسل بياناتك وسنعاود التواصل معك لترتيب الخدمة.",
    name: "الاسم",
    phone: "رقم الجوال",
    service: "الخدمة المطلوبة",
    basis: "نوع الحجز",
    datetime: "الوقت المفضل",
    message: "ملاحظات",
    submit: "اطلب عرض سعر",
    submitting: "جارٍ الإرسال…",
    callLine: `تفضل التحدث مباشرة؟ اتصل على ${PHONE_DISPLAY}`,
    choose: "اختر من القائمة",
    success:
      "شكراً لك — تم استلام طلبك وسنتواصل معك قريباً. وللرد الفوري اتصل على 0570567188.",
    errors: {
      name: "الرجاء إدخال الاسم.",
      phone: "الرجاء إدخال رقم جوال صحيح.",
      service: "الرجاء اختيار الخدمة.",
      basis: "الرجاء اختيار نوع الحجز.",
      generic: "حدث خطأ ما. حاول مرة أخرى أو اتصل على 0570567188.",
    },
  },
  phoneBlock: {
    heading: "تحتاج عاملة منزلية أو خدمة منزلية في الرياض؟",
    sub: "متوفرون على مدار الساعة — بالساعة أو أسبوعي أو شهري أو طويل الأمد.",
    cta: `اتصل الآن — ${PHONE_DISPLAY}`,
  },
  faq: {
    heading: "الأسئلة الشائعة",
    items: [
      { q: "ما المناطق التي تخدمونها؟", a: "نخدم مدينة الرياض، المملكة العربية السعودية." },
      {
        q: "ما الخدمات التي تقدمونها؟",
        a: "خدمات العاملة المنزلية، تنظيف المنازل، التنظيف العميق، خدمات الطبخ، رعاية الأطفال ورعاية كبار السن.",
      },
      { q: "كيف أحجز الخدمة؟", a: `اتصل على ${PHONE_DISPLAY} وسنرتب معك الحجز.` },
      {
        q: "هل يمكنني طلب عرض سعر؟",
        a: `نعم — اتصل على ${PHONE_DISPLAY} أو أرسل النموذج في هذه الصفحة.`,
      },
      {
        q: "هل تقدمون الخدمة في المنزل؟",
        a: "نعم، جميع خدماتنا تُنفذ داخل منزل العميل.",
      },
      {
        q: "ما سرعة الرد على طلبي؟",
        a: `اتصل على ${PHONE_DISPLAY} ونناقش معك التوفر الحالي.`,
      },
      {
        q: "هل أنتم متوفرون على مدار الساعة؟",
        a: `نعم، يمكنك التواصل معنا في أي وقت على ${PHONE_DISPLAY}.`,
      },
      {
        q: "هل يمكن الحجز بالساعة أو أسبوعياً أو شهرياً أو طويل الأمد؟",
        a: "نعم، جميع خيارات الحجز متاحة: بالساعة، أسبوعي، شهري وطويل الأمد. اتصل بنا لنحدد ما يناسب احتياجك.",
      },
    ],
  },
  finalCta: {
    heading: "تبحث عن خدمات منزلية موثوقة في الرياض؟",
    sub: "اتصل بنا الآن أو أرسل طلب عرض سعر — متوفرون على مدار الساعة.",
  },
  footer: {
    tagline:
      "خدمات منزلية ورعاية منزلية لمنازل وعائلات الرياض، المملكة العربية السعودية. متوفرون على مدار الساعة.",
    servicesTitle: "الخدمات",
    contactTitle: "تواصل معنا",
    location: "الرياض، المملكة العربية السعودية",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    rights: "جميع الحقوق محفوظة.",
  },
};

export const content: Record<Lang, Content> = { en, ar };

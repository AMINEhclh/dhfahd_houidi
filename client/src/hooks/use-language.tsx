import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "fr" | "ar";

interface LanguageContextType {
  language: Language;
  direction: "ltr" | "rtl";
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.specialties": "Spécialités",
    "nav.qualifications": "Qualifications",
    "nav.cabinet": "Cabinet",
    "nav.contact": "Contact",
    "hero.subtitle": "Chirurgien Ophtalmologiste",
    "hero.title": "Dr. Amine El-Oueriachi",
    "hero.description": "Expertise médicale de pointe pour la santé de vos yeux. Consultations, chirurgie et suivi personnalisé.",
    "hero.cta": "Prendre rendez-vous",
    "about.title": "À propos du Docteur",
    "about.text": "Le Dr. Amine El-Oueriachi est un spécialiste reconnu en ophtalmologie, dédié à fournir des soins oculaires exceptionnels. Avec une approche centrée sur le patient et l'utilisation des dernières technologies, il traite une large gamme de pathologies oculaires.",
    "specialties.title": "Nos Spécialités",
    "spec.cataract": "Chirurgie de la Cataracte",
    "spec.refractive": "Chirurgie Réfractive (Lasik)",
    "spec.glaucoma": "Glaucome",
    "spec.retina": "Maladies de la Rétine",
    "spec.pediatric": "Ophtalmologie Pédiatrique",
    "spec.lenses": "Lentilles de Contact",
    "qualifications.title": "Qualifications & Diplômes",
    "cabinet.title": "Le Cabinet",
    "info.hours": "Horaires d'ouverture",
    "info.hours.text": "Lundi - Vendredi: 09:00 - 18:00\nSamedi: 09:00 - 13:00",
    "info.payment": "Modes de règlement",
    "info.payment.text": "Espèces, Chèque, Assurance Maladie",
    "contact.title": "Contactez-nous",
    "contact.name": "Nom complet",
    "contact.phone": "Numéro de téléphone",
    "contact.message": "Message (Optionnel)",
    "contact.submit": "Envoyer",
    "contact.sending": "Envoi en cours...",
    "location.title": "Localisation",
    "location.address": "123 Avenue Mohamed V, Tanger, Maroc",
    "footer.rights": "Tous droits réservés.",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عنا",
    "nav.specialties": "الاختصاصات",
    "nav.qualifications": "المؤهلات",
    "nav.cabinet": "العيادة",
    "nav.contact": "اتصل بنا",
    "hero.subtitle": "جراح العيون",
    "hero.title": "د. أمين الورياشي",
    "hero.description": "خبرة طبية متقدمة لصحة عيونكم. استشارات، جراحة ومتابعة شخصية.",
    "hero.cta": "حجز موعد",
    "about.title": "نبذة عن الدكتور",
    "about.text": "الدكتور أمين الورياشي أخصائي معترف به في طب العيون، مكرس لتقديم رعاية استثنائية للعيون. مع نهج يركز على المريض واستخدام أحدث التقنيات، يعالج مجموعة واسعة من أمراض العيون.",
    "specialties.title": "اختصاصاتنا",
    "spec.cataract": "جراحة المياه البيضاء (الجلالة)",
    "spec.refractive": "تصحيح النظر (الليزك)",
    "spec.glaucoma": "المياه الزرقاء (الضغط)",
    "spec.retina": "أمراض الشبكية",
    "spec.pediatric": "طب عيون الأطفال",
    "spec.lenses": "العدسات اللاصقة",
    "qualifications.title": "المؤهلات والشهادات",
    "cabinet.title": "العيادة",
    "info.hours": "ساعات العمل",
    "info.hours.text": "الإثنين - الجمعة: 09:00 - 18:00\nالسبت: 09:00 - 13:00",
    "info.payment": "طرق الدفع",
    "info.payment.text": "نقد، شيك، التأمين الصحي",
    "contact.title": "اتصل بنا",
    "contact.name": "الاسم الكامل",
    "contact.phone": "رقم الهاتف",
    "contact.message": "رسالة (اختياري)",
    "contact.submit": "إرسال",
    "contact.sending": "جاري الإرسال...",
    "location.title": "الموقع",
    "location.address": "123 شارع محمد الخامس، طنجة، المغرب",
    "footer.rights": "جميع الحقوق محفوظة.",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const direction = language === "ar" ? "rtl" : "ltr";

  // Update HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["fr"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

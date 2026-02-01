import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { 
  Eye, 
  Glasses, 
  ScanEye, 
  Baby, 
  Microscope, 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CreditCard,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { t, direction } = useLanguage();

  const specialties = [
    { icon: Eye, key: "spec.cataract" },
    { icon: Glasses, key: "spec.refractive" },
    { icon: Activity, key: "spec.glaucoma" },
    { icon: ScanEye, key: "spec.retina" },
    { icon: Baby, key: "spec.oculoplasty" },
    { icon: Microscope, key: "spec.lenses" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-start z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                  {t("hero.subtitle")}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                  {t("hero.title")}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {t("hero.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t("hero.cta")}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-secondary/5 text-primary"
                    onClick={() => document.querySelector('#specialties')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t("nav.specialties")}
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                {/* Doctor Placeholder Image */}
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-gray-200 to-gray-100 relative">
                   {/* Unsplash doctor image */}
                   {/* <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60" 
                    alt="Dr Fahd Jendoubi" 
                    className="w-full h-full object-cover"
                  /> */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                    <Eye className="w-32 h-32" />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>

                {/* Floating card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 md:left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 max-w-[200px]"
                >
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Expert</p>
                    <p className="text-xs text-muted-foreground">Chirurgie oculaire</p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Background decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 order-2 md:order-1">
               {/* Unsplash abstract medical or eye anatomy */}
               {/* <img 
                 src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop"
                 alt="Ophtalmology"
                 className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-video"
               /> */}
               <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-muted-foreground">
                 <ScanEye className="w-24 h-24 opacity-20" />
               </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <SectionHeader title={t("about.title")} subtitle={t("nav.about")} centered={false} />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.text")}
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-medium text-foreground">Diplômé en Ophtalmologie</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-medium text-foreground">Chirurgie Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-medium text-foreground">Technologie Avancée</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-medium text-foreground">Suivi Personnalisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section id="specialties" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title={t("specialties.title")} subtitle={t("nav.specialties")} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {specialties.map((spec, idx) => (
              <motion.div
                key={spec.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <spec.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t(spec.key)}</h3>
                <p className="text-muted-foreground text-sm">
                  {t("hero.description").substring(0, 50)}...
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications & Cabinet Photos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Qualifications */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-secondary" />
                {t("qualifications.title")}
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-1.5 h-full rounded-full bg-primary/20 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t("qual.doctorate")}</h4>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-1.5 h-full rounded-full bg-primary/20 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t("qual.specialty")}</h4>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-1.5 h-full rounded-full bg-primary/20 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t("qual.masters")}</h4>
                    <ul className="text-sm text-gray-500 mt-2 space-y-1">
                      <li>• {t("qual.contactology")}</li>
                      <li>• {t("qual.microsurgery")}</li>
                      <li>• {t("qual.oculoplasty")}</li>
                      <li>• {t("qual.neuro")}</li>
                      <li>• {t("qual.trauma")}</li>
                      <li>• {t("qual.uveitis")}</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Cabinet Photos Grid */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-secondary" />
                {t("cabinet.title")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                    {/* Unsplash clinic interior */}
                    {/* <img 
                      src={`https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&fit=crop`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt="Cabinet" 
                    /> */}
                     <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400">Photo {i}</span>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Contact Section */}
      <section id="contact" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title={t("contact.title")} subtitle={t("nav.contact")} />
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Info */}
            <div className="space-y-8">
              {/* Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{t("info.hours")}</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>{t("info.hours.weekdays")}</p>
                      <p>{t("info.hours.saturday")}</p>
                      <p>{t("info.hours.sunday")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-lg text-secondary">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{t("info.payment")}</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>{t("info.payment.cash")}</p>
                      <p>{t("info.payment.cnam")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="space-y-4">
                   <div className="flex items-center gap-3 text-gray-600">
                     <Phone className="w-5 h-5 text-primary" />
                     <span dir="ltr">+216 20 988 415</span>
                   </div>
                   <div className="flex items-center gap-3 text-gray-600">
                     <Phone className="w-5 h-5 text-primary" />
                     <span dir="ltr">+216 20 988 742</span>
                   </div>
                   <div className="flex items-center gap-3 text-gray-600">
                     <Mail className="w-5 h-5 text-primary" />
                     <span>jendoubi.fahd@gmail.com</span>
                   </div>
                   <div className="flex items-center gap-3 text-gray-600">
                     <MapPin className="w-5 h-5 text-primary" />
                     <span>{t("location.address")}</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 font-medium flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Google Maps Integration
          </p>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5097789438!2d10.1634!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sEzzahrouni%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1620000000000!5m2!1sfr!2stn" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-start">
              <h2 className="text-2xl font-bold mb-2">Dr Fahd Jendoubi</h2>
              <p className="text-blue-200 text-sm">{t("hero.subtitle")}</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-blue-200">
            <p>&copy; {new Date().getFullYear()} Dr Fahd Jendoubi. {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

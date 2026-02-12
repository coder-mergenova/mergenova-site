import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mic2, 
  FileText, 
  Music, 
  UserRound, 
  Cpu, 
  ShieldCheck, 
  Mail, 
  Globe, 
  Linkedin,
  MapPin,
  ChevronRight, 
  Menu, 
  X,
  PlayCircle,
  Database,
  Search,
  BookOpen
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import logo from "@/assets/44537f4cd82f2a257d5e6693bed837bbd1905e75.png";
import techImage from "@/assets/bb3f9d23e5ff722e8b7f9a3127f72af4103da282.png";
import privacyImage from "@/assets/cc3849f049cd4e48ed71daac3ab5e6ef4217d55b.png";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hakkımızda", href: "#hero" },
    { name: "Hizmetler", href: "#services" },
    { name: "Ürünler", href: "#product" },
    { name: "Teknoloji", href: "#tech" },
    { name: "Vizyon", href: "#vision" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/90 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="relative group">
          {/* Soft indigo-tinted light background to prevent the "glaring white" effect */}
          <div className="bg-indigo-50/90 backdrop-blur-sm px-[20px] py-0 rounded-2xl transition-all hover:bg-indigo-100 flex items-center justify-center h-[80px] md:h-[110px] border border-indigo-200/50 shadow-lg overflow-hidden group">
            <ImageWithFallback 
              src={logo} 
              alt="Mergenova Logo" 
              className="h-full w-auto object-contain scale-[1.1] relative z-10" 
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-indigo-400 transition-colors font-medium">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-300 text-lg py-2 border-b border-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-48 overflow-hidden bg-slate-950">
    <div className="absolute inset-0 z-0 opacity-40">
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwc291bmQlMjB3YXZlcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNzIyMjYyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
        alt="AI Sound Technology Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-600/20 text-indigo-400 border border-indigo-600/30 text-sm font-semibold mb-6">
            Mergenova Yazılım Ltd. Şti.
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Ses Teknolojileri ve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Yapay Zeka Çözümleri
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Mergenova Yazılım Ltd. Şti., ses ve müzik teknolojileri alanında yapay zeka tabanlı yazılımlar geliştiren bir teknoloji şirketidir. 
            Ses analizinden konuşmadan metne dönüşüme kadar her alanda yanınızdayız.
          </p>
          <div className="flex flex-wrap gap-4 relative z-10">
            <a href="#services" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2">
              Çözümlerimizi Keşfedin <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#product" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700">
              Ürünümüz: TonTon Karaoke
            </a>
          </div>

          {/* Waveform positioned 20px below the buttons container */}
          <div className="mt-[20px] w-full flex justify-around items-center pointer-events-none opacity-40 h-24">
             {[...Array(60)].map((_, i) => (
               <motion.div
                 key={i}
                 animate={{ 
                   height: [
                     Math.random() * 15 + 10, 
                     Math.random() * 40 + 20, 
                     Math.random() * 15 + 10, 
                     Math.random() * 50 + 20, 
                     Math.random() * 15 + 10
                   ] 
                 }}
                 transition={{ 
                   duration: 1 + Math.random(), 
                   repeat: Infinity, 
                   ease: "easeInOut",
                   delay: i * 0.02 
                 }}
                 className="w-1 md:w-1.5 bg-indigo-500/60 rounded-full"
               />
             ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Ses Analizi ve İşleme",
      description: "Pitch, ton, zamanlama ve akustik özelliklerin profesyonel düzeyde analiz edilmesi.",
      icon: Mic2,
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Sesten Metne (STT)",
      description: "Türkçe odaklı, zaman damgalı ve yüksek doğluklu ses-metin dönüşüm çözümleri.",
      icon: FileText,
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      title: "Müzik ve Vokal Teknolojileri",
      description: "Karaoke, vokal ayrıştırma, ton tespiti ve otomatik transpozisyon sistemleri.",
      icon: Music,
      color: "bg-pink-500/10 text-pink-400 border-pink-500/20"
    },
    {
      title: "Kişiselleştirilmiş AI",
      description: "Kullanıcının sesine, tonuna ve performansına uyumlanan dinamik yapay zeka sistemleri.",
      icon: UserRound,
      color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Biz Ne Yapıyoruz?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mergenova, modern yapay zeka ve sinyal işleme tekniklerini kullanarak ses dünyasını dijital bir veriye dönüştürür.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl border ${service.color} transition-all duration-300`}
            >
              <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Product = () => {
  const features = [
    "Kullanıcıya özel otomatik ton tespiti",
    "Gerçek zamanlı transpozisyon",
    "Zaman damgalı karaoke altyazıları",
    "Performans analizi ve oyunlaştırma",
    "Mobil odaklı, ölçeklenebilir altyapı"
  ];

  return (
    <section id="product" className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Ana Ürünümüz</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">TonTon Karaoke</h2>
            <p className="text-xl text-indigo-100 font-semibold mb-6">Kişisel tona göre çalışan yapay zeka destekli karaoke platformu.</p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              TonTon Karaoke, Mergenova Yazılım’ın amiral gemisi ürünüdür. Uygulama, kullanıcının ses tonunu analiz ederek 
              her şarkıyı kişiye özel olarak uyarlayan patentli bir teknolojiye sahiptir. Eğlence ile yapay zekayı birleştiren, 
              global ölçekte ölçeklenebilir bir ses teknolojisi ürünüdür.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600/20 border border-indigo-600/40 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl font-bold transition-all">
              <PlayCircle className="w-5 h-5" /> Deneyimlemeye Başla
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-slate-800 shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1725429453819-bb592b758e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbiUyMHNpbmdpbmclMjBrYXJhb2tlJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3MDcyMjI2Mnww"
                alt="TonTon Karaoke App View"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl w-full border border-white/20">
                  <div className="flex justify-between items-center text-white">
                    <div>
                      <p className="text-xs uppercase opacity-70">ŞU AN ŞARKI SÖYLÜYORSUN</p>
                      <p className="font-bold">Kendi tonunda çok iyisin.</p>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4].map(i => <div key={i} className="w-1 h-4 bg-indigo-400 animate-pulse" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/10 blur-[100px] rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Technology = () => (
  <section id="tech" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-6">Teknoloji Yaklaşımımız</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed italic">
            "Araştırma Odaklı ve Ölçeklenebilir"
          </p>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Mergenova, ürünlerini yalnızca uygulama seviyesinde değil, altyapı ve Ar-Ge seviyesinde geliştirir. Geliştirdiğimiz teknolojiler, 
            eğlence uygulamalarının ötesinde; eğitim, arşivleme ve dijital kültür alanlarına genişletilebilir yapıdadır.
          </p>

          <div className="space-y-6">
            {[
              { title: "Yapay zeka destekli ses işleme pipeline’ları", icon: Cpu },
              { title: "Modüler ve API tabanlı mimari", icon: Database },
              { title: "Mobil, web ve bulut uyumlu çözümler", icon: Globe },
              { title: "Sürekli öğrenen ve gelişen sistemler", icon: Search },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <item.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
             <ImageWithFallback 
                src={techImage}
                alt="Mergenova Audio AI Research Lab"
                className="w-full h-[500px] object-cover"
             />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Vision = () => {
  const sections = [
    {
      title: "Eğlence ve Yaratıcılık",
      desc: "TonTon Karaoke ve benzeri ses tabanlı deneyimlerle yaratıcılığı teknolojiyle buluşturuyoruz.",
      icon: Music,
      items: ["Sürükleyici ses deneyimleri", "Sosyal müzik paylaşımı"]
    },
    {
      title: "Eğitim ve Öğrenme",
      desc: "Şan, diksiyon ve müzik eğitimi için yapay zeka destekli geri bildirim sistemleri.",
      icon: BookOpen,
      items: ["Sesle öğrenme modülleri", "Dinamik performans analizi"]
    },
    {
      title: "Dijital Ses Arşivleme",
      desc: "Kültürel ve sanatsal içeriklerin zaman damgalı ve anlamlandırılmış dijital korunması.",
      icon: Database,
      items: ["Akıllı arama sistemleri", "Kültürel mirasın dijitalizasyonu"]
    }
  ];

  return (
    <section id="vision" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Gelecek Vizyonu</h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic">"Sesten Öğrenmeye, Sesten Arşive"</p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              className="relative p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                <section.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mt-4 mb-4">{section.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{section.desc}</p>
              <ul className="space-y-3">
                {section.items.map(item => (
                  <li key={item} className="text-indigo-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-indigo-900/20 rounded-3xl border border-indigo-500/20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Hedefimiz</h3>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto font-light">
              "Sesi geleceğin en güçlü dijital verilerinden biri haline getirmek."
            </p>
          </div>
          {/* Decorative element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const Privacy = () => (
  <section className="py-20 bg-slate-900 border-y border-slate-800">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <ShieldCheck className="text-indigo-400 w-8 h-8" /> Güvenilir ve Şeffaf
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3 text-slate-300">
              <span className="text-indigo-400 mt-1">•</span>
              <p>Kullanıcı gizliliğine öncelik veririz. Ses verileri yalnızca belirtilen amaçlar doğrultusunda işlenir.</p>
            </div>
            <div className="flex gap-3 text-slate-300">
              <span className="text-indigo-400 mt-1">•</span>
              <p>Ürünlerimiz KVKK ve GDPR uyumludur.</p>
            </div>
            <div className="flex gap-3 text-slate-300">
              <span className="text-indigo-400 mt-1">•</span>
              <p>Yapay zeka sistemlerimiz etik ve şeffaf prensiplerle geliştirilir.</p>
            </div>
          </div>
        </div>
        <div className="md:w-5/12 p-2 bg-indigo-600/5 rounded-3xl border border-indigo-600/10 shadow-2xl">
          <div className="overflow-hidden rounded-2xl">
            <ImageWithFallback 
              src={privacyImage}
              alt="KVKK, GDPR and Ethical AI Security"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-sm text-indigo-300 font-medium">Global Güvenlik ve Gizlilik Standartlarına Tam Uyum</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div>
          <div className="flex items-center gap-2 mb-6">
             {/* Matching soft indigo-tinted background for footer logo */}
            <div className="bg-indigo-50/90 backdrop-blur-sm px-[20px] py-0 rounded-2xl flex items-center justify-center h-[80px] md:h-[110px] border border-indigo-200/50 shadow-md overflow-hidden relative">
               <ImageWithFallback 
                src={logo} 
                alt="Mergenova Logo" 
                className="h-full w-auto object-contain scale-[1.1] relative z-10" 
               />
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Mergenova Yazılım Limited Şirketi<br />
            Türkiye merkezli teknoloji firması
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm">İLETİŞİM</h4>
          <div className="space-y-4">
            <a href="mailto:info@mergenova.com.tr" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-400/30">
                <Mail className="w-5 h-5" />
              </div>
              info@mergenova.com.tr
            </a>
            <a href="https://www.mergenova.com.tr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-400/30">
                <Globe className="w-5 h-5" />
              </div>
              www.mergenova.com.tr
            </a>
            <a href="https://www.linkedin.com/company/merganova-yaz%C4%B1l%C4%B1m-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-400/30">
                <Linkedin className="w-5 h-5" />
              </div>
              LinkedIn'de Takip Edin
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">ADRES</h4>
          <a 
            href="https://maps.app.goo.gl/Gz6WAa1PvMvJUEue9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-start gap-4 text-slate-400 hover:text-indigo-400 transition-colors group"
          >
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-400/30 transition-all">
              <MapPin className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-white font-bold text-base leading-tight">
                Mergenova Yazılım Ltd. Şti.
              </span>
              <p className="text-[14px] uppercase leading-[1.8] tracking-wide text-slate-300">
                GÜLBAHÇE MAH. İÇMELER CAD. <br />
                NO: 14 /1 İÇ KAPI NO: B05 <br />
                URLA İZMİR TÜRKİYE
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:translate-x-1 transition-transform">
                Google Haritalar'da Görüntüle <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Mergenova Yazılım Ltd. Şti. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Product />
        <Technology />
        <Vision />
        <Privacy />
      </main>
      <Footer />
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Globe, Code, Download, FlaskConical, Stethoscope, Database, BrainCircuit, HeartPulse } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'bg-white/70 backdrop-blur-xl border border-primary/10 shadow-sm text-primary', targets: navRef.current }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 transition-all duration-500 flex items-center gap-8 text-primary/80 border border-transparent">
      <div className="font-bold font-sans text-xl tracking-tighter text-primary">AGFK</div>
      <div className="hidden md:flex gap-6 font-mono text-sm">
        <a href="#about" className="link-hover hover:text-accent">À propos</a>
        <a href="#experience" className="link-hover hover:text-accent">Expérience</a>
        <a href="#skills" className="link-hover hover:text-accent">Compétences</a>
        <a href="#contact" className="link-hover hover:text-accent">Contact</a>
      </div>
      <a href="#contact" className="magnetic-btn bg-primary text-white px-5 py-2 rounded-full font-sans text-sm font-semibold hover:bg-accent transition-colors">Télécharger CV</a>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] flex flex-col justify-center items-center bg-hero-gradient overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl mx-auto">
        
        <div className="hero-element bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-white/50 text-accent font-mono text-sm font-bold mb-8 shadow-sm flex items-center gap-2">
           <span>⚡</span> En reconversion vers la Tech & le Big Data
        </div>
        
        <h1 className="hero-element font-sans font-extrabold text-5xl md:text-7xl lg:text-[5.5rem] text-primary tracking-tight mb-4 leading-[1.1]">
          Alain Guy Fotso Kamto
        </h1>
        
        <h2 className="hero-element font-serif italic text-3xl md:text-5xl lg:text-5xl text-primary/70 mb-10">
          De la <span className="text-accent_purple font-bold">biologie</span> à la tech, je construis l'<span className="text-accent font-bold">avenir</span> grâce à la <span className="text-accent_purple font-bold">data</span> !
        </h2>
        
        <div className="hero-element flex flex-wrap justify-center items-center gap-4 text-primary font-mono text-sm md:text-base mb-12 bg-white/40 px-8 py-3 rounded-2xl backdrop-blur-md border border-white/50">
          <span>Biologiste</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-70"></span>
          <span>Nutritionniste</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-70"></span>
          <span>Étudiant en Master Big Data</span>
        </div>
        
        <div className="hero-element flex flex-col sm:flex-row gap-4">
          <a href="#" download className="magnetic-btn bg-primary text-white px-8 py-4 rounded-full font-sans font-bold text-lg shadow-xl hover:bg-accent transition-colors">
            Télécharger CV
          </a>
          <a href="#contact" className="magnetic-btn bg-white/60 backdrop-blur-md text-primary border border-primary/20 hover:border-primary/50 px-8 py-4 rounded-full font-sans font-bold text-lg">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.about-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-background rounded-t-[3rem] -mt-10 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/3">
          <h3 className="about-element font-serif italic text-5xl md:text-6xl text-primary leading-none">À propos</h3>
        </div>
        
        <div className="hidden md:block w-px bg-primary/10 about-element"></div>
        
        <div className="md:w-2/3">
          <p className="about-element font-sans text-xl md:text-2xl text-sombre leading-relaxed">
            Je suis convaincu que la technologie et les données peuvent <strong className="text-accent">transformer la santé</strong> et améliorer le monde. Je construis les compétences nécessaires pour développer des solutions innovantes à la croisée de la santé, de l'épidémiologie, de l'Intelligence Artificielle et de la Data Engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  
  const experiences = [
    {
      period: "Oct. 2023 - Présent",
      role: "Vice président",
      company: "Student One Health Innovation Club - SOHIC",
      desc: "Student club sous l'égide de AFROHUN, visant à promouvoir l'approche One Health au travers de campagnes de sensibilisation et projets communautaires."
    },
    {
      period: "Janv. 2022 - Présent",
      role: "CEO & Community Manager",
      company: "BLUE DIGITAL AGENCY",
      desc: "Gestion de communauté en ligne, ghostwriting, email marketing, et copywriting e-commerce pour le développement de la présence digitale."
    },
    {
      period: "Mai 2024 - Août 2024",
      role: "Stagiaire (Épidémiologie & One Health)",
      company: "AFROHUN - CAMEROUN",
      desc: "Formation sur divers aspects du One Health et projet d'épidémiologie au sein de la solution initiative One Health (OHIS)."
    },
    {
      period: "Sept. 2022 - Mars 2023",
      role: "Freelance Senior Copywriter",
      company: "5euros.com",
      desc: "Rédaction publicitaire et conception d'e-mails à fort taux de conversion."
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.exp-card');
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            onEnter: () => {
              gsap.to(card.querySelector('.exp-dot'), {
                scale: 1.5,
                opacity: 1,
                yoyo: true,
                repeat: 1,
                duration: 0.3
              });
            }
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-32 px-6 bg-hero-gradient text-primary overflow-hidden relative" ref={containerRef}>
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h3 className="font-serif italic text-5xl md:text-6xl text-center mb-24 text-primary">Expérience</h3>
        
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-16 md:gap-24">
            {experiences.map((exp, index) => (
              <div key={index} className={`exp-card relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Espace vide pour centrer sur desktop */}
                <div className="hidden md:block md:w-1/2"></div>
                
                {/* Point */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent_purple -translate-x-1/2 top-8 md:top-10 exp-dot shadow-[0_0_15px_rgba(139,92,246,0.8)]"></div>
                
                {/* Carte */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-16 md:pl-${index % 2 === 0 ? '0' : '16'}`}>
                  <div className="bg-card-gradient backdrop-blur-xl border border-white/60 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_rgba(139,92,246,0.15)] hover:scale-[1.02] transition-all duration-500 group">
                    <div className="font-mono text-accent_purple font-semibold text-sm mb-3 transition-all duration-300">{exp.period}</div>
                    <h4 className="font-sans font-bold text-2xl md:text-3xl mb-2 text-primary">{exp.role}</h4>
                    <div className="font-sans text-primary/60 font-semibold text-lg mb-6">{exp.company}</div>
                    <p className="font-sans text-sombre leading-relaxed text-base md:text-lg">{exp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  
  const skills = [
    { name: "Big Data & IA", icon: <Database className="w-5 h-5"/>, level: "high" },
    { name: "Biologie & Nutrition", icon: <FlaskConical className="w-5 h-5"/>, level: "high" },
    { name: "Épidémiologie (One Health)", icon: <Stethoscope className="w-5 h-5"/>, level: "high" },
    { name: "Développement Logiciel", icon: <Code className="w-5 h-5"/>, level: "medium" },
    { name: "Data Engineering", icon: <BrainCircuit className="w-5 h-5"/>, level: "medium" },
    { name: "Copywriting & Marketing", icon: <HeartPulse className="w-5 h-5"/>, level: "medium" },
    { name: "Gestion d'équipe", icon: <Globe className="w-5 h-5"/>, level: "low" }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.skill-tag', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%'
        },
        y: 40,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.08,
        ease: 'back.out(1.5)'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-32 px-6 bg-background relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-10" ref={containerRef}>
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-serif italic text-5xl md:text-6xl text-primary mb-16">Expertise</h3>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {skills.map((skill, idx) => {
            const isHigh = skill.level === 'high';
            return (
              <div 
                key={idx} 
                className={`skill-tag rounded-full px-6 py-3 md:px-8 md:py-4 font-sans font-bold transition-all duration-300 hover:scale-105 cursor-default flex items-center gap-3 shadow-sm
                  ${isHigh 
                    ? 'bg-primary text-white shadow-[0_10px_30px_rgba(26,26,36,0.2)] text-lg md:text-xl' 
                    : 'bg-white border border-primary/10 text-primary text-base md:text-lg hover:border-accent hover:text-accent'
                  }`}
              >
                {skill.icon}
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const containerRef = useRef(null);

  const edu = [
    {
      year: "2023 - 2024",
      degree: "Master 2, Sciences et Technologie alimentaires, Nutrition",
      school: "ENSAI, Université de Ngaoundéré"
    },
    {
      year: "2023 - 2024",
      degree: "Master 2, Biologie Clinique",
      school: "Université de Ngaoundéré"
    },
    {
      year: "2024",
      degree: "Epidemiology, demography, and health communication",
      school: "University of Ngaoundere, Faculty of Health Science"
    },
    {
      year: "2022 - 2023",
      degree: "Maîtrise, Sciences biomédicales",
      school: "Université de Ngaoundéré"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.edu-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-24 pb-32 px-6 bg-background text-primary" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <h3 className="font-serif italic text-4xl md:text-5xl text-primary mb-16 text-center">Formation</h3>
        
        <div className="flex flex-col gap-6">
          {edu.map((item, idx) => (
            <div key={idx} className="edu-card bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-primary/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow duration-300">
              <div>
                <h4 className="font-sans font-bold text-primary text-lg md:text-xl mb-2">{item.degree}</h4>
                <p className="font-sans text-primary/60 text-base font-semibold">{item.school}</p>
              </div>
              <div className="font-mono font-bold text-accent_purple bg-accent_purple/10 px-6 py-3 rounded-full text-sm shrink-0 border border-accent_purple/20">
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.contact-icon', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        },
        scale: 0.8,
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.5)'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-32 px-6 bg-primary text-white text-center rounded-[3rem] md:rounded-[4rem] relative z-20 shadow-2xl" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <h3 className="font-serif italic text-6xl md:text-8xl mb-6 leading-none">Me contacter</h3>
        <p className="font-sans text-xl text-white/60 mb-16">Basé à Douala, Cameroun — Ouvert aux opportunités</p>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-20">
          <a href="#" className="contact-icon flex flex-col items-center gap-4 group link-hover">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300 border border-white/10">
              <Mail size={32} />
            </div>
            <span className="font-sans text-base font-semibold tracking-wide">Email</span>
          </a>
          <a href="#" className="contact-icon flex flex-col items-center gap-4 group link-hover">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300 border border-white/10">
              <Phone size={32} />
            </div>
            <span className="font-sans text-base font-semibold tracking-wide">Téléphone</span>
          </a>
          <a href="#" className="contact-icon flex flex-col items-center gap-4 group link-hover">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300 border border-white/10">
              <Globe size={32} />
            </div>
            <span className="font-sans text-base font-semibold tracking-wide">LinkedIn</span>
          </a>
        </div>
        
        <a href="#" download className="magnetic-btn bg-white text-primary px-12 py-6 rounded-full font-sans font-extrabold text-xl md:text-2xl shadow-[0_0_40px_rgba(255,255,255,0.2)] inline-flex items-center gap-4">
          <Download size={28} />
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 px-6 -mt-10 relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h5 className="font-sans font-bold text-white text-2xl tracking-tight">Alain Guy Fotso Kamto</h5>
          <p className="font-sans text-white/40 text-sm mt-2">Apprendre. Construire. Avoir un impact. © {new Date().getFullYear()}</p>
        </div>
        
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full cursor-default">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
          <span className="font-mono text-white/80 text-sm">En ligne</span>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-background min-h-screen text-sombre">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

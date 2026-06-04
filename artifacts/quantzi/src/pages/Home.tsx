import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Users, Zap, Code2, LineChart, Cpu, ShieldCheck } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    { icon: <BarChart3 size={32} />, title: "Management & Strategic Consulting", desc: "Partnering with executives to navigate complexity and turn strategy into executable roadmaps." },
    { icon: <Users size={32} />, title: "Programme & Project Management", desc: "Driving outcomes and ensuring critical initiatives land on time and on budget." },
    { icon: <Zap size={32} />, title: "Agile Training & Coaching", desc: "Full spectrum capability-building tailored to your organisation's maturity." },
    { icon: <Code2 size={32} />, title: "Software Solutions", desc: "Bespoke software products designed and built for your specific landscape." },
  ];

  const expertise = [
    "Financial Services", "Legal Sector", "Automotive", "Regulatory & Compliance", 
    "Insurance", "Data Warehousing & MDM", "Artificial Intelligence"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/hero-consulting.png" 
            alt="Professional consulting boardroom" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Strategic Partners for Measurable Transformation.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-10 leading-relaxed">
              We diagnose gaps and walk alongside you as a true collaborative partner. From boardrooms and Coffee Shops in Johannesburg to conference rooms in the Netherlands, Germany or Prague, we turn ambition into execution.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link 
                href="/services" 
                className="bg-accent text-accent-foreground px-8 py-4 rounded-sm font-medium text-lg transition-all hover:bg-accent/90 inline-flex items-center gap-2"
              >
                Explore Our Capabilities <ArrowRight size={20} />
              </Link>
              <Link 
                href="/contact" 
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-sm font-medium text-lg transition-all hover:bg-primary-foreground/10"
              >
                Speak to a Partner
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
              We don't place bums in seats.<br />We become your partner.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Quantzi is not a resource supplier or staffing agency. We are a trusted strategic partner. We listen to your frustrations, diagnose the gaps in your operations, and walk the journey alongside you. We bring the quiet confidence of experience to solve your most complex challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Core Capabilities</h2>
              <p className="text-muted-foreground text-lg">Comprehensive solutions spanning strategy, technology, and execution.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-6 md:mt-0"
            >
              <Link href="/services" className="text-accent font-semibold flex items-center gap-2 hover:underline">
                View all 7 services <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-white p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-accent mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl font-semibold text-muted-foreground uppercase tracking-widest mb-12"
          >
            Areas of Expertise
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
          >
            {expertise.map((sector, index) => (
              <motion.span 
                key={index}
                variants={fadeInUp}
                className="px-6 py-3 bg-secondary text-primary font-medium rounded-full text-lg"
              >
                {sector}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent opacity-5 transform skew-x-12 translate-x-32"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <ShieldCheck size={48} className="text-accent mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to drive real change?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Partner with Quantzi to align your people, processes, and technology across Africa and Europe.
            </p>
            <Link 
              href="/contact" 
              className="bg-accent text-accent-foreground px-10 py-4 rounded-sm font-semibold text-lg transition-all hover:bg-accent/90 inline-block"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

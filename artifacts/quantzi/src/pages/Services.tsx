import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  BarChart3, 
  Users, 
  Zap, 
  Code2, 
  Search, 
  Globe2, 
  ActivitySquare 
} from "lucide-react";

export default function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const services = [
    {
      id: "management-consulting",
      icon: <BarChart3 size={40} />,
      title: "Management & Strategic Consulting",
      desc1: "Quantzi partners with executives to define strategy, navigate complexity, and align people, processes, and technology with business objectives. We understand that a strategy is only as good as its execution.",
      desc2: "From market entry in new African markets to restructuring European operations, we bring clarity to ambiguity and turn high-level strategy into executable, measured roadmaps that deliver tangible value.",
      deliverables: [
        "Executive Advisory & Strategy Formulation",
        "Target Operating Model Design",
        "Market Entry & Expansion Strategy",
        "Organisational Restructuring",
        "Performance Measurement Frameworks"
      ]
    },
    {
      id: "project-management",
      icon: <Users size={40} />,
      title: "Programme & Project Management",
      desc1: "We embed experienced project and programme managers who govern delivery end-to-end — encompassing scope, risk, resource, stakeholder, and budget management. We operate as the connective tissue across your teams.",
      desc2: "We don't just report status; we drive outcomes, aggressively resolve blockers, and ensure your most critical initiatives land on time, on budget, and within expected quality parameters.",
      deliverables: [
        "End-to-End Delivery Governance",
        "Risk & Issue Mitigation Strategies",
        "Stakeholder Management & Alignment",
        "Budget & Resource Optimisation",
        "PMO Setup and Standardisation"
      ]
    },
    {
      id: "agile-training",
      icon: <Zap size={40} />,
      title: "Agile Training & Coaching",
      desc1: "We provide full-spectrum Agile capability-building, encompassing Scrum, SAFe (Scaled Agile Framework), Kanban, Hybrid Agile/Waterfall models, and enterprise-wide Agile at scale.",
      desc2: "We design and deliver training workshops, certification preparation, and intensive, hands-on coaching programmes meticulously tailored to each organisation's unique maturity level and operational constraints.",
      deliverables: [
        "Executive Agile Awareness Workshops",
        "Scrum Master & Product Owner Coaching",
        "SAFe Certification Preparation",
        "Agile Maturity Assessments",
        "Customised Hybrid Framework Design"
      ]
    },
    {
      id: "software-solutions",
      icon: <Code2 size={40} />,
      title: "Software Solutions",
      desc1: "We design and build bespoke software products strictly aligned to specific client needs — we do not believe in forcing off-the-shelf adaptations into environments where they do not belong.",
      desc2: "From deep requirements gathering through architecture, build, rigorous testing, and deployment, we deliver purpose-built, secure systems that integrate cleanly with existing enterprise landscapes and scale with your business.",
      deliverables: [
        "Custom Enterprise Application Development",
        "System Architecture & Integration Design",
        "Legacy System Modernisation",
        "Automated Testing & QA Frameworks",
        "DevOps & CI/CD Pipeline Implementation"
      ]
    },
    {
      id: "business-analysis",
      icon: <Search size={40} />,
      title: "Business Analysis & Gap Analysis",
      desc1: "Our business analysts go deep — rigorously mapping current-state processes, identifying critical capability gaps, and translating complex findings into clear, actionable future-state designs.",
      desc2: "We bridge the divide between what the business fundamentally needs and what technology can feasibly deliver, producing explicit requirements and specifications that engineering teams can actually build from without ambiguity.",
      deliverables: [
        "Current State (As-Is) Process Mapping",
        "Future State (To-Be) Design",
        "Comprehensive Gap Analysis Reports",
        "Functional & Non-Functional Requirements",
        "User Journey & Story Mapping"
      ]
    },
    {
      id: "digital-transformation",
      icon: <Globe2 size={40} />,
      title: "Digital Transformation",
      desc1: "We guide complex organisations through the full arc of digital change — from initial strategy and roadmap definition through vendor selection, process re-engineering, and crucial change adoption.",
      desc2: "We bring both the visionary strategic perspective and the granular operational discipline required to make transformation stick, ensuring that digital investments translate directly into operational efficiency and market advantage.",
      deliverables: [
        "Digital Maturity Assessment",
        "Technology Selection & Procurement Advisory",
        "Process Re-engineering for Digital",
        "Change Management & Adoption Strategy",
        "Post-Implementation Value Realisation"
      ]
    },
    {
      id: "agile-transformation",
      icon: <ActivitySquare size={40} />,
      title: "Agile Transformation",
      desc1: "Beyond foundational training, Agile Transformation is a fundamental shift in how an organisation thinks, plans, and delivers value. It requires structural and cultural redesign.",
      desc2: "Quantzi embeds alongside leadership and delivery teams to actively reshape culture, restructure rigid governance models, and build the resilient habits and rituals that sustain enterprise agility over the long term.",
      deliverables: [
        "Enterprise Agility Strategy",
        "Governance Model Restructuring",
        "Leadership Coaching for Agile",
        "Value Stream Mapping & Optimisation",
        "Continuous Improvement Frameworks"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <div className="w-16 h-1 bg-accent mb-8"></div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Our Capabilities
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              We deliver precision consulting and technology solutions across seven core pillars. Every engagement is tailored to drive measurable transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <div className="bg-white">
        {services.map((service, index) => (
          <section 
            key={service.id} 
            className={`py-20 lg:py-28 ${index !== services.length - 1 ? 'border-b border-border' : ''}`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
              >
                {/* Icon & Title */}
                <div className="lg:col-span-4">
                  <div className="text-accent mb-6 bg-secondary inline-block p-4 rounded-lg">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">{service.title}</h2>
                </div>

                {/* Content & Deliverables */}
                <div className="lg:col-span-8">
                  <div className="prose prose-lg prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none mb-10">
                    <p>{service.desc1}</p>
                    <p>{service.desc2}</p>
                  </div>

                  <div className="bg-secondary p-8 rounded-sm">
                    <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wider text-sm">Key Deliverables</h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-primary">
                          <span className="text-accent font-bold mt-0.5">•</span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-secondary border-t border-border text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">Need a tailored approach?</h2>
          <Link 
            href="/contact" 
            className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-medium transition-all hover:bg-primary/90 inline-block"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </section>
    </div>
  );
}

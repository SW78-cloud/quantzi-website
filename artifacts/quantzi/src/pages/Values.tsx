import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  Shield,
  Handshake,
  Flame,
  Star,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    tagline: "We say what we mean. We do what we say.",
    body: [
      "Integrity is not a value we aspire to — it is the ground we stand on. Every engagement begins with an honest assessment, not a flattering one. We will tell you what your business needs to hear, even when it is uncomfortable, because a trusted partner speaks plainly.",
      "For our people, integrity means consistency — showing up with the same commitment on day one hundred as on day one. It means owning mistakes without deflection, celebrating wins without inflation, and maintaining the same ethical standard in a boardroom in Johannesburg as in a strategy session in London.",
    ],
    staffMeaning: "Your word is your reputation. Protect it in every interaction.",
    clientMeaning: "You will always know where you stand with us.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    tagline: "We don't place bums in seats. We become your partner.",
    body: [
      "The consulting industry has long operated on a transactional model — send a body, charge a rate, move on. Quantzi was built in deliberate opposition to that model. We do not arrive with a pre-written answer. We arrive with listening ears, genuine curiosity, and a willingness to invest in understanding your world before offering solutions.",
      "Partnership means shared accountability. When your initiative succeeds, it is your success — and we feel it too. When it faces headwinds, we do not retreat to the safety of our deliverables. We stay, we problem-solve, and we see it through. You are not a project code. You are a partner.",
    ],
    staffMeaning: "Treat every client relationship as you would a long-term colleague.",
    clientMeaning: "We are invested in your outcomes, not just our outputs.",
  },
  {
    icon: Flame,
    title: "Courage",
    tagline: "We ask the questions that others are afraid to ask.",
    body: [
      "Transformation requires courage — the courage to name the real problem, to challenge an entrenched assumption, to recommend the difficult path when the easier one will not hold. At Quantzi, we cultivate the professional courage to serve our clients with honesty rather than comfort.",
      "For our team, courage means raising a concern in a room full of seniority. It means declining an engagement that is not right for the client, even when the commercial case is attractive. It means speaking up for a better outcome, not a smoother relationship. Courage, exercised with respect and rigour, is what separates good advice from great counsel.",
    ],
    staffMeaning: "Speak up. The right answer has value only if it is heard.",
    clientMeaning: "We will never tell you what you want to hear at the expense of what you need to know.",
  },
  {
    icon: Star,
    title: "Excellence",
    tagline: "Good enough is not a standard we recognise.",
    body: [
      "Excellence at Quantzi is not about perfection for its own sake — it is about the relentless pursuit of the best possible outcome for the people we serve. Every deliverable we produce, every workshop we facilitate, every strategy we develop carries our name and our reputation. We hold each one to the highest professional standard.",
      "We invest in our people precisely because excellence cannot be outsourced. Our consultants are practitioners, not theorists — they carry real-world experience in sectors where the stakes are high and the margins for error are small. That depth of expertise is the foundation of the quality our clients depend on.",
    ],
    staffMeaning: "Take pride in your craft. Your standard is the firm's standard.",
    clientMeaning: "Every engagement reflects the same uncompromising commitment to quality.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    tagline: "We grow our clients. We grow our people. We grow together.",
    body: [
      "Growth is not a revenue target — it is a philosophy. We exist to help organisations grow: to expand their capabilities, deepen their resilience, and extend their reach into new markets. A client who has grown because of their engagement with Quantzi is the single most powerful endorsement we can earn.",
      "Growth applies equally inward. Our people are encouraged to learn continuously, to seek mentorship and to become mentors, to stretch into new domains and deeper expertise. A Quantzi consultant who is not growing is not serving clients at the level they deserve. We hold learning as a professional obligation, not an optional benefit.",
    ],
    staffMeaning: "Never stop learning. Stagnation is not an option — for you or for those you serve.",
    clientMeaning: "We measure our success by how much stronger your organisation is when we leave.",
  },
  {
    icon: Globe,
    title: "Ubuntu",
    tagline: "I am because we are.",
    body: [
      "Ubuntu is a Nguni Bantu concept that captures the essence of what it means to be human in relation to others: our humanity is inextricably bound up with the humanity of those around us. For Quantzi — a firm born in South Africa, operating across Africa and Europe — Ubuntu is not a cultural footnote. It is a living principle.",
      "In practice, Ubuntu shapes how we build teams, how we engage communities, and how we approach every client relationship. We succeed collectively, or not at all. We bring the perspectives of diverse cultures, sectors, and disciplines to every table because the richest solutions emerge from the most inclusive conversations. We are Quantzi because of our clients, our people, and the communities we serve.",
    ],
    staffMeaning: "The success of your colleague is your success. Carry each other.",
    clientMeaning: "You are not an account. You are part of what we are building — together.",
  },
  {
    icon: Zap,
    title: "Impact",
    tagline: "Transformation that endures long after we are gone.",
    body: [
      "Impact is the ultimate measure of everything we do. Not the volume of reports produced, the hours logged, or the frameworks deployed — but the tangible, lasting difference our work makes to an organisation and its people. We design every engagement with the end in mind: what will be different, better, and more resilient because of this work?",
      "We are not in the business of dependency. Our goal is to transfer capability, build internal strength, and leave an organisation more capable of navigating its future than it was when we arrived. True impact is when our clients no longer need us in the same way — because we have helped them become better versions of themselves.",
    ],
    staffMeaning: "Ask yourself at the end of every engagement: what is genuinely different because of this?",
    clientMeaning: "We measure our value in outcomes — not activities.",
  },
];

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
    >
      {children}
    </motion.div>
  );
}

export default function Values() {
  const circleRef = useRef(null);
  const circleInView = useInView(circleRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 60% 50%, hsl(var(--accent)) 0%, transparent 60%)`,
          }}
        />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <div className="w-12 h-1 bg-accent mb-6" />
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Our Values
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Values are not posters on a wall. They are the decisions we make
              when no one is watching, the standard we hold when the work is
              hard, and the compass we return to when the path is unclear.
              These are ours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-20">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isEven = index % 2 === 0;
              return (
                <FadeUp key={value.title} delay={0.05}>
                  <div
                    className={`flex flex-col md:flex-row gap-10 items-start ${
                      isEven ? "" : "md:flex-row-reverse"
                    }`}
                    data-testid={`value-card-${index}`}
                  >
                    {/* Icon + number column */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-3 md:pt-2">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <Icon size={28} className="text-accent" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-muted-foreground/60 uppercase">
                        0{index + 1}
                      </span>
                      {index < values.length - 1 && (
                        <div className="hidden md:block w-px h-16 bg-border mt-1" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="w-8 h-0.5 bg-accent mb-4" />
                      <h2 className="font-serif text-3xl font-bold text-primary mb-1">
                        {value.title}
                      </h2>
                      <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-5">
                        {value.tagline}
                      </p>
                      <div className="space-y-4 text-foreground/80 leading-relaxed mb-7">
                        {value.body.map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>

                      {/* Staff + Client callouts */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border-l-2 border-primary pl-4 py-1">
                          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                            For Our People
                          </p>
                          <p className="text-sm text-foreground/70 italic">
                            {value.staffMeaning}
                          </p>
                        </div>
                        <div className="border-l-2 border-accent pl-4 py-1">
                          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
                            For Our Clients
                          </p>
                          <p className="text-sm text-foreground/70 italic">
                            {value.clientMeaning}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < values.length - 1 && (
                    <div className="mt-16 border-t border-border/40" />
                  )}
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Full Circle */}
      <section ref={circleRef} className="bg-primary text-primary-foreground py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 40% 50%, hsl(var(--accent)) 0%, transparent 55%)`,
          }}
        />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={circleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
            >
              <div className="w-12 h-1 bg-accent mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                The Full Circle
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-5">
                A globe, by design, has no beginning and no end. Every meridian
                returns to its origin. Every latitude closes on itself. This is
                not a coincidence — it is the geometry of enduring things.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-5">
                Our values work the same way. Integrity makes Partnership
                possible. Partnership demands Courage. Courage drives
                Excellence. Excellence enables Growth. Growth, practised with
                humility, is Ubuntu in action. And Ubuntu — the recognition
                that we rise together — is what gives Impact its meaning and
                returns us, always, to the foundation of Integrity.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed text-sm italic border-l-2 border-accent pl-4">
                None of these values stands alone. Remove one and the circle
                breaks. Together, they form the complete system by which we
                serve — and the promise by which we are held accountable.
              </p>
              <Link
                href="/services"
                className="inline-block mt-8 bg-accent text-accent-foreground px-8 py-3 rounded-sm font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all"
                data-testid="link-values-to-services"
              >
                Explore Our Services
              </Link>
            </motion.div>

            {/* Animated circle diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={circleInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
              className="flex items-center justify-center"
            >
              <div className="relative w-[420px] h-[420px] max-w-full">
                {/* Full Circle Diagram */}
                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                  {/* Decorative background rings */}
                  <circle cx="200" cy="200" r="194" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  {/* Animated orange orbit arc at r=150 */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="#E8620A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="943"
                    strokeDashoffset={circleInView ? 0 : 943}
                    style={{ transformOrigin: "200px 200px", rotate: -90 }}
                    transition={{ duration: 2, delay: 0.4, ease: "easeInOut" as const }}
                  />
                  {/* Spokes from center to node inner edge */}
                  {values.map((_, i) => {
                    const a = ((i / values.length) * 360 - 90) * (Math.PI / 180);
                    const spokeR = 114;
                    const x = 200 + spokeR * Math.cos(a);
                    const y = 200 + spokeR * Math.sin(a);
                    return (
                      <line
                        key={i}
                        x1="200" y1="200"
                        x2={x} y2={y}
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                    );
                  })}
                  {/* Chord lines between adjacent nodes */}
                  {values.map((_, i) => {
                    const a1 = ((i / values.length) * 360 - 90) * (Math.PI / 180);
                    const a2 = ((((i + 1) % values.length) / values.length) * 360 - 90) * (Math.PI / 180);
                    const nodeR = 150;
                    const x1 = 200 + nodeR * Math.cos(a1);
                    const y1 = 200 + nodeR * Math.sin(a1);
                    const x2 = 200 + nodeR * Math.cos(a2);
                    const y2 = 200 + nodeR * Math.sin(a2);
                    return (
                      <line
                        key={i}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="rgba(232,98,10,0.2)"
                        strokeWidth="1"
                      />
                    );
                  })}
                  {/* Value node circles + labels */}
                  {values.map((v, i) => {
                    const angle = (i / values.length) * 360 - 90;
                    const rad = (angle * Math.PI) / 180;
                    const nodeR = 150;
                    const cx = 200 + nodeR * Math.cos(rad);
                    const cy = 200 + nodeR * Math.sin(rad);
                    const lines = v.title.includes("ship")
                      ? ["PARTNER", "SHIP"]
                      : [v.title.toUpperCase()];
                    return (
                      <g key={v.title}>
                        <circle cx={cx} cy={cy} r="36" fill="#0D1B40" stroke="#E8620A" strokeWidth="2" />
                        {lines.length === 1 ? (
                          <text
                            x={cx}
                            y={cy + 3.5}
                            textAnchor="middle"
                            fontSize="9"
                            fontWeight="800"
                            fill="white"
                            fontFamily="Inter, sans-serif"
                          >
                            {lines[0]}
                          </text>
                        ) : (
                          <>
                            <text
                              x={cx}
                              y={cy - 3}
                              textAnchor="middle"
                              fontSize="9"
                              fontWeight="800"
                              fill="white"
                              fontFamily="Inter, sans-serif"
                            >
                              {lines[0]}
                            </text>
                            <text
                              x={cx}
                              y={cy + 10}
                              textAnchor="middle"
                              fontSize="9"
                              fontWeight="800"
                              fill="white"
                              fontFamily="Inter, sans-serif"
                            >
                              {lines[1]}
                            </text>
                          </>
                        )}
                      </g>
                    );
                  })}
                  {/* Center emblem */}
                  <circle cx="200" cy="200" r="38" fill="#E8620A" />
                  <text
                    x="200"
                    y="196"
                    textAnchor="middle"
                    fontSize="9"
                    fontWeight="800"
                    fill="white"
                    fontFamily="Inter, sans-serif"
                    letterSpacing="1.5"
                  >
                    QUANTZI
                  </text>
                  <text
                    x="200"
                    y="210"
                    textAnchor="middle"
                    fontSize="6.5"
                    fill="rgba(255,255,255,0.85)"
                    fontFamily="Inter, sans-serif"
                    letterSpacing="0.5"
                  >
                    THE FULL CIRCLE
                  </text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white border-t border-border/30">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold mb-4">
              Ready to work with a partner who lives these values?
            </p>
            <h3 className="font-serif text-3xl font-bold text-primary mb-6">
              Let's start a conversation.
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-10 py-3.5 rounded-sm font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all"
              data-testid="link-values-contact"
            >
              Speak to Us
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

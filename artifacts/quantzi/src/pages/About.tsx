import { motion } from "framer-motion";
import { MapPin, Target, Handshake } from "lucide-react";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

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
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              We are architects of transformation, operating at the intersection of business strategy and technology execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story & Mission */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Our Mission</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Quantzi was founded on a simple but uncompromising principle: consulting should deliver measurable outcomes, not just impressive presentations.
                </p>
                <p>
                  Operating across South Africa, the broader African continent, and Europe, we bring deep sectoral expertise to Financial Services, Legal, Automotive, Insurance, and emerging tech landscapes like AI and Data Warehousing.
                </p>
                <p>
                  We exist to bridge the gap between executive vision and operational reality. We take accountability for delivery, embedding our senior experts within your teams to ensure that strategy translates into sustainable business value.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-secondary p-10 lg:p-12 rounded-sm border-l-4 border-accent"
            >
              <Target size={40} className="text-accent mb-6" />
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">The Quantzi Standard</h3>
              <p className="text-primary/80 font-medium text-lg leading-relaxed italic">
                "We approach every engagement with the rigor of a Big 4 firm, but with the agility, human touch, and fierce dedication of a true strategic partner. Your success is our reputation."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Partnership Model */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Handshake size={64} className="text-accent mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              The Partnership Model
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-12">
              We categorically refuse to place "bums in seats." Staff augmentation solves capacity, not capability. We operate differently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-primary-foreground/5 p-8 border border-primary-foreground/10">
                <h4 className="text-accent font-bold text-xl mb-4">01. Diagnose</h4>
                <p className="text-primary-foreground/70">We listen to your frustrations and forensically map the gaps between your current state and your objectives.</p>
              </div>
              <div className="bg-primary-foreground/5 p-8 border border-primary-foreground/10">
                <h4 className="text-accent font-bold text-xl mb-4">02. Design</h4>
                <p className="text-primary-foreground/70">We formulate precise, actionable strategies and operating models tailored to your environmental constraints.</p>
              </div>
              <div className="bg-primary-foreground/5 p-8 border border-primary-foreground/10">
                <h4 className="text-accent font-bold text-xl mb-4">03. Deliver</h4>
                <p className="text-primary-foreground/70">We embed alongside your teams, driving the execution, removing blockers, and building your internal capabilities.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Geographic Reach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our headquarters are anchored in Johannesburg, providing a strategic base to serve the broader African continent and our European partners.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary">South Africa</h3>
              <p className="text-muted-foreground mt-2">Headquarters</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary">Rest of Africa</h3>
              <p className="text-muted-foreground mt-2">Strategic Expansion</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary">Europe</h3>
              <p className="text-muted-foreground mt-2">Global Partnerships</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

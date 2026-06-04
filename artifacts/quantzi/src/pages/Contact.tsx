import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more detail"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock submission since there is no backend
    console.log(values);
    toast({
      title: "Enquiry Received",
      description: "A Quantzi partner will contact you shortly.",
    });
    form.reset();
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Start the Conversation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Whether you are facing operational bottlenecks or planning enterprise transformation, our partners are ready to engage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Details */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-4"
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">Global Presence</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
                    <MapPin className="text-accent" /> South Africa (HQ)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Serving Johannesburg, Cape Town,<br/>and the broader African continent.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
                    <MapPin className="text-accent" /> Europe
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Supporting enterprise clients<br/>across European markets.
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="text-lg font-bold text-primary mb-6">Direct Channels</h3>
                  <div className="space-y-4">
                    <a href="mailto:contact@quantzi.co.za" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                      <Mail size={20} /> contact@quantzi.co.za
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Phone size={20} className="mt-0.5 shrink-0" />
                      <span>
                        +27 78 450 7433<br />
                        +27 82 908 9686
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-8 bg-primary p-8 md:p-12 rounded-sm shadow-xl"
            >
              <h2 className="text-2xl font-serif font-bold text-primary-foreground mb-8">Executive Enquiry</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground/90">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent" {...field} />
                          </FormControl>
                          <FormMessage className="text-destructive-foreground" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground/90">Organisation</FormLabel>
                          <FormControl>
                            <Input placeholder="Company Name" className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent" {...field} />
                          </FormControl>
                          <FormMessage className="text-destructive-foreground" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground/90">Corporate Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent" {...field} />
                          </FormControl>
                          <FormMessage className="text-destructive-foreground" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground/90">Direct Line (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+27 ..." className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent" {...field} />
                          </FormControl>
                          <FormMessage className="text-destructive-foreground" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground/90">Area of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground focus:ring-accent data-[placeholder]:text-primary-foreground/40">
                              <SelectValue placeholder="Select a service..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="management-consulting">Management & Strategic Consulting</SelectItem>
                            <SelectItem value="project-management">Programme & Project Management</SelectItem>
                            <SelectItem value="agile-training">Agile Training & Coaching</SelectItem>
                            <SelectItem value="software-solutions">Software Solutions</SelectItem>
                            <SelectItem value="business-analysis">Business Analysis & Gap Analysis</SelectItem>
                            <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                            <SelectItem value="agile-transformation">Agile Transformation</SelectItem>
                            <SelectItem value="other">Other / General Enquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-destructive-foreground" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground/90">Message / Context</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Briefly describe your objectives or current challenges..." 
                            className="min-h-[120px] bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-destructive-foreground" />
                      </FormItem>
                    )}
                  />

                  <button 
                    type="submit" 
                    className="w-full bg-accent text-accent-foreground py-4 rounded-sm font-bold text-lg hover:bg-accent/90 transition-colors mt-4"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </Form>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

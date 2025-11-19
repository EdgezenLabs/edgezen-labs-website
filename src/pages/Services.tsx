import { Smartphone, Globe, Cloud, Code, Gamepad2, Palette, Brain, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications built with Flutter and React Native. Beautiful, fast, and scalable.",
      tech: ["Flutter", "React Native", "iOS", "Android"],
    },
    {
      icon: Globe,
      title: "Web App Development",
      description: "Modern, responsive web applications using React, TypeScript, and Node.js. From MVPs to enterprise platforms.",
      tech: ["React", "TypeScript", "Node.js", "FastAPI"],
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Secure, scalable cloud infrastructure on AWS and Google Cloud. Microservices, serverless, and containerized solutions.",
      tech: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    },
    {
      icon: Code,
      title: "API Engineering",
      description: "RESTful and GraphQL APIs designed for performance, security, and scalability. Complete backend systems.",
      tech: ["Node.js", "FastAPI", "GraphQL", "PostgreSQL"],
    },
    {
      icon: Gamepad2,
      title: "Unity Game Development",
      description: "Immersive 2D and 3D games built in Unity with C#. From mobile games to complex multiplayer experiences.",
      tech: ["Unity", "C#", "Multiplayer", "3D"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design in Figma. Wireframes, prototypes, design systems, and motion UI for delightful experiences.",
      tech: ["Figma", "Prototyping", "Design Systems", "Motion UI"],
    },
    {
      icon: Brain,
      title: "AI-Powered Applications",
      description: "Integrate cutting-edge AI and machine learning into your products. NLP, computer vision, and intelligent automation.",
      tech: ["OpenAI", "TensorFlow", "Python", "ML Models"],
    },
    {
      icon: Settings,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines, monitoring, and infrastructure as code. Continuous delivery for rapid iteration.",
      tech: ["GitHub Actions", "Jenkins", "Terraform", "Monitoring"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue mx-auto mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground">
              End-to-end software development services powered by cutting-edge technology and creative excellence
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass rounded-2xl p-8 hover:scale-[1.02] transition-all group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <service.icon className="text-accent group-hover:scale-110 transition-transform" size={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Development Process</h2>
            <div className="space-y-8">
              {[
                {
                  phase: "Discovery & Planning",
                  description: "We start by understanding your business goals, user needs, and technical requirements. Together, we define the project scope and roadmap.",
                },
                {
                  phase: "Design & Prototyping",
                  description: "Our designers create wireframes and high-fidelity prototypes in Figma, ensuring every interaction is intuitive and beautiful.",
                },
                {
                  phase: "Development",
                  description: "Using agile methodology, we build your product in sprints, with regular demos and feedback loops to ensure we're on track.",
                },
                {
                  phase: "Testing & QA",
                  description: "Rigorous testing across devices, browsers, and edge cases. We ensure your product is bug-free and performs flawlessly.",
                },
                {
                  phase: "Deployment & Support",
                  description: "We handle the entire deployment process and provide ongoing support, monitoring, and optimization post-launch.",
                },
              ].map((step, index) => (
                <div key={step.phase} className="flex gap-6 items-start">
                  <div className="text-4xl font-bold gradient-text shrink-0">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.phase}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

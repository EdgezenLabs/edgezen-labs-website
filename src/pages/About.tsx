import { Target, Eye, Heart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To engineer digital excellence by creating intelligent, scalable solutions that empower businesses and transform user experiences.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the global leader in innovative software development, setting new standards for quality, design, and technological advancement.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We are driven by a love for technology and a commitment to craft. Every line of code is written with care and precision.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We don't compromise on quality. From architecture to UI/UX, we deliver products that exceed expectations.",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Design",
      description: "We start with deep user research and create beautiful, intuitive interfaces in Figma. Every pixel matters.",
    },
    {
      step: "02",
      title: "Development",
      description: "Using modern tech stacks, we build scalable, secure, and performant applications with clean architecture.",
    },
    {
      step: "03",
      title: "Deployment",
      description: "Cloud-native deployment with CI/CD pipelines, monitoring, and continuous optimization for peak performance.",
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
              About <span className="gradient-text">EdgeZen Labs</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue mx-auto mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground">
              We are a team of passionate engineers, designers, and innovators dedicated to building the future of digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Philosophy</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At EdgeZen Labs, we believe technology should be <span className="text-foreground font-semibold">elegant, powerful, and accessible</span>. We don't just write code—we craft experiences.
              </p>
              <p>
                Every project is an opportunity to push boundaries, challenge conventions, and deliver solutions that make a real difference. Whether it's a mobile app, web platform, or cloud service, we approach each challenge with the same rigor and creativity.
              </p>
              <p>
                Our clients trust us because we combine <span className="text-accent">technical excellence</span> with <span className="text-accent">design thinking</span>, ensuring products that are not only functional but delightful to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="glass rounded-2xl p-8 hover:scale-[1.02] transition-all">
                <value.icon className="text-accent mb-4" size={40} />
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Approach</h2>
            <div className="space-y-12">
              {approach.map((item, index) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="text-5xl font-bold gradient-text shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Clients Trust Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              We've built a reputation for delivering exceptional results on time, every time. Our team's expertise spans the entire technology stack, from mobile to cloud to AI.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

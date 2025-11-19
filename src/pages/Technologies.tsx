import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Technologies = () => {
  const techStack = [
    {
      category: "Mobile Development",
      color: "text-gradient-purple",
      technologies: [
        { name: "Flutter", description: "Cross-platform mobile framework" },
        { name: "React Native", description: "JavaScript mobile development" },
        { name: "iOS Development", description: "Native Swift & SwiftUI" },
        { name: "Android Development", description: "Native Kotlin & Jetpack" },
      ],
    },
    {
      category: "Web Development",
      color: "text-gradient-pink",
      technologies: [
        { name: "React", description: "Modern UI library" },
        { name: "TypeScript", description: "Type-safe JavaScript" },
        { name: "Next.js", description: "React framework for production" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
      ],
    },
    {
      category: "Backend & APIs",
      color: "text-gradient-blue",
      technologies: [
        { name: "Node.js", description: "JavaScript runtime" },
        { name: "FastAPI", description: "Modern Python framework" },
        { name: "Express", description: "Node.js web framework" },
        { name: "GraphQL", description: "Query language for APIs" },
      ],
    },
    {
      category: "Databases",
      color: "text-orange",
      technologies: [
        { name: "PostgreSQL", description: "Advanced relational database" },
        { name: "MongoDB", description: "NoSQL document database" },
        { name: "MySQL", description: "Popular relational database" },
        { name: "Firestore", description: "Cloud NoSQL database" },
      ],
    },
    {
      category: "Cloud & DevOps",
      color: "text-gold",
      technologies: [
        { name: "AWS", description: "Amazon Web Services" },
        { name: "Google Cloud", description: "GCP infrastructure" },
        { name: "Firebase", description: "Google's app platform" },
        { name: "Docker", description: "Container platform" },
      ],
    },
    {
      category: "Game Development",
      color: "text-accent",
      technologies: [
        { name: "Unity", description: "Cross-platform game engine" },
        { name: "C#", description: "Unity scripting language" },
        { name: "Unity Multiplayer", description: "Netcode for GameObjects" },
        { name: "Unity UI", description: "Advanced UI system" },
      ],
    },
    {
      category: "Design & Prototyping",
      color: "text-gradient-purple",
      technologies: [
        { name: "Figma", description: "UI/UX design tool" },
        { name: "Prototyping", description: "Interactive mockups" },
        { name: "Design Systems", description: "Scalable component libraries" },
        { name: "Motion UI", description: "Animation & micro-interactions" },
      ],
    },
    {
      category: "AI & Machine Learning",
      color: "text-gradient-pink",
      technologies: [
        { name: "OpenAI API", description: "GPT & advanced AI models" },
        { name: "Python", description: "ML & data science" },
        { name: "TensorFlow", description: "ML framework" },
        { name: "NLP", description: "Natural language processing" },
      ],
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
              Our <span className="gradient-text">Tech Stack</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-blue mx-auto mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground">
              We leverage cutting-edge technologies to build scalable, performant, and beautiful products
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            {techStack.map((category, index) => (
              <div key={category.category}>
                <h2 className={`text-3xl font-bold mb-8 ${category.color}`}>
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="glass rounded-xl p-6 hover:scale-[1.02] transition-all group"
                    >
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Technical Expertise
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our team masters the entire modern development stack, from <span className="text-foreground font-semibold">mobile-first Flutter applications</span> to <span className="text-foreground font-semibold">cloud-native microservices</span> on AWS and Google Cloud.
              </p>
              <p>
                We specialize in <span className="text-accent">secure architecture</span>, building systems that scale from MVP to millions of users. Every line of code follows industry best practices for maintainability, performance, and security.
              </p>
              <p>
                Whether it's crafting pixel-perfect UI in React, engineering robust APIs with FastAPI, developing immersive games in Unity, or integrating AI capabilities—we bring deep technical knowledge and creative problem-solving to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technologies;

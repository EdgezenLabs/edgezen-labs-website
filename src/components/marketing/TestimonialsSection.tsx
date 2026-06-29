import { Quote } from "lucide-react";
import { testimonials } from "@/content/home";
import SectionHeader from "@/components/layout/SectionHeader";
import Reveal from "@/components/marketing/Reveal";

const TestimonialsSection = () => (
  <section className="section-y">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <SectionHeader
          eyebrow="Client voices"
          title="Teams who needed clarity, speed, and software they could trust."
          align="center"
        />
      </Reveal>

      <div className="mx-auto grid max-w-wide gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.author} delay={index * 0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-token-sm transition-default hover:border-accent/25 hover:shadow-token-md">
              <Quote className="mb-4 text-accent/60" size={28} aria-hidden />
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{item.quote}&rdquo;</blockquote>
              <footer className="mt-6 border-t border-border/60 pt-4">
                <p className="font-semibold text-foreground">{item.author}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
                <span className="mt-2 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  {item.industry}
                </span>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

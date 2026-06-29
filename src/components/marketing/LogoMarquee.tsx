import { clientLogos } from "@/content/home";

const LogoMarquee = () => (
  <section aria-label="Clients and products" className="border-y border-border/60 bg-secondary/40 py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Trusted by teams building serious products
      </p>
    </div>
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/40 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/40 to-transparent sm:w-24" />
      <div className="flex animate-marquee gap-12 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6 motion-reduce:px-4">
        {[...clientLogos, ...clientLogos].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex shrink-0 items-center gap-3 rounded-full border border-border/60 bg-background/80 px-5 py-2.5 shadow-token-xs backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            <span className="whitespace-nowrap text-sm font-semibold text-foreground/90">{client.name}</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">{client.industry}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogoMarquee;

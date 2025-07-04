import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="flex justify-between items-start py-6 px-8 border-b border-muted-foreground/20">
        <div className="font-extrabold text-lg tracking-widest">
          ARTHUR
          <span className="align-super text-xs ml-1">™</span>
        </div>
        <div className="text-xs text-muted-foreground max-w-[400px] text-right pt-1">
          Ma mission est de construire pour vous les outils data-driven qui vous permettront de vous démarquer.
        </div>
      </header>
      {/* 4 columns grid */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8 p-8 border-b border-muted-foreground/20 bg-background">
        {/* About us */}
        <section className="flex flex-col justify-between h-full">
          <div>
            <div className="font-semibold text-sm mb-2 border-b border-black/80 pb-1">
              À propos
            </div>
            <div className="text-xs text-muted-foreground mb-8">01</div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold leading-tight block mb-4">
                Hello.
              </span>
              <p className="text-lg text-muted-foreground leading-snug">
                Je suis développeur data spécialisé dans la création de solutions
                data, dashboards, et automatisations pour la culture, le contenu
                et le commerce. Ainsi que la création de bot discord.
              </p>
            </div>
          </div>
          <div className="text-xs border-t border-black/80 pt-2 font-medium mt-8">
            Lyon
          </div>
        </section>
        {/* Services */}
        <section className="flex flex-col justify-between h-full">
          <div>
            <div className="font-semibold text-sm mb-2 border-b border-black/80 pb-1">
              Services
            </div>
            <div className="text-xs text-muted-foreground mb-8">02</div>
            <ul className="text-sm text-muted-foreground space-y-2 mt-4">
              <li>Data Science</li>
              <li>Automatisation</li>
              <li>Visualisation</li>
              <li>Conseil</li>
              <li>Bot Discord</li>
            </ul>
          </div>
          <div className="text-xs border-t border-black/80 pt-2 font-medium mt-8">
            —
          </div>
        </section>
        {/* Portfolio */}
        <section className="flex flex-col justify-between h-full">
          <div>
            <div className="font-semibold text-sm mb-2 border-b border-black/80 pb-1">
              Portfolio
            </div>
            <div className="text-xs text-muted-foreground mb-8">03</div>
            <div className="mb-8">
              <div className="font-bold mb-1 text-base">History</div>
              <div className="text-xs text-muted-foreground mb-2">
                Développement de solutions data et logiciels depuis 2023. Plus de{" "}
                <span className="font-semibold">15 projets</span> réalisés pour
                des particuliers et petits studios de développement indépendants.
              </div>
              <div className="text-xs text-muted-foreground">
                Mon portfolio vous permettra de découvrir l’étendue de mes
                réalisations, de la collecte à la valorisation de données.
              </div>
            </div>
          </div>
          <div className="text-xs border-t border-black/80 pt-2 font-medium mt-8">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </div>
        </section>
        {/* Contact */}
        <section className="flex flex-col justify-between h-full">
          <div>
            <div className="font-semibold text-sm mb-2 border-b border-black/80 pb-1">
              Contact
            </div>
            <div className="text-xs text-muted-foreground mb-8">04</div>
            <div className="mb-6">
              <div className="font-bold mb-1 text-base">Mission</div>
              <div className="text-xs text-muted-foreground mb-2">
                Construire une relation de confiance durable et bénéfique autour
                de la donnée.
              </div>
            </div>
            <div className="mb-2">
              <div className="font-bold mb-1 text-base">Projects</div>
              <div className="text-xs text-muted-foreground">
                <div className="flex justify-between border-b border-black/10 py-1">
                  <span>Rock Paper Machine</span>
                  <span>2025</span>
                </div>
                <div className="flex justify-between border-b border-black/10 py-1">
                  <span>Bootloader (base) en assembly</span>
                  <span>2024</span>
                </div>
                <div className="flex justify-between border-b border-black/10 py-1">
                  <span>Awwwards</span>
                  <span>SOTD</span>
                </div>
                <div className="flex justify-between border-b border-black/10 py-1">
                  <span>Csswinner</span>
                  <span>SOTM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs border-t border-black/80 pt-2 font-medium mt-8">
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </div>
        </section>
      </main>
      {/* Footer navigation */}
      <footer className="flex justify-between items-center px-8 py-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Data Portfolio</div>
      </footer>
    </div>
  );
}

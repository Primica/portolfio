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
          Passioné de développement et data engineering
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
                Je suis développeur junior, ayant fait une année d'IUT en Science des Données.
                Et ayant eu la chance de faire la piscine de 42 Lyon. 
                Je me lance dans de nombreux projets afin d'aiguiser mes compétences.
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
              <li>Mise en place de base de données</li>
              <li>Automatisation</li>
              <li>Visualisation</li>
              <li>Web</li>
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
                Développement de solutions data depuis 2024/2025. Plus de{" "}
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
                  <span>Plugin RPC Discord pour Obsidian.md</span>
                  <span>2025</span>
                </div>
                <div className="flex justify-between border-b border-black/10 py-1">
                  <span>MyAlloc</span>
                  <span>2024</span>
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
        <div>© {new Date().getFullYear()} Arthur's Portfolio</div>
      </footer>
    </div>
  );
}

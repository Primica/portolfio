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
          Conceived and stylish commercial design is something that we devote to
          most of our time and efforts.
        </div>
      </header>
      {/* 4 columns grid */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8 p-8 border-b border-muted-foreground/20 bg-background">
        {/* About us */}
        <section className="flex flex-col justify-between h-full">
          <div>
            <div className="font-semibold text-sm mb-2 border-b border-black/80 pb-1">
              About us
            </div>
            <div className="text-xs text-muted-foreground mb-8">Back</div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold leading-tight block mb-4">
                Hello.
              </span>
              <p className="text-lg text-muted-foreground leading-snug">
                Je suis développeur data spécialisé dans la création de solutions
                data, dashboards, et automatisations pour la culture, le contenu
                et le commerce.
              </p>
            </div>
          </div>
          <div className="text-xs border-t border-black/80 pt-2 font-medium mt-8">
            38 Demonstration Street, 3rd floor, Tula 300034
          </div>
        </section>
        {/* Services */}
        <section className="flex flex-col justify-between h-full">
          <div>
            <div className="font-semibold text-sm mb-2 border-b border-black/80 pb-1">
              Services
            </div>
            <div className="text-xs text-muted-foreground mb-8">Back</div>
            <ul className="text-sm text-muted-foreground space-y-2 mt-4">
              <li>Data Engineering</li>
              <li>Data Science</li>
              <li>Automatisation</li>
              <li>Visualisation & Dashboard</li>
              <li>Conseil & Formation</li>
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
            <div className="text-xs text-muted-foreground mb-8">01</div>
            <div className="mb-8">
              <div className="font-bold mb-1 text-base">History</div>
              <div className="text-xs text-muted-foreground mb-2">
                Développement de solutions data et logiciels depuis 2014. Plus de{" "}
                <span className="font-semibold">100 projets</span> réalisés pour
                la culture, le contenu et le commerce.
              </div>
              <div className="text-xs text-muted-foreground">
                Mon portfolio vous permettra de découvrir l’étendue de mes
                réalisations, de la collecte à la valorisation de données.
              </div>
            </div>
          </div>
          <div className="text-xs border-t border-black/80 pt-2 font-medium mt-8">
            Facebook
          </div>
        </section>
        {/* Contact */}
        <section className="flex flex-col justify-between h-full">
          <div>
            <div className="font-semibold text-sm mb-2 border-b border-black/80 pb-1">
              Contact
            </div>
            <div className="text-xs text-muted-foreground mb-8">02</div>
            <div className="mb-6">
              <div className="font-bold mb-1 text-base">Mission</div>
              <div className="text-xs text-muted-foreground mb-2">
                Construire une relation de confiance durable et bénéfique autour
                de la donnée.
              </div>
            </div>
            <div className="mb-2">
              <div className="font-bold mb-1 text-base">03 Projects</div>
              <div className="text-xs text-muted-foreground">
                <div className="flex justify-between border-b border-black/10 py-1">
                  <span>Tagline</span>
                  <span>5th place</span>
                </div>
                <div className="flex justify-between border-b border-black/10 py-1">
                  <span>Golden Website</span>
                  <span>3th place</span>
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
            Blog
          </div>
        </section>
      </main>
      {/* Footer navigation */}
      <footer className="flex justify-between items-center px-8 py-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Data Portfolio</div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </div>
      </footer>
    </div>
  );
}

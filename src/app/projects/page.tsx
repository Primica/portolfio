import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const projects = [
  {
    name: "Data Pipeline ETL",
    description: "Pipeline de traitement de données en temps réel avec Apache Kafka",
    stack: "Python, Apache Kafka, Docker",
    status: "Production",
    year: "2024",
    repo: "https://github.com/username/data-pipeline",
  },
  {
    name: "Dashboard Analytics",
    description: "Dashboard interactif pour l'analyse de données marketing",
    stack: "React, D3.js, Python FastAPI",
    status: "Production",
    year: "2024",
    repo: "https://github.com/username/dashboard-analytics",
  },
  {
    name: "ML Recommendation Engine",
    description: "Système de recommandation basé sur le machine learning",
    stack: "Python, Scikit-learn, FastAPI",
    status: "En développement",
    year: "2025",
    repo: "https://github.com/username/ml-recommendations",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="flex justify-between items-start py-6 px-8 border-b border-muted-foreground/20">
        <div className="font-extrabold text-lg tracking-widest">
          ARTHUR
          <span className="align-super text-xs ml-1">™</span>
        </div>
        <div className="text-xs text-muted-foreground max-w-[400px] text-right pt-1">
          Portfolio de projets data et développement
        </div>
      </header>

      <main className="flex-1 p-8">
        <div className="mb-8">
          <Button variant="ghost" asChild size="sm">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Link>
          </Button>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-2xl font-bold mb-8">Projets Data & Développement</h1>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Projet</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Stack Technique</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Année</TableHead>
                  <TableHead>Repository</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.name}>
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>{project.description}</TableCell>
                    <TableCell className="font-mono text-xs">{project.stack}</TableCell>
                    <TableCell>{project.status}</TableCell>
                    <TableCell>{project.year}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Voir le code
                        </a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>

      {/* Footer navigation */}
      <footer className="flex justify-between items-center px-8 py-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Data Portfolio</div>
        <div className="flex gap-6">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </div>
      </footer>
    </div>
  );
}

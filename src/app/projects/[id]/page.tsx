import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailView from "@/components/ProjectDetailView";
import { MAJOR_PROJECTS } from "@/data/sportsData";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = MAJOR_PROJECTS.find((item) => item.id === id);

  if (!project) return { title: "Project Not Found | SPORTICON Infra" };

  return {
    title: `${project.title} | SPORTICON Infra Projects`,
    description: `${project.category} in ${project.location}. ${project.highlight}`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = MAJOR_PROJECTS.find((item) => item.id === id);

  if (!project) notFound();

  return <ProjectDetailView project={project} />;
}

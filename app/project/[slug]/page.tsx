import CaseStudySection from '@/components/CaseStudyProps';
import { projects } from '@/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return null;
  }

  return (
    <CaseStudySection
      title={project.title}
      metadata={project.metadata}
      description={project.description}
      mainMedia={project.mainMedia}
      desktopVideoSrc={project.desktopVideoSrc}
      mobileVideoSrc={project.mobileVideoSrc}
      liveSite={project.liveSite}
    />
  );
}
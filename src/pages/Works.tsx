import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ProjectCard from '../components/works/ProjectCard';
import { projects } from '../data/projects';

const Works = () => {
  return (
    <div>
      <PageHeader
        title="Our Works"
        subtitle="Discover the initiatives and projects that are making a difference in our communities."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
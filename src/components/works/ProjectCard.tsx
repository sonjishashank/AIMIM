import React from 'react';
import { Project } from '../../types';
import Card from '../shared/Card';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="w-full h-48 object-cover"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className="p-6">
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
          {project.category}
        </span>
        <h3 className="mt-4 text-xl font-bold text-gray-900">{project.title}</h3>
        <p className="mt-3 text-gray-600">{project.description}</p>
        {project.stats && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-green-600">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
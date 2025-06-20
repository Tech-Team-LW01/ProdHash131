import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Target, Layers } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  objective: string;
  techStack: string[];
  steps: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isBonus?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isBonus = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-dark-800 rounded-lg overflow-hidden card-hover ${isBonus ? 'border-2 border-primary-red' : 'border border-dark-600'}`}>
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
              isBonus ? 'bg-primary-red text-white' : 'bg-dark-700 text-primary-red'
            }`}>
              {project.id}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {project.title}
                {isBonus && <span className="ml-2 px-2 py-1 bg-primary-red text-white text-xs rounded-full">BONUS</span>}
              </h3>
              <p className="text-gray-400 text-sm">Click to expand details</p>
            </div>
          </div>
          <div className="text-primary-red">
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-6 pb-6 animate-slide-up">
          <div className="border-t border-dark-600 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-primary-red mr-2" />
                  <h4 className="text-lg font-semibold">Objective</h4>
                </div>
                <p className="text-gray-300 mb-6">{project.objective}</p>

                <div className="flex items-center mb-3">
                  <Layers className="w-5 h-5 text-primary-red mr-2" />
                  <h4 className="text-lg font-semibold">Tech Stack</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-dark-700 text-primary-red-light text-sm rounded-full border border-primary-red/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-3">
                  <Code className="w-5 h-5 text-primary-red mr-2" />
                  <h4 className="text-lg font-semibold">Implementation Steps</h4>
                </div>
                <ul className="space-y-2">
                  {project.steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-primary-red/20 text-primary-red rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-300 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
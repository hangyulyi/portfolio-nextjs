import React from "react";

import { Project } from "@/app/projects/Project";

interface ProjectsCardProps {
    project: Project;
}



const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
    return (
        <div className="bg-white rounded-lg transition-all transform hover:translate-y-2 p-4 flex">
            <div className="flex-shrink-0">
                <img src={project.img} alt={project.name} className="rounded-lg max-h-48 object-contain" />    
            </div>
            <div className="ml-6 flex-grow text-left mt-4">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p>{project.description}</p>
                <div className="mt-4 flex flex-wrap">

                    {/* display technologies as tags */}
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-sm text-white bg-green rounded-lg px-2 py-1 mr-2 mb-2 flex items-center justify-center"
                            style={{ minWidth: '50px', height: '30px' }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>  
            </div>
            
        </div>
    )
}

export default ProjectsCard
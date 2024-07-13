import React from "react";

import { Project } from "@/app/projects/Project";

interface ProjectsCardProps {
    project: Project;
}



const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
    return (
        <div className="bg-white rounded-lg transition-all transform shadow-[0px_10px_1px_rgba(64,_64,_64)] hover:translate-y-2 hover:shadow-none p-4">
            <img src={project.img} alt={project.name} className="rounded-t-lg w-full h-48 object-contain" />
            <h2 className="text-xl font-bold mt-2">{project.name}</h2>
            <div className="mt-4 flex flex-wrap">
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
    )
}

export default ProjectsCard
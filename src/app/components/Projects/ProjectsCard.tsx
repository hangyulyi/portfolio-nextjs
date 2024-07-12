import React from "react";

import { Project } from "@/app/projects/Project";

interface ProjectsCardProps {
    project: Project;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 m-4">
            <img src={project.img} alt={project.name} className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <ul className="list-disc pl-5">
                    {project.technologies.map((tech, index) => (
                        <li key={index} className="text-gray-700">{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectsCard
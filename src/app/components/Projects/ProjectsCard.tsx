import React from "react";

import { Project } from "@/app/projects/Project";

import ButtonGithub from "../Buttons/ButtonGithub";

interface ProjectsCardProps {
    project: Project;
}



const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {

    return (
        <div className="bg-white rounded-lg transition-all transform hover:-translate-y-2 p-4 flex">
            <div className="flex-shrink-0">
                <img 
                    src={project.img} 
                    alt={project.name} 
                    className="rounded-lg max-h-48 object-contain" 
                />
                
                <div className="flex justify-end mr-6 mb-2 mt-4">
                    {/* if project link exists, create github link to it */}
                    {project.link && <ButtonGithub link={project.link} />}
                </div>    
            </div>

            {/* text blurb */}
            <div className="mx-6 flex-grow text-left mt-4">
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <div className="flex flex-col -space-y-2">
                        {project.description.split('\n').map((line, index) => (
                            <div key={index} className="sm:pt-0">
                                <p>{line}</p>
                                <br />
                            </div>
                        ))}
                    </div>
                <div className="flex flex-wrap">

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
import React from "react";
import Image from "next/image";

import { Project } from "@/app/projects/Project";

import ButtonGithub from "../Buttons/ButtonGithub";
import ButtonLive from "../Buttons/ButtonLive";

interface ProjectsCardProps {
    project: Project;
}



const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {

    return (
        <div className="bg-white rounded-lg transition-all transform hover:-translate-y-4 p-4 flex flex-col md:flex-row">
            <div className="flex-shrink-0 mx-auto">
                <Image 
                    src={project.img} 
                    alt={project.name} 
                    width={400}
                    height={300}
                    className="rounded-lg max-h-48 object-contain" 
                />
                
                <div className="flex justify-center mt-4 align-center space-x-4">
                    {/* if project link/live exists, create button and a link to it */}
                    {project.live && <ButtonLive link={project.live} />}
                    {project.link && <ButtonGithub link={project.link} />}
                </div>    
            </div>

            {/* text blurb */}
            <div className="mx-6 flex-grow text-left mt-4">
                <div className="flex flex-nowrap">
                    <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                    {project.year && <span className="italic ml-2 mt-1">{project.year}</span>}
                </div>
                
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
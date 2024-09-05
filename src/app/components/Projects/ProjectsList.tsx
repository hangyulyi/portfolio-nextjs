// dynamic routing for projects (component for cards?)
import React from 'react'
import Link from 'next/link'

import ProjectsCard from './ProjectsCard'
import { Project } from "../../projects/Project"

interface ProjectsListProps {
    projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    if (!projects || projects.length === 0) {
        return <div>No projects found</div>
    }

    return (
        <div className='grid gap-6 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid-cols-1'>
            {projects.map((project: Project) => (
                
                <div key={project.id} className='w-full p-2'>
                    <ProjectsCard project={project} />
                </div>
                
            ))}
        </div>
    )
}

export default ProjectsList;
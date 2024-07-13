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
        <div className='grid gap-6 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid-cols-1 sm:grid-cols-2'>
            {projects.map((project: Project) => (
                <Link href={`/projects/${project.slug}`} key={project.id} passHref>
                    <div className='w-full p-4 cursor-pointer'>
                        <ProjectsCard project={project} />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProjectsList;
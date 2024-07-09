// dynamic routing for projects (component for cards?)

import Link from 'next/link'

import { Project, projects } from "../../projects/Project"

const ProjectsList: React.FC = () => {
    return (
        <ul>
            {projects.map((project: Project) => (
                <li key={project.id}>
                    <Link href={`/projects/${project.slug}`}>{project.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default ProjectsList;
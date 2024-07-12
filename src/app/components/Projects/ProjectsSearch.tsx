"use client"

import React, { useState } from 'react';

import ProjectsList from './ProjectsList';
import { Project, projects } from '../../projects/Project';

const ProjectsSearch: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    const filteredProjects = searchQuery ? projects.filter((project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
    : projects

    return (
        <div>
            <input 
                type='text'
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder='Search projects...'
                className='p-2 border border-gray-300 rounded-lg w-full mb-4'
            />
            <ProjectsList projects={filteredProjects} />
        </div>
    )
}

export default ProjectsSearch;
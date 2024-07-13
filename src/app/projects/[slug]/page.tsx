import { FaCode } from "react-icons/fa";

import { Project, projects } from "../Project"

export default function ProjectPost({ params }: { params: { slug: string } }) {
    // check if slug exists in projects
    const project: Project | undefined = projects.find(p => p.slug === params.slug)

    // handle nonexistent project
    if (!project) {
        return (
            <div>Project not found</div>
        )
    }

    return (
        <div className="p-10 max-w-[2000px] mx-auto mt-10 pb-0">
            <div className="bg-transparent mx-5 items-center justify-center md:flex">
                <section className="md:w-6/12 pr-10">
                    <h1 className="font-bold text-4xl pt-2 pb-10 tracking-wider">{project.name}</h1>
                    <div >
                        {project.description.split('\n').map((line, index) => (
                            <div key={index} className="sm:pt-0">
                                <p>{line}</p>
                                <br />
                            </div>
                        ))}
                    </div>
                    {project.link && (
                        <div className="flex justify-left mb-10">
                            <a
                                href={project.link}
                                target="_blank"
                                className="mt-4 ml-4 inline-flex items-center bg-green text-white py-2 px-4 hover:grayscale-[50%]"
                            >
                                View Project Code  
                                <FaCode className="ml-2" />
                            </a>
                        </div>
                    )}
                </section>
                <div className="p-0 mx-5">
                    {/* img- host */}
                    <img src={project.img} className="rounded-md max-w-60"></img>
                </div>
            </div>

        </div>
    )
}

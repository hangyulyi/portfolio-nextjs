import { FaCode } from "react-icons/fa";

import { Project, projects } from "../Project"

export default function ProjectPost({ params }: { params: { slug: string } }) {
    // check if slug exists in projects
    const project: Project | undefined = projects.find(p => p.slug === params.slug)

    if (!project) {
        return (
            <div>Project not found</div>
        )
    }

    return (
        <div className="p-10 max-w-[2000px] mx-auto mt-10 pb-0">
            <div className="bg-transparent mx-5 items-center justify-center md:flex">
                <section className="md:w-6/12">
                    <h1 className="font-bold text-4xl pt-2 pb-10 tracking-wider">{project.name}</h1>
                    <div >
                        <p className="sm:pt-0">{project.description}</p>
                    </div>
                </section>
                <div className="p-0 mx-5">
                    {/* img- host */}
                    <img src={project.img} className="rounded-md"></img>
                </div>
            </div>


        </div>
    )
}

import { useTranslations } from "next-intl";

import ProjectsList from "../components/Projects/ProjectsList";
import ProjectsSearch from "../components/Projects/ProjectsSearch";

export default function ProjectsPage() {
    const t = useTranslations("Projects")

    return (
        <div className="mx-auto max-w-7xl px-4 pt-4 my-5 text-center">
            <h1 className="font-bold text-4xl pt-2 pb-10 uppercase tracking-wider">
                {t('title')}
            </h1>
            <ProjectsSearch />
        </div>
    )
}
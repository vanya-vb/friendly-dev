import type { Route } from "./+types/index";
import { useState } from "react";
import type { Project } from "~/types";

import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";

export async function loader({ request }: Route.LoaderArgs): Promise<{ projects: Project[] }> {
    const res = await fetch("http://localhost:8000/projects");
    const data = await res.json();

    return { projects: data };
}

export default function ProjectsPage({ loaderData }: Route.ComponentProps) {
    const { projects } = loaderData as { projects: Project[] };

    const [currentPage, setCurrentPage] = useState(1);

    const projectsPerPage = 2;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirst, indexOfLast);

    return (
        <>
            <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                {currentProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        </>
    );
};
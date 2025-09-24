import type { Route } from "./+types/index";
import type { Project } from "~/types";

import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreviewPage from "~/components/AboutPreview";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "The Friendly Dev | Welcome" },
        { name: "description", content: "Custom website development" },
    ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{ projects: Project[] }> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
    const data = await res.json();

    return { projects: data };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
    const { projects } = loaderData;

    return (
        <>
            <FeaturedProjects projects={projects} count={2} />
            <AboutPreviewPage />
        </>
    );
}

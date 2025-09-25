import type { Route } from "./+types/index";
import type { Project } from "~/types";
import type { PostMeta } from "~/types";

import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreviewPage from "~/components/AboutPreview";
import LatestPosts from "~/components/LatestPosts";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "The Friendly Dev | Welcome" },
        { name: "description", content: "Custom website development" },
    ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{ projects: Project[], posts: PostMeta[] }> {
    const url = new URL(request.url);

    const [projectRes, postRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/projects`),
        fetch(new URL("/posts-meta.json", url))
    ]);

    if (!projectRes.ok || !postRes.ok) {
        throw new Error("Failed to fetch projects or posts");
    }

    const [projects, posts] = await Promise.all([
        projectRes.json(),
        postRes.json()
    ]);

    return { projects, posts };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
    const { projects, posts } = loaderData;

    return (
        <>
            <FeaturedProjects projects={projects} count={2} />
            <AboutPreviewPage />
            <LatestPosts posts={posts} />
        </>
    );
}

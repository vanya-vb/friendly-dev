import type { Route } from "./+types/index";
import type { PostMeta } from "~/types";
import PostCard from "~/components/PostCard";

export async function loader({ request }: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
    const url = new URL("/posts-meta.json", request.url);
    const res = await fetch(url.href);

    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();

    data.sort((a: PostMeta, b: PostMeta) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    })

    return { posts: data };
}

export default function BlogPage({ loaderData }: Route.ComponentProps) {
    const { posts } = loaderData;

    return (
        <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
            <h2 className="text-3xl font-bold text-white mb-8">Blog</h2>
            {posts.map(post => (
                <PostCard key={post.slug} post={post} />
            ))}
        </div>
    );
};
import type { PostMeta } from "~/types";
import { Link } from "react-router";

export default function PostCard({ post }: { post: PostMeta }) {
    return (
        <article className="bg-gray-800 p-6 rounded-lg shadow mb-4">
            <h3 className="text-2xl font-semibold text-blue-400">{post.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{new Date(post.date).toDateString()}</p>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="text-blue-300 text-sm hover:underline">Read More</Link>
        </article>
    );
};
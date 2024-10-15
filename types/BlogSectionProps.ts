import type { Post } from "./Post";

export interface BlogSectionProps {
    title: string;
    subtitle: string;
    description: string;
    textLink: string;
    posts?: Post[];
}
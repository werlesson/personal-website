import type { Project } from "./Project";

export interface ProjectsSectionProps {
    title: string;
    subtitle: string;
    description: string;
    projects: Project[];
}
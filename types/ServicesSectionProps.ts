import type { Service } from "./Service";

export interface ServicesSectionProps {
    title: string;
    description: string;
    textLink: string;
    services: Service[];
}
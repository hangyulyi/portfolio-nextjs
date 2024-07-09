export interface Project {
    id: number;
    name: string;
    description: string;
    slug: string;
    technologies: string[];
    link?: string;
}

export const projects: Project[] = [
    { id: 1, name: "Flower Image Classifier", description: "Train an image classifier to classify different species of flowers", slug: "flower-classifier", technologies: ["Python", "PyTorch"], link: "https://github.com/hangyulyi/Image-Classifier" }
]
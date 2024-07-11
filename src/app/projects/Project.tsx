export interface Project {
    id: number;
    name: string;
    description: string;
    slug: string;
    technologies: string[];
    link?: string;
    img?: string;
    code: boolean;
}

export const projects: Project[] = [
    { 
        id: 1, 
        name: "Portfolio Website", 
        description: "You're looking at it right now!", 
        slug: "portfolio", 
        technologies: ["Next.js", "TailwindCSS", "TypeScript"], 
        link: "https://github.com/hangyulyi/Image-Classifier",
        img: "https://hangyulyi.github.io/assets/flower_classifier.png",
        code: true
    },
    { 
        id: 2, 
        name: "Flower Image Classifier", 
        description: "Train and predict flower species using a command line application, displaying top-K probable results. \n Users are able to train a new network on a dataset and save the model as a checkpoint as well as use the trained network to predict the class when given an input image.", 
        slug: "flower-classifier", 
        technologies: ["Python", "PyTorch"], 
        link: "https://github.com/hangyulyi/Image-Classifier",
        img: "https://hangyulyi.github.io/assets/flower_classifier.png",
        code: true
    }
]
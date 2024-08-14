export interface Project {
    id: number;
    name: string;
    description: string;
    slug: string;
    technologies: string[];
    // code link
    link?: string;
    img?: string;
    // live deployed link
    live?: string;
}

// for future implementation, create projectsEN and projectsKR for easy distinguish for kr and en locale

export const projects: Project[] = [
    { 
        id: 1, 
        name: "Portfolio Website", 
        description: "You're looking at it right now! Using Next.js, TailwindCSS, and TypeScript, this portfolio site is responsive and makes use of a couple fun modules. \nAn example of one of the module used is next-intl! You might've noticed the flag icon in the header and when you press it, it'll provide a translation of the site, offering a website in both Korean and English! (Full translations are still a work in process :])\nYou can check out some other modules I used by checking out the README.md in the GitHub repo!", 
        slug: "portfolio", 
        technologies: ["Web development", "Next.js", "TailwindCSS", "TypeScript"], 
        link: "https://github.com/hangyulyi/portfolio-nextjs",
        img: "https://hangyulyi.github.io/assets/flower_classifier.png"
    },
    { 
        id: 2, 
        name: "Flower Image Classifier", 
        description: "Train and predict flower species using a command line application, displaying top-K probable results. \n Users are able to train a new network on a dataset and save the model as a checkpoint as well as use the trained network to predict the class when given an input image.", 
        slug: "flower-classifier", 
        technologies: ["Machine Learning", "Python", "PyTorch"], 
        link: "https://github.com/hangyulyi/Image-Classifier",
        img: "https://hangyulyi.github.io/assets/flower_classifier.png"
    },
    {
        id: 3, 
        name: "BMERIT Website & Newsletter", 
        description: "Develop and deploy the main website for BMERIT at University of Calgary. \nI've also created and made a newsletter service for the club using MJML to create the responsive HTML and as of right now, I'm working on making an automated mailing system to make the emailing process smoother for the club's monthly newsletter.", 
        slug: "bmerit", 
        technologies: ["Web development", "Newsletter", "HTML/CSS", "JavaScript", "MJML"], 
        img: "https://hangyulyi.github.io/assets/bmerit_logo.png",
        live: "https://bmerit.web.app/"
    },
    {
        id: 4,
        name: "ottertype",
        description: "",
        slug: "",
        technologies: []
    },
    {
        id: 5,
        name: "",
        description: "",
        slug: "",
        technologies: []
    }
]
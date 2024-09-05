import { StaticImport } from "next/dist/shared/lib/get-img-props";

// image files
import bmerit from "../../../public/project-img/bmerit_logo.png"
import flower_classifier from "../../../public/project-img/flower_classifier.png"
import ottertype from "../../../public/project-img/ottertype.png"
import portfolio from "../../../public/project-img/portfolio.png"

export interface Project {
    id: number;
    name: string;
    year?: number; // year worked on
    description: string;
    // slug: used for when projects have their own pages
    slug: string;
    technologies: string[];
    // code link
    link?: string;
    img: string | StaticImport;
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
        img: portfolio
    },
    { 
        id: 2, 
        name: "Flower Image Classifier", 
        year: 2023,
        description: "Train and predict flower species using a command line application, displaying top-K probable results. \n Users are able to train a new network on a dataset and save the model as a checkpoint as well as use the trained network to predict the class when given an input image. All of this is possible through custom command-line commands coded using the argparse module. \n(If you're interesting on running this, there are a couple assumptions made in the codebase i.e. where your images lay so adjustments may be required)", 
        slug: "flower-classifier", 
        technologies: ["Machine Learning", "Python", "PyTorch"], 
        link: "https://github.com/hangyulyi/Image-Classifier",
        img: flower_classifier
    },
    {
        id: 3, 
        name: "BMERIT Website & Newsletter", 
        description: "Developed and deployed the main website for BMERIT at University of Calgary. \nI've also created and made a newsletter service for the club using MJML to create the responsive HTML template and as of right now, I'm working on making an automated mailing system to make the emailing process smoother for the club's monthly newsletter.", 
        slug: "bmerit", 
        technologies: ["Web development", "Newsletter", "HTML/CSS", "JavaScript", "MJML"], 
        img: bmerit,
        live: "https://bmerit.web.app/"
    },
    {
        id: 4,
        name: "ottertype",
        year: 2024,
        description: "A replica of my favorite typing test, MonkeyType.\n It's super barebones of what the original is so while it doesn't have the cool additional features like all the custom themes and colors, it does have an otter which is a bit cuter than a monkey in my opinion :].",
        slug: "ottertype",
        technologies: ["Web development", "Next.js", "TypeScript", "TailwindCSS"],
        img: ottertype,
        link: "https://github.com/hangyulyi/ottertype",
        live: "https://ottertype.vercel.app/"
    },
    // {
    //     id: 5,
    //     name: "",
    //     description: "",
    //     slug: "",
    //     technologies: []
    // }
]
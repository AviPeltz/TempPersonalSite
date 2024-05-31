"use client";

import {useState} from 'react';
import Image from 'next/image';
import bioglyphIcon from "../../../public/thumbnails/BioGlyph.png";
import tensormakerIcon from "../../../public/thumbnails/TensorMaker.png";
import foreverfreshIcon from "../../../public/thumbnails/ForeverFresh.png";
import bioartbotIcon from "../../../public/thumbnails/BioArtBot.png";
import { robotoMono }from "./fonts";
import styles from "./FeatureProjectGallery.module.css";


const featureList = [
{
    id:0, 
    title: "BioGlyph", 
    description: "Figma for Protein Therapeutics",
    thumbnail: bioglyphIcon,
    link:"https://bioglyph.app/",
    tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
},
{   
    id:1, 
    title: "TensorMaker", 
    description: "SquareSpace for AI applications",
    thumbnail: tensormakerIcon,
    link:"https://www.tensormaker.com/",
    tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
},
{   
    id:2, 
    title: "Default", 
    description: "Computer vision based quality assessment for fresh produce",
    thumbnail:foreverfreshIcon,
    link:"link",
    tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
},
{   
    id:3, 
    title: "new", 
    description: "Liquid handling robot trained to paint with GMO bacteria",
    thumbnail:bioartbotIcon,
    link:"https://www.bioartbot.org/",
    tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
},
];
export interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: any;
    link: string;
    tags: string[];

};
interface FeaturedProjectGalleryProps {
    projects: Project[];
    heading: string;
}


export default function FeaturedProjectGallery({ projects, heading }: FeaturedProjectGalleryProps) {
    return (
        <div className={styles.featuredProjectContainer}>
            <h2 className={styles.featuredProjectGallery}>{heading}  ---------------------------------------------------------------|</h2>
            <div className={styles.featuredProjectGallery}>
                {projects.map(project => (
                    <div key={project.id} className={styles.featuredProjectCard}>
                        <a href={project.link} target="_blank">
                        <div className={styles.featureProjectCardThumbnail}>
                            <Image src={project.thumbnail} alt={project.title} width={150} height={150} className={styles.featuredProjectCard}/>
                        </div>
                        <div className={styles.featuredProjectCardContent}>
                            <h3 className={styles.featuredProjectCard}>{project.title}</h3>
                            <p className={styles.featuredProjectCard}>{project.description}</p>
                        </div>
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}
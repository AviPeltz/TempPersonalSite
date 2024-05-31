"use client";

import {useState} from 'react';
import Image from 'next/image';
import bioglyphIcon from "../../../public/thumbnails/BioGlyph.png";
import tensormakerIcon from "../../../public/thumbnails/TensorMaker.png";
import foreverfreshIcon from "../../../public/thumbnails/ForeverFresh.png";
import bioartbotIcon from "../../../public/thumbnails/BioArtBot.png";
import { robotoMono }from "./fonts";
import styles from "./FeatureProjectGallery.module.css";


const projectList = [
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
    title: "ForeverFresh", 
    description: "Computer vision based quality assessment for fresh produce",
    thumbnail:foreverfreshIcon,
    link:"link",
    tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
},
{   
    id:3, 
    title: "BioArtBot", 
    description: "Liquid handling robot trained to paint with GMO bacteria",
    thumbnail:bioartbotIcon,
    link:"https://www.bioartbot.org/",
    tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
},
];
export default function FeaturedProjectGallery({projects = projectList}){
    return (
        <div className={styles.featuredProjectContainer}>
            <h2 className={styles.featuredProjectGallery}>Featured Projects  ---------------------------------------------------------------|</h2>
            <div className={styles.featuredProjectGallery}>
                {projects.map(project => (
                    <div key={project.id} className={styles.featuredProjectCard}>
                        <a href={project.link} target="_blank">
                        <Image src={project.thumbnail} alt={project.title} width={150} height={150} className={styles.featuredProjectCard}/>
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
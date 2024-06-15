"use client";

const blogPostsTests = [
    {
        id:0, 
        title: "I can’t stop planting trees and it’s becoming a problem", 
        description: "I can’t stop planting trees and it’s becoming a problem.. i’ve ppalnted over 100 now",
        thumbnail: "string",
        datePosted: "string",
        link:"https://bioglyph.app/",
        tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
    },
    {   
        id:1, 
        title: "The C Progamming Language (K&R) Notes", 
        description: "My collection of notes from going through all of K&R",
        thumbnail: "string",
        datePosted: "string",
        link:"https://www.tensormaker.com/",
        tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
    },
    {   
        id:2, 
        title: "my principles and obersvations",
        description: "half baked thoughts not consistently updated but frequently changed...",
        thumbnail:"string",
        datePosted: "string",
        link:"link",
        tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
    },
    {   
        id:3, 
        title: "Self-hosting ML Applications", 
        description: "-> it doesnt make sense with residential internet",
        thumbnail: "string",
        datePosted: "string",
        link:"https://www.bioartbot.org/",
        tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
    },
    {   
        id:4, 
        title: "Ideas somebody should build", 
        description: "heres a list of ideas that i dream of building but dont have the time",
        thumbnail: "string",
        datePosted: "string",
        link:"https://www.bioartbot.org/",
        tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
    },
    {   
        id:5, 
        title: "Ideas of impact that probably dont make much money", 
        description: "heres a list of things that have an existing demand from people in small-scale or low margin industries",
        thumbnail: "string",
        datePosted: "string",
        link:"https://www.bioartbot.org/",
        tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
    },
    {   
        id:6, 
        title: "Ideas of impact that probably dont make much money", 
        description: "heres a list of things that have an existing demand from people in small-scale or low margin industries",
        thumbnail: "string",
        datePosted: "string",
        link:"https://www.bioartbot.org/",
        tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
    },
    ];
    export interface Post {
        id: number;
        title: string;
        description: string;
        thumbnail: any;
        datePosted: string;
        link: string;
        tags: string[];
    
    };
    {/*interface FeaturedProjectGalleryProps {
        projects: Project[];
        heading: string;
    }*/}
    
    

export default function BlogGallery(){
    return(
        <div>BlogGallery</div>
    );
}
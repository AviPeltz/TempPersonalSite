import styles from "./page.module.css";
import projectCard from '../ui/FeaturedProjectGallery'
import Image from "next/image";
import bioglyphIcon from "../../../public/thumbnails/BioGlyph.png";
import tensormakerIcon from "../../../public/thumbnails/TensorMaker.png";
import foreverfreshIcon from "../../../public/thumbnails/ForeverFresh.png";
import bioartbotIcon from "../../../public/thumbnails/BioArtBot.png";
import FeaturedProjectGallery from "../ui/FeaturedProjectGallery";
import defaultIcon from "../../../public/thumbnails/default.png";
import { Project } from "../ui/FeaturedProjectGallery";



const featuredProjectList : Project[] = [
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
    const otherProjectList : Project[] = [
        {
            id:0, 
            title: "Asset Tracking Drone", 
            description: "Trying to track big machinery with drones",
            thumbnail: defaultIcon,
            link:"https://bioglyph.app/",
            tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
        },
        {   
            id:1, 
            title: "LoRa Weather Station", 
            description: "Low Power Long Range Weather Station",
            thumbnail: defaultIcon,
            link:"https://www.tensormaker.com/",
            tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
        },
        {   
            id:2, 
            title: "Deep learning Workstation build", 
            description: "Building the BitCrusher9000 build with a 3090",
            thumbnail:defaultIcon,
            link:"https://www.tensormaker.com/",
            tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
        },
        {   
            id:3, 
            title: "Real Vegan Cheese Project", 
            description: "Liquid handling robot trained to paint with GMO bacteria",
            thumbnail:defaultIcon,
            link:"https://www.bioartbot.org/",
            tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
        },
        {   
            id:4, 
            title: "Real Vegan Cheese Project", 
            description: "Liquid handling robot trained to paint with GMO bacteria",
            thumbnail:defaultIcon,
            link:"https://www.bioartbot.org/",
            tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
        },
        {   
            id:5, 
            title: "Real Vegan Cheese Project", 
            description: "Liquid handling robot trained to paint with GMO bacteria",
            thumbnail:defaultIcon,
            link:"https://www.bioartbot.org/",
            tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
        },
        {   
            id:6, 
            title: "Real Vegan Cheese Project", 
            description: "Liquid handling robot trained to paint with GMO bacteria",
            thumbnail:defaultIcon,
            link:"https://www.bioartbot.org/",
            tags: ["Featured", "Technical", "Art", "Design", "Electronics", "Software", "Mechatronics"],
        },
        ];


export default function Page() {
    return(
        <section>

            <div>
                <FeaturedProjectGallery  projects={featuredProjectList} heading="Featured projects" />
                {/* - Other Projects -- */}
                <FeaturedProjectGallery projects={otherProjectList} heading="Other projects" />
            </div>

        </section>
    );
}


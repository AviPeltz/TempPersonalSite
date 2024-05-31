import styles from "./page.module.css";
import projectCard from '../ui/FeaturedProjectGallery'
import Image from "next/image";
import FeaturedProjectGallery from "../ui/FeaturedProjectGallery";


const featuredProjects = [
{   
    id: 0,
    title: "BioGlyph",
    description: "Figma for Protein Engineering",
    image: "/public/thumbnails/BioGlyph.png",
    link: "https://bioglyph.app/"
},
{   
    id: 1,
    title: "TensorMaker",
    description: "SquareSpace for AI applications",
    image: "/public/thumbnails/TensorMaker.png",
    link: "https://www.tensormaker.com"
},
{   
    id: 2,
    title: "ForeverFresh",
    description: "Computer vision based quality assessment for fresh produce",
    image: "/public/thumbnails/ForeverFresh.png",
    link: "https://www.google.com"
},
{   
    id: 3,
    title: "BioArtBot",
    description: "Liquid handling robot trained to paint with GMO bacteria",
    image: "https://github.com/AviPeltz/TempPersonalSite/blob/main/portfolio/public/thumbnails/BioArtBot.png",
    link: "https://www.bioartbot.org/"
},
];



export default function Page() {
    return(
        <section>

            <div>
                <FeaturedProjectGallery />
                {/* - Other Projects -- */}
                <div className="featuredProjects">
                    <p className="featuredProjects">Other Projects  ------------------------------------------------------------------|</p>
                </div>
            </div>

        </section>
    );
}


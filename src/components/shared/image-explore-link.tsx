import { ArrowUpRight } from "lucide-react";
import Button from "../units/button";

type Type = {
    href: string;
    img: string;
    text: string;
};

const ImageExploreLink = ({ href, img, text }: Type) => {
    return (
        <a href={href}>
            <div className="w-full flex justify-center relative">
                <img src={img} alt={text.replaceAll(" ", "-").concat("img")} />
                <Button variant="Outline" className="absolute bottom-4">
                    {text}
                    <ArrowUpRight size={16} />
                </Button>
            </div>
        </a>
    );
};

export default ImageExploreLink;

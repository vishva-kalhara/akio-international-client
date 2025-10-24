import Paragraph from "../units/paragraphs";

type Type = {
    text: string;
    img: string;
};

const ImageSubText = ({ text, img }: Type) => {
    return (
        <div className="flex flex-col items-center mt-4">
            <img src={img} alt={text.replaceAll(" ", "-").concat("img")} />
            <Paragraph className="mt-4 text-base">{text}</Paragraph>
        </div>
    );
};

export default ImageSubText;

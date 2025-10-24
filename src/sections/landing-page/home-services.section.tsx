import ImageSubText from "../../components/shared/image-subtext";
import Heading from "../../components/units/heading";
import Paragraph from "../../components/units/paragraphs";
import { useLanguage } from "../../hooks/use-language";

const HomeServicesSection = () => {
    const { t } = useLanguage();
    const { homeServices: h } = t.landingPage;

    return (
        <section className="bg-ivory py-24 flex flex-col items-center">
            <Heading>{h.heading}</Heading>
            <Paragraph className="mt-4 leading-snug">{h.subText}</Paragraph>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-10 mx-10 gap-8">
                <ImageSubText
                    img="./cleaning-air-condition.png"
                    text={h.services.airCondition}
                />
                <ImageSubText
                    img="./cleaning-toilet.png"
                    text={h.services.toilet}
                />
                <ImageSubText
                    img="./cleaning-kitchen.png"
                    text={h.services.kitchen}
                />
                <ImageSubText
                    img="./cleaning-floor.png"
                    text={h.services.floor}
                />
                <ImageSubText
                    img="./cleaning-bathroom.png"
                    text={h.services.bathroom}
                />
            </div>
        </section>
    );
};

export default HomeServicesSection;

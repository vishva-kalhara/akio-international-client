import { Phone } from "lucide-react";
import Button from "../components/units/button";
import Heading from "../components/units/heading";
import Paragraph from "../components/units/paragraphs";
import { useLanguage } from "../hooks/use-language";
import { siteMap } from "../site-map";

const HeroSection = () => {
    const { t: l } = useLanguage();
    const { hero: t } = l.landingPage;

    return (
        <section className="flex flex-col justify-center items-center py-20 bg-beige">
            <Heading>{t.line1}</Heading>
            <Heading>{t.line2}</Heading>
            <Paragraph className="mt-4 max-w-[75ch] ">{t.subText}</Paragraph>
            <div className="flex gap-4 items-center mt-8">
                <a href={siteMap.aboutUsPage}>
                    <Button variant="Outline">{t.btn2}</Button>
                </a>
                <a href={siteMap.contactUsPage}>
                    <Button variant="Primary">
                        <Phone fill="#fff" size={18} className="mt-1" /> {t.cta}
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;

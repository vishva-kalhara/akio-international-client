import { useLanguage } from "../hooks/use-language";

const HomeServicesPage = () => {
    const { lang } = useLanguage();

    return (
        <section className="bg-beige md:p-24 flex flex-col items-center">
            <img src={`./home-services-${lang}.svg`} className="w-full" />
        </section>
    );
};

export default HomeServicesPage;

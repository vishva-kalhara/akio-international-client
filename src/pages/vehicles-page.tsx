import { useLanguage } from "../hooks/use-language";

const VehiclesPage = () => {
    const { lang } = useLanguage();

    return (
        <section className="bg-beige p-24 flex flex-col items-center">
            <img src={`./vehicle-services-${lang}.svg`} className="w-full" />
        </section>
    );
};

export default VehiclesPage;

import { useLanguage } from "../hooks/use-language";

const Nav = () => {
    const { t } = useLanguage();

    return (
        <nav className="bg-beige w-full flex px-6 py-6">
            <a href="/" className="text-primary font-semibold">
                {t.shared.name}
            </a>
        </nav>
    );
};

export default Nav;

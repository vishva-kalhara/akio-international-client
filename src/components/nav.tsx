import { useLanguage } from "../hooks/use-language";
import Link from "./units/link";

const Nav = () => {
    const { t } = useLanguage();

    return (
        <nav className="bg-beige w-full flex px-8 justify-between items-center">
            <div className="py-6">
                <Link href="/">{t.shared.name}</Link>
            </div>
            <div className="flex gap-6">
                <Link href="/vehicles">{t.nav.linkVehicles}</Link>
                <Link href="/home-services">{t.nav.linkHomeServices}</Link>
            </div>
        </nav>
    );
};

export default Nav;

import { Phone } from "lucide-react";
import { useLanguage } from "../../hooks/use-language";
import Button from "../units/button";
import Link from "../units/link";

const Nav = () => {
    const { t } = useLanguage();

    return (
        <nav className="bg-beige w-full flex px-8 py-6 justify-between items-center border-b-2 border-b-black/5">
            <div>
                <Link href="/">{t.shared.name}</Link>
            </div>
            <div className="flex gap-6 items-center">
                <Link href="/vehicles">{t.shared.nav.linkVehicles}</Link>
                <Link href="/home-services">
                    {t.shared.nav.linkHomeServices}
                </Link>
                <a href="/contact-us">
                    <Button variant="Primary">
                        <Phone fill="#fff" size={18} className="mt-1" />{" "}
                        {t.shared.nav.cta}
                    </Button>
                </a>
            </div>
        </nav>
    );
};

export default Nav;

import { Languages, Phone } from "lucide-react";
import { useLanguage } from "../../hooks/use-language";
import Button from "../units/button";
import Link from "../units/link";
import { siteMap } from "../../site-map";

const Nav = () => {
    const { t, switchLanguage, lang } = useLanguage();

    return (
        <nav className="bg-beige w-full flex px-8 py-6 justify-between items-center border-b-2 border-b-black/5">
            <div>
                <Link href={siteMap.landingPage}>{t.shared.name}</Link>
            </div>
            <div className="flex gap-6 items-center">
                <Link href={siteMap.vehiclesPage} className="hidden md:block">
                    {t.shared.nav.linkVehicles}
                </Link>
                <Link
                    href={siteMap.homeServicesPage}
                    className="hidden md:block"
                >
                    {t.shared.nav.linkHomeServices}
                </Link>
                <div className="flex gap-2 items-center ">
                    <button
                        className="hover:cursor-pointer p-3 rounded-full border-2 border-black/10"
                        onClick={() =>
                            switchLanguage(lang == "en" ? "jp" : "en")
                        }
                    >
                        <Languages size={18} />
                    </button>
                    <a href={siteMap.contactUsPage}>
                        <Button variant="Primary">
                            <Phone fill="#fff" size={18} className="mt-1" />{" "}
                            <span className="hidden sm:block">
                                {t.shared.nav.cta}
                            </span>
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

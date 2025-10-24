import { useLanguage } from "../../hooks/use-language";
import { siteMap } from "../../site-map";
import FooterItem from "../units/footer-item";
import Link from "../units/link";

const Footer = () => {
    const { t } = useLanguage();
    const { footer: f } = t.shared;

    return (
        <footer className="w-full flex flex-col md:flex-row justify-center gap-6 bg-primary py-10 px-8 md:px-24">
            <div className="flex flex-col items-center md:justify-start">
                <Link href={siteMap.landingPage} className="text-white mb-4">
                    {`${t.shared.name} © ${new Date().getFullYear()}`}
                </Link>
                <FooterItem>{f.mobile}</FooterItem>
                <FooterItem>{f.email}</FooterItem>
                <FooterItem>{f.address}</FooterItem>
            </div>
        </footer>
    );
};

export default Footer;

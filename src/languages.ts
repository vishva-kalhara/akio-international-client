import { createContext } from "react";

export const languages = {
    en: {
        shared: {
            name: "Akio International",
            nav: {
                linkVehicles: "Vehicles",
                linkHomeServices: "Home Services",
                cta: "Contact Us",
            },
        },
        landingPage: {
            hero: {
                line1: "Two Specialties,",
                line2: "One Trusted Partner",
                subText:
                    "Vehicles and homes - both essential partners in your life journey. We support your lifestyle as dedicated professionals.",
                btn2: "About Us",
                cta: "Contact Us",
            },
        },
    },
    // jp: {
    //     shared: {
    //         name: "アキオインターナショナル",
    //     },
    // },
};

export type Language = keyof typeof languages;

export interface LanguageContextType {
    lang: Language;
    t: (typeof languages)["en"]; // type of language object
    switchLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

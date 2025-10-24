import { createContext } from "react";

export const languages = {
    en: {
        shared: {
            name: "Akio International",
        },
    },
    jp: {
        shared: {
            name: "アキオインターナショナル",
        },
    },
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

// nav: {
//     linkVehicles: "Vehicles",
//     linkHomeServices: "Home Services",
//     cta: "Contact Now",
// },

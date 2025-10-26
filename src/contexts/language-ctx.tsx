import { useState, type ReactNode } from "react";
import {
    LanguageContext,
    languages,
    type Language,
    type LanguageContextType,
} from "../languages";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Language>("jp");

    const switchLanguage = (newLang: Language) => setLang(newLang);

    const value: LanguageContextType = {
        lang,
        t: languages[lang],
        switchLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

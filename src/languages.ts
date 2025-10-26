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
            footer: {
                mobile: "0708 338 1142",
                email: "info@akiointernational.com",
                address:
                    "10030-24 Kido, Yokoshibahikari-cho, Sanbu-gun, Chiba Prefecture",
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
                cards: {
                    vehicleCardText: "Explore Vehicles",
                    homeServicesCardText: "Explore Home Services",
                },
            },
            homeServices: {
                heading: "Our Home Services",
                subText:
                    "Professional techniques to beautifully restore your home. Total support from cleaning to renovation.",
                services: {
                    airCondition: "Air Condition Cleaning",
                    bathroom: "Bathroom Cleaning",
                    floor: "Floor Cleaning",
                    kitchen: "Kitchen Cleaning",
                    toilet: "Toilet Cleaning",
                },
            },
        },
    },
    jp: {
        shared: {
            name: "アキオインターナショナル",
            nav: {
                linkVehicles: "車両",
                linkHomeServices: "ハウスサービス",
                cta: "お問い合わせ",
            },
            footer: {
                mobile: "0708 338 1142",
                email: "info@akiointernational.com",
                address: "千葉県山武郡横芝光町木戸10030-24",
            },
        },
        landingPage: {
            hero: {
                line1: "2つの専門分野、",
                line2: "1つの信頼できるパートナー",
                subText:
                    "車と家、どちらもあなたの人生の大切なパートナー。私たちは専門家としてあなたのライフスタイルをサポートします。",
                btn2: "私たちについて",
                cta: "お問い合わせ",
                cards: {
                    vehicleCardText: "車を見る",
                    homeServicesCardText: "ハウスサービスを見る",
                },
            },
            homeServices: {
                heading: "私たちのハウスサービス",
                subText:
                    "プロの技術でお住まいを美しく蘇らせます。クリーニングからリノベーションまでトータルサポート。",
                services: {
                    airCondition: "エアコンクリーニング",
                    bathroom: "浴室クリーニング",
                    floor: "床クリーニング",
                    kitchen: "キッチンクリーニング",
                    toilet: "トイレクリーニング",
                },
            },
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

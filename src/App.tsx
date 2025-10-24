import Footer from "./components/shared/footer";
import Nav from "./components/shared/nav";
import { LanguageProvider } from "./contexts/language-ctx";
import HeroSection from "./sections/landing-page/hero.section";
import HomeServicesSection from "./sections/landing-page/home-services.section";

function App() {
    return (
        <LanguageProvider>
            <Nav />
            <HeroSection />
            <HomeServicesSection />
            <Footer />
        </LanguageProvider>
    );
}

export default App;

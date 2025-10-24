import Footer from "./components/shared/footer";
import Nav from "./components/shared/nav";
import { LanguageProvider } from "./contexts/language-ctx";
import HeroSection from "./sections/landing-page/hero.section";

function App() {
    return (
        <LanguageProvider>
            <Nav />
            <HeroSection />
            <Footer />
        </LanguageProvider>
    );
}

export default App;

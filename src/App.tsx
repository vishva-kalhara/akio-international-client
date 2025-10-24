import Nav from "./components/shared/nav";
import { LanguageProvider } from "./contexts/language-ctx";
import HeroSection from "./sections/hero";

function App() {
    return (
        <LanguageProvider>
            <Nav />
            <HeroSection />
        </LanguageProvider>
    );
}

export default App;

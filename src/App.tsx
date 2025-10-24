import Nav from "./components/nav";
import { LanguageProvider } from "./contexts/language-ctx";

function App() {
    return (
        <LanguageProvider>
            <Nav />
        </LanguageProvider>
    );
}

export default App;

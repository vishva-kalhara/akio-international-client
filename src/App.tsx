import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/footer";
import Nav from "./components/shared/nav";
import { LanguageProvider } from "./contexts/language-ctx";
import { siteMap } from "./site-map";
import LandingPage from "./pages/landing-page";
import VehiclesPage from "./pages/vehicles-page";
import HomeServicesPage from "./pages/home-services-page";

function App() {
    return (
        <LanguageProvider>
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route
                        path={siteMap.landingPage}
                        element={<LandingPage />}
                    />
                    <Route
                        path={siteMap.vehiclesPage}
                        element={<VehiclesPage />}
                    />
                    <Route
                        path={siteMap.homeServicesPage}
                        element={<HomeServicesPage />}
                    />
                </Routes>
            </BrowserRouter>
            <Footer />
        </LanguageProvider>
    );
}

export default App;

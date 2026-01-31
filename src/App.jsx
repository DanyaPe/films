import "./index.css";
import { ThemeProvider } from "./contexts/theme/ThemeProvider";
import { LanguageProvider } from "./contexts/language/LanguageProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="min-h-screen flex flex-col overflow-hidden">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </LanguageProvider>
        </ThemeProvider>
    );
}

import "tailwindcss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
    return (
        <div className="min-w-screen min-h-screen flex flex-col">
            <Header />

            <Main />

            <Footer />
        </div>
    );
}

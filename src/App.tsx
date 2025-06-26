import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Player } from "./components/player-card";

function App() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center" dir="rtl">
            <Header title="Player Card (React + TailwindCSS)" />
            <div className="content">
                <Player />
            </div>
            <Footer />
        </div>
    );
}

export default App;

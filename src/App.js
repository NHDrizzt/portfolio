import './App.css'
import Header from './header/Header';
import Footer from "./footer/footer";
import MainContent from "./Body/MainContent";
import LowerContent from "./Body/LowerContent";
import Design from "./utils/Design";
import ScrollToViewProvider from "./context/ScrollToViewProvider";

function App() {
  return (
    <div className="App">
        <div>
            <title>Gabriel Carvalho</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
            <link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet"/>
        </div>
        <ScrollToViewProvider>
            <div className={"container-particles-maincontent"}>
                <Design />
                <Header className="Header"/>
                <MainContent />
            </div>
            <div>
                <LowerContent />
                <Footer/>
            </div>
        </ScrollToViewProvider>
    </div>
  );
}

export default App;

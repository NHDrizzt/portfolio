import './App.css'
import Header from './header/Header';
import Body from './Body/Body'

function App() {
  return (
    <div className="App">
        <head>
            <title>Gabriel Carvalho</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet"/>
        </head>
      <Header className="Header"/>
        <Body className="Body" />
    </div>
  );
}

export default App;

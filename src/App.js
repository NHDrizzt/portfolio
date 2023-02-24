import './App.css'
import Header from './header/Header';
import Body from './Body/Body'

function App() {
  return (
    <div className="App">
        <div>
            <title>Gabriel Carvalho</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
            <link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet"/>
        </div>
      <Header className="Header"/>
        <Body className="Body" />
    </div>
  );
}

export default App;

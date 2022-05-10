import './App.css';
import Header from './components/Header';



function App() {

  const dat = {
    name: "karol",
    empresa: "Fiap",
    site: "www.avanade.com",
    className: "App-link",
  };

  return (
    <div className="App">
      <Header chocolate="Bom almoço!" options={dat}></Header>
    </div>
  );
}

export default App;

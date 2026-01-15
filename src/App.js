import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieGrid from "./components/MovieGrid";
import Counter from "./components/Counter";
import NameList from "./components/NameList";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <NameList></NameList>
        <Toggle></Toggle>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

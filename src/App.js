import "./App.css";
import "./styles.css";
import Footer from "./components/Footer";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <div className="App">
      <div className="container">
        <MovieGrid></MovieGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

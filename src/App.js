import "./App.css";
import "../src/style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NewMovies from "./components/NewMovies";
import Movies from "./components/Movies";
import Series from "./components/Series";

function App() {
  return (
    <div className="background-satu">
      <Navbar />
      <NewMovies />
      <Movies />
      <Series />
    </div>
  );
}

export default App;

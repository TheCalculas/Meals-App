import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Home from "./pages/main/HomePage";
import AppContext from "./context";

function App() {
  return (
    <AppContext>
      <div>
        <NavBar />
        <Home />
      </div>
    </AppContext>
  );
}

export default App;

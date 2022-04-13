import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Home from "./pages/main/HomePage";
import Default from "./pages/Default/Def";
import AppContext from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <Router>
      <AppContext>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<LoginPage />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </AppContext>
    </Router>
  );
}

export default App;

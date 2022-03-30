import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import Contact from "./screens/Contact";
import Cady from "./screens/Cady";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/accueil" element={<Home />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Cady />} />
          <Route path="/" element={<Navigate replace to="/accueil" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TryOn from "./pages/TryOn.jsx";
import Navigation from "./components/Navigation.jsx";
import Workflow from "./pages/Workflow.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/tryon" element={<TryOn />} />
        <Route path="/workflow" element={<Workflow />} />
      </Routes>
    </Router>
  );
}

export default App;

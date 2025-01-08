import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DropshippersName from "./components/DropshippersName";
import Occupation from "./components/occupation";
import BrandName from "./components/BrandName";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dropshipper-name" element={<DropshippersName />} />
        <Route path="/Occupation" element={<Occupation />} />
        <Route path="/brand-name" element={<BrandName />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DropshippersName from "./components/DropshippersName";
import Occupation from "./components/occupation";
import BrandName from "./components/BrandName";
import SignUp from "./components/account creation/CreateAccount";
import OtpVerification from "./components/account creation/otp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/Occupation" element={<Occupation />} />
        <Route path="/dropshipper-name" element={<DropshippersName />} />
        <Route path="/brand-name" element={<BrandName />} />
      </Routes>
    </Router>
  );
}

export default App;

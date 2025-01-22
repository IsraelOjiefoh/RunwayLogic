import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DropshippersName from "./components/onboarding/DropshippersName";
import Occupation from "./components/onboarding/occupation";
import BrandName from "./components/onboarding/BrandName";
import SignUp from "./components/account creation/CreateAccount";
import OtpVerification from "./components/account creation/otp";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login page/Login";
/* import ProfileSettings from "./components/profile settings/ProfileSettings"; */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/occupation" element={<Occupation />} />
        <Route path="/dropshipper-name" element={<DropshippersName />} />
        <Route path="/brand-name" element={<BrandName />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Homepage/>} />
        {/* <Route path="/profile" element={<ProfileSettings/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;

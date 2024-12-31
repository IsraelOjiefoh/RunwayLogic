import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import NextPage from './components/NextPage';
import Brand from './components/Brand';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/next" element={<NextPage />} />
        <Route path="/brand" element={<Brand />} />
      </Routes>
    </Router>
  );
}

export default App;


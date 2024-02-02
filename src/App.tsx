import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import ForgottenPassword from './pages/ForgottenPassword';
import VerificationPage from './pages/VerificationPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/forgottenpassword" element={<ForgottenPassword />} />
          <Route path="/verificationpage" element={<VerificationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
function App() {

  return (
    <Router>
    <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  </Router>
  )
}

export default App

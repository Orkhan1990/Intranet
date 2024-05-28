import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import Protected from "./components/Protected";
import Layout from "./components/Layout";
import NewCard from "./pages/NewCard";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Protected/>}>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/newcard" element={<Layout><NewCard/></Layout>} />
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

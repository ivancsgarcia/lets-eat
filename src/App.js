import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Ingredients from "./pages/Ingredients";
import Directions from "./pages/Directions";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Information />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

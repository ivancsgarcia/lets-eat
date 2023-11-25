import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Information from "./pages/Information";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Information />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

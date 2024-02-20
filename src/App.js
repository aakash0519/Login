import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Auth from "./components/auth";

function App() {
  return (
    <Router>
      <Auth>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Auth>
    </Router>
  );
}

export default App;

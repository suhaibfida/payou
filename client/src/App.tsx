import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import Transfer from "./components/Transfer.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer/send" element={<Transfer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

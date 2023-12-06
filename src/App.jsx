import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DocmanagePage from "./pages/DocmanagePage";
import DoceditPage from "./pages/DoceditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/manage" element={<DocmanagePage />}></Route>
      <Route path="/edit" element={<DoceditPage />}></Route>
    </Routes>
  );
}

export default App;

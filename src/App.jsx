import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DocmanagePage from "./pages/DocmanagePage";
import DoceditPage from "./pages/DoceditPage";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/manage" element={<DocmanagePage />}></Route>
      <Route path="/manage/keyword?" element={<DocmanagePage />}></Route>
      <Route path="/create-document" element={<CreatePage />}></Route>
      <Route path="/edit/:id" element={<DoceditPage />}></Route>
      
    </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../features/view/LoginPage";
import HomePage from "../features/view/HomePage";

const RouterPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default RouterPage;

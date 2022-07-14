import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar/MenuBar";
import Home from "./pages/Home/Home";
import CompanyInfo from "./pages/CompanyInfo/CompanyInfo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<CompanyInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

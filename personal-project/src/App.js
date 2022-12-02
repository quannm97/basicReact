import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./common/default/DefaultLayout";
import { DefaultAdmin } from "./routes/common";
import Login from "./components/login/Login";
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/admin/*" element={<DefaultAdmin />} />
        <Route path="/*" element={<DefaultLayout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

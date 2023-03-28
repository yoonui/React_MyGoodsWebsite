import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";

import DisplayPage from "./pages/DisplayPage";
import SalePage from "./pages/SalePage";
import GoodsDetailsPage from "./pages/GoodsDetailsPage";

import MyPage from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/display" element={<DisplayPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/goodsdetails" element={<GoodsDetailsPage />} />

          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import GlobalStyle from "./style/GlobalStyle";
import "./style/normalize.css";

import BoothPage from "./pages/BoothPage.jsx";
import AdminDetailPage from "./pages/performPages/AdminDetailPage.jsx";
import UserDetailPage from "./pages/performPages/UserDetailViewPage.jsx";
import EditViewPage from "./pages/performPages/EditViewPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DefineType from "./pages/Main/DefineType.jsx";
import BoothDetailPage from "./pages/BoothDetail/BoothDetailPage.jsx";
import BoothEditPage from "./pages/BoothEdit/BoothEditPage.jsx";
import Footer from "./components/Footer";
import SignupPage from "./pages/SignupPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import NoticeListPage from "./pages/TF/NoticeListPage.jsx";
import NoticeCreatePage from "./pages/TF/NoticeCreatePage.jsx";
import NoticeDetailPage from "./pages/TF/NoticeDetailPage.jsx";
import FestivalIntro from "./pages/FestivalIntro.jsx";
import BarrierFreeInfo from "./pages/BarrierFreeInfo.jsx";
import ShowPage from "./pages/ShowPage.jsx";
import TrashPage from "./pages/TrashPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import MadeByPage from "./pages/MadeByPage.jsx";
import FestivalSchedulePage from "./pages/FestivalSchedule.jsx";
import UserNoticeList from "./pages/TF/UserNoticeList.jsx";
import UserNoticeDetail from "./pages/TF/UserNoticeDetail.jsx";
import AddMenuPage from "./pages/BoothEdit/AddMenuPage.jsx";
import KakaoSignupPage from "./pages/KakaoSignupPage.jsx";
import KakaoCallback from "./components/KakaoCallback.jsx"; // KakaoCallback 컴포넌트 import

function App() {
  // 뷰포트 높이 계산
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* 로그인 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/kakaologin" element={<KakaoSignupPage />} />
          <Route
            path="/accounts/login/kakao/callback"
            element={<KakaoCallback />}
          />

          {/* 메인 */}
          <Route path="/" element={<DefineType />} />

          {/* 부스 */}
          <Route path="/booth" element={<BoothPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/booth-edit" element={<BoothEditPage />} />
          <Route path="/booth-detail" element={<BoothDetailPage />} />
          <Route path="/booth-edit/addmenu" element={<AddMenuPage />} />

          {/* 공연 */}
          <Route path="/show" element={<ShowPage />} />
          <Route path="/detail/admin/edit" element={<EditViewPage />} />
          <Route path="/show-detail" element={<UserDetailPage />} />
          <Route path="/detail/admin" element={<AdminDetailPage />} />


          {/* 공지 */}
          <Route path="/notice-list" element={<NoticeListPage />} />
          <Route path="/notice-create" element={<NoticeCreatePage />} />
          <Route path="/notice-detail/:pk" element={<NoticeDetailPage />} />
          <Route path="/notice" element={<UserNoticeList />} />
          <Route path="/notice/:pk" element={<UserNoticeDetail />} />

          <Route path="/about" element={<FestivalIntro />} />
          <Route path="/barrier-free" element={<BarrierFreeInfo />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/madeby" element={<MadeByPage />} />
          <Route path="/festival-schedule" element={<FestivalSchedulePage />} />
          {/* 마이페이지 */}
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> master
import styled from "styled-components";
import arrowLeft from "../../images/arrowLeft.svg";
import mainImage from "../../images/main1.png";
import { BackButton, EditButton, HeaderNav, Logo } from "./common";
import GuestBook from "./GuestBook";
import InteractionPanel from "./InteractionPanel";
import MainCard from "./MainCard";
import NoticeInfo from "./NoticeInfo";
import PerformInfo from "./PerformInfo";
<<<<<<< HEAD

function DetailView() {
  const [activeTab, setActiveTab] = useState("공연 정보"); // Default active tab

=======
import instance from "../../api/axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function DetailView({ booth }) {
  const [activeTab, setActiveTab] = useState("공연 정보"); // Default active tab
  const [noticeInfo, setNoticeInfo] = useState([]);
>>>>>>> master
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab when clicked
  };

<<<<<<< HEAD
=======
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await instance.get(
          `${process.env.REACT_APP_SERVER_PORT}/manages/${booth.id}/realtime_info`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        // setNoticeInfo(response.data); 추후 booth.id 받아오면 주석 해제
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };
    fetchData();
  }, [booth?.id]);

>>>>>>> master
  return (
    <Wrap>
      {activeTab == "공연 정보" ? (
        <HeaderNav>
<<<<<<< HEAD
          {/* 이전 버튼? 
					<BackButton>
						<img src={arrowLeft} />
					</BackButton> */}
=======
          
					<BackButton>
						<img src={arrowLeft} />
					</BackButton> 
>>>>>>> master

          <EditButton>수정</EditButton>
        </HeaderNav>
      ) : (
        <HeaderNav>
          <BackButton>
            <img src={arrowLeft} />
          </BackButton>

          <Logo />
        </HeaderNav>
      )}
      <MainCard img={mainImage} isText />
      <InteractionPanel />
<<<<<<< HEAD
      <NoticeInfo />
=======
      <h3 className="title">실시간 공지사항</h3>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <NoticeInfo />
        </SwiperSlide>
        {/* <SwiperSlide>
          <NoticeInfo />
        </SwiperSlide> */}
        {/* {noticeInfo.map((notice) => (
          <SwiperSlide>
            <NoticeInfo notice={notice} />
          </SwiperSlide>
        ))} */} 
        {/* 추후 공지사항 받아오면 주석 해제 하면 스와이퍼 생김 */}
      </Swiper>
>>>>>>> master
      <Taps>
        <ResetButton
          isActive={activeTab === "공연 정보"} // Pass active status
          onClick={() => handleTabClick("공연 정보")}
        >
          공연 정보
        </ResetButton>
        <ResetButton
          isActive={activeTab === "방명록"} // Pass active status
          onClick={() => handleTabClick("방명록")}
        >
          방명록
        </ResetButton>
      </Taps>
      {activeTab == "공연 정보" ? <PerformInfo /> : <GuestBook />}
    </Wrap>
  );
}

export default DetailView;

const Wrap = styled.div`
  button {
    cursor: pointer;
  }
  padding-inline: 20px;
`;

const Taps = styled.div`
  width: 112px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  padding-top: 29px;
  margin-left: 20px;
`;

const ResetButton = styled.button`
  white-space: nowrap;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -1.5px;
  color: ${(props) => (props.isActive ? "#000" : "#bbb")};
  padding: 0;
  height: 23px;
  border-bottom: ${(props) => (props.isActive ? "2px solid #000" : "none")};
`;

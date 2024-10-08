import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../images/background.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Making from "../components/Making";

//images
import 김가영 from "../images/Makers/김가영.svg";
import 김지형 from "../images/Makers/김지형.svg";

const MadeByPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Ment>
          <>
            2024 <br />
            이화여대 대동제
          </>
        </Ment>

        <BottomContent>
          <FilterButton>멋쟁이사자처럼 12기 운영진</FilterButton>
          <Makers>
            <Making
              major="융콘 21"
              makingname="김가영"
              part="기획디자인"
              detail="전체 UI 기획 및 디자인"
              thumbnail={김가영}
            />
            <Making
              major="융콘 22"
              makingname="김지형"
              part="기획디자인"
              detail="전체 UI 기획 및 디자인"
              thumbnail={김지형}
            />
            <Making
              major="사보 23"
              makingname="변지혜"
              part="프론트엔드"
              detail={
                <>
                  메인 페이지 <br />
                  검색 페이지
                  <br />
                  카테고리 페이지 <br />
                  부스 수정 페이지 <br />
                  메뉴 수정 페이지
                  <br />
                </>
              }
            />
            <Making
              major="컴공 23"
              makingname="유서연"
              part="프론트엔드"
              detail={
                <>
                  부스 상세 페이지 <br />
                  공지사항 관련 페이지
                  <br />
                  축제 일정 관련 페이지 페이지 <br />
                  축준위 부스 수정 목록 페이지 <br />
                  대동제 소개/배리어프리 페이지
                  <br />
                </>
              }
            />
          </Makers>
        </BottomContent>

        <BottomContent>
          <FilterButton>(준)축제준비위원회 운영진</FilterButton>
          <Makers>
            <Making
              major="융콘 21"
              makingname="김가영"
              part="기획디자인"
              detail="전체 UI 기획 및 디자인"
              thumbnail={김가영}
            />
            <Making
              major="융콘 22"
              makingname="김지형"
              part="기획디자인"
              detail="전체 UI 기획 및 디자인"
              thumbnail={김지형}
            />
            <Making
              major="사보 23"
              makingname="변지혜"
              part="프론트엔드"
              detail={
                <>
                  메인 페이지 <br />
                  검색 페이지
                  <br />
                  카테고리 페이지 <br />
                  부스 수정 페이지 <br />
                  메뉴 수정 페이지
                  <br />
                </>
              }
            />
            <Making
              major="컴공 23"
              makingname="유서연"
              part="프론트엔드"
              detail={
                <>
                  부스 상세 페이지 <br />
                  공지사항 관련 페이지
                  <br />
                  축제 일정 관련 페이지 페이지 <br />
                  축준위 부스 수정 목록 페이지 <br />
                  대동제 소개/배리어프리 페이지
                  <br />
                </>
              }
            />
          </Makers>
        </BottomContent>
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default MadeByPage;

const Wrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ment = styled.div`
  color: var(--Green01, var(--Green1, #00482a));
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 108.333% */
  letter-spacing: -0.5px;
  margin-top: 37px;
  margin-bottom: 79px;
`;

const BottomContent = styled.div`
  position: relative;
  display: flex;
  width: 330px;
  padding: 27px 15px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 11px 7px;
  flex-wrap: wrap;
  border-radius: 15px;
  background: linear-gradient(
    158deg,
    rgba(228, 228, 228, 0.4) 3.91%,
    rgba(247, 247, 247, 0.4) 102.63%
  );
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1), 0px 0px 4px 0px #fff inset;
  backdrop-filter: blur(10px);
  margin-bottom: 50px;
`;

const Makers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
`;

const FilterButton = styled.button`
  position: absolute;
  top: -20px;
  height: 34px;
  padding: 7px 17px;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid var(--gray02, #f2f2f2);
  background: #00f16f;
  color: #ffffff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;
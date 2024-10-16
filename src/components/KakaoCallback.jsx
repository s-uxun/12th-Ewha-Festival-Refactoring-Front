// src/pages/KakaoCallback.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../api/axios";

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log("코드:", code);
    if (code) {
      const fetchToken = async () => {
        try {
          const response = await instance.get(
            `${process.env.REACT_APP_SERVER_PORT}/accounts/login/kakao/callback?code=${code}`
          );

          const access_token = response.data.message;
          localStorage.setItem("accessToken", access_token);
          navigate("/");
        } catch (error) {
          console.error(error);
          alert("카카오 토큰 반환에 실패했습니다.");
        }
      };

      fetchToken();
    } else {
      alert("코드를 찾을 수 없습니다.");
      navigate("/");
    }
  }, [navigate]);

  return <div>로그인 중...</div>;
};

export default KakaoCallback;

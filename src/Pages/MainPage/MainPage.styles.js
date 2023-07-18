import React from "react";
import styled from "styled-components";

export const MainPageStyle = styled.a`
  .MainTextBlockRight {
    position: absolute;
    left: 90%;
  }

  .MainPageTitle {
    display: flex;

    width: 600px;
    height: 150px;

    margin-left: 50px;
    margin-top: 120px;
  }

  .MainPageTopText {
    display: flex;

    width: 600px;
    height: 100px;

    margin-left: 50px;
    margin-top: 50px;
  }

  .MainPageFirstButton {
    Button {
      display: flex;
      box-sizing: border-box;

      width: 350px;
      height: 70px;

      margin-top: 90px;
      margin-left: 50px;

      background: linear-gradient(180deg, #7e5af0 0%, #814cc6 100%);
      border-radius: 10px;
    }
  }

  .MainPageBottomText{
    display: flex;

    height: 140px;
    width: 800px;

    margin-left: 50px;
    margin-top: 50px;
  }
`;

export const FirstTitle = styled.a`
  font-family: "Proxima Nova", Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  color: #f1f1f1;
`;

export const SecondTitle = styled.a`
  position: relative;
  left: 50px;
  font-family: "Proxima Nova", Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 131.52%;
  color: #f1f1f1;
  width: auto;
`;

export const FirstText = styled.a`
  font-family: "Open Sans", Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #f1f1f1;
`;

export const SecondText = styled.a`
  font-family: "Open Sans", Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #f1f1f1;
`;

export const MainButton = styled.a`
  p {
    font-family: "Proxima Nova", Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-transform: none;
    color: #f1f1f1;
  }
`;

export const MainFigure = styled.a`
  img {
    position: absolute;
    width: 40%;
    z-index: -1;
    top: 50%;
    left: 55%;
    transform: translate(0, -50%);
  }
`;

//Кратко о проекте
export const ShortlyAboutProject = styled.a`
  display: flex;
  position: relative;
  margin-top: 150px;
  height: 700px;
  width: 100%;

  .ShortlyAboutProjectText1 {
    display: flex;
    position: absolute;

    width: 700px;
    height: 200px;

    top: 100px;
    right: 50px;
  }

  .ShortlyAboutProjectFirstText {
    display: flex;
    position: absolute;

    width: 700px;
    height: 200px;

    bottom: 50px;
    left: 50px;
  }
`;
//-----------------

//Этапы установки
export const InstallSteps = styled.a`
  display: flex;
  position: relative;

  height: 340px;
  width: 100%;

  margin-top: 50px;
`;
//-----------------

//Как этим пользоваться?
export const HowToUseIt = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;

  height: 1020px;
  width: 100%;

  margin-top: 50px;

  .HowToUseItText {
    position: relative;
    width: 50%;
    height: 56px;
    left: 50px;
    top: 100px;
  }
`;

export const HowToUseItImg = styled.a`
  img {
    position: relative;
    width: 650px;
    border-radius: 20px;
  }
  .HowToUseItImg1 {
    margin-top: 150px;
    margin-left: 50px;
  }
  .HowToUseItImg2 {
    position: absolute;
    margin-top: 70px;
    right: 50px;
  }
`;
//-----------------

//Частые вопросы
export const FAQ = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 150px;
  width: 100%;
  height: 750px;

  .FAQAccordion {
    justify-content: center;
    top: 100px;
    width: 80%;
    padding-left: 30px;
    left: 10%;

    background: rgba(100, 100, 100, 0.07);
    backdrop-filter: blur(10px);
    
    border: 1px solid #f1f1f1;
  }

  .FAQAccordionSummary {
    
    height: 100px;
    font-family: "Open Sans", Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 44px;
    color: #f1f1f1;
  }

  .FAQAccordionDetails {
    color: #f1f1f1;
    font-family: "Open Sans", Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }

  .FAQAccordionIcon{
    color: white;
    width: 50px;
    height: 50px;
  }
  .FAQAccordionIcon:hover{
    background: linear-gradient(180deg, #7E5AF0 0%, #814CC6 100%);
    border-radius: 100px;
  }
`;
//-----------------

//Последние новости
export const LastNews = styled.a`
  display: flex;
  position: relative;
  top: 150px;
  width: 100%;
  height: 900px;
`;
//-----------------

export const TryNow = styled.a`
  display: flex;
  position: relative;
  flex-direction: column;
  top: 150px;
  width: 100%;
  height: 400px;

  .TryNowButtons {
    display: flex;
    margin-top: 50px;
    margin-left: 50px;
  }
`;

export const TryNowDownloadButton = styled.a`
  Button {
    box-sizing: border-box;

    width: 800px;
    height: 150px;
    
    font-family: "Proxima Nova", Arial, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 58px;
    text-transform: none;

    background: linear-gradient(180deg, #7e5af0 0%, #814cc6 100%);
    border-radius: 25px;
  }
`;

export const TryNowNewAccountButton = styled.a`
  Button {
    box-sizing: border-box;
    width: 450px;
    height: 150px;
    
    margin-left: 50px;

    font-family: "Proxima Nova", Arial, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 58px;
    border: 3px solid #f1f1f1;
    text-transform: none;

    background: none;
    border-radius: 25px;
  }
  Button:hover {
    background: none;
  }
`;

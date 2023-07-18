import React from "react";
//Styles
import {
  FirstTitle,
  SecondTitle,
  FirstText,
  SecondText,

  MainPageStyle,
  MainButton,
  MainFigure,

  ShortlyAboutProject,
  InstallSteps,
  HowToUseIt,
  HowToUseItImg,
  FAQ,
  LastNews,
  TryNow,
  TryNowDownloadButton,
  TryNowNewAccountButton,
} from "./MainPage.styles";
//MUI
import { Add } from "@mui/icons-material";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
//IMAGES
import Figure from "../../Images/1-removebg.png";
import Img6 from "../../Images/Rectangle 6.png";
import Img7 from "../../Images/Rectangle 7.png";
//Components
import NavbarCase from "../../Components/NavbarCase/NavbarCase";

const MainPage = ({ link }) => {
  return (
    <MainPageStyle>
      <NavbarCase />

      <FirstTitle className="MainPageTitle">
        iStore — все нейросети для бизнеса в одном приложении
      </FirstTitle>

      <SecondText className="MainPageTopText">
        Немного рассказываем, куда попал пользователь и что он может здесь
        найти. Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis.
      </SecondText>

      <MainButton className="MainPageFirstButton">
        <Button variant="contained" href={link} download>
          <p>Скачать приложение</p>
        </Button>
      </MainButton>

      <MainFigure>
        <img src={Figure}></img>
      </MainFigure>

      {/* <ShortlyAboutProject>
        <SecondTitle>Кратко о проекте</SecondTitle>

        <FirstText className="ShortlyAboutProjectText1">
          Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
          quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
          vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
          vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
          porttitdum tellus elit sed risus. Maecenas eget condimentum velit, sit
          amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </FirstText>

        <FirstText className="ShortlyAboutProjectFirstText">
          Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
          quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
          vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
          vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
          porttitdum tellus elit sed risus. Maecenas eget condimentum velit, sit
          amet feugiat lectus.
        </FirstText>
      </ShortlyAboutProject>

      <InstallSteps>
        <SecondTitle>Этапы установки</SecondTitle>
      </InstallSteps>

      <HowToUseIt>
        <SecondTitle>Как этим пользоваться?</SecondTitle>

        <FirstText className="HowToUseItText">
          Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
          quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
          vestibulum venenatis. Suspendisse quis arcu sem.{" "}
        </FirstText>

        <HowToUseItImg>
          <img className="HowToUseItImg1" src={Img6} />
        </HowToUseItImg>

        <HowToUseItImg>
          <img className="HowToUseItImg2" src={Img7} />
        </HowToUseItImg>
      </HowToUseIt>

      <FAQ>
        <SecondTitle>Частые вопросы</SecondTitle>
        
        <Accordion className="FAQAccordion">
          <AccordionSummary
            className="FAQAccordionSummary"
            expandIcon={<Add className="FAQAccordionIcon" />}
          >
            Описание вопроса Описание вопроса Описание вопроса
          </AccordionSummary>

          <AccordionDetails className="FAQAccordionDetails">
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora tor
          </AccordionDetails>
        </Accordion>

        <Accordion className="FAQAccordion">
          <AccordionSummary
            className="FAQAccordionSummary"
            expandIcon={<Add className="FAQAccordionIcon"/>}
          >
            Описание вопроса Описание вопроса Описание вопроса
          </AccordionSummary>

          <AccordionDetails className="FAQAccordionDetails">
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora tor
          </AccordionDetails>
        </Accordion>

        <Accordion className="FAQAccordion">
          <AccordionSummary
            className="FAQAccordionSummary"
            expandIcon={<Add className="FAQAccordionIcon" />}
          >
            Описание вопроса Описание вопроса Описание вопроса
          </AccordionSummary>

          <AccordionDetails className="FAQAccordionDetails">
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora tor
          </AccordionDetails>
        </Accordion>

        <Accordion className="FAQAccordion">
          <AccordionSummary
            className="FAQAccordionSummary"
            expandIcon={<Add className="FAQAccordionIcon" />}
          >
            Описание вопроса Описание вопроса Описание вопроса
          </AccordionSummary>

          <AccordionDetails className="FAQAccordionDetails">
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora tor
          </AccordionDetails>
        </Accordion>

        <Accordion className="FAQAccordion">
          <AccordionSummary
            className="FAQAccordionSummary"
            expandIcon={<Add className="FAQAccordionIcon" />}
          >
            Описание вопроса Описание вопроса Описание вопроса
          </AccordionSummary>

          <AccordionDetails className="FAQAccordionDetails">
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora tor
          </AccordionDetails>
        </Accordion>
      </FAQ>

      <LastNews>
        <SecondTitle>Последние новости</SecondTitle>
      </LastNews>

      <TryNow>
        <SecondTitle>Попробуйте прямо сейчас</SecondTitle>

        <FirstText className="MainPageBottomText">
          Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
          quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
          vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
          vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
          porttitdum tellus elit sed risus. Maecenas eget condimentum velit, sit
          amet feugiat lectus. Class aptent taciti sociosqu ad litora tor
        </FirstText>

        <div className="TryNowButtons">
          <TryNowDownloadButton>
            <Button variant="contained" href={link} download>
              Скачать приложение
            </Button>
          </TryNowDownloadButton>
          <TryNowNewAccountButton>
            <Button variant="contained" href={link}>
              Создать аккаунт
            </Button>
          </TryNowNewAccountButton>
        </div>
      </TryNow> */}
    </MainPageStyle>
  );
};

export default MainPage;

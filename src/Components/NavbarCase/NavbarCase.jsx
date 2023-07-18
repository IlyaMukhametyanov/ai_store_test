import React from "react";
import { useMediaQuery } from "@mui/material";
import { Navbarstyle } from "./NavbarCase.styles";

const Navbar = () => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between("md", "lg"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Navbarstyle desktop={isDesktop} tablet={isTablet} mobile={isMobile}>
      <nav>
        <div className="NavLeft">
          <div className="Logo"></div>
          <a className="MainLink" href="#">
            Главная
          </a>
          <a className="AISLink" href="#">
            Нейросети
          </a>
          <a className="NewsLink" href="#">
            Новости
          </a>
          <a className="ContactsLink" href="#">
            Контакты
          </a>
        </div>
        
        <div className="NavRight">
          <div className="NavDownLoadButton">
          <a className="NavDownLoadButtonLink" href="#">
            Скачать приложение
          </a>
          </div>
          <div className="EnterLinks">
            <a className="AuthLink" href="#">
              Войти
            </a>
            <p>|</p>
            <a className="RegLink" href="#">
              Регистрация
            </a>
          </div>
        </div>
      </nav>
    </Navbarstyle>
  );
};

export default Navbar;

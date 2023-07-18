import React from "react";
import {
  FooterStyle,
  FooterTitle,
  FooterHeader,
  FooterLinks,
  FooterYear,
} from "./FooterCase.styled";

import { Link } from "react-router-dom";

const FooterCase = () => {
  return (
    <FooterStyle>
      <FooterTitle>AI Store</FooterTitle>
      <div>
        <FooterHeader>Контакты</FooterHeader>
        <FooterLinks>
          <Link>+7 (999) 999-99-99</Link>
          <Link>Дискорд</Link>
          <Link>Телеграм</Link>
          <Link>email@gmail.com</Link>
        </FooterLinks>
      </div>
      <div>
        <FooterHeader>Правовая информация</FooterHeader>
        <FooterLinks>
          <Link>Политика конфиденциальности</Link>
          <Link>Условия пользования сайтом</Link>
        </FooterLinks>
      </div>
      <FooterYear>@2023</FooterYear>
    </FooterStyle>
  );
};
export default FooterCase;

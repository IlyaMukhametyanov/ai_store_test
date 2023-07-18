import styled from "styled-components";

export const FooterStyle = styled.div`
  border-top: 1px solid white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 100px;
  padding-top: 40px;
`;

export const FooterTitle = styled.p`
  padding-left: 50px;

  color: #f1f1f1;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FooterHeader = styled.p`
  color: #f1f1f1;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FooterLinks = styled.a`
  display: flex;
  flex-direction: column;
  height: 200px;

  a {
    text-decoration: none;
    color: #ababab;
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    padding-top: 10px;
  }
`;

export const FooterYear = styled.p`
  display: flex;
  justify-content: end;
  align-items: end;
  padding-right: 50px;

  color: #ababab;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

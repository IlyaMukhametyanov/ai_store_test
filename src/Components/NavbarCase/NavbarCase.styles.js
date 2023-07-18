import styled, { css } from "styled-components";

export const Navbarstyle = styled.a`
  ${(props) =>
    props.desktop &&
    css`
      nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100px;
        margin-top: 30px;
        top: 0;

        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        text-align: center;
        font-family: "Open Sans", Arial, sans-serif;
      }

      .NavLeft,
      .NavRight {
        display: flex;
        align-items: center;
      }

      .NavRight {
        margin-right: 50px;
      }

      .Logo {
        width: 55px;
        height: 55px;
        background: #d9d9d9;
        border-radius: 76px;
      }

      .MainLink {
        font-weight: 800;
      }

      .MainLink,
      .AISLink,
      .NewsLink,
      .ContactsLink {
        text-decoration: none;
        color: #f1f1f1;
        margin: 0px 50px 0px 50px;
      }

      .NavLeft {
        margin-left: 50px;
      }

      .EnterLinks {
        display: flex;
        color: white;
        align-items: center;
        font-size: 14px;
      }

      .AuthLink,
      .RegLink {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        text-align: right;
        text-decoration: none;
        color: #f1f1f1;
        margin: 5px;
      }

      .NavDownLoadButton {
        display: flex;
        align-items: center;

        border: 2px solid #7e5af0;
        border-radius: 10px;

        width: 208px;
        height: 55px;

        margin-right: 150px;

        background: linear-gradient(
          rgba(139, 63, 198, 0.55),
          rgba(139, 63, 198, 0.55)
        );
        box-shadow: 0 0 200px 40px rgba(139, 63, 198, 1);
      }

      .NavDownLoadButtonLink {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        text-decoration: none;
        color: white;
        margin: auto;
      }
    `}

  ${(props) =>
    props.tablet &&
    css`
      // Styles for tablet screens
      // Update the styles based on your requirements
    `}

  ${(props) =>
    props.mobile &&
    css`
      // Styles for mobile screens
      // Update the styles based on your requirements
    `}
`;

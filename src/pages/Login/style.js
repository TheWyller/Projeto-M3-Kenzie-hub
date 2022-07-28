import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90vw;
  max-width: 370px;
`;

export const Header = styled.section`
  width: 90%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 32px;
`;

export const Content = styled.section`
  background: var(--Grey-3);
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 0 20px 0;
  form {
    text-align: center;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    @media (min-width: 768px) {
      gap: 22px;
    }

    label {
      height: auto;
      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      line-height: 0px;
      @media (min-width: 768px) {
        font-size: 13px;
      }

      color: var(--Grey-0);
    }

    .eyeBtn {
      width: 105%;
      display: flex;
      align-items: center;
      svg {
        top: 12px;
        right: 30px;
        position: relative;
        color: var(--Grey-1);
        transform: scaleX(1.3) scaleY(1.3);
      }
      cursor: pointer;
    }
  }

  h1 {
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.3916px;
    line-height: 22px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
    color: var(--Grey-0);
    align-self: center;
  }
  p {
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    @media (min-width: 768px) {
      font-size: 12px;
    }
    color: var(--Grey-1);
    align-self: center;
  }
`;

export const Form = styled.section``;

import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  max-width: 780px;
  margin: 0 auto;
  padding-top: 17px;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
  .header_nav {
    display: flex;
    justify-content: space-between;
    margin: 0 5vw;
    @media (min-width: 780px) {
      margin: 0;
      margin-bottom: 20px;
    }
    margin-bottom: 24px;
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
  .header_infos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 34.5px 0;
    @media (max-width: 768px) {
      margin: 45px 0;
    }
    @media (min-width: 780px) {
      gap: unset;
      margin: 65px 0 45px 0;
    }
  }
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--Grey-0);
    margin: 0 5vw;
    @media (min-width: 780px) {
      margin: 0;
    }
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--Grey-1);
    margin: 0 5vw;
    @media (min-width: 780px) {
      margin: 0;
    }
  }
  hr {
    border: 1px solid var(--Grey-3);

    @media (min-width: 780px) {
      position: absolute;
      left: 0;
      width: 100vw;
    }
  }
`;

export const Container = styled.main`
  width: 90vw;
  max-width: 780px;
  margin: 0 auto;
  margin-bottom: 50px;

  .hidden {
    display: none;
  }
  .plusBtn {
    font-size: 25px;
  }
  .tech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 21px 0 19px 0;
    @media (min-width: 780px) {
      margin: 65px 0 19px 0;
    }
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: var(--Grey-0);
  }
`;

export const Content = styled.section`
  background: var(--Grey-3);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 22px 8.5px;
  box-sizing: border-box;
`;

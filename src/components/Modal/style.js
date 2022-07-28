import styled from "styled-components";

export const AllScreen = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const Container = styled.div`
  width: 90vw;
  max-width: 369px;
  border-radius: 4px;
  background: var(--Grey-3);
  form {
    margin: 0 auto;
    width: 90%;
    padding-bottom: 26px;

    display: flex;
    flex-direction: column;
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
      @media (min-width: 768px) {
        font-size: 13px;
        margin: 10px 0;
      }
      line-height: 0px;

      color: var(--Grey-0);
    }
    select {
      width: 100%;
      height: 38.38px;
      font-size: 13px;
      @media (min-width: 768px) {
        height: 48.38px;
        font-size: 17px;
      }

      border: none;
      background: var(--Grey-2);
      border-radius: 3.19812px;

      padding: 8.2px 13px;

      box-sizing: border-box;

      color: var(--Grey-1);
      cursor: pointer;

      &:focus {
        color: var(--Grey-0);
        border: 1px solid var(--Grey-0);
      }
    }
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 4px 4px 0 0;
  margin-bottom: 15px;

  padding: 10px 16.04px;
  @media (min-width: 768px) {
    padding: 15px 20px;
    margin-bottom: 25px;
  }

  background: var(--Grey-2);
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 11.2304px;
    line-height: 19px;
    color: var(--Grey-0);
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
  .plusBtnModal {
    font-size: 15px;
    color: var(--Grey-1);
    font-weight: bold;
    &:hover {
      filter: brightness(130%);
    }
  }
  button {
    border: none;
    background: none;
  }
`;

import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 100%;
  height: 60px;
  @media (min-width: 768px) {
    height: 75px;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;

  input {
    width: 100%;
    height: 38.38px;
    @media (min-width: 768px) {
      height: 48.38px;
    }
    border: none;
    background: var(--Grey-2);
    border-radius: 3.19812px;
    font-size: 13px;
    @media (min-width: 768px) {
      font-size: 17px;
    }
    padding: 8.2px 13px;

    box-sizing: border-box;
    &::placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.9865px;
      @media (min-width: 768px) {
        font-size: 16.2426px;
      }
      line-height: 21px;
      color: var(--Grey-1);
    }
    color: var(--Grey-0);
    &:focus {
      border: 1px solid var(--Grey-0);
    }
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.73988px;
    @media (min-width: 768px) {
      font-size: 12px;
    }
    line-height: 0px;
  }

  div {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 0px;
    color: var(--Grey-0);
    @media (min-width: 768px) {
      font-size: 13px;
    }
    margin-bottom: 12px;
    @media (min-width: 768px) {
      margin-bottom: 15px;
    }
  }

  ${(props) =>
    props.isErrored &&
    css`
      input {
        border: 1px solid var(--Negative);
      }
      span {
        color: var(--Negative);
      }
    `}
`;

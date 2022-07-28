import styled, { css } from "styled-components";

export const Container = styled.button`
  border: none;
  ${(props) =>
    !props.isDate &&
    css`
      &: disabled {
        pointer-events: none;
      }
      cursor: not-allowed;
    `}
  ${(props) =>
    props.othersBtn
      ? css`
          width: ${(props) => `${props.width}`};
          height: 32px;
          @media (min-width: 768px) {
            height: ${(props) => `${props.height}`};
          }

          border: none;
          border-radius: 4px;
          background: var(--Grey-3);

          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 9.59437px;
          @media (min-width: 768px) {
            font-size: 12px;
          }
          line-height: 28px;

          text-align: center;
          color: var(--Grey-0);
          &:hover {
            background: var(--Grey-2);
          }
        `
      : css`
          background: ${(props) =>
            props.pinkBtn
              ? props.negativeColor
                ? "var(--Color-primary-Negative)"
                : "var(--Color-primary)"
              : "var(--Grey-1)"};

          width: ${(props) => `${props.width}`};
          height: 38.5px;
          @media (min-width: 768px) {
            height: 48px;
          }
          border-radius: 4.06066px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;

          font-size: 12.8347px;
          @media (min-width: 768px) {
            font-size: 16px;
          }
          line-height: 26px;

          color: var(--textBtn);
          &:hover {
            background: ${(props) =>
              props.pinkBtn
                ? !props.negativeColor && "var(--Color-primary-Focus)"
                : "var(--Grey-2)"};
          }
        `}
`;

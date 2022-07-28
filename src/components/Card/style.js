import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  width: 90%;
  height: 49px;
  padding: 0 13px;

  background: var(--Grey-4);
  border-radius: 4.06066px;

  &:hover {
    background: var(--Grey-2);
    p {
      color: var(--Grey-0);
    }
    svg {
      color: var(--Grey-0);
    }
  }

  @media (max-width: 375px) {
    .deleteBtn {
      display: none;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 22px;
  }
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: var(--Grey-0);
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--Grey-1);
  }
  svg {
    color: var(--Grey-1);
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const Container = styled.header`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease-in 0s, top 0.3s ease 0s;
  background-color: #faf7ee;
`;
export const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem max(2rem, 20px);
`;
export const Left = styled.div`
  height: 100%;
  width: auto;
  flex: 1;
`;
export const LeftContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.svg`
  height: auto;
  width: 6rem;
  min-width: 60px;
  max-width: 70px;

  @media screen and (max-width: 576px) {
    min-width: 50px;
    max-width: 60px;
  }

  @media screen and (min-width: 1224px) {
    & path {
      transition: all 0.5s ease;
    }
    &:hover path:nth-child(1),
    &:hover path:nth-child(2) {
      fill: #ff773d;
    }
  }
`;
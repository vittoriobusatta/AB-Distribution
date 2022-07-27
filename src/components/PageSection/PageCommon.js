import styled from "styled-components";
import { accueil, cabinMedium } from "../Common";

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

// Navbar Components ////////////////////////////////////////////////////////////

export const NavbarWrapper = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 2;
  background-color: #FFFBF5;
`;
export const NavbarContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const NavbarGrid = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: max(1.5rem, 10px) max(2rem, 10px) max(1.5rem, 10px) max(2rem, 10px);
  max-height: 120px;
  min-height: 90px;
  @media screen and (max-width: 576px) {
    padding: 0;
  }
`;
export const NavbarCopyright = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const NavbarColumnLogo = styled.div`
  height: 100%;
  width: auto;
  flex: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & svg {
    height: 8rem;
    width: auto;
    max-width: 90px;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const NavbarColumnLinks = styled.div`
  height: 100%;
  width: auto;
  flex: 2;
  ul {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 1.5rem;
    li a {
      font-size: clamp(14px, 2.5rem, 18px);
      color: #222;
      font-family: ${cabinMedium};
      transition: color 0.3s ;
      &:hover {
        color: ${accueil};
      }
    }
  }
  @media screen and (max-width: 576px) {
    flex: 1;
  }
`;
export const NavbarColumnSocials = styled.div`
  height: 100%;
  width: auto;
  flex: 1;
`;
export const NavbarSocialsLinks = styled.div`
  height: 100%;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  column-gap: 2.5rem;
  & svg {
    height: 4rem;
    width: auto;
    max-width: 25px;
    max-height: 25px;
    & > path {
      transition: fill 0.3s;
    }
    &:hover > path {
      fill: ${accueil};
    }
  }
`;
export const NavbarCopyContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: max(1.5rem, 14px) 2rem;
  background-color: ${accueil};
  @media screen and (max-width: 576px) {
    flex-direction: column;
    row-gap: 8px;
  }
  & span, 
  & a {
    color: #222;
    font-family: ${cabinMedium};
    font-size: clamp(11px, 2rem, 14px);
  }
`;
export const NavbarCopy = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  & span a {
    text-decoration: underline;
  }
`;
export const NavbarLicense = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
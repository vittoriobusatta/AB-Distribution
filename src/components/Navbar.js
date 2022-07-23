import React from "react";
import styled from "styled-components";
import { cabinRegular, cabinBold, accueil, coffee } from "./Common";

const Container = styled.header`
  height: 8vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease-in 0s, top 0.3s ease 0s;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  background-color: #faf7ee;
`;
const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem max(2rem, 20px);
`;
const Left = styled.div`
  height: 100%;
  width: auto;
  flex: 1;
`;
const LeftContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  height: 100%;
  width: auto;
  flex: 1;
`;
const RightContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Logo = styled.svg`
  height: auto;
  width: 6.5rem;
  @media (max-width: 350px) {
    width: 6rem;
  }
  @media (min-width: 650px) {
    width: 7rem;
  }
  @media (min-width: 1100px) {
    width: 7.5rem;
  }
  & path {
    transition: all 0.5s ease;
  }
  &:hover path:nth-child(2),
  &:hover path:nth-child(3) {
    fill: #ff773d;
  }
`;
const Nav = styled.nav`
  display: none;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 850px) {
    display: flex;
  }
`;
const Ul = styled.ul`
  display: inline-flex;
`;
const Li = styled.li`
  &:hover {
    transform: translateX(0px);
  }
  & a {
    position: relative;
    margin-left: 5rem;
    color: #000;
    font-size: max(1.8rem, 15px);
    text-transform: uppercase;
    font-family: ${cabinRegular};
    white-space: nowrap;
    transition: 0.2s ease-out;
    z-index: 1;
    padding-left: 1rem;
    padding-right: 1rem;

    &:after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 1px;
      content: "";
      opacity: 0;
      transition: all 0.5s ease-out;
      z-index: -1;
    }

    &:hover:after {
      opacity: 1;
      height: 4rem;
    }

    &:hover {
      color: #fff;
      &.product_active {
        &.product_accueil,
        &.product_accueil,
        &.product_coffee,
        &.product_perfume,
        &.product_shower_gel,
        &.product_handwash,
        &.product_antibacterial,
        &.product_food,
        &.product_airfreshener,
        &.product_bodymist {
          color: #fff;
        }
      }
    }

    &.hover_accueil::after {
      background-color: ${accueil};
    }
    &.hover_coffee::after {
      background-color: ${coffee};
    }
    /* &.hover_showergel::after {
      background-color: $shower_gel;
    }
    &.hover_perfume::after {
      background-color: $perfume;
    }
    &.hover_handwash::after {
      background-color: $handwash;
    }
    &.hover_food::after {
      background-color: $food;
    }
    &.hover_antibacterial::after {
      background-color: $antibacterial;
    }
    &.hover_airfreshener::after {
      background-color: $airfreshener;
    }
    &.hover_bodymist::after {
      background-color: $bodymist;
    } */

    &.product_active {
      position: relative;
      font-family: ${cabinBold};

      &.product_accueil {
        color: ${accueil};
      }

      &.product_coffee {
        color: ${coffee};
      }

      &.product_perfume {
        color: $perfume;
      }

      &.product_shower_gel {
        color: $shower_gel;
      }

      &.product_handwash {
        color: $handwash;
      }

      &.product_antibacterial {
        color: $antibacterial;
      }

      &.product_food {
        color: $food;
      }

      &.product_airfreshener {
        color: $airfreshener;
      }

      &.product_bodymist {
        color: $bodymist;
      }
    }
  }
`;

const BurgerContainer = styled.button`
  position: relative;
  height: 40px;
  width: 45px;
  background: none;
  border: none;
  z-index: 200;
  @media (min-width: 850px) {
    display: none;
  }
`;

const Bar = styled.div`
  position: absolute;
  left: 0;
  height: 3px;
  width: 45px;
  border-radius: 20px;
  background: #000;
  transition: ${(props) =>
    props.isActive === true ? "transform 400ms ease" : "transform 0.5s ease"};
  z-index: 999;
  &.bar1 {
    top: 0;
    transform: ${(props) =>
      props.isActive === true
        ? "translate3d(0, 18px, 0) rotate(-225deg)"
        : "translateY(10px)"};
  }
  &.bar2 {
    bottom: 0;
    transform: ${(props) =>
      props.isActive === true
        ? "translate3d(0, -19px, 0) rotate(225deg)"
        : "translateY(-10px)"};
  }
`;

function Navbar({ openMenu, setOpenMenu }) {
  const ClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Container id="navbar">
      <Wrap>
        <Left>
          <LeftContent>
            <a href="https://www.ab-distribution.re">
              <Logo
                viewBox="0 0 179 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.871094 116H7.26953C9.84766 116 12.0703 115.227 13.9375 113.68C15.8047 112.133 16.8945 109.969 17.207 107.188L17.3125 106.555C17.6328 103.766 17.0352 101.605 15.5195 100.074C14.0039 98.5352 11.957 97.7656 9.37891 97.7656H2.98047L0.871094 116ZM4.04688 113.527L5.59375 100.25H9.02734C10.8477 100.25 12.25 100.777 13.2344 101.832C14.2188 102.887 14.5938 104.445 14.3594 106.508L14.2305 107.258C13.9961 109.312 13.2695 110.871 12.0508 111.934C10.832 112.996 9.30859 113.527 7.48047 113.527H4.04688ZM19.2578 116H22.1992L24.2969 97.7656H21.3672L19.2578 116ZM25.5859 110.867C25.3984 112.617 25.9375 113.969 27.2031 114.922C28.4688 115.875 30.2383 116.352 32.5117 116.352C34.8008 116.352 36.6602 115.875 38.0898 114.922C39.5273 113.969 40.3398 112.676 40.5273 111.043C40.707 109.488 40.3555 108.312 39.4727 107.516C38.5977 106.711 37.0508 106.027 34.832 105.465C32.7305 104.941 31.3555 104.473 30.707 104.059C30.0664 103.645 29.7891 103.125 29.875 102.5C29.9688 101.656 30.3672 101.012 31.0703 100.566C31.7734 100.121 32.8359 99.8984 34.2578 99.8984C35.6953 99.8984 36.7344 100.168 37.375 100.707C38.0156 101.246 38.2891 101.965 38.1953 102.863L38.1602 103.109H41.0312L41.0664 102.816C41.2305 101.27 40.7266 99.9805 39.5547 98.9492C38.3906 97.918 36.7148 97.4023 34.5273 97.4023C32.3242 97.4023 30.5469 97.875 29.1953 98.8203C27.8516 99.7578 27.0938 101.004 26.9219 102.559C26.75 103.949 27.082 105.047 27.918 105.852C28.7617 106.648 30.3047 107.324 32.5469 107.879C34.7812 108.426 36.1992 108.922 36.8008 109.367C37.4102 109.812 37.668 110.406 37.5742 111.148C37.4805 111.969 37.0273 112.629 36.2148 113.129C35.4023 113.629 34.2578 113.879 32.7812 113.879C31.3047 113.879 30.1953 113.625 29.4531 113.117C28.7109 112.609 28.3906 111.84 28.4922 110.809L28.5273 110.492H25.6211L25.5859 110.867ZM42.8477 100.309H49.2461L47.418 116H50.3477L52.1641 100.309H58.5508L58.832 97.7656H43.1406L42.8477 100.309ZM58.8438 116H61.7617L62.5703 108.98H66.7422C68.8672 108.965 70.5781 108.449 71.875 107.434C73.1797 106.418 73.9297 105.062 74.125 103.367C74.3281 101.625 73.8984 100.258 72.8359 99.2656C71.7812 98.2656 70.1836 97.7656 68.043 97.7656H60.9531L58.8438 116ZM62.8281 106.531L63.5781 100.262H67.6211C69.0742 100.262 70.0625 100.543 70.5859 101.105C71.1094 101.668 71.3125 102.434 71.1953 103.402C71.0859 104.355 70.6992 105.117 70.0352 105.688C69.3789 106.25 68.3242 106.531 66.8711 106.531H62.8281ZM70.3984 116H73.6797L69.8945 107.867L66.6367 107.645L70.3984 116ZM75.8594 116H78.8008L80.8984 97.7656H77.9688L75.8594 116ZM82.5625 116H90.0625C92.0625 116 93.7188 115.551 95.0312 114.652C96.3516 113.754 97.1094 112.465 97.3047 110.785C97.4453 109.582 97.2461 108.617 96.707 107.891C96.1758 107.164 95.4453 106.676 94.5156 106.426V106.379C95.3203 106.121 96.0195 105.672 96.6133 105.031C97.2148 104.383 97.5703 103.551 97.6797 102.535C97.875 100.879 97.4453 99.6719 96.3906 98.9141C95.3438 98.1484 93.8086 97.7656 91.7852 97.7656H84.6719L82.5625 116ZM85.7031 113.621L86.3945 107.668H90.8711C92.1992 107.668 93.1484 107.93 93.7188 108.453C94.2891 108.977 94.5195 109.695 94.4102 110.609C94.293 111.57 93.8867 112.312 93.1914 112.836C92.5039 113.359 91.5 113.621 90.1797 113.621H85.7031ZM86.6523 105.395L87.2734 100.156H91.3633C92.6758 100.164 93.5977 100.391 94.1289 100.836C94.668 101.273 94.8867 101.926 94.7852 102.793C94.6836 103.621 94.3125 104.262 93.6719 104.715C93.0312 105.168 92.0508 105.395 90.7305 105.395H86.6523ZM100.188 109.262C99.9141 111.66 100.43 113.441 101.734 114.605C103.047 115.77 104.785 116.352 106.949 116.352C109.105 116.352 110.957 115.773 112.504 114.617C114.051 113.453 114.957 111.668 115.223 109.262L116.582 97.7656H113.477L112.105 109.273C111.934 110.852 111.402 112.004 110.512 112.73C109.629 113.457 108.5 113.82 107.125 113.82C105.742 113.82 104.68 113.457 103.938 112.73C103.195 111.996 102.91 110.844 103.082 109.273L104.453 97.7656H101.535L100.188 109.262ZM118.199 100.309H124.598L122.77 116H125.699L127.516 100.309H133.902L134.184 97.7656H118.492L118.199 100.309ZM134.219 116H137.16L139.258 97.7656H136.328L134.219 116ZM141.215 107.176C140.871 110.191 141.426 112.477 142.879 114.031C144.34 115.578 146.344 116.352 148.891 116.352C151.438 116.352 153.617 115.578 155.43 114.031C157.25 112.477 158.332 110.191 158.676 107.176L158.781 106.566C159.125 103.559 158.562 101.281 157.094 99.7344C155.633 98.1797 153.629 97.4023 151.082 97.4023C148.527 97.4023 146.348 98.1797 144.543 99.7344C142.738 101.281 141.664 103.559 141.32 106.566L141.215 107.176ZM144.168 107.387L144.332 106.367C144.574 104.227 145.277 102.621 146.441 101.551C147.613 100.473 149.066 99.9336 150.801 99.9336C152.527 99.9414 153.855 100.48 154.785 101.551C155.723 102.621 156.07 104.227 155.828 106.367L155.664 107.398C155.422 109.531 154.711 111.137 153.531 112.215C152.359 113.293 150.91 113.832 149.184 113.832C147.449 113.832 146.117 113.293 145.188 112.215C144.266 111.137 143.926 109.527 144.168 107.387ZM160.703 116H163.469L164.875 103.777C164.906 103.52 164.926 103.242 164.934 102.945C164.941 102.641 164.934 102.363 164.91 102.113H165.062C165.133 102.324 165.234 102.574 165.367 102.863C165.5 103.152 165.645 103.43 165.801 103.695L173.066 116H176.043L178.152 97.7656H175.375L173.957 110.035C173.926 110.301 173.906 110.578 173.898 110.867C173.898 111.148 173.91 111.414 173.934 111.664L173.805 111.676C173.719 111.457 173.605 111.211 173.465 110.938C173.332 110.664 173.203 110.402 173.078 110.152L165.754 97.7656H162.812L160.703 116Z"
                  fill="black"
                />
                <path
                  d="M133.971 2.32163L133.966 2.3225C114.105 6.3924 85.4078 24.1824 55.2619 51.418L55.2611 51.4187C49.2455 56.845 41.4608 64.6045 35.1777 71.2533C32.0364 74.5775 29.2849 77.6087 27.3252 79.9207C26.4073 81.0036 25.6786 81.9106 25.1684 82.6067C26.5477 82.7285 28.857 82.778 32.5739 82.778H41.5059L43.428 80.7633L43.4424 80.7482L43.4572 80.7335C44.7659 79.4359 47.9425 75.9237 50.5948 72.9022L50.6 72.8962L50.6054 72.8903C55.9856 66.8909 60.0693 62.4352 62.9187 59.475C64.3405 57.998 65.4743 56.8731 66.3176 56.1101C66.7359 55.7317 67.1116 55.4159 67.4325 55.1861C67.5915 55.0722 67.7689 54.9564 67.9538 54.8631C68.0975 54.7906 68.4278 54.6346 68.8428 54.6346C69.2359 54.6346 69.5527 54.7647 69.7476 54.8652C69.9557 54.9725 70.1365 55.1046 70.2842 55.2275C70.5796 55.4732 70.8648 55.7847 71.1248 56.1086C71.6506 56.7636 72.1981 57.6254 72.6601 58.5416C73.5014 60.2099 76.3144 65.6988 78.9054 70.7252C81.4981 75.7549 84.0366 80.7886 84.6049 81.938L84.6098 81.9479L84.6145 81.9578L85.1683 83.1205L109.516 83.3141C109.516 83.3141 109.516 83.3141 109.517 83.3141C122.754 83.4148 129.867 83.4128 134.311 83.051C136.513 82.8717 137.998 82.6078 139.21 82.2459C140.415 81.8865 141.409 81.4135 142.637 80.7479L142.648 80.7423C143.727 80.1683 145.102 78.9426 146.345 77.4474C147.588 75.9525 148.539 74.3816 148.907 73.2333L148.91 73.2221C149.892 70.2387 150.544 67.1452 150.828 64.3505C151.115 61.5313 151.017 59.1207 150.575 57.4575L150.574 57.4538C150.284 56.3477 149.884 54.5786 149.656 53.4947L149.648 53.4574L149.642 53.4198C149.632 53.3557 149.573 53.1436 149.397 52.757C149.232 52.3954 149.001 51.9577 148.712 51.4689C148.139 50.4959 147.379 49.384 146.577 48.3651L143.49 44.626L142.561 43.5005L143.661 42.5409L145.338 41.0778C145.34 41.076 145.342 41.0742 145.344 41.0724C146.805 39.7647 148.129 37.1092 148.925 33.7363C149.709 30.4121 149.917 26.6462 149.364 23.3516C149.173 22.251 148.913 21.0324 148.648 19.971C148.373 18.8735 148.118 18.0516 147.953 17.6825L147.946 17.6664L147.939 17.6501C147.367 16.2895 146.294 14.6415 145.073 13.1813C143.831 11.6956 142.593 10.5918 141.763 10.1602C140.213 9.36974 139.187 8.81424 138.523 8.32855C138.173 8.07223 137.862 7.7917 137.612 7.45021C137.351 7.09304 137.211 6.7414 137.12 6.41731C136.989 5.94709 137.047 5.4183 137.353 4.96561C137.611 4.58345 137.962 4.3805 138.19 4.27371C138.643 4.06226 139.209 3.96062 139.751 3.89524C140.894 3.7574 142.654 3.70856 145.098 3.70856C148.887 3.70856 151.769 3.97083 154.349 4.87996C149.105 1.59391 142.147 0.621478 133.971 2.32163ZM23.9248 82.4072C23.9235 82.4067 23.9229 82.4064 23.9229 82.4064L23.9248 82.4072ZM118.423 52.0885H118.424C125.517 52.1885 129.474 52.2555 131.78 52.454C132.929 52.5529 133.798 52.6928 134.484 52.9412C135.251 53.2188 135.732 53.6099 136.135 54.0623C137.319 55.3797 137.775 57.2957 137.734 59.0506C137.694 60.8156 137.146 62.731 135.944 64.1315L134.607 65.7876L134.157 66.3457H133.44H114.348C112.565 66.3457 110.941 66.3494 109.462 66.3529C106.521 66.3597 104.153 66.3651 102.243 66.3371C99.3988 66.2955 97.4045 66.1806 95.9463 65.8365C94.3696 65.4644 93.3463 64.8076 92.5054 63.7366C92.1251 63.2521 91.799 62.7052 91.4832 62.1462C91.3634 61.934 91.2466 61.7231 91.1264 61.5061C90.9113 61.1176 90.6853 60.7096 90.4118 60.2401C87.9648 56.0403 86.1035 52.8363 84.7423 50.3675C83.391 47.9166 82.4868 46.1094 81.9949 44.7268C81.509 43.3613 81.3137 42.1131 81.7948 40.9642C82.2461 39.8868 83.1882 39.2127 83.9093 38.6979L83.9277 38.6847L83.9465 38.6721C84.7553 38.1308 85.8676 37.1877 86.4378 36.6326L86.4466 36.624L86.4556 36.6156C88.5136 34.6771 91.6925 31.9085 94.4637 29.5954C95.8505 28.4378 97.1471 27.3845 98.1595 26.5996C98.6641 26.2084 99.1107 25.8741 99.4686 25.6242C99.6465 25.5 99.8171 25.3863 99.9707 25.2938C100.081 25.2273 100.296 25.1006 100.539 25.0228C100.843 24.9233 101.231 24.8877 101.483 24.8665C101.822 24.8378 102.253 24.8145 102.751 24.7954C103.752 24.7572 105.084 24.7334 106.628 24.7219C109.72 24.6987 113.702 24.724 117.665 24.7827C121.628 24.8415 125.582 24.9338 128.616 25.0453C130.132 25.101 131.429 25.1619 132.387 25.2265C132.864 25.2587 133.274 25.2928 133.591 25.3297C133.747 25.348 133.901 25.3691 134.038 25.3946L134.043 25.3956C134.129 25.4117 134.374 25.4573 134.611 25.5743C137.151 26.8259 137.824 30.0245 137.403 33.0239C137.256 34.0763 137.071 35.3061 136.323 36.297C135.521 37.3604 134.292 37.8998 132.712 38.2223C131.136 38.5441 128.947 38.7001 125.916 38.7818C122.865 38.8641 118.862 38.8724 113.616 38.8724C108.634 38.8724 104.092 38.8891 100.783 38.9226C99.4765 38.9358 98.3665 38.9515 97.4995 38.9698C97.5581 39.0961 97.6195 39.2281 97.6839 39.3654C98.3522 40.79 99.3034 42.7374 100.371 44.8765C100.371 44.8769 100.371 44.8772 100.371 44.8776L103.902 51.8993L118.423 52.0885Z"
                  fill="#FF9B71"
                  stroke="black"
                  strokeWidth="3"
                />
                <path
                  d="M63.1917 10.767C62.6853 9.86475 62.2526 9.11031 61.8964 8.5083C61.8612 8.57186 61.8257 8.63648 61.7899 8.70205C61.0884 10.1772 54.5949 22.8308 47.312 36.9863C43.677 44.0514 40.385 50.5125 37.9951 55.2631C41.1276 52.0012 45.2806 47.8092 48.694 44.4163L48.6995 44.4108L48.7051 44.4053C49.344 43.7834 50.8752 42.3666 52.1318 41.2784C53.3369 40.1703 54.5591 39.032 54.9159 38.6825C55.0976 38.4835 55.4231 38.1784 55.7699 37.8591C56.2029 37.4604 56.7838 36.9368 57.4699 36.3267C58.8408 35.1075 60.646 33.5302 62.5632 31.8864C64.2275 30.4087 65.8427 28.9841 67.1785 27.8061C68.8972 26.2903 70.1533 25.1825 70.4561 24.8943L70.4637 24.8871L70.4715 24.8799C70.5392 24.8172 70.5912 24.7674 70.631 24.7284C70.5911 24.6127 70.5201 24.4355 70.3955 24.1719C70.1863 23.7295 69.8785 23.149 69.4398 22.3409L69.4357 22.3334L69.4317 22.3258C66.8151 17.3713 64.696 13.4476 63.1917 10.767Z"
                  fill="#FF9B71"
                  stroke="black"
                  strokeWidth="3"
                />
              </Logo>
            </a>
          </LeftContent>
        </Left>

        <Right>
          <RightContent>
            <Nav>
              <Ul>
                <Li>
                  <a
                    className="product_active product_accueil hover_accueil"
                    href="https://www.ab-distribution.re"
                  >
                    Accueil
                  </a>
                </Li>
                <Li>
                  <a className="hover_accueil" href="#produits">
                    Produits
                  </a>
                </Li>
                <Li>
                  <a className="hover_accueil" href="#contact">
                    Contact
                  </a>
                </Li>
              </Ul>
            </Nav>

            <BurgerContainer onClick={ClickMenu} isActive={openMenu}>
              <Bar className="bar1" isActive={openMenu} />
              <Bar className="bar2" isActive={openMenu} />
            </BurgerContainer>
          </RightContent>
        </Right>
      </Wrap>
    </Container>
  );
}

export default Navbar;

import React from "react";
import styled from "styled-components";
import tukas from "../../../assets/img/home/tukas.webp";
import nestle from "../../../assets/img/home/nestle.webp";
import ultracompact from "../../../assets/img/home/ultracompact.webp";
import { baliviaRegular } from "../../Common";

const Container = styled.section`
  height: 80vh;
  width: 100%;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 0.1fr repeat(2, 1fr) 0.1fr;
  grid-template-rows: repeat(21, 1fr);
  @media (min-width: 650px) {
    grid-template-columns: 0.2fr repeat(5, 1fr) 0.2fr;
    grid-template-rows: repeat(22, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: 0.5fr repeat(28, 1fr) 0.5fr;
  }
`;
const BrandsTitle = styled.div`
  grid-area: 2 / 2 / 5 / 4;
  @media (min-width: 650px) {
    grid-area: 1 / 3 / 7 / 6;
  }
  @media (min-width: 900px) {
    grid-area: 1 / 10 / 7 / 22;
  }
  span {
    height: auto;
    width: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: $black;
      font-family: ${baliviaRegular};
      font-size: 3rem;
      text-transform: uppercase;
      position: relative;
      text-align: center;

      @media (min-width: 650px) {
        font-size: 3.5rem;
      }
      @media (min-width: 850px) {
        font-size: 5rem;
      }
      @media (min-width: 1100px) {
        font-size: 5.5rem;
      }
    }

    svg {
      max-width: 200px;
      position: absolute;
      bottom: 0;
      transform: translate(0, 90%);
    }
  }
`;
const Tukas = styled.div`
  grid-area: 8 / 2 / 11 / 4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 400px) {
    grid-area: 7 / 2 / 11 / 4;
  }
  @media (min-width: 650px) {
    grid-area: 10 / 2 / 15 / 4;
  }
  @media (min-width: 900px) {
    grid-area: 9 / 2 / 14 / 10;
  }
  @media (min-width: 1300px) {
    grid-area: 9 / 5 / 15 / 12;
  }
`;
const UltraCompact = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 13 / 2 / 16 / 4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 400px) {
    grid-area: 12 / 2 / 16 / 4;
  }
  @media (min-width: 650px) {
    grid-area: 17 / 3 / 22 / 6;
  }
  @media (min-width: 900px) {
    grid-area: 9 / 12 / 14 / 20;
  }
  @media (min-width: 1300px) {
    grid-area: 9 / 12 / 15 / 20;
  }
`;
const Nestle = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 18 / 2 / 21 / 4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 400px) {
    grid-area: 17 / 2 / 21 / 4;
  }
  @media (min-width: 650px) {
    grid-area: 10 / 5 / 15 / 7;
  }
  @media (min-width: 900px) {
    grid-area: 9 / 22 / 14 / 30;
  }
  @media (min-width: 1300px) {
    grid-area: 9 / 20 / 15 / 27;
  }
`;
const Image = styled.img`
  height: 80%;
  width: auto;
  max-width: 300px;
  min-height: 110px;
  @media (max-width: 350px) {
    min-height: 90px;
  }
  @media (min-width: 900px) {
    height: auto;
    width: 100%;
  }
`;

function ItemBrands() {
  return (
    <Container>
      <Content>
        <BrandsTitle>
          <span>
            <h1>Nos Marques</h1>
            <svg
              width="272"
              height="32"
              viewBox="0 0 272 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.60044 25.4382C30.7327 7.85973 63.4391 7.49884 141.26 18.1553"
                stroke="#FF9B71"
                strokeWidth="5"
              />
              <path
                d="M128.819 13.4999C134.718 15.0127 146.945 16.3379 162.02 17.2055C177.017 18.0685 194.612 18.468 211.115 18.1876C227.649 17.9068 242.97 16.945 253.472 15.1165C258.786 14.1912 262.575 13.0895 264.674 11.9063C265.74 11.3056 266.014 10.879 266.057 10.7812C266.063 10.7678 266.059 10.7719 266.057 10.7893C266.054 10.8072 266.056 10.8192 266.056 10.8183C266.055 10.8162 266.039 10.6982 265.877 10.4524L270.054 7.70378C271.047 9.21272 271.414 11.005 270.641 12.7791C269.957 14.3477 268.561 15.4549 267.129 16.2621C264.233 17.8946 259.713 19.105 254.33 20.0424C243.435 21.9393 227.801 22.9049 211.2 23.1869C194.569 23.4694 176.85 23.0672 161.733 22.1972C146.695 21.3318 134.009 19.9927 127.577 18.3431L128.819 13.4999Z"
                fill="#FF9B71"
              />
            </svg>
          </span>
        </BrandsTitle>
        <Tukas>
          <Image src={tukas} alt="" className="brands_image tukas" />
        </Tukas>
        <UltraCompact>
          <Image
            src={ultracompact}
            alt=""
            className="brands_image ultracompact"
          />
        </UltraCompact>
        <Nestle>
          <Image src={nestle} alt="" className="brands_image nestle" />
        </Nestle>
      </Content>
    </Container>
  );
}

export default ItemBrands;

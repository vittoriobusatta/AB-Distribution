import React from "react";
import styled from "styled-components";
import {
  cabinRegular,
  baliviaRegular,
  playfairDisplayMedium,
  accueil,
} from "../Common";

const Container = styled.section`
  height: calc(80vh - 8vh);
  width: 100%;
  margin-bottom: 10vh;
  @media (max-width: 350px) {
    height: calc(70vh - 8vh);
  }
  @media (min-width: 650px) {
    height: calc(90vh - 8vh);
  }
`;
const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Content = styled.div`
  height: auto;
  width: auto;
`;
const Box = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5vh;
`;
const Title = styled.h1`
  font-size: 10rem;
  position: relative;
  white-space: nowrap;
  font-family: ${playfairDisplayMedium};
  @media (max-width: 350px) {
    font-size: 8rem;
  }
  @media (min-width: 650px) {
    font-size: 11rem;
  }
  @media (min-width: 850px) {
    font-size: 13rem;
  }
  @media (min-width: 1100px) {
    font-size: 16rem;
  }

  &::before {
    position: absolute;
    color: #000;
    font-family: ${baliviaRegular};
    font-size: 4rem;
    text-transform: uppercase;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 80%);
    white-space: nowrap;
    letter-spacing: 0.3rem;

    @media (max-width: 350px) {
      font-size: 3.5rem;
    }
    @media (min-width: 650px) {
      font-size: 4.5rem;
    }
    @media (min-width: 850px) {
      font-size: 5rem;
    }
    @media (min-width: 1100px) {
      font-size: 6.5rem;
    }
  }

  &.title_accueil {
    color: ${accueil};
  }
  &.title_accueil::before {
    content: "Accueil";
  }
`;
const Description = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.p`
  position: relative;
  color: #838383;
  font-size: 1.4rem;
  text-align: center;
  line-height: 2.5rem;
  font-family: ${cabinRegular};
  width: fit-content;
  padding: 2rem;
  max-width: 720px;
  @media (max-width: 350px) {
    font-size: 1.1rem;
    line-height: 2rem;
  }
  @media (min-width: 650px) {
    font-size: 1.8rem;
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 15rem);
    height: 5rem;
    width: 2px;
    background-color: #ff9b71;
  }
`;

function Landing() {
  return (
    <Container>
      <Wrap>
        <Content>
          <Box>
            <Title className="title_accueil">Home</Title>
          </Box>

          <Description>
            <Paragraph className="line_accueil">
              AB Distribution est une société qui fournit des produits au détail
              dans trois catégories distinctes : l’Alimentation, la Parfumerie
              ainsi que l'Hygiène. Explorer le catalogue de produits dont nous
              disposons.
            </Paragraph>
          </Description>
        </Content>

        {/* <div className="products_box_top">
          <div className="box_top_content">
            <div className="products_tittle">
              <span>
                <h1>Nos Produits</h1>
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
            </div>
          </div>
        </div> */}
      </Wrap>
    </Container>
  );
}

export default Landing;

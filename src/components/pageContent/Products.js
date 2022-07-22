import React from "react";
import styled from "styled-components";
import "../pageContent/styles.css";
import ItemAntibacterial from "./ItemsProducts/ItemAntibacterial";
import ItemHandwash from "./ItemsProducts/ItemHandwash";
import ItemShowerGel from "./ItemsProducts/ItemShowerGel";
import ItemFood from "./ItemsProducts/ItemFood";
import ItemBodyMist from "./ItemsProducts/ItemBodyMist";
import ItemCoffee from "./ItemsProducts/ItemCoffee";
import ItemPerfume from "./ItemsProducts/ItemPerfume";
import ItemAirFreshener from "./ItemsProducts/ItemAirFreshener";

const Container = styled.section`
  height: 500vh;
  width: 100%;
`;

function Products() {
  return (
    <Container>

      <div id="produits" className="produits_accueil">
        <div className="products_box">
          <div className="products_box_bottom">
            <div className="products_bottom_content">
              <div className="products_wrapper">
                <div className="products_grid accueil_padding">

                    <ItemAntibacterial />

                    <ItemHandwash />

                    <ItemBodyMist />

                    <ItemShowerGel />

                    <ItemPerfume />

                    <ItemCoffee />

                    <ItemAirFreshener />

                    <ItemFood />

                  <div className="brands">
                    <div className="brands_top">
                      <div className="products_tittle">
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
                      </div>
                    </div>

                    <div className="brands_bottom">
                      <div className="brands_bottom_content">
                        <div className="brands_grid">
                          <div className="brands_image tukas"></div>
                          <div className="brands_image nestle"></div>
                          <div className="brands_image ultracompact"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
}

export default Products;

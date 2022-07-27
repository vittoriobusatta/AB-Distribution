import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as NavbarLogoFooter } from "../../../assets/icons/Logo.svg";

import {
  FooterWrapper,
  FooterContent,
  FooterGrid,
  FooterColumnLogo,
  FooterColumnLinks,
  FooterColumnSocials,
  FooterSocialsLinks,
  FooterCopyright,
  FooterCopyContent,
  FooterLicense,
  FooterCopy,
} from "../PageCommon";
import { airfreshener } from "../../Common";

export const UpdateSocialsLinks = styled(FooterSocialsLinks)`
  & svg:hover > path {
    fill: ${airfreshener};
  }
`;
export const UpdateColumnLinks = styled(FooterColumnLinks)`
  ul li a:hover {
    color: ${airfreshener};
  }
`;
export const UpdateCopyContent = styled(FooterCopyContent)`
  background-color: ${airfreshener};
`;

function FooterAirfreshener() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterGrid>
          <FooterColumnLogo>
            <NavbarLogoFooter />
          </FooterColumnLogo>

          <UpdateColumnLinks>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <a className="links_accueil" href="mentions-legales">
                  Mentions Légales
                </a>
              </li>
            </ul>
          </UpdateColumnLinks>

          <FooterColumnSocials>
            <UpdateSocialsLinks>
              <a className="links_accueil" href="https://www.instagram.com">
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8 6.8C23.8 7.9598 22.8598 8.9 21.7 8.9C20.5402 8.9 19.6 7.9598 19.6 6.8C19.6 5.6402 20.5402 4.7 21.7 4.7C22.8598 4.7 23.8 5.6402 23.8 6.8Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 21.5C17.866 21.5 21 18.366 21 14.5C21 10.634 17.866 7.5 14 7.5C10.134 7.5 7 10.634 7 14.5C7 18.366 10.134 21.5 14 21.5ZM14 18.7C16.3196 18.7 18.2 16.8196 18.2 14.5C18.2 12.1804 16.3196 10.3 14 10.3C11.6804 10.3 9.8 12.1804 9.8 14.5C9.8 16.8196 11.6804 18.7 14 18.7Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 13.94C0 9.23556 0 6.88334 0.915545 5.08648C1.72088 3.50592 3.00592 2.22088 4.58648 1.41555C6.38334 0.5 8.73556 0.5 13.44 0.5H14.56C19.2644 0.5 21.6167 0.5 23.4135 1.41555C24.9941 2.22088 26.2791 3.50592 27.0845 5.08648C28 6.88334 28 9.23556 28 13.94V15.06C28 19.7644 28 22.1167 27.0845 23.9135C26.2791 25.4941 24.9941 26.7791 23.4135 27.5845C21.6167 28.5 19.2644 28.5 14.56 28.5H13.44C8.73556 28.5 6.38334 28.5 4.58648 27.5845C3.00592 26.7791 1.72088 25.4941 0.915545 23.9135C0 22.1167 0 19.7644 0 15.06V13.94ZM13.44 3.3H14.56C16.9584 3.3 18.5888 3.30218 19.8491 3.40514C21.0767 3.50544 21.7044 3.68723 22.1423 3.91036C23.1961 4.44725 24.0527 5.30395 24.5896 6.35765C24.8128 6.79557 24.9946 7.42334 25.0949 8.65091C25.1978 9.91116 25.2 11.5416 25.2 13.94V15.06C25.2 17.4584 25.1978 19.0888 25.0949 20.3491C24.9946 21.5767 24.8128 22.2044 24.5896 22.6423C24.0527 23.6961 23.1961 24.5527 22.1423 25.0896C21.7044 25.3128 21.0767 25.4946 19.8491 25.5949C18.5888 25.6978 16.9584 25.7 14.56 25.7H13.44C11.0416 25.7 9.41116 25.6978 8.15091 25.5949C6.92334 25.4946 6.29557 25.3128 5.85765 25.0896C4.80395 24.5527 3.94725 23.6961 3.41036 22.6423C3.18723 22.2044 3.00544 21.5767 2.90514 20.3491C2.80218 19.0888 2.8 17.4584 2.8 15.06V13.94C2.8 11.5416 2.80218 9.91116 2.90514 8.65091C3.00544 7.42334 3.18723 6.79557 3.41036 6.35765C3.94725 5.30395 4.80395 4.44725 5.85765 3.91036C6.29557 3.68723 6.92334 3.50544 8.15091 3.40514C9.41116 3.30218 11.0416 3.3 13.44 3.3Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a className="links_accueil" href="https://www.facebook.com">
                <svg
                  width="16"
                  height="29"
                  viewBox="0 0 16 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.718 16.1311L15.5342 11.1019H10.4281V7.83981C10.4281 6.46362 11.1401 5.12136 13.4271 5.12136H15.75V0.839806C15.75 0.839806 13.6428 0.5 11.6291 0.5C7.42198 0.5 4.67468 2.9092 4.67468 7.26893V11.1019H0V16.1311H4.67468V28.2893C5.61318 28.4287 6.57331 28.5 7.55139 28.5C8.52947 28.5 9.4896 28.4287 10.4281 28.2893V16.1311H14.718Z"
                    fill="black"
                  />
                </svg>
              </a>
            </UpdateSocialsLinks>
          </FooterColumnSocials>
        </FooterGrid>

        <FooterCopyright>
          <UpdateCopyContent>
            <FooterLicense>
              <span>© 2022 - AB Distribution | Tous droits réservés</span>
            </FooterLicense>

            <FooterCopy>
              <span>
                Réalisation par &nbsp;
                <a href="https://vittoriobusatta.fr">Vittorio</a>
              </span>
            </FooterCopy>
          </UpdateCopyContent>
        </FooterCopyright>
      </FooterContent>
    </FooterWrapper>
  );
}

export default FooterAirfreshener;

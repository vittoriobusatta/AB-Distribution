import React from "react";
import styled from "styled-components";
import { cabinBold, cabinRegular, cabinMedium, mainColor } from "../../Common";
import setTitle from "../../Function/setTitle";
import Landing from "./Landing";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Wrapper = styled.section`
  height: auto;
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 170px;
  padding-bottom: 64px;
  background-color: ${mainColor};
  position: relative;
  z-index: 3;
  @media screen and (min-width: 992px) {
    padding: 96px 48px;
  }
`;

const Article = styled.div`
  height: auto;
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 992px) {
  margin-top: 64px;

  }
`;
const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;
  font-family: ${cabinBold};
  color: #222;
  @media screen and (min-width: 992px) {
    font-size: 24px;
  margin-bottom: 32px;
  }
`;
const SubArticle = styled.h2`
  font-size: 16px;
  text-align: center;
  margin-bottom: 24px;
  margin-top: 24px;
  font-family: ${cabinMedium};
  @media screen and (min-width: 992px) {
    font-size: 18px;
  margin-bottom: 32px;
  margin-top: 32px;
  }
`;
const Content = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  max-width: 1400px;
  font-family: ${cabinRegular};
  color: #222;
  @media screen and (min-width: 992px) {
  line-height: 22px;
  }
`;

function LegalNotice() {
  setTitle("Mentions Légales | AB Distribution");
  return (
    <>
      <Navbar />
      <Landing />
      <Wrapper>

        <Article>
          <Title>Article 1 - Mentions légales</Title>
          <SubArticle>1.1 Site</SubArticle>
          <Content>
            Le présent site, accessible à l’URL https://ab-distribution.re
          </Content>
          <SubArticle>1.2 Éditeur</SubArticle>
          <Content>
            L'entreprise individuelle de Youssouf ISMAEL DAOUDJEE située :
          </Content>
          <Content>
            82 rue Victor le Vigoureux, 97410 Saint-Pierre immatriculée au RCS
            de 890 934 342
          </Content>
          <Content>n° de téléphone : +33692548883</Content>
          <Content>adresse mail : services@ab-distribution.re</Content>
          <SubArticle>1.3 Hébergeur</SubArticle>
          <Content>
            AB Distribution est hébergé par LWS dont le siège social est situé
            au 10 Rue de Penthièvre, 75008 Paris
          </Content>
        </Article>

        <Article>
          <Title>Article 2 - Accès au site</Title>
          <Content>
            L'accès au site et son utilisation sont réservés à un usage
            strictement personnel. Vous vous engagez à ne pas utiliser ce site
            et les informations ou données qui y figurent à des fins
            commerciales, politiques, publicitaires et pour toute forme de
            sollicitation commerciale et notamment l'envoi de courriers
            électroniques non sollicités.
          </Content>
        </Article>

        <Article>
          <Title>Article 3 - Contenu du site</Title>
          <Content>
            Toutes les marques, photographies, textes, commentaires,
            illustrations, images animées ou non, séquences vidéo, sons, ainsi
            que toutes les applications informatiques qui pourraient être
            utilisées pour faire fonctionner ce site et plus généralement tous
            les éléments reproduits ou utilisés sur le site sont protégés par
            les lois en vigueur au titre de la propriété intellectuelle. Ils
            sont la propriété pleine et entière de l'éditeur ou de ses
            partenaires. Toute reproduction, représentation, utilisation ou
            adaptation, sous quelque forme que ce soit, de tout ou partie de ces
            éléments, y compris les applications informatiques, sans l'accord
            préalable et écrit de l'éditeur, sont strictement interdites. Le
            fait pour l'éditeur de ne pas engager de procédure dès la prise de
            connaissance de ces utilisations non autorisées ne vaut pas
            acceptation desdites utilisations et renonciation aux poursuites.
          </Content>
        </Article>

        <Article>
          <Title>Article 4 - Gestion du site</Title>
          <Content>
            Pour la bonne gestion du site, l'éditeur pourra à tout moment : -
            suspendre, interrompre ou limiter l'accès à tout ou partie du site,
            réserver l'accès au site, ou à certaines parties du site, à une
            catégorie déterminée d'internautes ; - supprimer toute information
            pouvant en perturber le fonctionnement ou entrant en contravention
            avec les lois nationales ou internationales ; - suspendre le site
            afin de procéder à des mises à jour.
          </Content>
        </Article>

        <Article>
          <Title>Article 5 - Responsabilités</Title>
          <Content>
            La responsabilité de l'éditeur ne peut être engagée en cas de
            défaillance, panne, difficulté ou interruption de fonctionnement,
            empêchant l'accès au site ou à une de ses fonctionnalités. Le
            matériel de connexion au site que vous utilisez est sous votre
            entière responsabilité. Vous devez prendre toutes les mesures
            appropriées pour protéger votre matériel et vos propres données
            notamment d'attaques virales par Internet. Vous êtes par ailleurs
            seul responsable des sites et données que vous consultez. L'éditeur
            ne pourra être tenu responsable en cas de poursuites judiciaires à
            votre encontre : - du fait de l'usage du site ou de tout service
            accessible via Internet ; - du fait du non-respect par vous des
            présentes conditions générales. L'éditeur n'est pas responsable des
            dommages causés à vous-même, à des tiers et/ou à votre équipement du
            fait de votre connexion ou de votre utilisation du site et vous
            renoncez à toute action contre lui de ce fait. Si l'éditeur venait à
            faire l'objet d'une procédure amiable ou judiciaire en raison de
            votre utilisation du site, il pourra se retourner contre vous pour
            obtenir l'indemnisation de tous les préjudices, sommes,
            condamnations et frais qui pourraient découler de cette procédure.
          </Content>
        </Article>

        <Article>
          <Title>Article 6 - Liens hypertextes</Title>
          <Content>
            La mise en place par les utilisateurs de tous liens hypertextes vers
            tout ou partie du site est autorisée par l'éditeur. Tout lien devra
            être retiré sur simple demande de l'éditeur. Toute information
            accessible via un lien vers d'autres sites n'est pas publiée par
            l'éditeur. L'éditeur ne dispose d'aucun droit sur le contenu présent
            dans ledit lien.
          </Content>
        </Article>

        <Article>
          <Title>
            Article 7 - Photographies et représentation des produits
          </Title>
          <Content>
            Les photographies de produits, accompagnant leur description, ne
            sont pas contractuelles et n'engagent pas l'éditeur.
          </Content>
        </Article>

        <Article>
          <Title>Article 8 - Loi applicable</Title>
          <Content>
            Les présentes conditions d'utilisation du site sont régies par la
            loi française et soumises à la compétence des tribunaux du siège
            social de l'éditeur, sous réserve d'une attribution de compétence
            spécifique découlant d'un texte de loi ou réglementaire particulier.
          </Content>
        </Article>

        <Article>
          <Title>Article 9 - Contactez-nous</Title>
          <Content>
            Pour toute question, information sur les produits présentés sur le
            site, ou concernant le site lui-même, vous pouvez laisser un message
            à l'adresse suivante : services@ab-distribution.re
          </Content>
        </Article>
      </Wrapper>
      <Footer />
    </>
  );
}

export default LegalNotice;

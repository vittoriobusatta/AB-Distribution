import React from "react";
import coffee from "../../../assets/img/home/coffee.webp";
import { Link } from "react-router-dom";
import {
  Item,
  Layout,
  Name,
  NameContent,
  Title,
  Svg,
  Overview,
  OverviewContent,
  Image,
  Description,
  DescriptionContent,
  P,
} from "../../Common";

function ItemCoffee() {
  return (
    <Item>
      <Layout>
        <Name>
          <NameContent>
            <Title className="coffee_line">Nescafé xpress</Title>
            <span>
              <Link to="cafes">
                <span>Voir les Produits</span>
              </Link>
              <Svg
                className="coffee_color"
                viewBox="0 0 287 133"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M54.6077 78.5016C54.8092 78.3694 54.9565 78.0877 54.8067 77.8446C54.9524 78.0819 54.8157 78.3652 54.6077 78.5016ZM56.7796 79.0698C57.7856 78.7201 57.5488 78.8199 57.9538 78.9687C57.782 79.6729 56.0691 79.3178 56.7796 79.0698ZM123.185 49.3147C122.746 49.4142 122.872 49.4163 122.746 49.2294C122.94 49.0338 123.18 48.9499 123.185 49.3147ZM4.75505 91.0104C6.76361 91.1898 6.73186 90.7255 11.9732 90.5122C14.8808 90.3932 13.7892 90.174 17.23 89.9848C18.5418 90.8151 20.0791 90.012 22.7035 90.5273C23.991 90.7807 26.8919 89.8706 28.3717 89.7534C30.5248 88.9945 31.4272 89.7852 32.6894 89.04C32.9101 88.911 33.2713 88.8693 33.5374 88.8951C36.16 89.1484 37.2312 88.1149 41.3954 87.9171C42.5087 87.8651 43.5966 87.4816 44.6924 87.4565C45.5917 87.4351 46.452 87.2283 47.3254 87.0437C48.5882 87.3123 49.4137 86.2948 51.1697 86.168C52.5423 86.0687 55.4415 85.1471 58.4095 85.4113C60.2747 85.5781 60.0808 84.6182 61.5905 84.8771C64.3606 85.3539 65.3865 83.6696 66.667 85.1054C66.843 85.3013 66.7793 85.7325 67.8107 85.5802C69.7503 85.2945 68.4994 86.7944 69.4994 86.7433C84.3052 85.9758 92.7485 84.756 94.5382 85.1133C94.7997 85.1645 95.1324 85.1221 95.4147 85.0496C97.2363 84.5784 101.044 84.5771 101.535 84.7093C103.392 85.2141 93.1851 85.5636 92.3661 85.8599C90.8413 86.4128 91.6067 86.3648 89.3986 86.3325C87.9555 86.3107 88.4487 85.8882 87.1367 86.1916C85.4192 86.5903 84.3659 86.4465 83.6254 87.0205C86.0354 87.1729 83.9325 87.1292 89.0388 87.069C92.3115 87.0305 92.6986 86.633 94.2032 86.9908C95.1245 87.2108 94.8334 86.7802 97.4523 86.8289C100.079 86.8783 98.827 86.6825 99.6419 86.5204C100.792 86.2908 101.539 86.0797 102.686 86.1819C103.327 86.238 103.105 86.9268 103.963 86.8541C104.186 86.8357 109.693 86.3545 109.91 86.3686C112.513 86.542 114.225 85.5156 116.684 85.3641C122.879 84.9822 122.65 85.4564 123.619 84.8026C124.514 84.1986 126.574 84.2586 126.83 84.2844C130.78 84.6758 139.567 83.0697 154.86 82.9924C155.385 82.9903 155.84 83.132 156.102 83.5109C154.539 84.4078 154.68 83.5458 153.425 83.7997C152.467 83.9943 151.542 84.0353 150.628 83.8554C150.298 83.7907 149.887 83.7576 149.563 83.8612C148.067 84.3421 144.714 83.8989 149.236 85.0593C150.147 85.2936 150.044 84.9891 150.912 84.8726C161.065 83.5123 156.695 84.6271 161.31 84.4166C163.359 84.3241 162.873 85.1165 164.411 84.8242C165.686 84.5818 165.558 84.9515 167.025 84.5157C167.458 84.3863 169.311 84.1681 169.001 83.8276C168.93 83.7504 168.849 83.6475 168.744 83.6331C167.971 83.529 167.065 82.754 168.898 82.559C171.583 82.2736 171.6 83.1891 172.844 83.0318C173.606 82.9357 174.264 83.1871 174.997 83.1702C175.627 83.1542 174.287 84.1073 175.216 84.1781C176.231 84.2561 177.227 84.28 178.25 83.8299C179.218 83.4035 179.043 83.8065 181.514 83.4333C181.744 83.3983 184.717 82.6452 185.609 82.6185C187.744 82.5556 199.135 83.8044 209.089 84.2522C218.155 84.6601 225.213 85.1627 227.036 84.6847C231.299 83.5668 256.381 83.6573 261.123 83.6189C262.547 83.6083 262.866 82.1724 265.263 82.3226C266.931 82.4275 268.637 82.0984 270.314 82.092C270.695 82.091 271.035 81.9335 271.266 81.6421C272.256 80.3891 272.315 81.3759 273.523 80.6716C273.1 80.3057 271.479 80.4392 271.864 79.5162C271.963 79.2798 271.595 79.052 271.863 78.8645C274.139 77.2647 273.206 77.5105 275.709 77.1887C275.955 77.1559 276.209 76.7483 276.059 76.6035C275.437 76.0045 273.806 75.4192 278.436 74.8188C279.475 74.684 278.85 74.0195 279.544 73.6096C280.358 73.1275 278.659 73.0387 279.535 72.1249C280.362 71.2645 279.91 70.8708 279.548 70.8095C278.252 70.5907 277.141 70.7624 276.073 69.4963C275.663 69.0123 275.994 68.5038 276.002 68.3158C276.046 67.2663 277.029 67.6672 277.666 66.664C278.113 65.9604 278.055 65.4412 277.333 64.984C276.969 64.7521 276.727 64.3911 276.298 64.1885C275.616 63.8633 277.583 63.2454 278.192 63.0665C278.955 62.8428 280.728 61.9335 280.126 61.5999C278.98 60.963 278.746 60.9466 279.01 60.6125C279.313 60.2308 280.336 60.1512 280.272 59.9305C280.108 59.3603 276.875 59.8457 273.039 59.5113C272.484 59.4625 272.948 59.0283 272.959 58.2676C272.976 57.1999 275.039 57.7325 277.496 57.3911C279.209 57.153 279.6 57.1108 279.479 56.8436C279.062 55.9176 275.229 56.8125 275.39 55.7972C275.446 55.4419 276.001 55.5171 276.716 55.3725C277.522 55.2085 279.002 54.8014 278.52 54.3981C277.688 53.7002 277.213 53.9791 276.128 54.0854C275.413 54.1559 275.275 53.0055 276.129 52.5395C277.647 51.7113 277.946 52.0402 278.671 51.8448C280.407 51.3758 274.393 48.7379 273.143 47.8302C271.464 47.2388 272.322 47.5405 272.322 47.5405L271.464 47.2388L270.572 46.9224L270.275 46.8176L270.047 46.7372L269.783 46.6439L269.113 46.4074L267.564 45.8604L266.832 45.6004L266.101 45.3404L264.977 44.9391L264.128 44.636L262.815 44.1294C262.815 44.1294 262.999 44.2002 261.867 43.8287C260.735 43.4571 261.263 43.6263 260.746 43.4286C260.229 43.231 256.189 44.2345 255.008 44.2401C252.235 44.2536 250.141 43.8122 249.295 43.594C249.078 43.8007 248.78 43.279 247.748 42.7684C247.284 42.9862 244.123 41.7698 243.201 41.9167C242.765 42.2569 242.32 42.4341 241.801 42.4802C241.204 42.5314 240.698 42.9354 240.082 42.8932C239.204 42.8333 238.326 43.0781 237.447 43.174C235.485 43.3904 235.516 44.1755 234.502 43.8075C233.407 43.4114 232.21 43.8805 231.484 43.9916C222.788 45.3329 189.536 41.0725 183.154 41.2315C182.236 41.2541 182.168 41.5702 181.229 41.437C179.214 41.1525 177.842 42.3067 175.694 41.3649C175.453 41.2595 174.269 40.8731 173.687 41.4843C172.886 42.3237 170.405 42.5501 169.492 42.3965C168.343 42.2022 168.31 42.8942 167.507 43.0439C167.274 43.0875 129.557 45.0724 135.72 44.2044C139.058 43.7353 139.104 43.7465 139.654 43.7781C143.651 44.0055 147.609 43.1171 155.044 42.8965C156.065 42.866 157.093 42.8935 158.125 42.6451C162.364 42.6241 163.2 42.6861 163.347 41.7735C163.403 41.4163 163.335 41.3041 163.006 41.3172C162.288 41.3486 161.54 41.1585 160.857 41.5992C159.925 42.1991 158.106 42.2954 157.445 41.6525C157.028 41.2469 156.265 41.6993 156.04 41.7958C154.274 42.5416 154.163 41.6259 153.15 41.7236C149.934 42.034 149.732 41.9139 149.35 42.4245C149.311 42.4766 149.04 42.5104 148.986 42.4662C148.557 42.1007 147.983 42.1073 147.381 42.1807C144.657 42.5138 144.772 42.1913 144.095 42.4693C142.707 43.0378 142.16 42.6793 139.731 43.0299C135.974 43.5739 135.216 42.857 134.081 43.5255C133.984 43.5834 130.253 44.1825 130.14 44.2009C128.745 45.0133 127.952 44.175 125.836 44.5668C125.108 44.7026 124.392 44.9683 123.665 45.0686C121.061 45.4267 112.089 45.3702 111.292 46.1011C111.171 46.2127 111.406 46.4151 111.657 46.3884C111.948 46.3565 112.237 46.2893 112.529 46.2535C112.612 46.2423 112.694 46.4824 112.573 46.4922C112.341 46.5112 107.08 47.1638 108.865 47.5742C107.908 48.5828 105.194 47.9645 103.64 48.7088C104.13 49.0819 103.1 48.8613 108.497 48.9327C113.04 48.9917 113.816 47.8944 119.449 48.2281C120.787 49.4206 120.81 49.3424 120.663 49.4867C120.576 49.5709 120.411 49.6802 120.313 49.6712C118.95 49.5456 117.518 49.8787 116.165 49.6811C115.967 49.6515 115.728 49.7012 115.516 49.7498C110.646 50.8774 95.7144 50.7359 95.8371 52.0135C95.8978 52.6305 99.4266 51.8661 101.924 52.1643C103.475 51.8157 104.984 52.1481 106.539 51.8714C106.937 51.8016 107.365 51.9823 107.777 52.056C107.907 52.079 107.457 52.4594 107.214 52.5056C104.737 52.9713 103.891 52.3425 102.406 52.9373C101.966 53.1135 100.388 53.8458 99.6861 53.8923C95.2995 54.1812 92.7321 54.5569 92.6788 54.5616C91.7051 54.6361 92.2933 55.3436 91.3987 55.4464C88.6762 55.7543 88.4815 55.6852 87.9322 56.027C86.4644 56.9408 86.6186 56.7852 84.8617 56.9404L84.8049 56.9235C84.6981 55.6185 84.86 55.7451 82.397 56.1893C81.1603 56.4124 79.9433 56.7836 78.6904 56.866C78.5704 56.8739 78.7362 57.0279 78.7783 57.0123C79.4743 56.7608 79.9385 57.343 80.658 57.135C81.1382 56.9961 81.667 57.0517 82.1795 56.9172C82.7072 56.7777 83.1891 56.8912 83.6353 57.0701C83.5039 57.2152 83.3847 57.462 83.2407 57.4875C81.9402 57.7179 75.788 58.0287 75.3284 58.0207C74.3205 58.0041 73.2813 58.3418 72.2604 58.478C71.2426 58.6153 70.2286 58.4239 69.1869 58.6168C66.9348 59.0305 64.5104 58.6529 59.3151 59.0919C56.9495 58.711 55.0207 59.6659 53.9491 59.4177C52.1449 58.9976 52.5416 59.9282 50.7736 59.8981C49.6511 59.8786 48.528 59.8836 47.4143 60.2346C48.041 60.5756 48.6159 60.788 48.2498 61.2183C50.1427 61.3853 55.0234 60.5784 55.9306 60.7685C56.7158 60.9336 56.7101 60.8032 60.6621 60.2606C60.7623 60.5323 60.5182 61.068 61.5132 61.0339L61.6374 61.1572L61.8425 61.1033C61.8513 61.2882 61.9983 61.5581 61.4925 61.6362C61.3047 61.664 58.1295 62.1411 57.9428 62.1378C56.4306 61.8276 53.4309 62.4021 53.4309 62.4021C52.6221 62.2217 47.7866 62.3487 47.5536 62.3517C48.4802 62.8947 50.2474 62.8985 51.4626 62.8101C54.165 62.6138 54.0617 62.7004 54.0617 62.7004C54.0348 64.7349 50.6502 62.8632 48.8006 64.3223C47.8466 64.4265 46.8875 64.4827 45.9394 64.6463C43.0173 65.154 43.5204 64.5112 42.2485 64.9671C41.3414 65.2936 40.362 65.3176 39.4607 65.6528C39.663 65.8721 39.9073 65.9985 40.2939 65.9423C42.8498 65.5733 41.9724 65.9597 43.1333 65.7995C44.3062 65.6379 45.4788 65.4673 46.6512 65.3C46.9608 65.4717 47.3296 65.4354 47.696 65.3741C50.1258 64.9682 54.694 65.4738 53.347 66.153C50.5646 67.5597 54.0097 67.4572 48.4531 68.245C47.8022 68.3377 47.0444 68.1785 46.7234 68.3566C45.213 69.1998 40.5838 69.5735 39.5764 69.6953C40.3488 69.9289 41.1733 69.3276 42.4524 69.7884C42.6199 69.8483 42.8865 69.7459 43.1046 69.74C43.6683 69.729 43.8582 70.103 43.6732 70.2452C43.2568 70.5629 42.8342 70.8771 42.4247 71.1853C48.7243 72.1498 35.5686 72.5455 34.2118 73.3233C33.5404 73.7079 32.7772 73.4124 32.0525 73.4945C31.7774 73.5267 31.5048 73.6894 31.231 73.7923C27.6757 74.1094 25.3845 74.6879 25.043 74.9968C26.9004 74.8691 27.2012 75.1503 27.7092 74.7184C28.624 74.5022 29.5454 74.1748 30.4256 74.5398C31.3174 75.2011 31.9703 75.8856 33.1045 75.4696C34.5697 74.9334 33.8765 75.8964 36.0046 75.5707C37.8785 75.2842 38.1477 75.3523 38.351 75.5277C38.7517 75.8738 39.3171 75.8337 39.7568 75.6176C40.2609 75.3695 42.8663 74.5946 43.1521 74.8748C43.69 75.4027 44.4728 75.4089 45.2672 75.4453C46.3083 75.4887 46.1498 76.1161 45.921 76.1691C44.7823 76.4347 45.1354 76.2641 44.83 76.6448C42.7284 77.191 41.0003 77.1679 40.0341 77.4107C39.3805 77.5757 38.7596 77.7502 38.109 77.5982C37.9255 77.5547 37.6494 77.5908 37.4669 77.6768C36.375 78.1938 36.0177 77.8371 32.9471 78.1142C31.9678 78.2026 33.0568 78.7975 34.3349 78.4519C34.4991 78.4077 41.4707 78.0724 41.4079 78.2092C41.6441 78.2466 41.5736 78.5797 41.9541 78.4782C43.5762 78.047 42.3265 78.1022 44.5099 78.1387C46.2352 78.1671 43.6326 78.6031 48.9333 77.7501C49.5517 77.8579 49.7207 77.6124 51.1036 77.6071C51.3903 77.6058 51.4672 78.2829 50.5828 78.4817C49.2777 78.7762 47.9762 79.0763 46.651 79.2575C45.1205 79.4675 43.5715 79.4688 42.0617 79.9693C41.9268 80.0142 41.7597 80.029 41.6263 80.0087C40.8887 79.8952 40.2038 80.3334 39.4626 80.3457C38.8089 80.3543 35.8444 80.6959 35.5183 80.7868C34.9264 80.9523 34.3431 80.6419 33.8037 80.9509C32.7616 81.549 32.6387 80.0621 30.1104 82.2161C27.5615 82.4134 27.7391 82.1835 27.1484 82.5286C26.0107 83.1916 25.3793 82.1314 23.6681 83.4611C23.4887 83.6016 23.6118 83.9021 23.9617 83.9044C24.5166 83.9074 24.9735 82.8696 26.3464 83.4582C27.6134 84.0022 30.0796 83.505 31.9081 83.2491C33.5531 83.0187 32.3242 83.2574 34.449 83.1721C36.639 83.0839 40.2602 82.2581 41.6605 82.3864C42.0756 82.4237 42.5782 82.3883 42.9699 82.2326C43.8408 81.8898 46.0862 82.12 47.5278 81.8211C48.4096 81.6392 49.2016 82.0635 50.0911 81.6872C50.4209 81.5472 50.8949 81.951 50.9861 82.2413C51.209 82.9398 47.0865 82.7948 45.5281 83.3686C44.708 83.6695 43.967 83.334 43.1748 83.4057C41.4688 83.5589 38.8551 84.0078 37.4591 84.2187C36.7089 84.3314 36.8049 84.6601 36.1554 84.9157C33.1867 86.0872 32.1036 85.4726 30.5506 86.2078L26.8487 86.4726C25.8206 86.5436 24.8196 86.864 23.7959 86.8883C23.6048 86.8931 23.4015 87.0622 23.1942 87.1254C22.6392 87.2975 22.7482 87.7419 22.507 88.0417C18.8546 88.8321 18.4934 88.7011 17.311 89.1828C17.195 89.2303 16.9989 89.2521 16.9145 89.2061C15.9303 88.6591 14.8618 89.3832 13.7258 89.2713C12.3427 89.1342 10.9411 89.3861 9.57197 89.6526C6.46671 90.2578 6.77933 89.8349 4.78283 90.2512C4.17507 90.3778 4.42115 90.9794 4.75505 91.0104Z"
                  fill="#FEDA57"
                />
              </Svg>
            </span>
          </NameContent>
        </Name>

        <Overview>
          <OverviewContent>
            <Image src={coffee} alt="" />
          </OverviewContent>
        </Overview>

        <Description>
          <DescriptionContent>
            <P>
              NESCAFÉ Xpress vous donnera le réveil dont vous avez besoin pour
              continuer votre journée. Les grains de café et le lait doux
              spécialement sélectionnés; la délicieuse saveur de café au lait
              glacé qui sort lorsqu’il est combiné avec la spécialisation
              NESCAFÉ vous fera oublier l’intensité de la journée.
            </P>
          </DescriptionContent>
        </Description>
      </Layout>
    </Item>
  );
}

export default ItemCoffee;

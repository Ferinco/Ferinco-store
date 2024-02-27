import Banner from "../Components/landing/Banner";
import Collections from "../Components/landing/Collections";
import Products from "../Components/landing/Product";
import Styles from "../Components/landing/Styles";
import styled from "styled-components";
import BrandLogos from "../Components/landing/logos";
import SliderDiv from "../Components/landing/slider";
import BrowseSection from "../Components/landing/browseSection";
export default function Home() {
  return (
    <HomeDiv className="Home">
      <Banner />
      <Products />
      <Collections />
      <SliderDiv />
      <Styles />
      <BrandLogos />
      <BrowseSection />
    </HomeDiv>
  );
}
const HomeDiv = styled.div`
  /* background: linear-gradient(1turn, hsla(210, 100%, 99%, 0.15), #fff 85%), /* Subtle whitish blue */
  /* radial-gradient(
    ellipse at top left,
    rgba(13, 110, 253, 0.5),
    transparent 50%
  ), */
  /* radial-gradient(
    ellipse at top right,
    rgba(255, 228, 132, 0.5),
    transparent 50%
  ),
  radial-gradient(
    ellipse at center right,
    rgba(113, 44, 249, 0.5),
    transparent 50%
  ), */
  /* radial-gradient(
    ellipse at center left,
    rgba(254, 51, 132, 0.5),
    transparent 50%
  ); */

  overflow-x: hidden;
`;

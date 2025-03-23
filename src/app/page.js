// "use client";
import HomeSplide from "./components/HomeSplide";
import HomeWelcome from "./components/HomeWelcome";
import NewsSlider from "./components/NewsSlider";
import HomeMinistry from "./components/HomeMinistry";
import "@splidejs/splide/css";

export default function Home() {
  return (
    <>
      <HomeSplide />
      <NewsSlider />
      <HomeWelcome />
      <HomeMinistry />
    </>
  );
}

// "use client";
import HomeSplide from "./components/HomeSplide";
import HomeWelcome from "./components/HomeWelcome";
import NewsSlider from "./components/NewsSlider";
import "@splidejs/splide/css";

export default function Home() {
  return (
    <>
      <HomeSplide />
      <NewsSlider />
      <HomeWelcome />
    </>
  );
}

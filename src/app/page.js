// "use client";
import HomeSplide from "./components/HomeSplide";
import NewsSlider from "./components/NewsSlider";
import "@splidejs/splide/css";

export default function Home() {
  return (
    <>
      <HomeSplide />
      <NewsSlider />
    </>
  );
}

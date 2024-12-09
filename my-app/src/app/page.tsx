import Image from "next/image";
import Hero from "./components/hero";
import FeaturedProducts from "./components/FeaturedProducts";
import TopProducts from "./components/TopProducts";
import ImageCard from "./components/ImageCard";
import LogoSection from "./components/LogoSecton";

export default function Home() {
  return (
    <div >
     <Hero/>
     <LogoSection/>
     <FeaturedProducts/>
     <TopProducts/>
     <ImageCard/>

    </div>
  );
}

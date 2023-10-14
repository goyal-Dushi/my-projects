import React, { useEffect } from "react";
import { beginnerCards, intermediateCards } from "../../data/projectData";
import Footer from "../../components/homeComponents/footer";
import HomeNavbar from "../../components/homeComponents/navbar";
import HomeCarousel from "../../components/homeComponents/homeCarousel";

export default function HomePage() {
  useEffect(() => {
    document.title = "My Projects:DG";
  }, []);

  return (
    <>
      <HomeNavbar />
        <HomeCarousel data={beginnerCards} title={'Beginner Level'} />
        <HomeCarousel data={intermediateCards} title={'Intermediate Level'} />
      <Footer />
    </>
  );
}

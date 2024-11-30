import React from "react";
import Banner from "@/app/components/Banner/Banner"
import AboutMeSection from '@/app/components/AboutMeSection/AboutMeSection'
import SkillSection from "./components/SkillSection/SkillSection";

function page() {
  return (
    <div className="pt-8 pb-16">
      <div className="pt-10">
        <Banner />
      </div>
      <AboutMeSection />
      <SkillSection />
    </div>
  );
}

export default page;

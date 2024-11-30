import React from "react";
import Banner from "@/app/components/Banner/Banner"
import AboutMeSection from '@/app/components/AboutMeSection/AboutMeSection'

function page() {
  return (
    <div className="pt-8 pb-16">
      <div className="pt-10">
        <Banner />
      </div>
      <AboutMeSection />
    </div>
  );
}

export default page;

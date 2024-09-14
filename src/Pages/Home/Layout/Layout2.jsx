import React from "react";
import SustainableCard from "../Components/Card";

function Layout2() {
  return (
    <div className="flex justify-between w-full bg-white p-20">
      <SustainableCard />
      <SustainableCard />
      <SustainableCard />
      <SustainableCard />
    </div>
  );
}

export default Layout2;

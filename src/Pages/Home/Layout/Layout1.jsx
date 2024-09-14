import React from "react";
import { Typography } from "@mui/material";

function Layout1() {
  return (
    <div className="p-20">
      <Typography
        variant="h3"
        component="h1"
        className="font-bold"
        sx={{ color: "#85C447", fontSize: { xs: "2rem", md: "3.5rem" } }} // Green text color
      >
        CUSTOMIZED INNOVATIVE PACKAGING & TURNKEY SOLUTIONS
      </Typography>
      <Typography
        variant="h6"
        component="p"
        className="mt-4"
        sx={{ color: "#ffffff", fontSize: { xs: "1rem", md: "1.5rem" } }} // White subtext
      >
        INDIA'S LEADING DEVELOPER, MANUFACTURER, AND KEY SUPPLIER OF RIGID
        PLASTIC PACKAGING SUCH AS HDPE BOTTLES, CONTAINERS, AND CLOSURES.
      </Typography>
    </div>
  );
}

export default Layout1;

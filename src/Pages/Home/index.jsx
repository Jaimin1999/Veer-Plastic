import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Layout1 from "./Layout/Layout1";
import Layout2 from "./Layout/Layout2";
import Layout3 from "./Layout/Layout3";
import Layout4 from "./Layout/Layout4";
import Layout5 from "./Layout/Layout5";

export default function Home() {
  return (
    <Box
      className=""
      sx={{
        backgroundColor: "#184F75", // Blue background color
      }}
    >
      <Layout1 />
      <Layout2 />
      <Layout3 />
      <Layout4 />
      <Layout5 />
    </Box>
  );
}

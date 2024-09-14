import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import {
  LocalShipping,
  PrecisionManufacturing,
  Layers,
  Inventory,
  MoveToInbox,
} from "@mui/icons-material";

const Layout5 = () => {
  const services = [
    {
      title: "CUSTOMIZED & TURNKEY PACKAGING SOLUTIONS",
      icon: <Layers fontSize="large" />,
    },
    {
      title: "OPEN ITEMS PACKAGING SOLUTIONS",
      icon: <PrecisionManufacturing fontSize="large" />,
    },
    {
      title: "CUSTOMIZED INJECTION MOULDING SERVICES (TURNKEY)",
      icon: <Inventory fontSize="large" />,
    },
    {
      title: "CUSTOM MOULDED PRODUCTS",
      icon: <MoveToInbox fontSize="large" />,
    },
    {
      title: "LOGISTICS",
      icon: <LocalShipping fontSize="large" />,
    },
  ];

  return (
    <Box sx={{ py: 5, px: 2, textAlign: "center", backgroundColor: "white" }}>
      <p
        className="font-[800] text-center"
        style={{
          color: "#000",
          fontSize: "60px",
          fontFamily: "sans-serif",
          textTransform: "uppercase",
        }} // Green text color
      >
        Industries<span className="text-[#184F75]"> We </span>Serve
      </p>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "#fff",
                color: "#184F75",
                borderRadius: "16px",
                minHeight: "14rem",
                "&:hover": {
                  backgroundColor: "#184F75", // Changes background to green on hover
                  color: "#fff",
                },
              }}
            >
              {service.icon}
              <Typography variant="body1" sx={{ mt: 2 }}>
                {service.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Layout5;

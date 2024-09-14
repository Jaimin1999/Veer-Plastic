import React from "react";
import { Typography, Grid, Card, Button, CardContent } from "@mui/material";

function Layout3() {
  const items = [
    { title: "HDPE Bottles" },
    { title: "HDPE Containers" },
    { title: "Pesticides Bottles" },
    { title: "Detergent Bottles" },
    { title: "Nutraceuticals Jars" },
    { title: "Pumps" },
    { title: "Fliptop Caps" },
    { title: "Tablet Jars/Bottles" },
    { title: "Shampoo Bottles" },
    { title: "Laboratory Reagent Bottles" },
  ];

  return (
    <div className=" bg-[#444444]">
      <p
        className="font-[800] text-center"
        style={{
          color: "#fff",
          fontSize: "60px",
          fontFamily: "sans-serif",
        }} // Green text color
      >
        OUR PRODUCTS
      </p>
      <p
        className="text-center"
        style={{ color: "#ffffff", fontSize: "16px", fontFamily: "sans-serif" }} // White subtext
      >
        WE OFFER AN ELABORATE SELECTION OF HIGH QUALITY STANDARDISED PRODUCTS.
      </p>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "1rem", padding: "1rem" }}
      >
        {items.map((item, index) => {
          return (
            <Grid item xs={12} md={4} lg={2.2}>
              <Card sx={{ backgroundColor: "#646464", borderRadius: "20px" }}>
                <CardContent className="flex flex-col items-center">
                  <img
                    src="images/sampleBottle.png"
                    height={100}
                    width={50}
                    alt="sample bottle img"
                  />
                  <p className="text-white font-sans text-[15px] font-bold mb-2">
                    {item?.title}
                  </p>
                  <Button
                    sx={{
                      borderRadius: "15px",
                      border: "1px solid white",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#fff",
                        border: "1px solid white",
                        color: "#646464",
                      },
                    }}
                    size="small"
                    className=""
                    variant="outlined"
                    color="error"
                  >
                    View
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Layout3;

import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const SustainableCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#184F75",
        color: "white",
        textAlign: "center",
        borderRadius: "16px",
        maxWidth: 300,
        padding: "20px",
        transition: "background-color 0.3s, transform 0.3s",
        "&:hover": {
          backgroundColor: "#85C447", // Changes background to green on hover
          transform: "scale(1.05)", // Slightly scales the card
        },
        cursor: "pointer",
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <LightbulbIcon
            sx={{
              fontSize: 50,
              color: "inherit",
            }}
          />
        </Box>
        <Typography variant="h5" gutterBottom>
          SUSTAINABLE INNOVATIONS
        </Typography>
        <Typography variant="body1">
          LONG TERM ENVIRONMENTAL, SOCIAL AND ECONOMIC BENEFITS.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SustainableCard;

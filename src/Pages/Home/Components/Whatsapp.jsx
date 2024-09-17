import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  const handleClick = () => {
    // window.open(whatsappUrl, "_blank");
    window.open(
      "https://api.whatsapp.com/send?phone=+919913205660&text=hi",
      "_blank"
    );
  };

  return (
    <Fab
      color="primary"
      aria-label="whatsapp"
      onClick={handleClick}
      sx={{
        position: "fixed",
        bottom: 16,
        left: 16,
        backgroundColor: "#25D366", // WhatsApp green
        "&:hover": {
          backgroundColor: "#20b858",
        },
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppButton;

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function AboutUs() {
  const items = [
    "Auto-Deflashing Equipment",
    "Multi-Point Parison Programmers",
    "Online Pressurised Leak Testers",
    "View Strip",
  ];

  const data = [
    {
      process: "Extrusion Blow Moulding",
      features: [
        "Auto-Deflashing Equipment",
        "Multi-Point Parison Programmers",
        "Online Pressurised Leak Testers",
        "View Strip",
      ],
    },
    {
      process: "Injection Moulding",
      features: ["Split Moulds", "Hot Runner Moulds", "2k (Insert) Moulding"],
    },
    {
      process: "Injection Stretch Blow Moulding",
      features: [
        "Calibrated Neck Finish",
        "Ability to Process High Temperature Plastics",
      ],
    },
    {
      process: "In-Mould Labelled EBM Containers",
      features: ["For Decorating 2-sided EBM Containers"],
    },
    {
      process: "Decoration & Assembly",
      features: [
        "Pad (Tampo) Printing",
        "Screen Printing",
        "Blister Sealing",
        "Shrink Sleeving",
      ],
    },
    {
      process: "Main Plastics Used",
      features: [
        "Polypropylene (PP)",
        "High Density Polyethylene (HDPE)",
        "Low Density Polyethylene (LDPE)",
        "Polycarbonate (PC)",
        "Polyether Sulphone (PES)",
        "TPE (Thermo Plastics Elastomers)",
      ],
    },
  ];

  return (
    <div className="bg-white ">
      {" "}
      <p
        className="font-[800] text-center"
        style={{
          color: "#184F75",
          backgorundColor: "#85C447",
          fontSize: "60px",
          fontFamily: "sans-serif",
        }} // Green text color
      >
        ABOUT <span className="text-[#85C447]">US</span>
      </p>
      <div className="p-10">
        <div>
          <p className="text-[#5a5a5a] font-sans text-[30px] font-extrabold leading-[1.4rem]">
            Veer Plastic at a Glance:
          </p>
          <p className="mt-5 md:w-3/5 w-full md:text-[20px] text-[14px] text-[#000] font-sans">
            Veer Plastic is committed to providing high-quality plastic
            solutions with a focus on durability and sustainability. We aim to
            meet diverse industry needs with innovative and reliable products.
          </p>
        </div>
        <div className="my-10">
          <p
            className="font-[800]"
            style={{
              color: "#184F75",
              backgorundColor: "#85C447",
              fontSize: "60px",
              fontFamily: "sans-serif",
            }} // Green text color
          >
            TEAM
          </p>
          <Card
            sx={{
              backgroundColor: "#184F75",
              padding: "2rem",
              margin: "2rem 0",
            }}
          >
            <div className="flex md:flex-row flex-col justify-center items-center">
              <div className="md:w-1/5 w-3/5">
                <img
                  className="rounded-[110px]"
                  src="https://img.freepik.com/premium-photo/animated-profile-pic-curious-woman-knowledge-manager-embodying-spirit-inquiry_1283595-28595.jpg?w=740"
                  height={180}
                  width={180}
                  alt="sample boss img"
                />
              </div>
              <div className="md:w-4/5 w-full">
                {" "}
                <p className="text-[20px] text-[#fff] font-sans md:mt-0 mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </Card>

          <Card
            sx={{
              backgroundColor: "#184F75 ",
              padding: "2rem",
              margin: "2rem 0",
            }}
          >
            <div className="flex md:flex-row flex-col justify-center items-center">
              <div className="md:w-1/5 w-3/5">
                <img
                  className="rounded-[110px]"
                  src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-309.jpg?semt=ais_hybrid"
                  height={180}
                  width={180}
                  alt="sample boss img"
                />
              </div>
              <div className="md:w-4/5 w-full">
                {" "}
                <p className="text-[20px] text-[#fff] font-sans md:mt-0 mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="my-10">
          <p className="font-[800] text-[#85c447] text-[40px] font-sans">
            TECHNOLOGIES
          </p>
          <p className="mt-5 md:w-3/5 w-full md:text-[20px] text-[14px] text-[#000] font-sans">
            Veer Plastic is committed to providing high-quality plastic
            solutions with a focus on durability and sustainability. We aim to
            meet diverse industry needs with innovative and reliable products.
          </p>
          <div className="mt-5">
            <Grid container spacing={2}>
              {data.map((item, index) => {
                return (
                  <Grid item xs={12} md={6}>
                    <div
                      className="p-2"
                      style={{
                        border: "2px solid #5a5a5a",
                      }}
                    >
                      <p className="font-[800] text-[#000] text-[30px] font-sans">
                        {item.process}
                      </p>

                      <List>
                        {item.features.map((item, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <CheckCircleIcon style={{ color: "#85c447" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

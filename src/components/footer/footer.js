import React from "react";
import Typography from "@mui/material/Typography";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="image-container">
      <div className="over-lay">
      <Typography style={{ padding:"18%" ,color:"white"}}  variant="h2" component="div" gutterBottom>
          Vardaan
            <div style={{marginRight: "46px"}} className="cheese">
              <div className="burger"></div>
            </div>
          </Typography>
      </div>
    </div>
  );
};

export default AboutUs;









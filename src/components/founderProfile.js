import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./know.scss";
import { CardActionArea } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Image from "../assets/lib.jpg";

export default function ActionAreaCard() {
  let cardData = [
    { key: 1, title: "Rohan", subheading: "Founder, Deal with all the medical and railway sectors" },
    { key: 2, title: "Saurav", subheading: "Founder, Deal with all the Automobiles and other sectors " },
  ];

  return (
    <Grid container justify="center" className="section-background-color" id="aboutMe">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height"></Grid>

      {cardData.map((data, index) => {
        return (
          <Grid item lg={3} md={3} sm={12} xs={12} className="card-spacing" key={data.key}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={Image} alt="green iguana" />
              <Card className={index % 2 ? "card-color-two" : "card-color"} elevation={10}>
                <CardContent className="card-content">
                  {/* <span className="icon-size">
                      <Icon icon={data.icon} className="my-services-icon-style" />
                    </span> */}
                  <p style={{ overflow: "clip" }} className="heading-color card-heading">
                    {data.title}
                  </p>
                  <div className="skill-heading-container">
                    <p className="heading-color">{data.subheading}</p>
                  </div>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        );
      })}
    </Grid>
  );
}

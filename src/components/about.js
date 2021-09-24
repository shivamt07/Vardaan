import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "../assets/lib.jpg";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const styles = {
  media: {
    height: 0,
    paddingTop: "47%", // 16:9
  },
  card: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 50,
    left: 50,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(4 4 4 / 54%)",
    zIndex: 2,
    // color:"white",
    width: "92%",
    height: "80%",
    //  backgroundColor: 'white'
  },
};

export default function ImgMediaCard() {
  return (
    <div style={{ backgroundImage: "../assets/bg.jpg" }}>
      <Card style={styles.card}>
        <CardMedia image={Image} style={styles.media} />
        <div style={styles.overlay} elevation={7}>
          <Typography style={{ marginLeft: "320px", marginTop: "100px", color: "aliceblue" }} sx={{ letterSpacing: 10, m: 1, fontStyle: "italic" }} variant="h2" component="div" gutterBottom>
            We are Vardaan
            <div style={{ marginRight: "350px", marginTop: "10px" }} className="cheese">
              <div className="burger"></div>
            </div>
          </Typography>
          {/* <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack> */}
        </div>
      </Card>
    </div>
  );
}

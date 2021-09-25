import React from "react";
import "./know.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import { Icon } from "@iconify/react";
// import languageJavascript from "@iconify-icons/mdi/language-javascript";
// import wheelchairA    {/* })}ccessibility from "@iconify-icons/mdi/wheelchair-accessibility";
// // import cogsIcon from "@iconify-icons/mdi/cogs";

let cardData = [
  { key: 1, title: "Automobiles", subheading: "I have a good knowledge of JavaScript and have done many projects on javascript related frameworks and libraries." },
  { key: 2, title: "CCTV", subheading: "I worked on a couple of projects to make Accessibility for the Differently abled people and having good knowledge of WCAG 2.0 and WCAG 3.0." },
  { key: 3, title: "Railway", subheading: "I have good knowledge of writing unit tests, functional tests, and integration testing. Using mocha chai and Cypress.io" },
  { key: 4, title: "Medical", subheading: "I have good knowledge of writing unit tests, functional tests, and integration testing. Using mocha chai and Cypress.io" },
];
function MyServices() {
  return (
    <Grid container justify="center" className="section-background-color" style={{marginBottom: "50px"}}  id="service">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height">

      </Grid>

      {cardData.map((data, index) => {
        return (
          <Grid item lg={3} md={3} sm={12} xs={12} className="card-spacing" key={data.key}>
            <Card style={{backgroundColor: "aliceblue", overflow:"hidden"}} className={index % 2 ? "card-color-two" : "card-color"} elevation={10}>
              <CardContent className="card-content" style={{backgroundColor: "aliceblue", overflow:"clip"}} >
                {/* <span className="icon-size">
                  <Icon icon={data.icon} className="my-services-icon-style" />
                </span> */}
                <p style={{backgroundColor: "aliceblue", overflow:"clip"}} className="heading-color card-heading">{data.title}</p>
                <div className="skill-heading-container">
                  <p className="heading-color">{data.subheading}</p>
                </div>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MyServices;
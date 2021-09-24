import React from "react";
import "./know.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import { Icon } from "@iconify/react";
// import languageJavascript from "@iconify-icons/mdi/language-javascript";
// import wheelchairAccessibility from "@iconify-icons/mdi/wheelchair-accessibility";
// // import cogsIcon from "@iconify-icons/mdi/cogs";


function MyServices() {

        return (
        //   <Grid item sm={12} xs={12} className="card-spacing">
            <Card style={{backgroundColor: "cadetblue", overflow:"hidden"}} elevation={10}>
              <CardContent className="card-content" style={{backgroundColor: "#38A3A5", overflow:"clip", height:"310px"}} >
              <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
   <TextField id="filled-basic" label="Filled" variant="filled" />
   <TextField id="filled-basic" label="Filled" variant="filled" />
   <TextField id="filled-basic" label="Filled" variant="filled" />
   <TextField id="filled-basic" label="Filled" variant="filled" />
   <TextField id="filled-basic" label="Filled" variant="filled" />
   <TextField id="filled-basic" label="Filled" variant="filled" />
   <TextField id="filled-basic" label="Filled" variant="filled" />
   <TextField id="filled-basic" label="Filled" variant="filled" />
   <TextField id="filled-basic" label="Filled" variant="filled" />
   <TextField id="filled-basic" label="Filled" variant="filled" />
   <TextField id="filled-basic" label="Filled" variant="filled" />
    </Box>
              </CardContent>
            </Card>
        //   </Grid>
        )
        }
export default MyServices;
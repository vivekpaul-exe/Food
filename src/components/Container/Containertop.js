import React from "react"

import {Container , Typography, Box , Grid} from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';
import image from "./top.jpg"
import dotenv from "dotenv"
dotenv.config();
export default function  Containertop() {
  
  // const apiKey = process.env.API_KEY;

  // const url =`https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`;
  const classes = useStyles();

  return (
    <Box className={classes.box1}>
  {/*  <Box className={classes.head}>
    <svg className ={classes.svg1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path fill="#FF0066" d="M50.6,-70.4C65,-59.2,75.6,-43.6,81.5,-26.3C87.4,-9,88.5,10.1,82.8,26.6C77,43.2,64.4,57.2,49.4,68.9C34.5,80.7,17.2,90.2,-0.9,91.4C-19,92.6,-38,85.5,-52.7,73.7C-67.5,61.9,-78,45.3,-83.3,27.4C-88.5,9.6,-88.6,-9.6,-82.7,-26.6C-76.8,-43.5,-64.9,-58.2,-50.1,-69.3C-35.3,-80.4,-17.7,-87.9,0.2,-88.2C18.1,-88.6,36.2,-81.7,50.6,-70.4Z" transform="translate(100 100)" />
</svg>

    </Box> */}
      <Grid container spacing ={2}>
        <Grid className={classes.griditem} wrap="nowrap" item xs={12} sm={6}>
       
          <Container>
               <Box className={classes.boxitem}>
          <Typography className={classes.text}  >
            <Box  className={classes.boxfont}>One should
              </Box>    </Typography>
            <Typography className={classes.toptext}  >
            <Box  className={classes.boxfont}> eat
              </Box>   </Typography>
              <Typography className={classes.text} >
                <Box  className={classes.boxfont}> to
                </Box>    
              </Typography>
            <Typography className={classes.toptext}  >
            <Box  className={classes.boxfont}> live
              </Box>   
              </Typography>
              <Typography className={classes.text} >
              <Box  className={classes.boxfont}> , not 
              </Box>    </Typography>
            
             <Typography className={classes.toptext}  >
             <Box  className={classes.boxfont} >live
              </Box>    </Typography>  
              <Typography className={classes.text} >
                <Box  className={classes.boxfont}> to 
              </Box>   </Typography>
             <Typography className={classes.toptext}  >
             <Box  className={classes.boxfont}> eat
              </Box>   </Typography>
              <Typography className={classes.text} >.</Typography>
              <Box className ={classes.secfont} fontSize={25}  >Find Everthing you want About different foods and their Nutrients.</Box>
          
            </Box>
          
          
          </Container>
            
           
            
         
        </Grid>
        <Grid className={classes.griditem} item xs={12} sm={6}>
          <Box className={classes.boxitem1}>
            <img className = {classes.img} src={image} alt ="food "/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}


const useStyles = makeStyles((theme) => ({
  box1:{
    marginTop:"1vh",
  },
  text :{
    fontSize:"3.75rem",
    lineHeight: "1.2",
    color: "#242424",
    marginLeft :10,
    marginRight: 10,
    fontFamily : 'Merriweather Sans',
    display: "inline-flex",
  },
  boxfont :{
    fontWeight : 900,
    display: 'contents',
  },
  toptext :{
    fontSize:"3.75rem",
    lineHeight: "1.2",
    marginLeft :10,
    marginRight: 10,
    display: "inline-flex",
    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  secfont :{
    marginTop:10,
    fontFamily :'Signika Negative',
    fontWeight: "700",
  },
  head: {
    height:500,
  },
  svg1 :{
    height :"inherit",
    float: "right",
  },
  griditem:{

  },
  boxitem :{
    height :"min-content",
   
    marginTop: "5vh",
  },
  boxitem1 :{
    height :550,
   
    fontWeight: 800,
  },
  img: {
    width:662,
    border: "solid 1px",
    borderColor: "Black",
    borderRadius : 25,
    '&:hover': {
      elevation :5,
   },
    
  },
}));

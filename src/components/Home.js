// import 'dotenv/config'

import React , {useState  , useEffect} from "react";
import Content from "./Content"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Row, Col, Div } from "atomize";
import {REACT_APP_SOME_API_KEY} from "../index"
import {makeStyles} from "@material-ui/core/styles";
import Containertop from "./Container/Containertop"
import ContainerR from "./Container/ContainerR"
import ContainerS from "./Container/ContainerS"

const useStyles = makeStyles((theme) => ({
  containerBox   :{
    // flexDirection:"row",
  },
}));
export default function Home() {
  const classes =  useStyles();

  const [title ,setTitle] = useState('A Title');
  const [summary ,setSummary] =  useState('A summary');
  const [image , setImage] = useState('https://www.qsrmagazine.com/sites/default/files/styles/slideshow_image/public/slideshow-images/slides/mcdonaldsglobal.jpg?itok=X8uup3iY')
  const [vegeterian , setVegeterian] = useState('false');
  const [veryHealthy , setVeryHealthy] = useState('false')
  const [showLoading , setShowLoading] = useState(true);
  const [id , setId] = useState('');
 
 
  useEffect(()=>{
    async function getRecipe() {
      
      try {
        let response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_SOME_API_KEY}`)
         let data = await response.json();
        
        setTitle(data.recipes[0].title);
        setImage(data.recipes[0].image)
        setVegeterian(data.recipes[0].vegeterian)
        setVeryHealthy(data.recipes[0].veryHealthy)
        setSummary(data.recipes[0].summary)
        setId(data.recipes[0].id)
        setShowLoading(false);
      } catch (error) {
        console.log(error)
        
      }

    }
    getRecipe()
  


  },[]);

    
  return (
    <div className ={classes.containerBox}>
      <Containertop />
      <ContainerR />
      <ContainerS />
      <Row>

      <Col size={{ xs: 12, lg: 3 }}>
            <Div p="4px" >
            {showLoading ? <CircularProgress color="primary" /> : null}
             <Content id ={id} image={image}  title= {title}  summary ={summary}   vegeterian ={vegeterian} Healthy={veryHealthy}/>
            </Div>
          </Col>
          <Col  size={{ xs: 12, lg: 3 }}>
            <Div p="4px" >
            {showLoading ? <CircularProgress color="primary" /> : null}
          <Content id ={id} image={image}  title= {title} summary ={summary} vegeterian ={vegeterian} Healthy={veryHealthy}/>
            </Div>
          </Col>
          <Col size={{ xs: 12, lg: 3 }}>
            <Div p="4px" >
            {showLoading ? <CircularProgress color="primary" /> : null}
              <Content id ={id} image={image}  title= {title} summary ={summary} vegeterian ={vegeterian} Healthy={veryHealthy}/>
            </Div>
          </Col>
          <Col size={{ xs: 12, lg: 3 }}>
            <Div p="4px">

            {showLoading ? <CircularProgress color="primary" /> : null}
            <Content id ={id} image={image}  title= {title} summary ={summary} vegeterian ={vegeterian} Healthy={veryHealthy}/>
            </Div>
          </Col>
        </Row>



    </div>

  )
}

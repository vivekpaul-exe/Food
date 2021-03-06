import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Icon } from "atomize";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import RecipeModal from './Pages/RecipeModal';
import {Menu  , MenuItem } from "@material-ui/core"
import InfoModal from './Pages/infoPage';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
       fontFamily:'Signika Negative',
  },
    title:{
      fontFamily:'Signika Negative',
      fontSize: "1.1rem",
    },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


/*
    async REcipe function
      DATA POINT
  */

//  var recipe = getRecipe().then((recipe) => console.log(recipe));


export default function Content(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card className={classes.root}>

      <CardHeader
        className={classes.title}
        action={
          <SimpleMenu id={props.id}/>
        }
        title={props.title}

      >
      
      </CardHeader>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Icon name="Heart" size="24px" />
 
        </IconButton>
        <IconButton aria-label="share">

        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <Icon name="DownArrowCircle" size="24px" />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         
          <Typography paragraph>
             <Typography dangerouslySetInnerHTML={{__html: props.summary}} />
          </Typography>
          <Typography paragraph>

          </Typography>
          <Typography paragraph>

          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </Collapse>
    </Card>

  );
}

function SimpleMenu(props) {
  const [anchorEl , setAnchorEl] = React.useState(null);


  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);

  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <Icon name="Options" size="20px" />

      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><RecipeModal id= {props.id}/></MenuItem>
        <MenuItem onClick={handleClose}><InfoModal id ={props.id}/></MenuItem>
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  )
}

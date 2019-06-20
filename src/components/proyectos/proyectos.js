import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import proyectos from '../../data/proyectos'
//import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

//import {Delete} from 'material-ui-icons'
//import {ICONS} from '../../data/icons'
import Icon from './icon';
//import { posts } from "./dummy-posts";´
//https://reactgo.com/material-ui-react-tutorial/
//alert(JSON.stringify(proyectos))
const useStyles = makeStyles({
  card: {
    maxWidth: 350,
  },
 // toolbarMargin: theme.mixins.toolbar
});
//const onClick = content => () => {
//  setOpen(false);
//  setContent(content);
//};
const style={   Paper:{padding:1,marginTop:1,marginBottom:1}
}
const style2={   Paper:{padding:1,marginTop:1,marginBottom:10,height:80}
}
const styleStatus={   Paper:{padding:1,marginTop:1,marginBottom:10,height:80,color:'red'}
}
function Proyectos(props) {
  //alert(JSON.stringify(props.criteria))

  const goDown=(e)=>{
    //alert("goDown")
    props.goNivel("down");
  } 
  const goUp=(e)=>{
    //alert("goDown")
    props.goNivel("up");
  } 
  const classes = useStyles();
  var proyectonivel=[]

  if (props.criteria.nivel==2){   
    proyectos.proyectos.map(p=>{     
      proyectonivel.push(p)
    })

  }
  
  if (props.criteria.nivel==1){   
    proyectos.proyectos[0].nivel1.map(p=>{     
      proyectonivel.push(p)
    })

  }
  
  if (props.criteria.nivel==0){   
    proyectos.proyectos[0].nivel1[0].nivel0.map(p=>{     
      proyectonivel.push(p)
    })

  }
  return (
    <div style={{ marginTop: 10, padding: 30 } }>
    
      <Grid container spacing={5} justify="center">
      
        {proyectonivel.map((p,index) => {
        //if (p.nivel==2){
         // console.log(p)
          return (    
           
            <Grid item key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Proyecto Inmobiliario"
                  height="140"
                  image={'https://static.wixstatic.com/media/b2fe93_6e6425b8c8194513b2be40fdd9483b26~mv2_d_2500_1607_s_2.jpg/v1/crop/x_26,y_0,w_2441,h_1607/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_6e6425b8c8194513b2be40fdd9483b26~mv2_d_2500_1607_s_2.webp'}
                  title="Proyecto Inmobiliario"
                />
                <CardContent >
                <Paper style={style2.Paper}>

                  <Typography gutterBottom variant="h6" component="h2">
                    {p.proyectoname}
                  </Typography>
                </Paper>
                <div style={{color:p.colorstatus}}>
                  <Typography gutterBottom variant="h6" component="h2" >
                    {p.status+' '+p.cantstatus}
                  </Typography>
                  </div>
                  <Paper style={style.Paper}>
                 <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Precios Sumarizados:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {p.precio.toLocaleString('en')     }</Typography>
                  </td></tr></table>
                  </Paper> 
                  <Paper style={style.Paper}>
                 <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Area:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {p.area.toLocaleString('en')     }</Typography>
                  </td></tr></table>
                  </Paper> 
                
                  <Paper style={style.Paper}>
                 <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Precio/Mt2:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {p.precio_promedio.toLocaleString('en')     }</Typography>
                  </td></tr></table>
                  </Paper> 
                
                  <Paper style={style.Paper}>
                 <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Mt2:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {p.mt2.toLocaleString('en')     }</Typography>
                  </td></tr></table>
                  </Paper> 
                
                 
                  <br/>
                  <Paper style={style.Paper}>
                 <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Cobrado:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {p.cobrado.toLocaleString('en')     }</Typography>
                  </td></tr></table>
                  </Paper> 

                  <Paper style={style.Paper}>
                 <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Vencido:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {p.vencido.toLocaleString('en')     }</Typography>
                  </td></tr></table>
                  </Paper> 


                  <Paper style={style.Paper}>
                 <table width="100%">
                   <tr><td>
                      <Typography  variant="subtitle2">Por Vencer:</Typography>
                  </td><td align="right">
                      <Typography  variant="subtitle2"> {p.porvencer.toLocaleString('en')     }</Typography>
                  </td></tr></table>
                  </Paper> 


                
                </CardContent>
              </CardActionArea>
              <CardActions>
            
          
              <IconButton
                  color="primary"
                 // className={classes.button}
                  aria-label="Upload picture"
                 component="span"
                 onClick={()=>goDown()}
                >
                                  <Icon icon={'down'} />
                    
                </IconButton>
                <IconButton
                  color="primary"
                 // className={classes.button}
                  aria-label="Upload picture"
                 component="span"
                 onClick={()=>goUp()}
                >
                  
                                  <Icon icon={'up'} />
                    
                </IconButton>
                

               
              </CardActions>
            </Card>
          </Grid>
          )
        }
        )
      }

      </Grid>
    </div>
  );
}



export default Proyectos;

/*
const proys=[

  {
    "nivel": 2,
    "proyectoid": 2,
    "proyectoname": "ALTAMIRA YCUA SATI",
    "status": "TOTAL",
    "cantstatus": 103,
    "precio": 13816352.09,
    "area": 9300.59,
    "precio_promedio": 134139.34,
    "mt2": 1485.54,
    "COBRADO": 2519026.05,
    "PORCOBRAR": 11297326.04,
    "VENCIDO": 117320.77,
    "POR_VENCER": 2912477.04,
    "image":"https://static.wixstatic.com/media/b2fe93_e957b2661fa64c9cbd38682f76370147~mv2_d_3200_2950_s_4_2.jpg/v1/crop/x_0,y_722,w_3200,h_2107/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_e957b2661fa64c9cbd38682f76370147~mv2_d_3200_2950_s_4_2.webp",

  },
  {
    "nivel": 2,
    "proyectoid": 4,
    "proyectoname": "ALTAMIRA YCUA SATI (COCHERAS)",
    "status": "TOTAL",
    "cantstatus": 157,
    "precio": 2152809,
    "area": 2075,
    "precio_promedio": 13712.16,
    "mt2": 1037.5,
    "COBRADO": 245176.04,
    "PORCOBRAR": 1907632.96,
    "VENCIDO": 7457.1,
    "POR_VENCER": 368076.96,
    "image":"https://static.wixstatic.com/media/b2fe93_6e6425b8c8194513b2be40fdd9483b26~mv2_d_2500_1607_s_2.jpg/v1/crop/x_26,y_0,w_2441,h_1607/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_6e6425b8c8194513b2be40fdd9483b26~mv2_d_2500_1607_s_2.webp",
  
  },
  {
    "nivel": 2,
    "proyectoid": 5,
    "proyectoname": "ALTAMIRA YCUA SATI (ESTACIONAMIENTO DE MOTOS)",
    "status": "TOTAL",
    "cantstatus": 15,
    "precio": 78500,
    "area": 73.5,
    "precio_promedio": 5233.33,
    "mt2": 1068.03,
    "COBRADO": 2164,
    "PORCOBRAR": 76336,
    "VENCIDO": 66,
    "POR_VENCER": 2336,
    "image":"https://static.wixstatic.com/media/b2fe93_7c954c2f3e004667b34da9de8b01b09a~mv2.jpg/v1/crop/x_0,y_40,w_1247,h_821/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_7c954c2f3e004667b34da9de8b01b09a~mv2.webp",
  
  },
  {
    "nivel": 2,
    "proyectoid": 6,
    "proyectoname": "ALTAMIRA YCUA SATI (BAULERAS)",
    "status": "TOTAL",
    "cantstatus": 12,
    "precio": 43839,
    "area": 33.6,
    "precio_promedio": 3653.25,
    "mt2": 1304.73,
    "COBRADO": 16090.84,
    "PORCOBRAR": 27748.16,
    "VENCIDO": 3853.16,
    "POR_VENCER": 24748.16,
    "image":"https://static.wixstatic.com/media/b2fe93_b62af64796e24159bdc175093992b1ea~mv2.jpg/v1/crop/x_0,y_40,w_1247,h_821/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_7c954c2f3e004667b34da9de8b01b09a~mv2.webp",
    
  }
]
*/
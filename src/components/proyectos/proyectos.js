import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
//import proyectosjson from '../../data/proyectos'
//import { posts } from "./dummy-posts";´
//https://reactgo.com/material-ui-react-tutorial/

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
  },
});
//const onClick = content => () => {
//  setOpen(false);
//  setContent(content);
//};
const style={   Paper:{padding:5,marginTop:5,marginBottom:5}
}
function Proyectos(props) {
  const goProyecto=(e)=>{
    //alert()
    props.goComponent();
  } 
  const classes = useStyles();
  //var nivel2=
  return (
    <div style={{ marginTop: 10, padding: 30 } }>
      <Grid container spacing={5} justify="center">
      
        {proyectos.map((p,index) => {
        if (p.nivel==2){
          console.log(p)
          return (    
            <Grid item key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Proyecto Inmobiliario"
                  height="140"
                  image={'https://static.wixstatic.com/media/b2fe93_e957b2661fa64c9cbd38682f76370147~mv2_d_3200_2950_s_4_2.jpg/v1/crop/x_0,y_722,w_3200,h_2107/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_e957b2661fa64c9cbd38682f76370147~mv2_d_3200_2950_s_4_2.webp'}
                  title="Proyecto Inmobiliario"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">
                    {p.proyectoname}
                  </Typography>

                  <Typography gutterBottom variant="h6" component="h2">
                    {'Total: '+p.cantstatus}
                  </Typography>
                  <Paper style={style.Paper}>

                  <div style={{ display: "flex" }}>
                    <Typography variant="subtitle2" color="grey" noWrap>
                        Precio/Mt2:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.precio_promedio.toLocaleString('en')     }
                     </Typography>
                     </div>
                     </Paper>
                     <Paper style={style.Paper}>

                     <div style={{ display: "flex" }}>

                     <Typography variant="subtitle2" color="grey" noWrap>
                     Mts2:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.mt2.toLocaleString('en')     }
                     </Typography>
                </div>
                </Paper>
                <Paper style={style.Paper}>

                <div style={{ display: "flex" }}>
                    <Typography variant="subtitle2" color="grey" noWrap>
                        Ventas:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.precio.toLocaleString('en')     }
                     </Typography>
                     </div>
                      </Paper>
                      <Paper style={style.Paper}>

                     <div style={{ display: "flex" }}>

                     <Typography variant="subtitle2" color="grey" noWrap>
                     Cobrado:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.cobrado.toLocaleString('en')    }
                     </Typography>
                </div>
                 </Paper>
                 <Paper style={style.Paper}>

                <div style={{ display: "flex" }}>
                    <Typography variant="subtitle2" color="grey" noWrap>
                        Vencido:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.vencido.toLocaleString('en')     }
                     </Typography>
                     </div>
                 </Paper>
                 <Paper style={style.Paper}>

                     <div style={{ display: "flex" }}>

                     <Typography variant="subtitle2" color="grey" noWrap>
                     xVencer:
                      </Typography>
                      
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.porvencer.toLocaleString('en')     }
                     </Typography>
                </div>    
                </Paper>
                
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary"
                onClick={()=>goProyecto()}
                >
                  Detalles
                </Button>
               
              </CardActions>
            </Card>
          </Grid>
          )
        }}
        )
      }

      </Grid>
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    </div>
  );
}
const proyectos=
[
  {
    "nivel": 0,
    "proyectoid": 2,
    "proyectoname": "ALTAMIRA YCUA SATI",
    "status": "Asignada",
    "cantstatus": 7,
    "precio": 964923,
    "area": 663.96,
    "precio_promedio": 137846.14,
    "mt2": 1453.28,
    "cobrado": 0,
    "porcobrar": 964923,
    "vencido": 0,
    "porvencer": 0
  },
  {
    "nivel": 0,
    "proyectoid": 2,
    "proyectoname": "ALTAMIRA YCUA SATI",
    "status": "Formalizada",
    "cantstatus": 44,
    "precio": 5420499.09,
    "area": 3696.43,
    "precio_promedio": 123193.16,
    "mt2": 1466.41,
    "cobrado": 2530459.01,
    "porcobrar": 2890040.08,
    "vencido": 105887.81,
    "porvencer": 2901044.08
  },
  {
    "nivel": 0,
    "proyectoid": 2,
    "proyectoname": "ALTAMIRA YCUA SATI",
    "status": "Libre",
    "cantstatus": 50,
    "precio": 7176512,
    "area": 4765.7,
    "precio_promedio": 143530.24,
    "mt2": 1505.87,
    "cobrado": 0,
    "porcobrar": 7176512,
    "vencido": 0,
    "porvencer": 0
  },
  {
    "nivel": 0,
    "proyectoid": 2,
    "proyectoname": "ALTAMIRA YCUA SATI",
    "status": "Reservada",
    "cantstatus": 2,
    "precio": 254418,
    "area": 174.5,
    "precio_promedio": 127209,
    "mt2": 1457.98,
    "cobrado": 4594.04,
    "porcobrar": 249823.96,
    "vencido": -4594.04,
    "porvencer": -4594.04
  },
  {
    "nivel": 1,
    "proyectoid": 2,
    "proyectoname": "ALTAMIRA YCUA SATI",
    "status": "LIBRES",
    "cantstatus": 50,
    "precio": 7176512,
    "area": 4765.7,
    "precio_promedio": 143530.24,
    "mt2": 1505.87,
    "cobrado": 0,
    "porcobrar": 7176512,
    "vencido": 0,
    "porvencer": 0
  },
  {
    "nivel": 1,
    "proyectoid": 2,
    "proyectoname": "ALTAMIRA YCUA SATI",
    "status": "VENDIDAS",
    "cantstatus": 53,
    "precio": 6639840.09,
    "area": 4534.89,
    "precio_promedio": 125280,
    "mt2": 1464.17,
    "cobrado": 2535053.05,
    "porcobrar": 4104787.04,
    "vencido": 101293.77,
    "porvencer": 2896450.04
  },
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
    "cobrado": 2535053.05,
    "porcobrar": 11281299.04,
    "vencido": 101293.77,
    "porvencer": 2896450.04
  },
  {
    "nivel": 0,
    "proyectoid": 4,
    "proyectoname": "ALTAMIRA YCUA SATI (COCHERAS)",
    "status": "Asignada",
    "cantstatus": 11,
    "precio": 141403,
    "area": 137.5,
    "precio_promedio": 12854.82,
    "mt2": 1028.39,
    "cobrado": 0,
    "porcobrar": 141403,
    "vencido": 13028,
    "porvencer": 76903
  },
  {
    "nivel": 0,
    "proyectoid": 4,
    "proyectoname": "ALTAMIRA YCUA SATI (COCHERAS)",
    "status": "Formalizada",
    "cantstatus": 38,
    "precio": 536350,
    "area": 587.5,
    "precio_promedio": 14114.47,
    "mt2": 912.94,
    "cobrado": 236606.04,
    "porcobrar": 299743.96,
    "vencido": 2999.1,
    "porvencer": 299743.96
  },
  {
    "nivel": 0,
    "proyectoid": 4,
    "proyectoname": "ALTAMIRA YCUA SATI (COCHERAS)",
    "status": "Libre",
    "cantstatus": 107,
    "precio": 1462028,
    "area": 1337.5,
    "precio_promedio": 13663.81,
    "mt2": 1093.11,
    "cobrado": 0,
    "porcobrar": 1462028,
    "vencido": 0,
    "porvencer": 0
  },
  {
    "nivel": 0,
    "proyectoid": 4,
    "proyectoname": "ALTAMIRA YCUA SATI (COCHERAS)",
    "status": "Reservada",
    "cantstatus": 1,
    "precio": 13028,
    "area": 12.5,
    "precio_promedio": 13028,
    "mt2": 1042.24,
    "cobrado": 8570,
    "porcobrar": 4458,
    "vencido": -8570,
    "porvencer": -8570
  },
  {
    "nivel": 1,
    "proyectoid": 4,
    "proyectoname": "ALTAMIRA YCUA SATI (COCHERAS)",
    "status": "LIBRES",
    "cantstatus": 107,
    "precio": 1462028,
    "area": 1337.5,
    "precio_promedio": 13663.81,
    "mt2": 1093.11,
    "cobrado": 0,
    "porcobrar": 1462028,
    "vencido": 0,
    "porvencer": 0
  },
  {
    "nivel": 1,
    "proyectoid": 4,
    "proyectoname": "ALTAMIRA YCUA SATI (COCHERAS)",
    "status": "VENDIDAS",
    "cantstatus": 50,
    "precio": 690781,
    "area": 737.5,
    "precio_promedio": 13815.62,
    "mt2": 936.65,
    "cobrado": 245176.04,
    "porcobrar": 445604.96,
    "vencido": 7457.1,
    "porvencer": 368076.96
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
    "cobrado": 245176.04,
    "porcobrar": 1907632.96,
    "vencido": 7457.1,
    "porvencer": 368076.96
  },
  {
    "nivel": 0,
    "proyectoid": 5,
    "proyectoname": "ALTAMIRA YCUA SATI (ESTACIONAMIENTO DE MOTOS)",
    "status": "Formalizada",
    "cantstatus": 1,
    "precio": 4500,
    "area": 4.9,
    "precio_promedio": 4500,
    "mt2": 918.37,
    "cobrado": 2164,
    "porcobrar": 2336,
    "vencido": 66,
    "porvencer": 2336
  },
  {
    "nivel": 0,
    "proyectoid": 5,
    "proyectoname": "ALTAMIRA YCUA SATI (ESTACIONAMIENTO DE MOTOS)",
    "status": "Libre",
    "cantstatus": 14,
    "precio": 74000,
    "area": 68.6,
    "precio_promedio": 5285.71,
    "mt2": 1078.72,
    "cobrado": 0,
    "porcobrar": 74000,
    "vencido": 0,
    "porvencer": 0
  },
  {
    "nivel": 1,
    "proyectoid": 5,
    "proyectoname": "ALTAMIRA YCUA SATI (ESTACIONAMIENTO DE\r\nMOTOS)",
    "status": "LIBRES",
    "cantstatus": 14,
    "precio": 74000,
    "area": 68.6,
    "precio_promedio": 5285.71,
    "mt2": 1078.72,
    "cobrado": 0,
    "porcobrar": 74000,
    "vencido": 0,
    "porvencer": 0
  },
  {
    "nivel": 1,
    "proyectoid": 5,
    "proyectoname": "ALTAMIRA YCUA SATI (ESTACIONAMIENTO DE MOTOS)",
    "status": "VENDIDAS",
    "cantstatus": 1,
    "precio": 4500,
    "area": 4.9,
    "precio_promedio": 4500,
    "mt2": 918.37,
    "cobrado": 2164,
    "porcobrar": 2336,
    "vencido": 66,
    "porvencer": 2336
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
    "cobrado": 2164,
    "porcobrar": 76336,
    "vencido": 66,
    "porvencer": 2336
  },
  {
    "nivel": 0,
    "proyectoid": 6,
    "proyectoname": "ALTAMIRA YCUA SATI (BAULERAS)",
    "status": "Asignada",
    "cantstatus": 4,
    "precio": 15000,
    "area": 10,
    "precio_promedio": 3750,
    "mt2": 1500,
    "cobrado": 0,
    "porcobrar": 15000,
    "vencido": 4000,
    "porvencer": 12000
  },
  {
    "nivel": 0,
    "proyectoid": 6,
    "proyectoname": "ALTAMIRA YCUA SATI (BAULERAS)",
    "status": "Formalizada",
    "cantstatus": 8,
    "precio": 28839,
    "area": 23.6,
    "precio_promedio": 3604.88,
    "mt2": 1221.99,
    "cobrado": 16090.84,
    "porcobrar": 12748.16,
    "vencido": -146.84,
    "porvencer": 12748.16
  },
  {
    "nivel": 1,
    "proyectoid": 6,
    "proyectoname": "ALTAMIRA YCUA SATI (BAULERAS)",
    "status": "VENDIDAS",
    "cantstatus": 12,
    "precio": 43839,
    "area": 33.6,
    "precio_promedio": 3653.25,
    "mt2": 1304.73,
    "cobrado": 16090.84,
    "porcobrar": 27748.16,
    "vencido": 3853.16,
    "porvencer": 24748.16
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
    "cobrado": 16090.84,
    "porcobrar": 27748.16,
    "vencido": 3853.16,
    "porvencer": 24748.16
  }
]


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
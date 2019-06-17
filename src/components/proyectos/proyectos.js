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
//import { posts } from "./dummy-posts";´
//https://reactgo.com/material-ui-react-tutorial/


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});
//const onClick = content => () => {
//  setOpen(false);
//  setContent(content);
//};
function Proyectos(props) {
  const goProyecto=(e)=>{
    //alert()
    props.goComponent();
  } 
  const classes = useStyles();
  return (
    <div style={{ marginTop: 10, padding: 30 } }>
      <Grid container spacing={5} justify="center">
        {proys.map(p => (
          <Grid item key={p.proyectoid}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Proyecto Inmobiliario"
                  height="140"
                  image={p.image}
                  title="Proyecto Inmobiliario"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">
                    {p.proyectoname}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2">
                    {'Total: '+p.cantstatus+' '+'Libres: 24'}
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <Typography variant="subtitle2" color="grey" noWrap>
                        Precio/Mt2:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.precio_promedio.toLocaleString('en')     }
                     </Typography>
                     <Typography variant="subtitle2" color="grey" noWrap>
                     &nbsp;Mts2:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.mt2.toLocaleString('en')     }
                     </Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography variant="subtitle2" color="grey" noWrap>
                        Ventas:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.precio.toLocaleString('en')     }
                     </Typography>
                     <Typography variant="subtitle2" color="grey" noWrap>
                     &nbsp;Cobrado:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.COBRADO.toLocaleString('en')     }
                     </Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography variant="subtitle2" color="grey" noWrap>
                        Vencido:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.VENCIDO.toLocaleString('en')     }
                     </Typography>
                     <Typography variant="subtitle2" color="grey" noWrap>
                     &nbsp;xVencer:
                      </Typography>
                     <Typography variant="subtitle2" color="black" noWrap>
                       {p.POR_VENCER.toLocaleString('en')     }
                     </Typography>
                </div>            

                
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
        ))}
      </Grid>
    </div>
  );
}
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
var posts=[
  {title:"Uruguay IV",
  image:"https://static.wixstatic.com/media/b2fe93_e957b2661fa64c9cbd38682f76370147~mv2_d_3200_2950_s_4_2.jpg/v1/crop/x_0,y_722,w_3200,h_2107/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_e957b2661fa64c9cbd38682f76370147~mv2_d_3200_2950_s_4_2.webp",
  excerpt:"Some editors, including Sublime Text, aaaaa ddddd dddd ddAtom,Some editors, including Sublime Text, aaaaa ddddd dddd ddAtom,Some editors, i"
  },
  {title:"Uruguay V",
  image:"https://static.wixstatic.com/media/b2fe93_6e6425b8c8194513b2be40fdd9483b26~mv2_d_2500_1607_s_2.jpg/v1/crop/x_26,y_0,w_2441,h_1607/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_6e6425b8c8194513b2be40fdd9483b26~mv2_d_2500_1607_s_2.webp",
  excerpt:"Some editors, including Sub"
  },
  {title:"Uruguay VI",
  image:"https://static.wixstatic.com/media/b2fe93_7c954c2f3e004667b34da9de8b01b09a~mv2.jpg/v1/crop/x_0,y_40,w_1247,h_821/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_7c954c2f3e004667b34da9de8b01b09a~mv2.webp",
  excerpt:"Some editor"
  },
  {title:"Uruguay I",
    image:"https://static.wixstatic.com/media/b2fe93_b62af64796e24159bdc175093992b1ea~mv2.jpg/v1/crop/x_0,y_40,w_1247,h_821/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_7c954c2f3e004667b34da9de8b01b09a~mv2.webp",
    excerpt:"Some editors, "
},
{title:"Uruguay II",
image:"https://static.wixstatic.com/media/b2fe93_ccc57b99f44b4101a6a1af04236f1e4d~mv2.jpg/v1/crop/x_0,y_40,w_1247,h_821/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_7c954c2f3e004667b34da9de8b01b09a~mv2.webp",
excerpt:"Some editors,"
},
{title:"Uruguay III",
image:"https://static.wixstatic.com/media/b2fe93_4d4bc7de3e104fbeb72710db1146ac6f~mv2.jpg/v1/crop/x_0,y_40,w_1247,h_821/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_7c954c2f3e004667b34da9de8b01b09a~mv2.webp",
excerpt:"Some editors"
}

]
const proyectos=
[ {
  "nivel": 0,
  "proyectoid": 2,
  "proyectoname": "ALTAMIRA YCUA SATI",
  "status": "Asignada",
  "cantstatus": 7,
  "precio": 964923,
  "area": 663.96,
  "precio_promedio": 137846.14,
  "mt2": 1453.28,
  "COBRADO": 0,
  "PORCOBRAR": 964923,
  "VENCIDO": 0,
  "POR_VENCER": 0
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
  "COBRADO": 2514432.01,
  "PORCOBRAR": 2906067.08,
  "VENCIDO": 121914.81,
  "POR_VENCER": 2917071.08
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
  "COBRADO": 0,
  "PORCOBRAR": 7176512,
  "VENCIDO": 0,
  "POR_VENCER": 0
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
  "COBRADO": 4594.04,
  "PORCOBRAR": 249823.96,
  "VENCIDO": -4594.04,
  "POR_VENCER": -4594.04
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
  "COBRADO": 0,
  "PORCOBRAR": 7176512,
  "VENCIDO": 0,
  "POR_VENCER": 0
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
  "COBRADO": 2519026.05,
  "PORCOBRAR": 4120814.04,
  "VENCIDO": 117320.77,
  "POR_VENCER": 2912477.04
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
  "COBRADO": 2519026.05,
  "PORCOBRAR": 11297326.04,
  "VENCIDO": 117320.77,
  "POR_VENCER": 2912477.04
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
  "COBRADO": 0,
  "PORCOBRAR": 141403,
  "VENCIDO": 13028,
  "POR_VENCER": 76903
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
  "COBRADO": 236606.04,
  "PORCOBRAR": 299743.96,
  "VENCIDO": 2999.1,
  "POR_VENCER": 299743.96
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
  "COBRADO": 0,
  "PORCOBRAR": 1462028,
  "VENCIDO": 0,
  "POR_VENCER": 0
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
  "COBRADO": 8570,
  "PORCOBRAR": 4458,
  "VENCIDO": -8570,
  "POR_VENCER": -8570
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
  "COBRADO": 0,
  "PORCOBRAR": 1462028,
  "VENCIDO": 0,
  "POR_VENCER": 0
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
  "COBRADO": 245176.04,
  "PORCOBRAR": 445604.96,
  "VENCIDO": 7457.1,
  "POR_VENCER": 368076.96
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
  "POR_VENCER": 368076.96
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
  "COBRADO": 2164,
  "PORCOBRAR": 2336,
  "VENCIDO": 66,
  "POR_VENCER": 2336
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
  "COBRADO": 0,
  "PORCOBRAR": 74000,
  "VENCIDO": 0,
  "POR_VENCER": 0
},
{
  "nivel": 1,
  "proyectoid": 5,
  "proyectoname": "ALTAMIRA YCUA SATI (ESTACIONAMIENTO DE MOTOS)",
  "status": "LIBRES",
  "cantstatus": 14,
  "precio": 74000,
  "area": 68.6,
  "precio_promedio": 5285.71,
  "mt2": 1078.72,
  "COBRADO": 0,
  "PORCOBRAR": 74000,
  "VENCIDO": 0,
  "POR_VENCER": 0
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
  "COBRADO": 2164,
  "PORCOBRAR": 2336,
  "VENCIDO": 66,
  "POR_VENCER": 2336
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
  "POR_VENCER": 2336
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
  "COBRADO": 0,
  "PORCOBRAR": 15000,
  "VENCIDO": 4000,
  "POR_VENCER": 12000
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
  "COBRADO": 16090.84,
  "PORCOBRAR": 12748.16,
  "VENCIDO": -146.84,
  "POR_VENCER": 12748.16
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
  "COBRADO": 16090.84,
  "PORCOBRAR": 27748.16,
  "VENCIDO": 3853.16,
  "POR_VENCER": 24748.16
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
  "POR_VENCER": 24748.16
}
]

export default Proyectos;
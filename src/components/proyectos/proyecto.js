import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
//import { posts } from "./dummy-posts";


const useStyles = makeStyles({
  card: {
    maxWidth: 100,
  },
});
function Proyecto(props) {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 20, padding: 30 }}>

<Grid container spacing={40} justify="center">
<Grid item key={2}>
            <Card  className={classes.card}>
              <CardActionArea>
                
                <CardContent >
                  <Typography gutterBottom  component="p">
                    Vendidos
                  </Typography>
                  <Typography gutterBottom  component="h2">
                    67.23%
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Button size="small" color="primary">
          Share
        </Button>
              </CardActions>
            </Card>
          </Grid>
       
          <Grid item key={1}>
            <Card  className={classes.card}>
              <CardActionArea>
                
                <CardContent >
                  <Typography gutterBottom  component="p">
                    Cobrados
                  </Typography>
                  <Typography gutterBottom  component="h2">
                    120.000,89
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Button size="small" color="primary">
          Detalle
        </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item key={1}>
            <Card  className={classes.card}>
              <CardActionArea>
                
                <CardContent >
                  <Typography gutterBottom  component="p">
                    Vencidos
                  </Typography>
                  <Typography gutterBottom  component="h2">
                    20.000,89
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Button size="small" color="primary">
          Detalle
        </Button>
              </CardActions>
            </Card>
          </Grid>
      </Grid>

      <Grid container spacing={40} justify="center">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card style={{ backgroundColor: post.color }} className={classes.card}>
              <CardActionArea>
                
                <CardContent >
                  <Typography gutterBottom  component="p">
                    {post.title}
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Button size="small" color="primary">
          Share
        </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
var posts=[
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"blue"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"purple"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"yellow"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"purple"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"blue"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"purple"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"yellow"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"blue"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"purple"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"green"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"red"
    },
    {title:"Apart A",
    excerpt:"Vendodo en Poceso de Protocolizacion",color:"blue"
    },
    
    
  
    
  
  ]
export default Proyecto;
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

const style={   Paper:{padding:20,marginTop:10,marginBottom:10}
}
const useStyles = makeStyles({
  card: {
    maxWidth: 200,
  },
   Paper:{padding:20,marginTop:10,marginBottom:10}
});
function ProyectoResumen(props) {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 20, padding: 30 }}>

<Grid container justify="center">
  <Grid item sm className={classes.card}>
  <Paper style={style.Paper}>
  <Typography variant="h5" color="grey" noWrap>
                        Vendidos:
    </Typography>
    <Typography variant="h5" color="grey" noWrap>
                      30%
    </Typography>
    <Button variant={"outlined"} color={"secondary"} fullWidth>
                        Detalles
                    </Button>

  </Paper>
  
  </Grid>
  <Grid item sm className={classes.card}>
  <Paper style={style.Paper}>
  <Typography variant="h5" color="grey" noWrap>
                        Cobrados:
    </Typography>
    <Typography variant="h5" color="grey" noWrap>
                      30%
    </Typography>
    <Button variant={"outlined"} color={"secondary"} fullWidth>
                        detalles
                    </Button>    
  </Paper>

  </Grid>
  <Grid item sm className={classes.card}>
  <Paper style={style.Paper}>
  <Typography variant="h5" color="grey" noWrap>
                        Vencidos:
    </Typography>
    <Typography variant="h5" color="grey" noWrap>
                      30%
    </Typography>
    <Button variant={"outlined"} color={"secondary"} fullWidth>
            Detalles
    </Button>
  
  </Paper>
  
  </Grid>
</Grid>



    </div>
  );
}

export default ProyectoResumen;
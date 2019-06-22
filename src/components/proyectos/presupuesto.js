import React, { Fragment } from 'react';
//import { withStyles } from 'material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
//import Leftpane from './leftPane';
//import Rightpane from './rightPane';
//
/*
https://stackoverflow.com/questions/53959220/how-to-align-two-react-components-horizontally
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
  root: {
  flexGrow: 1,
},
paper: {
  padding: theme.spacing.unit * 2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
},
});
class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
  );
}
}
*/
const styles = theme => ({
  Paper: {padding: 20,marginTop: 5,height: 1000,overflowY: 'auto'}
});
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',maxWidth: 400,alignContent:"center"},
  paperbold: { maxWidth: 200,fontWeight:"bold"},
  paper: { maxWidth: 200},
  
  grid: { maxWidth: 350,},  
  card: { maxWidth: 200,},
  Paper:{padding:20,marginTop:10,maxWidth: 350,marginBottom:10,alignContent:"center"}
  });
  function Presupuesto(props) {
    const classes = useStyles();
    return (
     <div align="center" className={classes.root}>
    
    <Paper className={classes.Paper} centered>
        <Fragment>
        <Typography variant="h5" style={{ textTransform: 'capitalize' }}>
          Presupuesto Proyecto xyz s
        </Typography>
      
      </Fragment>
      </Paper>

      
        <Fragment>
        <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
          Presupuesto Construccion
        </Typography>
     </Fragment>
         <Grid container justify="center" className={classes.grid} spacing={24}>       
        <Grid item xs={6}>
        <Typography variant="heading"  style={{ marginTop: 20}}>
          <Paper className={classes.paperbold}>
          <div  align="center" >Original</div>
          </Paper>
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="heading"  style={{ marginTop: 20}}>
        <Paper className={classes.paperbold}>
          <div  align="center" >Actual</div>
          </Paper>
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.grid} spacing={24}>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="subheading"  style={{ marginTop: 20}}>
         <div  align="right" > 12.323.232,34</div>
        </Typography>    
          </Paper>        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography variant="subheading"  style={{ marginTop: 20}}>
         <div  align="right" > 14.323.232,34</div>
        </Typography>    
          </Paper>
        </Grid>
      </Grid>

      <Fragment>
        <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
          Ingresos Proyectados
        </Typography>
     </Fragment>

      <Grid container justify="center" className={classes.grid} spacing={24}>       
        <Grid item xs={6}>
        <Typography variant="heading"  style={{ marginTop: 20}}>
          <Paper className={classes.paperbold}>
          <div  align="center" >Original</div>
          </Paper>
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="heading"  style={{ marginTop: 20}}>
        <Paper className={classes.paperbold}>
          <div  align="center" >Actual</div>
          </Paper>
          </Typography>
        </Grid>
      </Grid>
        <Grid container justify="center" className={classes.grid} spacing={24}>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="subheading"  style={{ marginTop: 20}}>
         <div  align="right" > 12.323.232,34</div>
        </Typography>    
          </Paper>        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography variant="subheading"  style={{ marginTop: 20}}>
         <div  align="right" > 14.323.232,34</div>
        </Typography>    
          </Paper>
        </Grid>
      </Grid>
      <Fragment>
        <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
         Utilidad Esperada
        </Typography>
     </Fragment>

      <Grid container justify="center" className={classes.grid} spacing={24}>       
        <Grid item xs={6}>
        <Typography variant="heading"  style={{ marginTop: 20}}>
          <Paper className={classes.paperbold}>
          <div  align="center" >Original</div>
          </Paper>
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="heading"  style={{ marginTop: 20}}>
        <Paper className={classes.paperbold}>
          <div  align="center" >Actual</div>
          </Paper>
          </Typography>
        </Grid>
      </Grid>
        <Grid container justify="center" className={classes.grid} spacing={24}>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="subheading"  style={{ marginTop: 20}}>
         <div  align="right" > 12.323.232,34</div>
        </Typography>    
          </Paper>        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography variant="subheading"  style={{ marginTop: 20}}>
         <div  align="right" > 14.323.232,34</div>
        </Typography>    
          </Paper>
        </Grid>
      </Grid>
      </div>
    )
  }

  export default Presupuesto;
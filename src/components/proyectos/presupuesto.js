import React, { Fragment } from 'react';
//import { withStyles } from 'material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
//import Leftpane from './leftPane';
//import Rightpane from './rightPane';

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 1000,
    overflowY: 'auto'
  }
});
const useStyles = makeStyles({
    card: {
      maxWidth: 200,
    },
     Paper:{padding:20,marginTop:10,marginBottom:10}
  });
  function Presupuesto(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.Paper}>
        <Fragment>
        <Typography variant="h1" style={{ textTransform: 'capitalize' }}>
          Presupuesto
        </Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          numeros
        </Typography>
      </Fragment>
      </Paper>
    )
  }

  export default Presupuesto;
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

const UnderstandingBreakpoints = withStyles(styles)(({ classes }) => (
<div>
  <div className={classes.root}>
  <Grid container spacing={3}>
    <Grid item xs={3} sm={6} md={6}>
      <Paper className={classes.paper}>xs=3 sm=6 md=6</Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper className={classes.paper}>xs=3</Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper className={classes.paper}>xs=3</Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper className={classes.paper}>xs=3</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper className={classes.paper}>xs=4</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper className={classes.paper}>xs=4</Paper>
    </Grid>
    <Grid item xs={4}>
      <Paper className={classes.paper}>xs=4</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>xs=6</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>xs=6</Paper>
    </Grid>
  </Grid>
</div>

  <div className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper}>xs=12 sm=6 md=2</Paper>
        </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper}>xs=12 sm=6 md=2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper}>xs=12 sm=6 md=2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper}>xs=12 sm=6 md=2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper}>xs=12 sm=6 md=2</Paper>
        </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper}>xs=12 sm=6 md=2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper}>xs=12 sm=6 md=2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper className={classes.paper}>xs=12 sm=6 md=2</Paper>
      </Grid>
    </Grid>
  </div>
  </div>
));

export default UnderstandingBreakpoints;
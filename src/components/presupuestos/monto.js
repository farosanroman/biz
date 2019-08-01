import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
//import Typography from '@material-ui/core/Typography';
import {  Paper, Typography } from "@material-ui/core";
import clsx from 'clsx';
//import Title from './Title';
const useStyles = makeStyles(theme => ({
//const useStyles = makeStyles({
    card: {
      maxWidth: 350,
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },depositContext: {
        flex: 1,
      },
   // toolbarMargin: theme.mixins.toolbar
  }))
  //);
 
 
export default function Deposits(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
 
  return (
    <React.Fragment>
       <Typography variant="h5" component="h3">
      {props.titulo}
        </Typography>
      <div></div>
      <Typography color="textSecondary" className={classes.depositContext}>
        Original
      </Typography>
      <Typography component="p" variant="h4">
       {props.original}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Actual
      </Typography>
      <Typography component="p" variant="h4">
      {props.original}
      </Typography>
     
          
    </React.Fragment>
  );
}


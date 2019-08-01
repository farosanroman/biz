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
import Icon from '../tools/icon';

//import {Chart as ChartG} from 'react-google-charts';
import Monto from './monto'
import CurvaS from './curvas'
import Gantt from './gantt'
import Sankey from './sankey'
import Tree from './tree'
//https://react-google-charts.com/sankey-diagram GOOGLE CHART REACT
//https://blog.bitsrc.io/reusable-components-in-react-a-practical-guide-ec15a81a4d71   
//https://buttercms.com/blog/building-reusable-components-using-react
//https://github.com/lugolabs/circles
//import { posts } from "./dummy-posts";´
//https://reactgo.com/material-ui-react-tutorial/
//https://www.freecodecamp.org/news/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c/
//https://www.youtube.com/watch?v=xm4LX5fJKZ8&list=PLcCp4mjO-z98WAu4sd0eVha1g-NMfzHZk
//https://stackoverflow.com/questions/53959220/how-to-align-two-react-components-horizontally
//alert(JSON.stringify(proyectos))
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/  FLEXBOX
const useStyles = makeStyles({
  card: {
    maxWidth: 350,
  },
  paperMonto: {
    //padding: theme.spacing(2),
    overflow: 'auto',
    flexDirection: 'column',
    height: 200,
  },
  paper: {
    //padding: theme.spacing(2),
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 200,
  }
 // toolbarMargin: theme.mixins.toolbar
});
//const onClick = content => () => {
//  setOpen(false);
//  setContent(content);
//};

function Presupuestos(props) {
  //alert(JSON.stringify(props.criteria))

  const goDown=(e)=>{
    //alert("goDown")
    props.goNivel("down");
  } 
  const goUp=(e)=>{
    //alert("goDown")
    props.goNivel("up");
  } 
 const ddaattaa=[]
 ddaattaa.push({fecha:new Date(2018,1,1,1),cant:4,acum:4})
 ddaattaa.push({fecha:new Date(2018,1,1,5),cant:6,acum:10})
 ddaattaa.push({fecha:new Date(2018,1,1,7),cant:8,acum:18})
 ddaattaa.push({fecha:new Date(2018,1,1,12),cant:12,acum:23})
 const data2=[]
 
 data2.push({actividad:1,blanco:6,azul:8,blanco2:7,verde:10})
 
 data2.push({actividad:2,blanco:4,azul:2,blanco2:3,verde:5})
 data2.push({actividad:3,blanco:3,azul:4,blanco2:3,verde:5})
 const classes = useStyles();
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/ FLEXBOX
 return (
    <div style={{ marginTop: 10, padding: 30 } }>
 <div className={classes.root}>
 
 <div/>
 <Paper className={classes.paper} borderRadius="borderRadius">
 <Typography variant="h5" component="h3">
       Proyecto XYZ
      
  </Typography>
  </Paper>
  <br/>
  <Grid container spacing={3}   alignItems="center"  justify="center">
  <Grid item xs={12} sm={6} md={3}>
      <Paper className={classes.paperMonto}>
          <Monto  titulo={'Costos'} original={'3.890.383,89'} actual={'4.290.383,89'} />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Paper className={classes.paperMonto}>
         <Monto  titulo={'Ingresos'} original={'4.490.383,89'} actual={'6.290.383,89'} />        
      </Paper>
    </Grid>
        <Grid item xs={12} sm={6} md={3}>
      <Paper className={classes.paperMonto}>
      <Monto  titulo={'Utilidad'} original={'250.959,45'} actual={'340.478,45'} />        
      </Paper>
    </Grid>    
    </Grid>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={6}>
      <Paper className={classes.paper}>
        
 <CurvaS />

      </Paper>
    </Grid>

    <Grid item xs={12} sm={6} md={6}>
      <Paper className={classes.paper}>
      <Gantt />
     
      </Paper>
    </Grid>

    <Grid item xs={12} sm={6} md={6}>
      <Paper className={classes.paper}>
        
 <Sankey />

      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={6}>
      <Paper className={classes.paper}>
        
 <Tree />

      </Paper>
    </Grid>

    <Grid item xs={12} sm={4} md={4}>
      <Paper className={classes.paper}>xs=12 sm=4 md=4</Paper>
    </Grid>
        <Grid item xs={12} sm={4} md={4}>
      <Paper className={classes.paper}>xs=12 sm=4 md=4</Paper>
    </Grid>    <Grid item xs={12} sm={4} md={4}>
      <Paper className={classes.paper}>xs=12 sm=4 md=4</Paper>
    </Grid>


  </Grid>
</div>    
    </div>
  );
}



export default Presupuestos;

/*
      <Chart         
            
               dataSource={ddaattaa}
               id={'serie'}
          >
           <SizeS height={400} width={400} />
           <ValueAxis
            grid={{ opacity: 0.2 }}
            valueType={'currency'}
          />
           <CommonSeriesSettings
            argumentField={'fecha'}
            type={'line'}
          />
         <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode={'crossLabels'}            
          >
          <Label format={'HH:mm'} />
            <Grid visible={true} />
          </ArgumentAxis>
          <CommonPaneSettings>
            <Border
              visible={true}
              width={3}
              top={false}
              right={false}
            />
          </CommonPaneSettings>
          <Series key={'2'} valueField={'acum'} color={'lightgrey'} name={'acumulado'} type={'area'}/>
       
        <Series key={'1'} valueField={'cant'} color={'deepskyblue'} name={'cantidad'} type={'bar'}/>
        <Series key={'3'} valueField={'polidata'} color={'darkorange'} name={'polidata'} type={'bar'}/>
      
        <Grid visible={true} />
        
          <Legend
            verticalAlignment={'bottom'}
            horizontalAlignment={'center'}
            itemTextPosition={'bottom'}
            visible={true}
          />
         
          <Title text={'Costos'}>
            <Subtitle text={'(Acumulado)'} />
          </Title>
          <Tooltip
          enabled={true}
          shared={true}
        />

      </Chart>

       <Chart               
               dataSource={data2}
               id={'serie'}
             rotated={true}
              // type={'horizontalBar'}
          >
           <SizeS height={400} width={400} />     
 
          <CommonSeriesSettings argumentField={'actividad'}  type={'stackedbar'}    />

        <Series key={'1'} valueField={'blanco'} color={'white'} name={''} stack={"orig"}/>
        <Series key={'2'} valueField={'azul'} color={'deepskyblue'} name={'Original'} stack={"orig"} />
        <Series key={'3'} valueField={'blanco2'} color={'white'} name={''} stack={"act"}/>
        <Series key={'4'} valueField={'verde'} color={'green'} name={'Actual'} stack={"act"} />

        <Grid visible={true} />
        
        <Legend
          verticalAlignment={'bottom'}
          horizontalAlignment={'center'}
        />
         
          <Title text={'Diagrama GANTT'}>
            <Subtitle text={'(Actividades)'} />
          </Title>
          <Tooltip
          enabled={true}
          shared={true}
        />
          <CommonPaneSettings>
            <Border
              visible={true}
              width={3}
              top={false}
              right={false}
            />
          </CommonPaneSettings>
         
      </Chart>
*/
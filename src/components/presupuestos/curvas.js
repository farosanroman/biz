import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";

import Chart  from 'react-google-charts';
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
function CurvaS(props) {
  //alert(JSON.stringify(props.criteria))

  
  const classes = useStyles();
 // type: 'horizontalBar',
//https://github.com/mui-org/material-ui/issues/15066
  return (
    <div style={{ marginTop: 10, padding: 30 } }>
<Chart
  width={'500px'}
  height={'300px'}
  chartType="AreaChart"
  loader={<div>CurvsS</div>}
  data={[
    ['Mes', 'Presupuesto', 'Costos'],
    ['2018.01', 0, 0],
    ['2018.02', 200,0],
    ['20158.03',400, 200],
    ['2018.04', 1000, 800],    
    ['2018.05', 1200, 1000],
    ['2018.06', 1450, 1340],
    ['2018.07', 1600, 1600],
    ['2018.08', 1800, 1850],
    
    ['2018.09', 1820, 1990],
    ['2018.10', 1850, 2100],
    ['2018.11', 1860, 2200],
    ['2018.12', 1900, 2300]
  ]}
  options={{
    title: 'Curva S',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    // For the legend to fit, we make the chart area smaller
    chartArea: { width: '50%', height: '70%' },
    // lineWidth: 25
  }}
  // For tests
  rootProps={{ 'data-testid': '1' }}
/>
    </div>
  );
}



export default CurvaS;


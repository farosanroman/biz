import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import CURVAJSON from '../../data/curvajson'
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
const data=[
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
]
//alert(JSON.stringify(CURVAJSON))
const data2=[ ]
for (var i = 0; i < CURVAJSON.curvajson.length; i++) { 
   data2.push([CURVAJSON.curvajson[i].mes,CURVAJSON.curvajson[i].monto,CURVAJSON.curvajson[i].acum])
}
//alert(JSON.stringify(data2))
const columns = [

  {
    type: "number",
    label: "mes"
  },
  {
    label: "Cant1",
    type: "number"
  },
  
  {
    label: "Ejecutado",
    type: "number"
  }
];
const rows = [[2015, 0,0], [2016, 1,2], [2017, 1.3,2.6], [2018, 2,3], [2019, 3,5], [2020, 3.5,5.6]];
  return (
    <div style={{ marginTop: 10, padding: 30 } }>
<Chart
  width={'100%'}
  height={'300px'}
  chartType="AreaChart"
  loader={<div>CurvsS</div>}
  rows={data2}
          columns={columns}
  options={{
    legend:'top',
    is3D:true,
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

/*
select  * into #temp from (
select periodo, sum(debito_mont-credito_mont) montomes from diarios where cia='INCOGGP' and cuenta like '11%' group by periodo 
) d

select periodo,montomes,(select sum(montomes) temp2 from #temp TT where TT.PERIODO<=T.PERIODO) acum into #temp2  from #temp T order by PERIODO 
select IDENTITY(int, 1, 1) AS id,* into #temp3 from #temp2
select * from #temp3
drop table #temp
drop table #temp2
drop table #temp3
*/


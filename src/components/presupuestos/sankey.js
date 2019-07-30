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
const style={   Paper:{padding:1,marginTop:1,marginBottom:1}}
function Sankey(props) {
  //alert(JSON.stringify(props.criteria))

  
  const classes = useStyles();
 // type: 'horizontalBar',
//https://github.com/mui-org/material-ui/issues/15066
  return (
    <div style={{ marginTop: 10, padding: 30 } }>
<Chart
  width={400}
  height={'300px'}
  chartType="Sankey"
  loader={<div>Loading Chart</div>}
  data={[
    ['Oriegen', 'To', 'Aplicacion'],
    ['Capital', 'Construccion', 5],
    ['Prestamos', 'Construccion', 7],
    ['Preventa', 'Construccion', 6],
    ['Utilidad', 'Construccion', 2],
    
    ['Construccion', 'XVender', 9],
    ['Construccion', 'Vendido', 9],
    ['Construccion', 'utilidad', 2],
 
  ]}
  rootProps={{ 'data-testid': '1' }}
/>
    </div>
  );
}



export default Sankey;
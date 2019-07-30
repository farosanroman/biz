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
function Tree(props) {
  //alert(JSON.stringify(props.criteria))

  
  const classes = useStyles();
 // type: 'horizontalBar',
//https://github.com/mui-org/material-ui/issues/15066
  return (
    <div style={{ marginTop: 10, padding: 30 } }>
<Chart
   width="100%"
   height="400px"
  chartType="WordTree"
  loader={<div>Loading Chart</div>}
  data={[
    ['Phrases'],
    ['Edificio Sotano Materiales 30%'],
    ['Edificio Sotano ManoObra 40%'],
    
    ['Edificio Mezzanina Materiales 28%'],
    
    ['Edificio Mezzanina ManoObra 13%'],
    
    ['Edificio Pisos Materiales 20%'],
    
    ['Edificio Pisos ManoObra 20%'],
    
  ]}
  options={{
    wordtree: {
      format: 'implicit',
      word: 'Edificio',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>    </div>
  );
}



export default Tree;
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import DialogActions from '@material-ui/core/DialogActions';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';

//import Paper from 'material-ui/Paper'
//i//mport Collapse from 'material-ui/transitions/Collapse'
//import {comprobante} from '../../data/comprobante.json';
import {cuentasjson} from '../../data/cuentas.json';
//alert(JSON.stringify(cuentas))
//https://github.com/mbrn/material-table/issues/602
export default function MaterialTableDemo() {
    
    const [flags,setFlags]=useState({flagComprobante:false,flagCuentas:false,substringCuentas:"",flagAuxiliar:false})
    const [row,setRow]=useState({cuenta:null})
    const [cuentas,setCuentas]=useState({cuentasjson})
    const [comprobante,setComprobante]=useState([])
    
  const [state, setState] = React.useState({
    columns: [
      { title: 'Cuenta', field: 'cuenta',
      editComponent: props => {
        //setFlags({flagCuentas:true,flagAuxiliar:false});
        return(
        <TextField
        type={'text'}
        placeholder={props.columnDef.title}
        required={true}
        autoFocus={true}
        margin="dense"
        //value={props.value === props ? '' : props.value}
        onChange={event => {
        //alert(event.target.value)
        if (event.target.value.length>2){
           setFlags({flagComprobante:false,flagCuentas:true,substringCuentas:event.target.value,flagAuxiliar:false});
        }
            //onChange(event.target.value)
        }}
        error={'this.state.validationError'}
        />)}}
    ,
      { title: 'Nombre', field: 'cuentanombre' },
      { title: 'Debito', field: 'debito' },
      { title: 'Credito', field: 'credito' },
    ],
    data: comprobante
  });

  useEffect(async() => {
    // Update the document title using the browser API
    //alert()
    const abortController=new AbortController()
    const signal=abortController.signal
    const response=await fetch("https://geofaro.azurewebsites.net/api/BorrarGet?code=IapQBqwu44g4BQ1V22/cRgGEut17fRz8QLsrLRJCDS7pKa53Y0e5ZQ==",{signal:signal})
    const data=await response.json()
    //alert(JSON.stringify(data))
    setComprobante(data)
    setFlags({flagComprobante:true,flagCuentas:false,substringCuentas:"",flagAuxiliar:false})
    setState({ ...state, data });

    return function cleanup(){
       abortController.abort()
    }
  },[]);


  const onChange=(e)=>{
    //alert("goDown")
    //alert(cuentas)
  } 
  const handleClose=()=>{
    setFlags({flagCuentas:false,flagAuxiliar:false});
  }
 // alert(JSON.stringify(cuentas))
 //const StyledDialog = withStyles(
 //  { root: { pointerEvents: "none", }, 
 //paper: { pointerEvents: "auto" } })

 //(props => <Dialog hideBackdrop {...props} />);
 
  return (

      <div>


    <Dialog  open={flags.flagCuentas} hideBackdrop= {{ 
      root: { pointerEvents: "none", },  paper: { pointerEvents: "auto" } }}
       >
    <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
    <Button color="inherit" onClick={handleClose}>
              save
            </Button>
            <div>
    <List>
    {cuentas.cuentasjson.map(c => {
         if ((c.NIVEL==9)&&((c.CUENTA+"").substring(0,3)==flags.substringCuentas)){
               return(
                  <ListItem button>
                     <ListItemText primary={c.CUENTA} secondary={c.DESCRIP} />
                 </ListItem>
             )
               }
    })
}  
    </List>
    </div>
    <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
  </Dialog>

    <MaterialTable
   
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
          onRowEdit: ( oldData) =>
          
          new Promise(resolve => {
            setTimeout(() => {
                alert()
                resolve();
              
              console.log("edicion")
             // console.log(newData)

//              const data = [...state.data];
 //             data[data.indexOf(oldData)] = newData;
   //           setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
            
              

              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
           
              var t1=new Date()
              var t2 = new Date();
              var cant=0
             // alert(JSON.stringify(data))
              for (var i = 0; i < data.length; i++) {
                  
                 t2 = new Date();
                cant+=1
            }
            var dif = t1.getTime() - t2.getTime();
            var Seconds_from_T1_to_T2 = dif / 1000;
            var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
            console.log("tardo en recorrer "+cant+"/"+i+" "+Seconds_Between_Dates+" segundos")

           
           
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
              
            
            }, 600);
          }),
      }}
    />
    </div>
  );
}
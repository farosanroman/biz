import React, {Component,Fragment}  from 'react';
//import Header from './layouts/header'


import { withStyles } from '@material-ui/core/styles';
import {Header,Footer} from './layouts/index'
import Proyecto from './proyectos/proyecto'
import Presupuesto from './proyectos/presupuesto'
import Fotos from './proyectos/fotos'
import Proyectos from './proyectos/proyectos'
import Presupuestos from './presupuestos/presupuestos'
import ProyectoResumen from './proyectos/proyectoresumen'
import Cohete from './proyectos/cohete'
import Index2 from './proyectos/index'
import Diario from './libros/diario'
import UnderstandingBreakpoints from './libros/grids'
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 100
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
});
//const classes = useStyles();
const modulos=[
  {id:0,nombre:"Presupuesto"},
  {id:1,nombre:"Ventas"},
  {id:2,nombre:"Viviendas"}
]
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
    criteria:{modulo:0,proyecto:0,nivel:2}, //modulo 0 inicio modulo 1 presupeustos modulo 2 ventas 
    flagDisplayCohete:true,
    flagDisplayDiario:false,
    flagDisplayProyectos:false,
    flagDisplayProyecto:false,
    flagDisplayPresupuesto:false,
    flagDisplayFotos:false,
    modulos:modulos        
  };
  }
 
  
    goLogin=(e)=>{
      //alert()
      alert("login")
    } 
    goModulo=(e)=>{
      //alert('goModulo '+e)
      this.goComponent(e)
    }
    goNivel=(e)=>{
     // alert(e)
      if (e=="down"){
      var newNivel=this.state.criteria.nivel-1
      
      if (this.state.criteria.nivel==0)newNivel=2;
      var criteria=this.state.criteria;
      criteria.nivel=newNivel;
      this.setState({criteria:criteria})  
      }else{
        var criteria=this.state.criteria;
        criteria.nivel=2;
        this.setState({criteria:criteria})  
          
      }
    
      
    } 

     goComponent=(e)=>{
     
      //alert('goProyecto')
      //alert(this.state.flagDisplayProyectos)
      if (e==0){
        this.setState({flagDisplayCohete:false,flagDisplayPresupuesto:true,flagDisplayProyectos:false,flagDisplayProyecto:false,flagDisplayFotos:false,flagDisplayDiario:false})  
      }
      if (e==1){
        this.setState({flagDisplayCohete:false,flagDisplayPresupuesto:false,flagDisplayProyectos:true,flagDisplayProyecto:false,flagDisplayFotos:false,flagDisplayDiario:false})  
      }
      if (e==2){
        this.setState({flagDisplayCohete:false,flagDisplayPresupuesto:false,flagDisplayProyectos:false,flagDisplayProyecto:true,flagDisplayFotos:false,flagDisplayDiario:false})  
      }
      if (e==3){
        
        this.setState({flagDisplayCohete:false,flagDisplayPresupuesto:false,flagDisplayProyectos:false,flagDisplayProyecto:false,flagDisplayFotos:true,flagDisplayDiario:false})  
      }
      if (e==4){
        
        this.setState({flagDisplayCohete:false,flagDisplayPresupuesto:false,flagDisplayProyectos:false,flagDisplayProyecto:false,flagDisplayFotos:false,flagDisplayDiario:true})  
      }
      
    } 
  render ()
  {
    
    
   //     const { auth, anchorEl } = this.state;
   // const open = Boolean(anchorEl);

   const {criteria,modulos,flagDisplayDiario,flagDisplayProyectos,flagDisplayProyecto,flagDisplayPresupuesto,flagDisplayFotos,flagDisplayCohete}=this.state
   //const FixedPosition = withStyles(styles)(({ classes }) => (
     
   //
   const {classes} = this.props;////<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ojo
   //alert(JSON.stringify(classes))
 //      <div className={classes.toolbarMargin} />
 
   return (
    <Fragment>
    <Header goComponent={this.goComponent}/>
    <div className={classes.root}>
     
    {flagDisplayCohete&&
   <Cohete criteria={criteria} />
      }
    {flagDisplayPresupuesto&&

      <Presupuestos />
    }
      {flagDisplayDiario&&
   
   <Diario criteria={criteria} goNivel={this.goNivel}/>
   }
   
       {flagDisplayProyectos&&
   
   <Proyectos criteria={criteria} goNivel={this.goNivel}/>
      }
          {flagDisplayProyecto&&
   <ProyectoResumen criteria={criteria} />    
      }
      {flagDisplayProyecto&&
   <Proyecto  goComponent={this.goComponent}/>
      }     
        {flagDisplayPresupuesto&&
   <Presupuesto />
      } 
      {flagDisplayFotos&&
   <Fotos />
      }   
   </div>
      <Footer goModulo={this.goModulo} tabs={modulos}/>
      <Index2 ppa={'autenticado'}/>
    
   {false&&
   <UnderstandingBreakpoints />
   }
  
   </Fragment>
  );
}
}
export default withStyles(styles)(App);


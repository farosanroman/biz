import React, {Component,Fragment}  from 'react';
//import Header from './layouts/header'


import { withStyles } from '@material-ui/core/styles';
import {Header,Footer} from './layouts/index'
import Proyecto from './proyectos/proyecto'
import Presupuesto from './proyectos/presupuesto'
import Fotos from './proyectos/fotos'
import Proyectos from './proyectos/proyectos'
import ProyectoResumen from './proyectos/proyectoresumen'
import Cohete from './proyectos/cohete'
import Index2 from './proyectos/index'
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

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
    criteria:{proyecto:0,nivel:2},  
    flagDisplayCohete:true,
    
    flagDisplayProyectos:false,
    flagDisplayProyecto:false,
    flagDisplayPresupuesto:false,
    flagDisplayFotos:false
            
  };
  }
 
  
    goLogin=(e)=>{
      //alert()
      alert("login")
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
        this.setState({flagDisplayCohete:false,flagDisplayProyectos:true,flagDisplayProyecto:false,flagDisplayPresupuesto:false,flagDisplayFotos:false})  
      }
      if (e==1){
        this.setState({flagDisplayCohete:false,flagDisplayProyectos:false,flagDisplayProyecto:true,flagDisplayPresupuesto:false,flagDisplayFotos:false})  
      }
      if (e==2){
        this.setState({flagDisplayCohete:false,flagDisplayProyectos:false,flagDisplayProyecto:false,flagDisplayPresupuesto:true,flagDisplayFotos:false})  
      }
      if (e==3){
        this.setState({flagDisplayCohete:false,flagDisplayProyectos:false,flagDisplayProyecto:false,flagDisplayPresupuesto:false,flagDisplayFotos:true})  
      }
     
      
    } 
  render ()
  {
    
    
   //     const { auth, anchorEl } = this.state;
   // const open = Boolean(anchorEl);

   const {criteria,flagDisplayProyectos,flagDisplayProyecto,flagDisplayPresupuesto,flagDisplayFotos,flagDisplayCohete}=this.state
   //const FixedPosition = withStyles(styles)(({ classes }) => (
     
   //
   const {classes} = this.props;
   //alert(JSON.stringify(classes))
 //      <div className={classes.toolbarMargin} />
 
   return (
    <Fragment>
    <Header goComponent={this.goComponent}/>
    {flagDisplayCohete&&
   <Cohete criteria={criteria} />
      }
      <div className={classes.root}>
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
      <Footer/>
      <Index2 ppa={'autenticado'}/>
   </Fragment>
  );
}
}
export default withStyles(styles)(App);


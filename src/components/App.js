import React, {Component,Fragment}  from 'react';
//import Header from './layouts/header'


import { withStyles } from '@material-ui/core/styles';
import {Header,Footer} from './layouts/index'
import Proyecto from './proyectos/proyecto'
import Proyectos from './proyectos/proyectos'
import ProyectoResumen from './proyectos/proyectoresumen'
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
    flagDisplayProyectos:true,
    flagDisplayProyecto:false,  
  };
  }
 
  
    goLogin=(e)=>{
      //alert()
      alert("login")
    } 
     goComponent=(e)=>{
      //alert('goProyecto')
      //alert(this.state.flagDisplayProyectos)
      if (this.state.flagDisplayProyectos){
        this.setState({flagDisplayProyectos:false,flagDisplayProyecto:true})  
      }
      else{
        this.setState({flagDisplayProyectos:true,flagDisplayProyecto:false})
    }
      
    } 
  render ()
  {
    
    
   //     const { auth, anchorEl } = this.state;
   // const open = Boolean(anchorEl);

   const {flagDisplayProyectos,flagDisplayProyecto}=this.state
   //const FixedPosition = withStyles(styles)(({ classes }) => (
     
   //
   const {classes} = this.props;
   //alert(JSON.stringify(classes))
 //      <div className={classes.toolbarMargin} />
 
   return (
    <Fragment>
    <Header goComponent={this.goComponent}/>
      <div className={classes.root}>
       {flagDisplayProyectos&&
   <Proyectos goComponent={this.goComponent}/>
      }
          {flagDisplayProyecto&&
   <ProyectoResumen />    
      }
      {flagDisplayProyecto&&
   <Proyecto  goComponent={this.goComponent}/>
      }        
   </div>
      <Footer/>
      <Index2 ppa={'ppa'}/>
   </Fragment>
  );
}
}
export default withStyles(styles)(App);


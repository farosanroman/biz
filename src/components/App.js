import React, {Component,Fragment}  from 'react';
//import Header from './layouts/header'

//https://www.youtube.com/watch?v=xm4LX5fJKZ8&list=PLcCp4mjO-z98WAu4sd0eVha1g-NMfzHZk
import { withStyles } from '@material-ui/core/styles';
import {Header,Footer} from './layouts/index'
import Proyecto from './proyectos/proyecto'
import Proyectos from './proyectos/proyectos'
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
   return (
    <Fragment>
    <Header goComponent={this.goComponent}/>
      <div className={classes.root}>
       <div className={classes.toolbarMargin} />
       {flagDisplayProyectos&&
   <Proyectos goComponent={this.goComponent}/>
      }
      {flagDisplayProyecto&&
   <Proyecto  goComponent={this.goComponent}/>
      }        
   </div>
      <Footer/>
   </Fragment>
  );
}
}
export default withStyles(styles)(App);
/*
   <AppBar color="primary" position="fixed">
   <Toolbar >
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} style={{ height: '20px' }} />

        <Typography
          variant="title"
          color="inherit"
         className={classes.flex}
        >
          Grupo Vinsoca
        </Typography>
        <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                   </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleProyectos}>Proyectoss</MenuItem>
                  <MenuItem onClick={this.handleClose}>Clientes</MenuItem>
                  <MenuItem onClick={this.handleClose}>Mensajes</MenuItem>

                </Menu>
              </div>
        <Button   onClick={()=>this.goLogin()}  color="inherit">Login</Button>
      </Toolbar>
       
   </AppBar>

      */

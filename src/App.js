import React, {Component}  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './navbar'
import Proyecto from './components/proyectos/proyecto'
import Proyectos from './components/proyectos/proyectos'
import logo from './assets/favicon.ico';
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
      auth: true,
      anchorEl: null,
      anchorOriginVertical: 'top',
      anchorOriginHorizontal: 'right',
      transformOriginVertical: 'top',
      transformOriginHorizontal: 'right',
      anchorReference: 'anchorEl',
    flagDisplayProyectos:true,
    flagDisplayProyecto:false,  
  };
  }
  //function App() {

    handleChange = (event, checked) => {
      this.setState({ auth: checked });
    };
  
    handleMenu = event => {
      
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };
    
    handleProyectos = event => {
      this.setState({ anchorEl: null });
       
      this.setState({flagDisplayProyectos:true,flagDisplayProyecto:false})
    
    };
  
    goLogin=(e)=>{
      //alert()
      alert("login")
    } 
     goComponent=(e)=>{
     // alert('goProyecto')
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
    
        const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

   const {flagDisplayProyectos,flagDisplayProyecto}=this.state
   //const FixedPosition = withStyles(styles)(({ classes }) => (
     
   //
   const {classes} = this.props;
   //alert(JSON.stringify(classes))
   return (
    
      
  <div className={classes.root}>
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
                  <MenuItem onClick={this.handleProyectos}>Proyectos</MenuItem>
                  <MenuItem onClick={this.handleClose}>Clientes</MenuItem>
                  <MenuItem onClick={this.handleClose}>Mensajes</MenuItem>

                </Menu>
              </div>
        <Button   onClick={()=>this.goLogin()}  color="inherit">Login</Button>
      </Toolbar>
       
   </AppBar>
   <div className={classes.toolbarMargin} />
   {flagDisplayProyectos&&
   <Proyectos goComponent={this.goComponent}/>
   }
      {flagDisplayProyecto&&

   <Proyecto  goComponent={this.goComponent}/>
      }        
   </div>
      
      
  );
}
}
export default withStyles(styles)(App);
/*

      */

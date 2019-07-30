
import React, { Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logo from '../../assets/favicon.ico';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
});
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
const drawerWidth = 240;
const MyToolbar = withStyles(styles)(

  class extends Component {
    static defaultProps = {
      MenuItems: ({ closeMenu }) => (
        <Fragment>
                      
          <MenuItem onClick={this.goComponent}>Profile</MenuItem>
          <MenuItem onClick={closeMenu}>My account</MenuItem>
          <MenuItem onClick={closeMenu}>Logout</MenuItem>
        </Fragment>
      ),
      RightButton: () => <Button color="inherit">Login</Button>
    };
    
    state = { anchor: null };

    closeMenu = () =>{ 
      //  alert("aa")
        this.setState({ anchor: null })
         
    };
    goComponentV=(e)=>{
        this.setState({ anchor: null })
      
//      alert()
      this.props.goComponent(0)
     }
     goComponentD=(e)=>{
      this.setState({ anchor: null })
    
//      alert()
    this.props.goComponent(1)
   }
   goComponentP=(e)=>{
    this.setState({ anchor: null })
  
//      alert()
  this.props.goComponent(2)
 }
 goComponentF=(e)=>{
  this.setState({ anchor: null })

//      alert()
this.props.goComponent(3)
}
goComponentDiario=(e)=>{
 // this.setState({ anchor: null })

//     alert()
this.props.goComponent(4)
}
    render() {
      const { classes, title, MenuItems, RightButton } = this.props;

      return (
        <Fragment>
          <AppBar>
            <Toolbar color={'red'}>
              <IconButton
                 className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={e =>
                  this.setState({ anchor: e.currentTarget })
                }
              >
                <MenuIcon />
              </IconButton>
              <img src={logo} style={{ height: '20px' }} />

              <Menu
                anchorEl={this.state.anchor}
                open={Boolean(this.state.anchor)}
                onClose={this.closeMenu}
              >
                  <MenuItem onClick={this.goComponentV}>Proyectos</MenuItem>
                  <MenuItem onClick={this.goComponentD}>Proyecto</MenuItem>
                  <MenuItem onClick={this.goComponentP}>Presupuesto</MenuItem>
                  <MenuItem onClick={this.goComponentF}>Fotos</MenuItem>
                  <MenuItem onClick={this.goComponentDiario}>Diarios</MenuItem>
  
              </Menu>
              <Drawer
                  variant="permanent"
                
                   open={true}
      >
                   <Divider />
                        <div>111111111111111111</div>
                  <Divider />
                  <div>222111111111111111111</div>
                 </Drawer>
                  
                  
              <Typography
                         variant="title"
                color="inherit"
                className={classes.flex}
              >
                {'Grupo Vinsoca'}
              </Typography>
              <RightButton />
            </Toolbar>
          </AppBar>
          <div className={classes.toolbarMargin} />
        </Fragment>
      );
    }
  }
);

const ToolbarAbstraction = withStyles(styles)(
  ({ classes, ...props }) => (
    <div className={classes.root}>
      <MyToolbar {...props} />
    </div>
  )
);

export default ToolbarAbstraction;
    
  
  

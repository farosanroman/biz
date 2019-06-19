
import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logo from '../../assets/favicon.ico';

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
    goComponent=(e)=>{
        this.setState({ anchor: null })
      
//      alert()
      this.props.goComponent()
     }
    render() {
      const { classes, title, MenuItems, RightButton } = this.props;

      return (
        <Fragment>
          <AppBar>
            <Toolbar>
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
                  <MenuItem onClick={this.goComponent}>Proyectos</MenuItem>
                  <MenuItem onClick={this.goComponent}>Proyecto</MenuItem>
                  <MenuItem onClick={this.goComponent}>Flujo Caja</MenuItem>
                  <MenuItem onClick={this.goComponent}>Proyecciones</MenuItem>
  
              </Menu>
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
    
  
  

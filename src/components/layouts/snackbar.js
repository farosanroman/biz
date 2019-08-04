import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
function SnackBar() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('Inmueble 3 ha sido reservado por Ejecutivo Luis Aparicio');
    enqueueSnackbar('Tres cuotas de retraso en el Apartamento 23 de Proyecto del Rio d ela Plata');
    enqueueSnackbar('Devolucion de Cuota en apartamento 489');
    enqueueSnackbar('Queja de la Ventana del apartamento 123');
};

  const handleClickVariant = variant => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a warning message!', { variant });
  };

  return (
    <React.Fragment>
     
          <IconButton aria-label="show 17 new notifications" color="inherit"
                      onClick={handleClick}
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackBar />
      
    </SnackbarProvider>
  );
}
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useStyles } from './index';
import { Alert } from './Alert';

export const CustomizedSnackbars = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { severity, message, anchorOrigin } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={anchorOrigin}
        onClose={handleClose}
        severity={severity}
        message={message}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

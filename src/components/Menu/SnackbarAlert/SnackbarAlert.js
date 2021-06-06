import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { useStyles } from './index';
import { Alert } from './Alert';

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { display, severity, message } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {display ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          severity={severity}
          message={message}
        >
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import { StyledMenu, StyledMenuItem } from './index.js';
export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ float: 'right' }}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Account Section
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary={props.account} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary={props.network} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary={props.balance} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import { StyledMenu, StyledMenuItem } from './index.js';
const CustomizedMenus = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { menuName, ...other } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ float: 'right' }}>
      <Button
        aria-controls="Wallet-Menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {menuName}
      </Button>
      <StyledMenu
        id="Wallet-Menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.entries(other).map(([key, value]) => (
          <StyledMenuItem key={key} value={value}>
            {key.toUpperCase()}:{value}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};
export default CustomizedMenus;

import {
  createMuiTheme,
  darken,
  lighten,
} from '@material-ui/core/styles';
import { getThemePaletteMode } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
const defaultTheme = createMuiTheme();
const useStyles = makeStyles(
  (theme) => {
    const getBackgroundColor = (color) =>
      getThemePaletteMode(theme.palette) === 'dark'
        ? darken(color, 0.6)
        : lighten(color, 0.6);

    const getHoverBackgroundColor = (color) =>
      getThemePaletteMode(theme.palette) === 'dark'
        ? darken(color, 0.5)
        : lighten(color, 0.5);

    return {
      root: {
        '& .super-app-theme--Open': {
          backgroundColor: getBackgroundColor(
            theme.palette.info.main,
          ),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(
              theme.palette.info.main,
            ),
          },
        },
        '& .super-app-theme--Filled': {
          backgroundColor: getBackgroundColor(
            theme.palette.success.main,
          ),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(
              theme.palette.success.main,
            ),
          },
        },
        '& .super-app-theme--PartiallyFilled': {
          backgroundColor: getBackgroundColor(
            theme.palette.warning.main,
          ),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(
              theme.palette.warning.main,
            ),
          },
        },
        '& .super-app-theme--Rejected': {
          backgroundColor: getBackgroundColor(
            theme.palette.error.main,
          ),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(
              theme.palette.error.main,
            ),
          },
        },
      },
    };
  },
  { defaultTheme },
);
export default useStyles;

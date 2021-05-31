import {
  DataGrid,
  GridToolbar,
  getThemePaletteMode,
} from '@material-ui/data-grid';
import {
  createMuiTheme,
  darken,
  lighten,
} from '@material-ui/core/styles';
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
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },

  {
    field: 'isMarried',
    headerName: 'Married Status',
    type: 'boolean',
    width: 180,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 150,
  },
];

export default function Datatable({ data }) {
  const classes = useStyles();
  return (
    <div
      style={{ height: 600, width: '50%' }}
      className={classes.root}
    >
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        pagination
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}

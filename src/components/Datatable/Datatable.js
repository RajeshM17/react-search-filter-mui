import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import useStyles from './index';
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
      style={{ height: 420, width: '100%' }}
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

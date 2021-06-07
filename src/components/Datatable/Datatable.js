import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import useStyles from './index';

const Datatable = (props) => {
  const { rows, columns, pageSize } = props;
  const classes = useStyles();
  return (
    <div
      style={{ height: 420, width: '100%' }}
      className={classes.root}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        pagination
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
};
export default Datatable;

import { DataGrid } from '@material-ui/data-grid';

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
    type:'boolean',
    width: 180,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 150,
  },
];

export default function Datatable({ data }) {
  return (
    <div style={{ height:400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={10}  pagination {...data}   />
    </div>
  );
}

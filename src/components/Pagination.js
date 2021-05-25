import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function SizePaginationGrid(tabledata) {
console.log(tabledata);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid pageSize={5} rowsPerPageOptions={[5, 10, 20]} pagination {...tabledata} />
    </div>
  );
}
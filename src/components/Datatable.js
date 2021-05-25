import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';

export default function Datatable({ data }){
  const columns = data[0] && Object.keys(data[0]);
  return (
    <Table border="1" cellPadding={5} cellSpacing={1}>
      <TableHead>
        <TableRow>
          {data[0] &&
            columns.map((heading) => <th>{heading.toUpperCase()}</th>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow>
            {columns.map((column) => (
              <TableCell>
                {column == 'isMarried'
                  ? row.isMarried
                    ? 'Married'
                    : 'Unmarried'
                  : row[column]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

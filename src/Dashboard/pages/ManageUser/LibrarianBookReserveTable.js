import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 300 },
  {
    field: 'bookName',
    headerName: 'Book Title',
    width: 250,
    editable: false,
  },
  {
    field: 'aurthor',
    headerName: 'Last name',
    width: 250,
    editable: true,
  },
  {
    field: 'reserveDate',
    headerName: 'Reserve Date',
    width: 250,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function LibrarianBookReserveTable({ data }) {
  console.log(data);
  return (
    <DataGrid
      rows={data}
      autoHeight={true}
      columns={columns}
      pageSize={10}
      checkboxSelection
      disableSelectionOnClick
    />
  );
}

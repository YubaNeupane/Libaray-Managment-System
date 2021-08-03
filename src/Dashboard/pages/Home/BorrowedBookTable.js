import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function BorrowedBookTable({ userData }) {
  const classes = useStyles();

  const books = JSON.parse(localStorage.getItem('books'));

  const data = [];
  userData.borrowedBooks.forEach((book) => {
    const temp = books.find((element) => element.id == book.bookId);
    const d = {
      ...temp,
      returnDate: book.returnDate,
      borrowData: book.borrowData,
    };

    data.push(d);
  });
  console.log(data);

  return (
    <TableContainer component={Paper}>
      {data != null ? (
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Aurthor</StyledTableCell>
              <StyledTableCell align="right">ISBN #</StyledTableCell>
              <StyledTableCell align="right">Borrowed Date</StyledTableCell>
              <StyledTableCell align="right">Due Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((book) => (
              <StyledTableRow key={book.id}>
                <StyledTableCell component="th" scope="row">
                  {book.bookName}
                </StyledTableCell>
                <StyledTableCell align="right">{book.aurthor}</StyledTableCell>
                <StyledTableCell align="right">{book.isbn}</StyledTableCell>
                <StyledTableCell align="right">
                  {book.borrowData}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {book.returnDate}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </TableContainer>
  );
}

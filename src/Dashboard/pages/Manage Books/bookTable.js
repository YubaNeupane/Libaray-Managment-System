import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment';
import EditModel from './editModel';
import DeleteModel from './deleteModel';

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
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ books }) {
  const classes = useStyles();

  function toDateTime(secs, nano) {
    let t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    t.setMilliseconds(nano * 0.000001);
    return t;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cover</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Aurthor</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">ISBN</StyledTableCell>
            <StyledTableCell align="right">Last Update</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <StyledTableRow key={book.id}>
              <StyledTableCell component="th" scope="row">
                <Avatar alt={book.bookName} src={book.imageUrl} />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {book.bookName}
              </StyledTableCell>
              <StyledTableCell align="right">{book.aurthor}</StyledTableCell>
              <StyledTableCell align="right">{book.quantity}</StyledTableCell>
              <StyledTableCell align="right">{book.isbn}</StyledTableCell>
              <StyledTableCell align="right">
                <Moment toNow>
                  {toDateTime(
                    book.lastUpdated.seconds,
                    book.lastUpdated.nanoseconds
                  )}
                </Moment>
              </StyledTableCell>
              <StyledTableCell align="right">
                <EditModel book={book} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <DeleteModel book={book} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

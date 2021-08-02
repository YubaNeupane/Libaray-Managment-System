import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import MoreInfoModel from './MoreInfoModel';
import EditUserModel from './EditUserModel';

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

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function UserTable({ users, currentUser }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddCircleIcon />}
      >
        Create User
      </Button>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cover</StyledTableCell>
            <StyledTableCell align="left">UID</StyledTableCell>
            <StyledTableCell align="left">First Name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">More Info</StyledTableCell>
            {currentUser.isAdmin ? (
              <StyledTableCell align="left">Edit User</StyledTableCell>
            ) : null}
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.uid}>
              <StyledTableCell component="th" scope="row">
                <Avatar className={classes.orange}>{user.firstName[0]}</Avatar>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {user.uid}
              </StyledTableCell>
              <StyledTableCell align="left">{user.firstName}</StyledTableCell>
              <StyledTableCell align="left">{user.lastName}</StyledTableCell>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
              <StyledTableCell align="left">
                <MoreInfoModel />
              </StyledTableCell>
              {currentUser.isAdmin ? (
                <StyledTableCell align="left">
                  <EditUserModel user={user} />
                </StyledTableCell>
              ) : null}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

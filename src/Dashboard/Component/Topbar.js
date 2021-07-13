import React from 'react';
import './styles/topbar.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import TopMenu from './styles/TopMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function Topbar({ userData }) {
  const classes = useStyles();
  return (
    <div className="topbar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">Super Library Management</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <div className={classes.root}>
              <TopMenu userData={userData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

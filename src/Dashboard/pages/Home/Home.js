import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import FeaturedInfo from '../../Component/FeaturedInfo';
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <FeaturedInfo />
      <FeaturedInfo />
      <FeaturedInfo />
      <FeaturedInfo />
    </main>
  );
}

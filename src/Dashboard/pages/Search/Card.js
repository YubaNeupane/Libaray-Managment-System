import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip';
import { Divider } from '@material-ui/core';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 420,
    minWidth: 420,
  },
  media: {
    paddingTop: '100%',
    paddingBottom: '100%',
    height: '100%',
    width: '100%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[800],
  },
  expandOpen2: {
    transform: 'rotate(180deg)',
  },
}));

export default function CardView({ book }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const style = {
    maxWidth: 420,
    minWidth: 420,
    maxHeight: 450,
    minHeight: 450,
  };

  function toDateTime(secs, nano) {
    let t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    t.setMilliseconds(nano * 0.000001);
    console.log(t.toLocaleTimeString());
    return t;
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {book.quantity}
            </Avatar>
          }
          title={book.bookName}
          subheader={book.aurthor}
        />
        <CardMedia>
          <img src={book.imageUrl} style={style} />
        </CardMedia>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body" color="black" component="p">
            {book.preface}
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions>
        <Chip color="primary" label={`ISBN: ${book.isbn}`} />
        <Chip
          label={
            <Moment toNow>
              {toDateTime(
                book.lastUpdated.seconds,
                book.lastUpdated.nanoseconds
              )}
            </Moment>
          }
        ></Chip>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
          <Typography
            className={clsx(classes.expand2, {
              [classes.expandOpen]: expanded,
            })}
          >
            Read More
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(0.5),
    '&:hover': {
      transform: 'translateY(-5px)',
      transition: `ease-out 0.4s `,
      backgroundColor: theme.custom.palette.darkRed,
      opacity: '100%'
    },
    transition: 'ease-out 0.4s',
  },
  cardMedia: {
    [theme.breakpoints.up('lg')]: {
      minWidth: theme.spacing(52.5)
    },
    [theme.breakpoints.up('md')]: {
      minWidth: theme.spacing(42.5)
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: theme.spacing(30)
    },
    display: 'flex',
    position: 'relative',
    height: theme.spacing(38),
    width: '100%'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.text.secondary,
    height: '82px',
    padding: theme.spacing(2.6, 1, 2.5, 2)
  },
  cardTitle: {
    fontFamily: 'Verdana',
    fontSize: theme.spacing(2),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  hoverEffect: {
    '&:hover': {
      transform: 'scale(1.2)',
      cursor: 'pointer'
    },
    '&:active': {
      transform: 'scale(1)'
    }
  },
}));
const CommonCard = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card className={classes.card}>
        <div>
          <CardMedia className={classes.cardMedia}
            image={children.thumbnail}>
          </CardMedia>
        </div>
        <CardContent className={classes.cardContent}>
          <Typography variant='h6' className={classes.cardTitle}>
            {children.name}
          </Typography>
          <ArrowForwardIosIcon fontSize='small' className={classes.hoverEffect} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CommonCard;
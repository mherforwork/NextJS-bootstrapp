
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import ContainedButton from 'components/Buttons/ContainedButton';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down(740)]: {
      width: `calc(100vw - ${theme.spacing(10)}px)`
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: theme.spacing(27.6),
    width: theme.spacing(85),
    borderRadius: theme.spacing(0.5)
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    fontFamily: 'Verdana',
    fontStyle: 'Bold',
    fontSize: '14px',
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(20.5),
    height: theme.spacing(6.5)
  },
  footerTitle: {
    fontFamily: 'Verdana',
    fontStyle: 'Bold',
    fontSize: theme.spacing(3)
  },
  footerContent: {
    fontFamily: 'Verdana',
    fontStyle: 'Regular',
    fontSize: theme.spacing(2)
  }
}));

const BoardFooter = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography variant='h6' className={classes.footerTitle}>Add another child</Typography>
        <Typography align='center' className={classes.footerContent}>You'll need a class code from your teacher to get started</Typography>
      </CardContent>
      <CardActions>
        <ContainedButton className={classes.addButton}> Add child </ContainedButton>
      </CardActions>
    </Card>
  );
};

export default BoardFooter;
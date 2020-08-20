
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import CommonCard from 'components/CommonCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  container: {
    display: 'flex',
    padding: `2px ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
    flexGrow: 1,
    margin: 0
  }
}));

const BoardBody = ({ childrens }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.container}>
        {
          childrens && childrens.map((children, index) => {
            return (
              <CommonCard children={children} key={index} />
            )
          })
        }
      </Grid>
    </div>
  );
};

export default BoardBody;

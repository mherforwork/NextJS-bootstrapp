
import { makeStyles } from '@material-ui/core/styles';

import CardBoard from 'components/CardBoard';
import { childrens } from 'utils/helpers/dummy-data';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2)
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: theme.custom.layout.topAreaHeight,
    height: `calc(100vh - ${theme.custom.layout.topAreaHeight + theme.custom.layout.footerAreaHeight}px)`
  }
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardBoard childrens={childrens} />
    </div>
  );
};

export default LandingPage;

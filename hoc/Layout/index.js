
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

const Layout = ({ content }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {content}
    </div>
  );
};

export default Layout;
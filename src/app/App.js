import { BasicLayout } from '../Layouts/BasicLayout';
import useStyles from './index';
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BasicLayout />
    </div>
  );
};
export default App;

import BasicLayout from '../Layouts/BasicLayout';
import useStyles from './index';
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BasicLayout />
    </div>
  );
}

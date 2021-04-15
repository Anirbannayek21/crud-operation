import { Fab, makeStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import './App.css';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Home from './component/pages/Home';
import NavBar from './layout/NavBar';
import AddIcon from '@material-ui/icons/Add';
import Adduser from './component/users/Adduser';
import { NavLink } from 'react-router-dom';
import Edituser from './component/users/Edituser';
import Viewuser from './component/users/Viewuser'

const useStyles = makeStyles((theme) => ({
  add: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
    zIndex: theme.zIndex.tooltip
  }
}))

function App() {
  const classes = useStyles();
  return (
    <>
      <Fab component={NavLink} to="/add" color="primary" className={classes.add} variant="extended">
        <AddIcon /> add user
      </Fab>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/add" component={Adduser} />
        <Route exact path="/edit/:id" component={Edituser} />
        <Route exact path="/view/:id" component={Viewuser} />
      </Switch>
    </>
  );
}

export default App;

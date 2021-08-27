import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import NewPost from './Pages/NewPost/NewPost'
import Posts from './Pages/Posts/Posts';
import Navbar from './Pages/Navbar/Navbar';
import UpdatePost from './Pages/Update/Update';


const App = () => {
  return (
    <Router>
       <Navbar />
      <Switch>
        <Route exact path="/" ><Home/></Route>
        <Route exact path="/new"><NewPost/></Route>
        <Route exact path="/posts"><Posts/></Route> 
        <Route exact path="/feed/:id"><UpdatePost/></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
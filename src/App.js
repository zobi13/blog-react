import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import AddPost from './pages/AddPost';
import AppPosts from './pages/AppPosts';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/cars'>Posts</Link>
            </li>
            <li>
              <Link to='/add'>Add new post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/posts'>
            <AppPosts />
          </Route>
          {/* <Route exact path='/add'>
            <AddPost />
          </Route>
          <Route exact path='/edit/:id'>
            <AddPost />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

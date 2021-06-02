import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreatePost from "./Components/CreatePost/CreatePost";
import EditPost from "./Components/EditPost/EditPost";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PostData from "./Components/PostData/PostData";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
        <PrivateRoute path="/home">
          <Home/>
        </PrivateRoute>
        <Route path="/login">
            <Login/>
        </Route>
        <PrivateRoute path="/editPost/post/:id">
            <EditPost/>
        </PrivateRoute>
        <PrivateRoute path="/createPost">
            <CreatePost/>
        </PrivateRoute>
        <PrivateRoute path="/postData">
            <PostData/>
        </PrivateRoute>
        <PrivateRoute exact path="/">
          <Home/>
        </PrivateRoute>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  </userContext.Provider>
  );
}

export default App;

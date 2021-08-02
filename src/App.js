import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import Navbar from "./components/navbar/Navbar";
import CreateBlog from "./pages/createBlog/CreateBlog";
import Home from "./pages/home/Home";
import React from "react";

const name = 'Dinushi Jayasekara';

export const User = React.createContext(name);

function App() {
  return (
    <div className="App">
      <Router>

        <User.Provider value={name}>
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/create">
              <CreateBlog />
            </Route>

            <Route path="/blogs/:author/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </User.Provider>

      </Router>
    </div>
  );
}

export default App;

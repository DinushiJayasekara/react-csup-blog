import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import Navbar from "./components/navbar/Navbar";
import CreateBlog from "./pages/createBlog/CreateBlog";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/create">
            <CreateBlog />
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

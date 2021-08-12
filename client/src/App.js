import "./App.css";
import { Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import DesignProjects from "./screens/DesignProjects/DesignProjects";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/design_projects">
        <DesignProjects/>
      </Route>
    </div>
  );
}

export default App;

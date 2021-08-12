import "./App.css";
import { Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import DesignProjects from "./screens/DesignProjects/DesignProjects";
import DesignProjectDetail from "./screens/DesignProjectDetail/DesignProjectDetail";
import DevProjects from "./screens/DevProjects/DevProjects";
import DevProjectDetail from "./screens/DevProjectDetail/DevProjectDetail"

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/design_projects">
        <DesignProjects/>
      </Route>
      <Route exact path="/design_projects/:id" component={DesignProjectDetail} />
      <Route exact path="/developer_projects">
        <DevProjects/>
      </Route>
      <Route exact path="/developer_projects/:id" component={DevProjectDetail} />
    </div>
  );
}

export default App;

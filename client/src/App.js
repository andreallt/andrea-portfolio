import "./App.css";
import { Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import DesignProjects from "./screens/DesignProjects/DesignProjects";
import DesignProjectDetail from "./screens/DesignProjectDetail/DesignProjectDetail";
import DesignProjectEdit from "./screens/DesignProjectEdit/DesignProjectEdit.jsx";
import DesignProjectAdd from "./screens/DesignProjectAdd/DesignProjectAdd.jsx";
import DevProjects from "./screens/DevProjects/DevProjects";
import DevProjectDetail from "./screens/DevProjectDetail/DevProjectDetail";
import { verify } from "./service/admin";
import Login from "./screens/Login/Login";
import { useEffect, useState } from "react";

function App() {
  const [admin, setAdmin] = useState(null)

  useEffect(() => {
    const fetchAdmin = async () => {
      const admin = await verify()
      admin ? setAdmin(admin) : setAdmin(null) 
    }
    fetchAdmin()
    }, [])

  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/login">
        <Login setAdmin={setAdmin}/>
      </Route>
      <Route exact path="/design_projects">
        <DesignProjects/>
      </Route>
      <Route exact path="/add" component={DesignProjectAdd} admin={admin}/>
      <Route exact path="/design_projects/:id" component={DesignProjectDetail} />
      <Route exact path="/design_projects/:id/edit" component={DesignProjectEdit} admin={admin}/>
      <Route exact path="/developer_projects">
        <DevProjects/>
      </Route>
      <Route exact path="/developer_projects/:id" component={DevProjectDetail} />
          
    </div>
  );
}

export default App;

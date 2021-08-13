import { useState, useEffect } from "react";
import DevProject from "../../components/DevProject/DevProject.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import { getAllDevelopers } from "../../service/developerProject";

const DevProjects = (props) => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const fetchDevs= async () => {
      const allDevs = await getAllDevelopers()
      setDevs(allDevs)
    }
    fetchDevs()
  }, [])

  return (
    <Layout admin={props.admin}>
   <div className='designs'>
        {devs.map((dev, index) => {
          return (
            < DevProject
              name={dev.name}
              image_url={dev.image_url}
              github_url={dev.github_url}
              web_url={dev.web_url}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default DevProjects
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
    <Layout admin={props.admin} >
      <section className="icons">
        <img className="icon" src="https://imgur.com/6bbdJXw.png" alt="HTML"/>
        <img className="icon" src="https://imgur.com/12g4gdD.png" alt="css" />
        <img className="icon" src="https://imgur.com/XxPMXZa.png" alt="JavaScript"/>
        <img className="icon" src="https://imgur.com/O2SGzz2.png" alt="react"/>
        <img className="icon"  src="https://imgur.com/740cn0P.png" alt="express"/>
        <img className="icon" src="https://imgur.com/HDvOP3a.png" alt="node"/>
        <img className="icon" src="https://imgur.com/8S73zZR.png" alt="git"/>
        <img className="icon" src="https://imgur.com/kP9zhYk.png" alt="mongoDB"/>
        <img className="icon" src="https://imgur.com/sScVgck.png" alt="sql"/>
        <img className="icon"src="https://imgur.com/vN9eNg0.png" alt="postgresql"/>
        <img className="icon" src="https://imgur.com/jWtiD2G.png" alt="rails" />
        <img className="icon" src="https://imgur.com/I7NRqX2.png" alt="ruby"/>
      </section>
   <div className='dev-projects'>
        {devs.map((dev, index) => {
          return (
            < DevProject
              admin={props.admin}
              name={dev.name}
              image_url={dev.image_url}
              github_url={dev.github_url}
              web_url={dev.web_url}
              id={dev.id}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default DevProjects
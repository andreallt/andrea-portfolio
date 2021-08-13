import { useState, useEffect } from "react";
import './DevProjectDetail.css'
import Layout from "../../components/Layout/Layout";
import { getDeveloper } from "../../service/developerProject";
import { useParams, Link } from "react-router-dom";

const DevProjectDetail = (props) => {

 const [devDetail, setDevDetail] = useState(null);
 const [isLoaded, setLoaded] = useState(false);
 const { id } = useParams();

 useEffect(() => {
  const fetchDevDetail = async () => {
  const devDetail = await getDeveloper(id)
  setDevDetail(devDetail);
  setLoaded(true);
  };
  fetchDevDetail();
 }, [id])

 if (!isLoaded) {
   return <h1>Loading...</h1>
 }

  return(
    <Layout admin={props.admin}>
      <div className="dev-detail">
                <div className="name">{devDetail.name}</div>
                <img className="dev-detail-image" src={devDetail.image_url} alt={devDetail.name} />
                <div className="detail">
                    <div className="library">{devDetail.library}</div>
                    <div className="description">{devDetail.description}</div>
               </div>
                 <div className="button-container">
                        <button className="github-button">{devDetail.github_url}</button>
                        <button className="web-button" >{devDetail.web_url}</button>
                </div>
            </div>
    </Layout>

  )
}

export default DevProjectDetail
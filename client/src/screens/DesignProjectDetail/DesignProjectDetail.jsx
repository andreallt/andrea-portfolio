import { useState, useEffect } from "react";
import './DesignProjectDetail.css'
import Layout from "../../components/Layout/Layout";
import { getDesign } from "../../service/designProject";
import { useParams, Link } from "react-router-dom";

const DesignProjectDetail = (props) => {

 const [desDetail, setDesDetail] = useState(null);
 const [isLoaded, setLoaded] = useState(false);
 const { id } = useParams();

 useEffect(() => {
  const fetchDesDetail = async () => {
  const desDetail = await getDesign(id)
  setDesDetail(desDetail);
  setLoaded(true);
  };
  fetchDesDetail();
 }, [id])

 if (!isLoaded) {
   return <h1>Loading...</h1>
 }

  return(
    <Layout>
      <div className="des-detail">
                <img className="main-image" src={desDetail.image_1} alt={desDetail.name}/>
                <div className="detail">{desDetail.detail}</div>
                <iframe src={desDetail.e_url} className="e-media"></iframe>
                <img className="main-image" src={desDetail.image_2} alt={desDetail.name}/>
      </div>
    </Layout>

  )
}

export default DesignProjectDetail
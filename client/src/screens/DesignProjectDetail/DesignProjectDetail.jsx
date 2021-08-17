import { useState, useEffect } from "react";
import "./DesignProjectDetail.css";
import Layout from "../../components/Layout/Layout";
import { getDesign, deleteDesign } from "../../service/designProject";
import { useParams, Link } from "react-router-dom";

const DesignProjectDetail = (props, {admin}) => {
  const [desDetail, setDesDetail] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchDesDetail = async () => {
      const desDetail = await getDesign(id);
      setDesDetail(desDetail);
      setLoaded(true);
    };
    fetchDesDetail();
  }, [id]);

  if (!isLoaded) {
    return <h1> Loading... </h1>;
  }

  return (
    <Layout admin={props.admin} >
      <div className="des-detail">
        {admin ? 
      <div className="button-container">
          <Link
            className="e-button"
            to={`/design_projects/${desDetail.id}/edit`}
          >
            Edit
          </Link>
          <Link
            className="e-button"
            onClick={() => deleteDesign(desDetail.id)}
          >
            Delete
          </Link>
        </div> : <></>}

        <div className="main">
        <img
          className="main-image"
          src={desDetail.image_1}
          alt={desDetail.name}
        />
        <p className="detail">{desDetail.detail}</p>
        </div>
      
       {desDetail.e_url == "" ? <div ></div> : <iframe src={desDetail.e_url} className="e-media"></iframe>}
        
        <div className="images">
        <img
          className="e-image"
          src={desDetail.image_2}
          alt={desDetail.name}
        />
        <img
          className="e-image"
          src={desDetail.image_3}
          alt={desDetail.name}
        />
        </div>
      </div>
    </Layout>
  );
};

export default DesignProjectDetail;

import { useState, useEffect } from "react";
import "./DesignProjectDetail.css";
import Layout from "../../components/Layout/Layout";
import { getDesign, deleteDesign } from "../../service/designProject";
import { useParams, Link } from "react-router-dom";

const DesignProjectDetail = (props) => {
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
    return <h1>Loading...</h1>;
  }

  return (
    <Layout admin={props.admin}>
      <div className="des-detail">


        <div className="button-container">
          <Link
            className="edit-button"
            to={`/design_projects/${desDetail.id}/edit`}
          >
            Edit
          </Link>
          <button
            className="delete-button"
            onClick={() => deleteDesign(desDetail.id)}
          >
            Delete
          </button>
        </div>


        <img
          className="main-image"
          src={desDetail.image_1}
          alt={desDetail.name}
        />
        <div className="detail">{desDetail.detail}</div>
        <iframe src={desDetail.e_url} className="e-media"></iframe>
        <img
          className="main-image"
          src={desDetail.image_2}
          alt={desDetail.name}
        />
      </div>
    </Layout>
  );
};

export default DesignProjectDetail;

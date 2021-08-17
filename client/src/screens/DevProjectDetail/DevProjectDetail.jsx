import { useState, useEffect } from "react";
import "./DevProjectDetail.css";
import Layout from "../../components/Layout/Layout";
import { getDeveloper } from "../../service/developerProject";
import { useParams } from "react-router-dom";

const DevProjectDetail = (props) => {
  const [devDetail, setDevDetail] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchDevDetail = async () => {
      const devDetail = await getDeveloper(id);
      setDevDetail(devDetail);
      setLoaded(true);
    };
    fetchDevDetail();
  }, [id]);

  if (!isLoaded) {
    return <h1> Loading... </h1>;
  }

  return (
    <Layout admin={props.admin}>
      <div className="dev-detail">
        <div className="dev-left">
          <div className="library">{devDetail.library}</div>
          <p className="dev-text">{devDetail.detail}</p>
        <div className="d-buttons">
         <a href={devDetail.github_url} target="_blank"><button className="dev-button">GITHUB</button></a> 
         <a href={devDetail.web_url} target="_blank" > <button className="dev-button">SITE</button></a>
        </div>
        </div>

        <section className="dev-right">
          <div className="dev-dname">{devDetail.name}</div>
          <img
            className="dev-detail-image"
            src={devDetail.image_url}
            alt={devDetail.name}
          />
        </section>

      </div>
    </Layout>
  );
};

export default DevProjectDetail;

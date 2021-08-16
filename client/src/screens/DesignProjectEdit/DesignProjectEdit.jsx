import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import { getDesign, updateDesign } from "../../service/designProject.js";
import { useParams, Redirect } from "react-router-dom";
import "./DesignProjectEdit.css";

const DesignProjectEdit = (props) => {
  const [design, setDesign] = useState({
    name: "",
    image_1: "",
    image_2: "",
    image_3: "",
    e_url: "",
    detail: "",
    category: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchDesign = async () => {
      const design = await getDesign(id);
      setDesign(design);
    };
    fetchDesign();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDesign({
      ...design,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateDesign(id, design);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/design_projects/${id}`} />;
  }

  return (
    <Layout admin={props.admin}>
      <div className="edit-design">
        <img
          className="edit-design-image"
          src={design.image_1}
          alt={design.name}
        />
        <section className="form-div">
        <form className="edit-form" onSubmit={handleSubmit}>
          <label> Image  --> </label>
          <input
            className="edit-image-1"
            placeholder="Main Image"
            value={design.image_1}
            name="image_1"
            required
            onChange={handleChange}
          />
          <label> Detail  --> </label>
          <textarea
            className="edit-detail"
            placeholder="Detail"
            value={design.detail}
            name="detail"
            required
            onChange={handleChange}
          />
          <label> Link   --> </label>
          <input
            className="e-url"
            placeholder="Image"
            value={design.e_url}
            name="e_url"
            onChange={handleChange}
          />
          <label> + Image --> </label>
          <input
            className="edit-image-2"
            placeholder="Image"
            value={design.image_2}
            name="image_2"
            onChange={handleChange}
          />
          <label> + Image --> </label>
          <input
            className="edit-image-3"
            placeholder="Image"
            value={design.image_3}
            name="image_3"
            onChange={handleChange}
          />
          <button id="save-edit" type="submit" className="save-button">
            SAVE
          </button>
        </form>
        </section>
      </div>
    </Layout>
  );
};

export default DesignProjectEdit;

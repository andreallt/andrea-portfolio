import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import { createDesign } from "../../service/designProject.js";
import { Redirect } from "react-router-dom";
import "./DesignProjectAdd.css";

const DesignProjectAdd = (props) => {
  const [design, setDesign] = useState({
    name: "",
    image_1: "",
    image_2: "",
    image_3: "",
    e_url: "",
    detail: "",
    category: "",
    admin_id: 1,
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDesign({
      ...design,
      [name]: value,
      admin_id: 1,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createDesign(design);
    setCreated(created);
  };

  if(isCreated){
    return <Redirect to={`/design_projects`} />;
  }

  return (
    <Layout admin={props.admin}>
      <div className="addform-grid">
        <form onSubmit={handleSubmit} className="add-form">
          <input
            placeholder="Name --> "
            className="add"
            value={design.name}
            name="name"
            required
            onChange={handleChange}
          />
          <input
            placeholder="Category -->"
            className="add"
            value={design.category}
            name="category"
            required
            onChange={handleChange}
          />
          <input
            placeholder="Image   -->"
            className="add"
            value={design.image_1}
            name="image_1"
            required
            onChange={handleChange}
          />
          <textarea
           placeholder="Detail  -->"
            className="add"
            value={design.detail}
            name="detail"
            required
            onChange={handleChange}
          />
          <input
          placeholder="Link    -->"
            className="add"
            value={design.e_url}
            name="e_url"
            onChange={handleChange}
          />
          <input
            placeholder="+ Image -->"
            className="add"
            value={design.image_2}
            name="image_2"
            onChange={handleChange}
          />
          <input
            placeholder="+ Image -->"
            className="add"
            value={design.image_3}
            name="image_3"
            onChange={handleChange}
          />
          <button id="save-add" type="submit" >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default DesignProjectAdd;

import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import { getDesign, updateDesign } from "../../service/designProject.js";
import { useParams, Redirect } from "react-router-dom";
import "./designProjectEdit.css"

const DesignProjectEdit = (props) => {
  const [design, setDesign] = useState ({
    name: "",
    image_1:"",
    image_2: "",
    image_3:"",
    e_url:"",
    detail:"",
    category:""
  });
 
  const [isUpdated, setUpdated] = useState(false);
  let {id} = useParams();

  useEffect(()=>{
    const fetchDesign = async () => {
      const design =  await getDesign(id);
      setDesign(design);
    };
    fetchDesign();
  },[id]);

  const handleChange = (e) =>{
    const { name, value } = e.taget;
    setDesign({
      ...design,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateDesign(id, desData);
    setUpdated(updated);
  };

  if(isUpdated){
    return <Redirect to={`/design_projects/${id}`} />;
  }


  return(
    <Layout>
    <div>
    <img  className='edit-design-image'
            src={design.image_1}
            alt={design.name}
          />
    <form onSubmit={handleSubmit}>
     <input
     className='edit-image-1'
     placeholder='Image Link'
     value={product.imgURL}
     name='imgURL'
     required
     onChange={handleChange}
     />
    </form>
    </div>
    </Layout>

  )
}
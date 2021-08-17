import { useState, useEffect } from "react";
import Design from "../../components/Design/Design.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import { getAllDesigns } from "../../service/designProject";

const DesignProjects = (props) => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const fetchDesigns = async () => {
      const allDesigns = await getAllDesigns()
      setDesigns(allDesigns)
    }
    fetchDesigns()
  }, [])

  return (
    <Layout admin={props.admin}>
   <div className='designs'>
        {designs.map((design, index) => {
          return (
            < Design
              admin={props.admin}
              name={design.name}
              image_1={design.image_1}
              category={design.category}
              key={index}
              id={design.id}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default DesignProjects
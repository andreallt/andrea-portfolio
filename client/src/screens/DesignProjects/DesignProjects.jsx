import { Design } from "../../components";
import { Layout } from "../../components";
import { useState, useEffect } from "react";
import { getAllDesigns } from "../../services/DesignProject";

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
    <Layout>
   <div className='designs'>
        {setDesigns.map((design, index) => {
          return (
            <Design
              name={design.name}
              image_1={design.image_1}
              category={design.category}
              key={index}
            />
          )
        })}
      </div>



    </Layout>
  )
}

export default DesignProjects
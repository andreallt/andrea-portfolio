import api from "./apiConfig"

export const getAllDesigns = async () => {
  const res = await api.get("/design_projects")
  return res.data
}

export const getOneDesign = async (designID) => {
  const res = await api.get(`/design_projects/${designID}`)
  return res.data
}

export const deleteDesign = async (designID) => {
  await api.delete(`/design_projects/${designID}`)
}

export const createDesign = async (designData) => {
  const res = await api.post("/design_projects", { design: designData })
  return res.data
}

export const updateDesign = async (designData, designID) => {
  const res = await api.put(`/design_projects/${designID}`, { design: designData })
  return res.data
}

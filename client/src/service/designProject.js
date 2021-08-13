import api from "./apiConfig"

export const getAllDesigns = async () => {
  const res = await api.get("/design_projects")
  return res.data
}

export const getDesign = async id => {
  const res = await api.get(`/design_projects/${id}`)
  return res.data
}

export const deleteDesign = async id => {
  await api.delete(`/design_projects/${id}`)
}

export const createDesign = async (design) => {
  const res = await api.post("/design_projects", design )
  return res.data
}

export const updateDesign = async (id, design) => {
  const res = await api.put(`/design_projects/${id}`, design)
  return res.data
}

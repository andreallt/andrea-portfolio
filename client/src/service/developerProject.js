import api from "./apiConfig"

export const getAllDevelopers = async () => {
  const res = await api.get("/developer_projects")
  return res.data
}

export const getOneDeveloper = async (developerID) => {
  const res = await api.get(`/developer_projects/${developerID}`)
  return res.data
}

export const deleteDeveloper = async (developerID) => {
  await api.delete(`/developer_projects/${developerID}`)
}

export const createDeveloper = async (developerData) => {
  const res = await api.post("/developer_projects", { developer: developerData })
  return res.data
}

export const updateDeveloper = async (developerData, developerID) => {
  const res = await api.put(`/developer_projects/${developerID}`, { developer: developerData })
  return res.data
}

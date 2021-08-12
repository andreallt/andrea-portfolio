import api from "./apiConfig"

export const getAllDevelopers = async () => {
  try {
  const res = await api.get("/developer_projects")
  return res.data
}  catch (error) {
  throw error
}
}

export const getDeveloper = async id => {
  try {
  const res = await api.get(`/developer_projects/${id}`)
  return res.data
}  catch (error) {
  throw error
}
}

export const deleteDeveloper = async id => {
  try {
  await api.delete(`/developer_projects/${id}`)
}  catch (error) {
  throw error
}
}

export const createDeveloper = async devData => {
  try {
  const res = await api.post("/developer_projects", devData)
  return res.data
}  catch (error) {
  throw error
}
}

export const updateDeveloper = async (id, devData) => {
  try {
  const res = await api.put(`/developer_projects/${id}`, devData)
  return res.data
}catch (error) {
  throw error
}
}

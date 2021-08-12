import api from "./apiConfig"

export const register = async (adminData) =>{
  const res = await api.post("/admins", { admin: adminData })
  const { token } = res.data
  if (token) {
    localStorage.setItem('authToken', token)
    api.defaults.headers.common.authorization = `Bearer ${token}`
    return res.data.admin
  }
}

export const login = async (adminData) => {
  const res = await api.post("/admins/login", { admin: adminData })
  const { token } = res.data
  if (token) {
    localStorage.setItem('authToken', token)
    api.defaults.headers.common.authorization = `Bearer ${token}`
    return res.data.admin
  }
}


export const verify = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const res = await api.get("/admins/verify")
    return res.data
  }
}

export const logout = () => {
  localStorage.removeItem("authToken")
  api.defaults.headers.common.authorization = null

}
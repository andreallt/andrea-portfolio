import { useEffect } from "react";
import {logout} from "../../service/admin"
import { useHistory } from "react-router-dom";

const Logout = (props) => {
  const { setAdmin } = props
  const history = useHistory()

  useEffect(() => {
    const adios = async() => {
      await logout()
      setAdmin(null)
      history.push("/")
    }
    adios()
  }, [history, setAdmin])

  return''
}

export default Logout
import {useState} from 'react'
import './Login.css'
import { login } from '../../service/admin'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const Login = (props) => {
  const history = useHistory();
  const { setAdmin } = props;

  const [ form, setForm ] = useState({
    name:"",
    password:"",
  });

  const handleChange = (event) => {
    setForm({
    ...form,
    [event.target.name]: event.target.value,
    })
  }

  const LetMeIn = async (event) => {
    event.preventDefault();
    const logIn = async () => {
      const admin = await login(form)
      setAdmin(admin);
      setTimeout(() => {
      history.push('/') 
    }, 200);
  };
  logIn();
}
    
  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if(form.isError){
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Login!</button>
    }
  }

  const {name, password} = form 

  return(
    <Layout admin={props.admin}>
    <h3>LogIn</h3>

    <div className='login-container'>
    <section className="login-label">
    <label>Name --> </label>
    <label>Password --> </label>
    </section>

    <form className="login-form" onSubmit={LetMeIn}>
      <input
        required
        type='text'
        name='name'
        value={name}
        placeholder='Hi Andy!'
        onChange={handleChange}
      />
      <input
        required
        name='password'
        value={password}
        type='password'
        placeholder='Password'
        onChange={handleChange}
      />
      {renderError()}
      <button id="loginb" type='submit'>ENTRALE</button>
    </form>
  </div>
  </Layout>
)
}

export default Login
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userNav = useNavigate();

// Frontend and Backend communication happens using this function
// when a new user register's
async function loginUser(event){
  event.preventDefault()
  userNav('/home')
 const response = await fetch('http://localhost:1337/api/login',{
  method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      email,
      password
    })
  })
// sddjfsbvfcnvcx nxc
  const data = await response.json()
  if (data.token){
    localStorage.setItem('token',data.token);
  }

  console.log(data)
}


  return (
    <div>
      <h1> Login</h1>
      <form onSubmit={loginUser}>
        <input 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          type="Email" 
          placeholder="Email"/>
          <br/>
        <input 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          type="password" 
          placeholder="Password"/>
          <br/>
          <input type='submit' value="Login"/>
          <br/>
          <Link to='/register'>New User Registeration</Link>
      </form>
    </div>
  );
}

export default App;

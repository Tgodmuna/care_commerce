import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register()  {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/register',{name,email,password})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err => console.log(err))
  }
  return (
    <section>
        <div>
            <div>
                <h1>Create a new account</h1>
            </div>
            <span>Already have an account ? <Link to='/login'>Sign In</Link> </span>

            <div>
                <form action='#' onSubmit={handleSubmit}>
                    <div>
                        <div>
                        <input
        type="text"
        name="username"
        placeholder="Username"
        // value={}
        onChange={(e)=>setName(e.target.value)}
      />                        </div>
                    </div>

                    <div>
                        <div>
                        <input
        type="email"
        name="email"
        placeholder="Email"
        // value={}
        onChange={(e)=>setEmail(e.target.value)}
      />                        </div>
                    </div>

                    <div>
                        <div>
                        <input
        type="password"
        name="password"
        placeholder="Password"
        // value={}
        onChange={(e)=>setPassword(e.target.value)}
      />                        </div>
                    </div>

                    <div>
                    <button>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Register

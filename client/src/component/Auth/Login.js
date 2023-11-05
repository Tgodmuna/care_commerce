import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import LoginMessage from './LoginMessage';

const Login=()=> {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const closeMessage = () => {
    setShowMessage(false);
  };
  const navigate = useNavigate()
    const [showForgotPasswordMessage, setShowForgotPasswordMessage] = useState(false);
     
      
    const handleForgotPassword = () => {
        setShowForgotPasswordMessage(true);
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/login', { email, password })
          .then(result => {
            console.log(result.data);
            if (result.data.message === 'successfull') {
              setShowMessage(true);
              setMessage('Login successful');
              navigate('/home');
            } else if (result.data === 'invalid password') {
              setShowMessage(true);
              setMessage('Invalid password. Please try again.');
            } else if (result.data === 'non existed record') {
              setShowMessage(true);
              setMessage('No record found. Please register first.');
            }
          })
          .catch(err => console.log(err));
      };
  return (
    <section>
        <div>
            <h1>Login to your account</h1>
        </div>

        <div>
            <form action='#' autoComplete='off' onSubmit={handleSubmit}>
                <div>
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

                
                </div>

                <div>
                    <div>
                    <button onClick={handleForgotPassword}>Forgot your password?</button>
                    {showForgotPasswordMessage && <p>A password reset email has been sent to your inbox.</p>}
                    </div>
                </div>

                <div>
                <button>Log In</button>
                </div>
            </form>
        </div>

        <div>
        <button onClick={() => navigate('/register')}>
                <span>you don't have an account</span>
            </button>
        </div>

        {showMessage && (
        <LoginMessage message={message} onClose={closeMessage} />
      )}
    </section>
  )
}

export default Login

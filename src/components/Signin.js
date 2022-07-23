import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };
  const mystyle = {
    color: "black",
    backgroundColor: "white",
    padding: "10px",
    fontFamily: "Arial",
    borderRadius: "102px"
  };
  const mybutton={
    backgroundColor: " blue",
    padding: "10px ",
    
    fontFamily: "Arial",
    borderRadius: "102px"
  }
  const inp={
    padding:"10px",
    margin:"10px"
  }
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-4xl font-bold py-2'>Log-in to your account</h1>
        
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2' style={inp}>
          {/* <label className='py-2 font-medium'>Email Address</label> */}
          <input onChange={(e) => setEmail(e.target.value)} style={mystyle} className='border p-3' type='email' placeholder="Email" / >
        </div>
        <div className='flex flex-col py-2' style={inp}>
          {/* <label className='py-2 font-medium'>Password</label> */}
          <input onChange={(e) => setPassword(e.target.value)} style={mystyle} className='border p-3' type='password' placeholder="Password"/>
        </div>
        <div style={inp}>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white' style={mybutton} > 
          Log In
        </button></div>
      </form>
      <div>
      <p className='py-2'>
          Don't have an account?{' '}
          <Link to='/signup' className='underline'>
            Sign up
          </Link>
          &nbsp;&nbsp;Now!!
        </p>
      </div>
    </div>
  );
};

export default Signin;

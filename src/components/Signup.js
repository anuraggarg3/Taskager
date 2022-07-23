import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './Signup.css';
// import { BsFillChatQuoteFill} from 'react-icons/fa';
import { BsFillEnvelopeFill } from "react-icons/bs";
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
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
    margin:"10px",
  
  }
  return (
    
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-5xl font-bold py-0'>Sign up </h1>
        
      </div>
      <form onSubmit={handleSubmit}>
        
        <div className='flex flex-col py-2' style={inp}>
       
          <input 
            onChange={(e) => setEmail(e.target.value)}
            className='border p-3'
            type='email'  style={mystyle} placeholder="Email"
          />
        </div>
        
        <div className='flex flex-col py-2' style={inp} >
          {/* <label className='py-2 font-medium'>Password</label> */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='border p-3'
            type='password'  style={mystyle} placeholder="Password"
          />
        </div>
        <div style={inp}>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'  style={mybutton}>
          Sign Up
        </button>
        </div>
        
      </form>
     
      <div><p className='py-2'> 
          Already have an account&nbsp;{' '}
          <Link to='/' className='underline'>
            Log in
          </Link>
          
        </p></div>
    </div>
  );
};

export default Signup;

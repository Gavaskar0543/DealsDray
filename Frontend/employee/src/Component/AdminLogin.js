import React, { useState } from 'react'
import axios from 'axios'
export default function AdminLogin() {
  const [email,setEmail] =useState('');
  const [password,setPassword] = useState('');
  const [isLogin,setLogin] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(email === '' || password === ''){
      alert('All fields Required')
      return;
    }
    const data = {
      email:email,
      password : password
    }
    setLogin(true);
    let url = "https://8000-gavaskar0543-dealsdray-29flmqjgomy.ws-us110.gitpod.io/api/v1/admin/verifyadmin"
    try{
    let response = await axios.post(url,data);
    if(response.status === 200){
      alert("login successfull")
      setLogin(false)
    }
    else{
      alert("something went wrong")
      setLogin(false)
    }

    }
    catch(error){
     alert("something went wrong")
     setLogin(false)
    }
  }
  return (
    <>
   <div style={{width:'100vw',height:'80vh'}} className='flex justify-center items-center'>
    
     <div  className='border border-2 px-4 py-4 drop-shadow-md' >
      <p  className='text-center text-2xl py-2 drop-shadow-md font-semibold'>Admin login</p>
      <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <input type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='w-64 rounded px-2 py-2  ' placeholder='Enter email'/>
      </div>
      <div className='mb-3'>
        <input type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='w-64 rounded px-2 py-2 ' placeholder='password'/></div>
      <div className='mt-3  flex  justify-center'>
        {!isLogin ? (        <button type='submit' className='px-4 py-2 rounded-md text-white font-semibold text-md bg-black hover:bg-sky-700'>Sign-in</button>
):(        <button type='submit' className='px-4 py-2 rounded-md text-white font-semibold text-md bg-black hover:bg-sky-700'>checking ...</button>
)}
      </div>

      </form>

     </div>

   </div>
    </>
  )
}

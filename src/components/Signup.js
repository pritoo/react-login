import React, { useState } from 'react'
import '../App.css';
import axios from 'axios'


const Signup = () => {
    const [user, setUser] =useState({
        username:"",
        email:"",
        password:"",
        cpassword:""
    })

    const handleChange = e => {
        
        const {name,value} =e.target
       // console.log(name,value)
       setUser({
           ...user,
           [name] : value
       })
    }

    const signup = () =>{
        const {username,email,password,cpassword}=user
        if(username && email && password && (password===cpassword)){
            //alert('valid')
            axios.post("http://localhost:9002/Signup",user)
            .then(res => (console.log(res)))
        }else{
            alert('invalid')
        }
       
    }
  return (
    <>
          <div className="card homepage-body">
            <div className="card-body">
        {/* {console.log("user",user)} */}
                <h1 className="card-title">Signup</h1>
                <div className='mb-3'>
                <input type="text" placeholder="Username" name="username" value={user.username} onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                <input type="email" placeholder="E-mail" name="email" value={user.email} onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                <input type="password" placeholder="confirm-Password" name="cpassword" value={user.cpassword} onChange={handleChange} />
                </div>
                
                <div className="btn btn-primary">Login</div>
                <h5>OR</h5>
                <div className="btn btn-primary" onClick={signup}>Signup</div>
            </div>
        </div>
    </>
  )
}

export default Signup
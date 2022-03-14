import React,{useState} from 'react';
import '../App.css';


const Login = () => {
    const [user, setUser] =useState({
        email:"",
        password:"",
    })

    const handleChange = e => {
        
        const {name,value} =e.target
       // console.log(name,value)
       setUser({
           ...user,
           [name] : value
       })
    }
  return (
    <>
        <div className="card homepage-body">
            <div className="card-body">
            {console.log("user",user)}
                <h1 className="card-title">Login</h1>
                <div className='mb-3'>
                <input type="email" placeholder="E-mail" name="email" value={user.email} onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
                </div>

                <div className="btn btn-primary">Login</div>
                <h5>OR</h5>
                <div className="btn btn-primary">Signup</div>
            </div>
        </div>
    </>
  )
}

export default Login
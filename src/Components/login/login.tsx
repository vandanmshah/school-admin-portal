import React, { useState } from 'react';
import axios from '../../../node_modules/axios'
import './login.css';
import  {API_URL}  from '../../config/dev/env'

const Login: React.FC<{}> = () => {

  const [loginCredentials, setloginCredentials] = useState({ email:'',password:''})

  // use to update state onchange of email and password
  const handleChange = (e:any) => {
    const {id , value} = e.target   
    setloginCredentials(prevState => ({
        ...prevState,
        [id] : value
    }))
}

  // use for API call on submit
 const handleSubmit = () => {
   // API call
   const url = API_URL + 'signin'
   
   axios.post(url,loginCredentials).then(res => {
     console.log(res.data,'eeeeeee')
   })
 }

  return (
    <>
      <div className='login'>Hello I am in login</div>  
      <input type="email" 
                       className="form-control" 
                       id="email" 
                      //  aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={loginCredentials.email}
                       onChange={handleChange}
                />
    
      <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={loginCredentials.password}
                        onChange={handleChange} 
                    />

      <button type="submit" onClick={handleSubmit}> Submit </button>
    )
    </>
  );
}

export default Login;

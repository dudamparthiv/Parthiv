import React,{useState} from "react";
import axios from 'axios'
import './Form.css' 

const Form = (props) =>{
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [mobile,setMobile]=useState('')
  const [userName,setUserName]=useState('')

  const onSubmit = e=>{
    e.preventDefault();
    props.submit();
    // fetch("https://ixonotest.herokuapp.com/api/User/submit-profile/",{
    //     method:'POST',
    //     headers:{
    //         'Accept':'application/json',
    //         'Contant-Type':'application/json',
    //     },
    //     body:JSON.stringify(data)
    // }).then((r)=>{
    //     r.json()
    // }).then(res=>{
    //     console.log(res)
    // })

    axios.post('https://ixonotest.herokuapp.com/api/User/submit-profile',{
      "email": email,
      "name": name,
      "mobileNum": mobile,
      "password": password,
      "username": userName,
    })
    .then(r=>{
        console.log(r.data)
    })
    .catch((error)=>{
        console.log(error)
    }); 
  }
  
  return(
    <>
    <div className="form">
        <h1 className='submit'>Submit Profile</h1>
        <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="Name">Name</label><br/>
            <input type='text' name='name' id='Name' value ={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email">Email</label><br/>
            <input type='email'name='email' id='email' value ={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="password">Password</label><br/>
            <input type='password'name='password'id='password' value ={password}onChange={e=>setPassword(e.target.value)}/> 
        </div>
        <div>
            <label htmlFor="mobile">Mobile</label><br/>
            <input type='number'name='mobile' id='mobile' value ={mobile}onChange={e=>setMobile(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="username">User Name</label><br/>
            <input type='text'name='userName' id='username' value ={userName}onChange={e=>setUserName(e.target.value)} />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
        </form>
    </div>
      
    </>
  )
}


export default Form;
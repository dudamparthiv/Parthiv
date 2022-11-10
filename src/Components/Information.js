import React,{useState} from 'react'
import axios from 'axios'

const Information = () => {
const [user,setUser]=useState([])
const onClick=()=>{
  axios.get('https://ixonotest.herokuapp.com/api/User/get-profiles')
  .then(result=>setUser(result.data))
}
const click=()=>{
  setUser([])
}

  return (
    <>
    <div>
        <span><button onClick={click} className='clear'>Clear Data</button></span>
        <span><button onClick={onClick} className='details'>Show Details</button></span>
    </div>
    <div>
      <table border={1}>
        <tbody>
          <tr>
            <th>S.No</th>
            <th>Email</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Password</th>
            <th>User Name</th>
          </tr>
          {
            user.map((item)=>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.mobileNum}</td>
                <td>{item.password}</td>
                <td>{item.username}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
    </>
  )
}



export default Information;

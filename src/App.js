import React,{useState} from 'react'
import Form from './Components/Form'
import Information from './Components/Information'

const App = () => {
  const [submit,setSubmit]=useState(false)
  const submitHandler=()=>{
    setSubmit(true)
  }
  return (
    <>
    {!submit && <Form submit={submitHandler}/>}
    {submit && <Information/>}
    </>
  )
}



export default App;
import React, { useState,useEffect} from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import {auth} from "./firebase/setup"

const App = () => {

  const [phone,setPhone] = useState("")
  const [user, setUser] = useState(null)
  const [otp,setOtp] = useState("")

  

  const sendOtp = async() =>{
    try{
      const recaptcha = new RecaptchaVerifier(auth,"recaptcha")
    const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
    setUser(confirmation)
    }catch(err){
      console.error(err) 
    }
    
  }

  const verifyOtp = async () =>{
    try{
      const data = await user.confirm(otp)
      console.log(data)

    }catch(err){
       console.error(err)
    }
      
  }
  return (
    <div >
    <form id="center">
    <input placeholder='Phone Number' onChange={(e)=> setPhone(e.target.value)}/>
    <div id="recaptcha">

    </div>
    <button onClick={sendOtp}>Send OTP</button><br/><br/>
    <input onChange={(e)=> setOtp(e.target.value)} placeholder='Otp'/>
    <button onClick={verifyOtp}>Verify Otp</button>
    </form>
   
    </div>
  )
}    

export default App
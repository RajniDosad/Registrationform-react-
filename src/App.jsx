import { useState } from 'react'
import { useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const[nam, setName]=useState("")
  const[email, setEmail]=useState("");

 function handleSubmit(e){
  e.preventDefault();
    alert(`Submitted name is: ${nam} and emial is ${email}`);
  }

   return(
    <>
    <form onSubmit={handleSubmit}className="p-6 max-w-sm mx-auto border bg-white rounded-xl space-y-4">
      <h2 className="text-xl font-bold">Registration Form</h2>
     <input type="text" value={nam} onChange={(e)=>setName(e.target.value)}  className="border p-2 w-full rounded"/>
     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="border p-2 w-full rounded"/>
     <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded font-bold active:text-sm " >Submit</button>
      </form>
    
         
    </>
  )
}


export default App;

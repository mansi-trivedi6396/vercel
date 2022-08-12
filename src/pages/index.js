// import React from "react"
// import { Match } from '@reach/router'
// import Appbar from "./Admin/Component/Appbar"



// export default function Home() {
  
//   <>
//     <Match path="/">
//       {
//         window.location.href="/Admin/Component/Appbar"
        
//       }
//     </Match>
// {/* <Appbar/> */}
  
   
    
//   </>

// }
import React from 'react'
import Appbar from "./Admin/Component/Appbar"
import Home from './Admin/Component/Home'

export default function index() {
  return (
    <>
    <Appbar/>
    <Home/>
    
    </>
  )
}



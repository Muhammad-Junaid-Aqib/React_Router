import React from 'react'
import { Routes, Route,Link } from "react-router-dom";
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import Comp4 from './Comp4'


const Comp1 = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Comp2 />}>
        <Route
          path="messages"
          element={<Comp3 />}
        />
        <Route path="tasks" element={<Comp4 />} />
      </Route>
    </Routes>
    </div>
    
//     <div class="app">
//     <nav>
//       <RouterLink to="/">Home</RouterLink> | 
//       <RouterLink to="/about">About</RouterLink>
//       <!-- <RouterLink to="/" -->
//     </nav>
//       <RouterView />    
//   </div>

  )
}

export default Comp1

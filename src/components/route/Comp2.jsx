import React from 'react'
import { Routes, Route,Link } from "react-router-dom";
import { Outlet  } from "react-router-dom";

const Comp2 = () => {
    return (
        <div>
            <Link to=''>HOME</Link>
            <Link to='/messages'>Comp3</Link>
            <Link to='/tasks'>Comp4</Link>
            {/* <Link to='/Help'>HELP</Link> */}
            <Outlet />
        </div>
    )
}


export default Comp2

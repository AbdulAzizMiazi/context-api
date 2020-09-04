import React, { useContext } from 'react';
import '../../App.css';
import { ContextAPI } from '../../App';

const Navbar = () => {
    const [clickNav, setClickNav] = useContext(ContextAPI)
    return (
        <div className="container">
            <h5 style={{fontSize:"20px"}}>This is NavBar. {clickNav}</h5>
            <button onClick={()=> setClickNav(clickNav + 1)}>Change State</button>
        </div>
    );
};

export default Navbar;
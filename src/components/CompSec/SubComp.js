import React, { useContext } from 'react';
import { ContextAPI } from '../../App';
import '../../App.css';

const SubComp = () => {
    const [subClick, setSubClick] = useContext(ContextAPI);
    return (
        <div className="container" style={{borderColor:"skyBlue", margin:"20px 5px"}}>
            <p>This is sub component of Second component. {subClick}</p>
            <button onClick={()=> setSubClick(subClick + 1)}>Change State</button>
        </div>
    );
};

export default SubComp;
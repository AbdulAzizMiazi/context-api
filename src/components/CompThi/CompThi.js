import React, { useContext } from 'react';
import '../../App.css';
import { ContextAPI } from '../../App';


const CompThi = () => {
    const dataFromContext3 = useContext(ContextAPI);
    const [click3, setClick3] = dataFromContext3;
    return (
        <div className="container">
            <h3>This is component Three. {dataFromContext3}</h3>
            <button onClick={()=> setClick3(click3 + 1)}>Change State</button>
        </div>
    );
};

export default CompThi;
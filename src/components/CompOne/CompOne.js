import React, { useContext } from 'react';
import '../../App.css';
import {ContextAPI} from '../../App'

const CompOne = () => {
    const dataFromContext1 = useContext(ContextAPI);
    const [click, setClick] = dataFromContext1;
    return (
        <div className="container">
            <h1>This Component One.  {dataFromContext1}</h1>
            <button onClick={()=>setClick(click+1)}>change State</button>
        </div>
    );
};

export default CompOne;
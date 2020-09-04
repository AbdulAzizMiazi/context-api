import React, { useContext } from 'react';
import '../../App.css';
import { ContextAPI } from '../../App';
import SubComp from './SubComp';

const CompSec = () => {
    const dataFromContext2 = useContext(ContextAPI);
    const [click2, setClick2] = dataFromContext2;
    return (
        <div className="container">
            <h2>This is Component Two. {dataFromContext2}</h2>
            <button onClick={()=> setClick2(click2+1)}>Change State</button>
            <SubComp />
        </div>
    );
};

export default CompSec;
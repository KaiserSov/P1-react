import React, {useState, Fragment} from 'react';

const Counter = () => {

    const [counterNum, setcounterNum] = useState(0);

    //Constante  para aumentar el número
    const aument = () => {
        console.log("Me picaste")
        setcounterNum(counterNum+1)
    }

    //Creación del componente botón click
    return (
        <Fragment>
            <h3>Primer componente {counterNum}</h3>
            <button onClick={aument}>Aumentar</button>
        </Fragment>
      );
}
 
export default Counter;
import React, {Fragment, useState} from "react";

const List = () => {

    const [arrayNumber, setNumber] = useState([1,2,3,4,5])

    const addElement = () => {
        console.log('Hubo click')
        setNumber([...arrayNumber, 6])
    }

        return (
            <Fragment>
                <h2>Lista</h2>
                <button onClick={addElement}>Agregar</button>
                {
                    arrayNumber.map((item,index) =>
                        <p key={index}>{item} - {index}</p>
                    )
                    /* 
                    - Aquí va a salir item 5 veces porque se puso en un pararfo de 5 recorridos en el Array mapeado
                    - Si pongo llaves a item, en el DOM sale la numeración del 1-5
                    - Cuando agrego Index, sale el número con la posicion 
                    //Ej: 
                    //1-0
                    //2-1
                    //3-2
                    */
                }
            </Fragment>
    )  
}
export default List
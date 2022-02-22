import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [data, setData] = useState({
        name: '',
        lastName: ''
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)//Para guardar en la consola cada letra
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault();
        console.log(data.name +' '+data.lastName)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className='row' onSubmit={sendData}>
                <div className='col-md-3'>
                    <input 
                        placeholder='Ingresa tu nombre'
                        className='form-control'
                        type='text'
                        name='name'
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className='col-md-3'>
                    <input 
                        placeholder='Ingresa tu apellido'
                        className='form-control'
                        type='text'
                        name='lastName'
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className='col-md-3'>
                    <button className='btn btn-primary' type='submit'>Enviar</button>
                </div>
            </form>

            <h3>{data.name} {data.lastName}</h3>

        </Fragment>
    );
}

export default Formulario;
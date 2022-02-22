import React, {Fragment, useState} from "react";


const Jsx = () => {

    //const saludo = "Hola JSX"
    const temperature = 21;

    return (
        <Fragment>
            <h2> ¿Hace frío o calor?</h2>
        <h4>
            {
                temperature > 20 ? "Está haciendo calor, !Que rico un jugo de maracuyá!" : "Que frío, tomese una limonada"
            }
        </h4>
        </Fragment>
    )
}

export default Jsx
import React from 'react';
//import Counter from './components/Counter';
//import Jsx from './components/Jsx';
//import List from './components/List';
//import Formulario from './components/Formulario';
import FormHook from './components/FormHook';


function App() {
  //Contador
  /*return (
    <div className="App">
      <h1>¡Hola mundo de React!</h1>
      <Counter />
    </div>
  );*/
/*

  //Lista y condición
  return (
    <div className="App">
      <h1>¡Hola mundo de React!</h1>
      <Jsx />
      <List />
    </div>
  )

  //Formulario que guarda cosas
  return (
    <div className='container mt-5'>
    <Formulario/>
  </div>
  );*/

  return (
    <div className='container mt-2'>
      <FormHook />
  </div>
  );
}

export default App;

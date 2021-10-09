import Mensaje from './Mensaje/index.js';

function App() {
  let estiloDeApp = {
    backgroundColor: "blue",
    fontSize: "20px",
    border: "5px solid red"
  };
  return (
    <div>
      <div
        id="idHola"
        className="hola"
        style={estiloDeApp}
      >
        <div className="App">
          <h1>Hola!!</h1>
        </div>
        <h1>Hola 3</h1>
        <Mensaje atributo='Hola mundo!' />
      </div>
      <Mensaje atributo='Que tal?' />

      <Mensaje atributo='Mensaje 1' />
      <Mensaje atributo='Mensaje 2' />
      <Mensaje atributo='Mensaje 3' />
      <Mensaje atributo='Mensaje 4' />
    </div>
  );
}

export default App;

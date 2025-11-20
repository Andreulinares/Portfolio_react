import logo from './logo.svg';
import './App.css';
import foto from './Img/prueba_card.jpg';

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Portfolio</h1>

    </div>
    <section className="container mt-5 text-center sobre-mi">
      <h2 className='mb-3'>Sobre mi</h2>
      <p>
        Hola, soy Andreu Linares, Desarrollador FullStack con una gran pasion por la informatica.
      </p>
    </section>
    <div className="container mt-5">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={foto}
            className="card-img-top"
            alt="Ejemplo" />
          <div className="card-body">
            <h5 className="card-title">Proyecto 1</h5>
            <p className="card-text">
              Ejemplo de proyecto realizado por mi.
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>
      </div></>
  );
}

export default App;

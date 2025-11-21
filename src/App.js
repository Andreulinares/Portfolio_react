import logo from './logo.svg';
import './App.css';
import foto from './Img/prueba_card.jpg';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Andreu Linares
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggle-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#inicio">
                Inicio
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#sobre-mi">
                Sobre mí
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#proyectos">
                Mis Proyectos
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
          </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="App">
      
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

    </div>

    <section className="sobre-mi">
      <h2 className='mb-3'>Sobre mi</h2>
      <p>
        Hola, soy Andreu Linares, Desarrollador FullStack con una gran pasion por la informatica.
      </p>
    </section>

    <div className="container mt-5">
      <div className="row justify-content-center">

    <div className="col-md-4 d-flex justify-content-center">
      <div className="card mi-card" style={{ width: '18rem' }}>
        <img src={foto} className="card-img-top" alt="Ejemplo" />
        <div className="card-body">
          <h5 className="card-title">Proyecto 1</h5>
          <p className="card-text">Ejemplo de proyecto realizado por mi.</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>

       <div className="col-md-4 d-flex justify-content-center">
      <div className="card mi-card" style={{ width: '18rem' }}>
        <img src={foto} className="card-img-top" alt="Ejemplo" />
        <div className="card-body">
          <h5 className="card-title">Proyecto 2</h5>
          <p className="card-text">Segundo proyecto interesante.</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>

    <div className="col-md-4 d-flex justify-content-center">
      <div className="card mi-card" style={{ width: '18rem' }}>
        <img src={foto} className="card-img-top" alt="Ejemplo" />
        <div className="card-body">
          <h5 className="card-title">Proyecto 3</h5>
          <p className="card-text">Tercer proyecto en el portafolio.</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default App;

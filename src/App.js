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

  <header className="hero">
  <div className="container text-center text-white">
    <h1 className="hero-title">Hola, soy Andreu Linares</h1>
    <p className="hero-subtitle">
      Desarrollador FullStack apasionado por la creación de experiencias digitales.
    </p>
    <a href="#proyectos" className="btn btn-primary btn-lg mt-3">
      Ver mis proyectos
    </a>
  </div>
  </header>

    <section className="sobre-mi">
      <h2 className='mb-3'>Sobre mi</h2>
      <p>
        Desarrollador FullStack con una gran pasión por la informática
        y la creación de soluciones modernas. Me encanta aprender nuevas tecnologías y mejorar
        como profesional cada día.
      </p>
      <a href="#proyectos" className="btn btn-secondary btn-lg mt-3">
      Leer mas
      </a>
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

    <footer className="footer bg-dark text-light mt-5 pt-4 pb-4">
    <div className="container">
      <div className="row">

        <div className="col-md-4 mb-3">
          <h5 className="fw-bold">Mi Portafolio</h5>
          <p>
            Desarrollador FullStack apasionado por crear soluciones web eficientes
            y modernas.
          </p>
        </div>

        <div className="col-md-4 mb-3">
          <h5 className="fw-bold">Enlaces</h5>
          <ul className="list-unstyled">
            <li><a href="#inicio" className="footer-link">Inicio</a></li>
            <li><a href="#sobre-mi" className="footer-link">Sobre mí</a></li>
            <li><a href="#proyectos" className="footer-link">Proyectos</a></li>
            <li><a href="#contacto" className="footer-link">Contacto</a></li>
          </ul>
        </div>

        <div className="col-md-4 mb-3">
          <h5 className="fw-bold">Contacto</h5>
          <div className="d-flex gap-3">

          <a
            href="mailto:andreulinaresalvarez@gmail.com"
            className="text-light fs-3 footer-icon"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>

          <a
            href="https://github.com/Andreulinares"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-3 footer-icon"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="www.linkedin.com/in/andreu-linares-alvarez-151710270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light fs-3 footer-icon"
          >
            <i className="bi bi-linkedin"></i>
          </a>

        </div>
      </div>

    </div>

      <div className="text-center mt-4 pt-3 border-top border-secondary">
        <p className="mb-0">
          © {new Date().getFullYear()} Andreu Linares — Todos los derechos reservados.
        </p>
      </div>
    </div>
    </footer>
    </>
  );
}

export default App;

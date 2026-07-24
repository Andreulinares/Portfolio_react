import foto from '../Img/prueba_card.jpg';
import { Link } from "react-router-dom";
import Particulas from './Particulas';
import { ReactTyped }  from "react-typed";

export default function Inicio(){
    return (
        <>
        <header className="hero">
            <Particulas />
            <div className="container text-center text-white">
                <h1 className="hero-title">Hola, soy Andreu Linares</h1>
                <p className="hero-subtitle">
                    Desarrollador FullStack apasionado por la creación de experiencias digitales.
                </p>
                <ReactTyped
                    className="typed-text"
                    strings={["Fullstack", "Web design", "Unity developer", "Programmer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <br>
                </br>
                <Link className="mt-5 botonLeer" to="/proyectos"><span>Mis proyectos</span></Link>
            </div>
        </header><section className="sobre-mi">
                <h2 className='mb-3'>Sobre mi</h2>
                <p>
                    Desarrollador FullStack con una gran pasión por la informática
                    y la creación de soluciones modernas. Me encanta aprender nuevas tecnologías y mejorar
                    como profesional cada día.
                </p>
                <Link className="mt-3 botonLeer" to="/sobre-mi"><span>Leer mas</span></Link>
            </section><div className="container mt-5">
                <div className="row justify-content-center">

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card mi-card" style={{ width: '18rem' }}>
                            <img src={foto} className="card-img-top" alt="Ejemplo" />
                            <div className="card-body">
                                <h5 className="card-title">Iwatch</h5>
                                <p className="card-text">Proyecto academico realizado con laravel y Vue.</p>
                                <div className="mb-3 mt-auto"> 
                                    <span className='badge bg-primary me-1'>Laravel</span>
                                    <span className='badge bg-primary me-1'>Vue.js</span>
                                    <span className='badge bg-primary me-1'>MySQL</span>
                                    <span className='badge bg-primary me-1'>JavaScript</span>
                                </div>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card mi-card" style={{ width: '18rem' }}>
                            <img src={foto} className="card-img-top" alt="Ejemplo" />
                            <div className="card-body">
                                <h5 className="card-title">Foodrus</h5>
                                <p className="card-text">Aplicativo restaurante web basado en toysrus</p>
                                <div className="mb-3 mt-auto"> 
                                    <span className='badge bg-primary me-1'>Html</span>
                                    <span className='badge bg-primary me-1'>Css</span>
                                    <span className='badge bg-primary me-1'>MySQL</span>
                                </div>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card mi-card" style={{ width: '18rem' }}>
                            <img src={foto} className="card-img-top" alt="Ejemplo" />
                            <div className="card-body">
                                <h5 className="card-title">Otros proyectos</h5>
                                <p className="card-text">Mini proyectos realizados por mi.</p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}
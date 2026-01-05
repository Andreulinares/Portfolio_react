import foto from '../Img/prueba_card.jpg';
import { Link } from "react-router-dom";
import Particulas from './Particulas';

export default function Inicio(){
    return (
        <><header className="hero">
            <Particulas />
            <div className="container text-center text-white">
                <h1 className="hero-title">Hola, soy Andreu Linares</h1>
                <p className="hero-subtitle">
                    Desarrollador FullStack apasionado por la creación de experiencias digitales.
                </p>
                <Link className="btn btn-primary btn-lg mt-3" to="/proyectos">Ver mis proyectos</Link>
            </div>
        </header><section className="sobre-mi">
                <h2 className='mb-3'>Sobre mi</h2>
                <p>
                    Desarrollador FullStack con una gran pasión por la informática
                    y la creación de soluciones modernas. Me encanta aprender nuevas tecnologías y mejorar
                    como profesional cada día.
                </p>
                <Link className="btn btn-primary btn-lg mt-3" to="/sobre-mi">Leer mas</Link>
            </section><div className="container mt-5">
                <div className="row justify-content-center">

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card mi-card" style={{ width: '18rem' }}>
                            <img src={foto} className="card-img-top" alt="Ejemplo" />
                            <div className="card-body">
                                <h5 className="card-title">Iwatch</h5>
                                <p className="card-text">Proyecto academico realizado con laravel y Vue.</p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card mi-card" style={{ width: '18rem' }}>
                            <img src={foto} className="card-img-top" alt="Ejemplo" />
                            <div className="card-body">
                                <h5 className="card-title">Foodrus</h5>
                                <p className="card-text">Segundo proyecto academico con MySQL, html y Css</p>
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
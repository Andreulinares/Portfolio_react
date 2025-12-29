export default function Footer(){
    return (
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
                                    href="https://www.linkedin.com/in/andreu-linares-alvarez-151710270"
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
    )
}
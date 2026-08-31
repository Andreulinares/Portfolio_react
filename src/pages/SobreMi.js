import perfil from '../Img/foto_sobre_mi.jpg';

export default function SobreMi(){
    return (
        <div className="container mt-5 sobre-mi-container">
            <h1 className="mb-4 text-center">Sobre mi</h1>
            <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0">
                <img
                    src={perfil}
                    alt="Andreu Linares"
                    className="sobre-mi-img"
                />
                </div>
            </div>
            <div className="col-md-8">
                <p className="sobre-mi-text">
                    Soy <strong>Andreu Linares</strong>, desarrollador web nacido en Barcelona en 2004.
                    Me apasiona el mundo de la tecnología y la informática, especialmente el desarrollo
                    web y la creación de soluciones digitales modernas.
                    <br /><br />
                    He cursado el <strong>Grado Medio en Sistemas Microinformáticos y Redes (SMX)</strong> y
                    el <strong>Grado Superior en Desarrollo de Aplicaciones Web (DAW)</strong> entre 2020 y 2024.
                    Durante mi formación he adquirido una base sólida tanto en frontend como en backend,
                    además de buenas prácticas de desarrollo y trabajo con bases de datos y frameworks.
                    Tambien he cursado un master en <strong>Desarrollo de Videojuegos</strong> recientemente en el cual he aprendido a crear videojuegos en 2D y 3D con Unity.
                    Y sigo aprendiendo mas cada dia sobre nuevas tecnologias y de la inteligencia artificial para poder estar al dia de las nuevas tendencias.
                </p>
            </div>
            <h3 className="mt-5 mb-3">Conocimientos adquiridos en DAW</h3>
            <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">HTML5, CSS3 y diseño responsive</li>
                        <li className="list-group-item">JavaScript (ES6+)</li>
                        <li className="list-group-item">React y fundamentos de frontend moderno</li>
                        <li className="list-group-item">Bootstrap y maquetación web</li>
                        <li className="list-group-item">PHP y programación backend</li>
                        <li className="list-group-item">Laravel y VUE</li>
                        <li className="list-group-item">MySQL y diseño de bases de datos</li>
                        <li className="list-group-item">APIs Rest basicas</li>
                        <li className="list-group-item">Uso de Git y control de versiones</li>
                    </ul>
                </div>

                <div className="col-md-4 mb-4 mb-md-0">
                    <h3 className="mt-5 mb-3">Desarrollo de videojuegos</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Motor gráfico Unity (2D y 3D)</li>
                        <li className="list-group-item">Programación en C# orientada a objetos</li>
                        <li className="list-group-item">Gestión de física, colisiones y rigidbodies</li>
                        <li className="list-group-item">Diseño de interfaces de usuario</li>
                        <li className="list-group-item">Animación 3D y 2D y manejo de assets</li>
                        <li className="list-group-item">Modelaje 3D con maya y blender</li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <h3 className="mt-5 mb-3">Python y inteligencia artificial</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Programación en Python</li>
                        <li className="list-group-item">Machine Learning con scikit-learn</li>
                        <li className="list-group-item">Desarrollo de aplicaciones de inteligencia artificial</li>
                        <li className="list-group-item">Chatbots y conceptos de roles y procesamiento de lenguaje</li>
                        <li className="list-group-item">Análisis de datos y visualización</li>
                        <li className="list-group-item">Uso de frameworks y librerias como pandas, numpy, y LangChain</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react";
import Dash from './Dash'; 

export default function Proyectos(){
    const [mostrarJuego, setMostrarJuego] = useState(false);
    return (
        <div className="container mt-5">
            <h1> Otros proyectos</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex flex-column align-items-start py-3">
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <h5 className="mb-1">Bot con Python</h5>

                        <a href="https://mi-bot-informatico.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                            Conversar con el bot
                        </a>
                    </div>
                    <p className="mb-2 text-muted">Bot de conversación desarrollado con Python y LangChain, capaz de responder preguntas y mantener una conversación básica.
                        Ademas puede leer pdfs y responder preguntas sobre su contenido. Se usa el modelo de gemini.
                    </p>
                    <div className="mb-1"> 
                        <span className='badge bg-primary me-1'>Python</span>
                        <span className='badge bg-secondary me-1'>LangChain</span>
                        <span className='badge bg-dark me-1'>Streamlit</span>
                    </div>
                </li>

                <li className="list-group-item d-flex flex-column align-items-start py-3">
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <h5 className="mb-1">Geometry Dash Clone (Browser Game)</h5>
                        
                        {/* Botón interactivo de React que cambia el estado */}
                        <button 
                            onClick={() => setMostrarJuego(!mostrarJuego)} 
                            className={`btn btn-sm ${mostrarJuego ? 'btn-danger' : 'btn-outline-primary'}`}
                        >
                            {mostrarJuego ? 'Quit x' : 'Play Game'}
                        </button>
                    </div>
                    <p className="mb-2 text-muted">
                        Un clon simplificado del famoso juego Geometry Dash desarrollado con HTML5 Canvas y JavaScript Vanilla. 
                        Incluye físicas de salto, aceleración progresiva por puntuación, sistema de obstáculos basado en patrones de dificultad y persistencia de récords con LocalStorage.
                    </p>
                    <div className="mb-3"> 
                        <span className='badge bg-warning text-dark me-1'>JavaScript</span>
                        <span className='badge bg-info text-dark me-1'>HTML5 Canvas</span>
                        <span className='badge bg-primary me-1'>React</span>
                        <span className='badge bg-dark me-1'>CSS3</span>
                    </div>

                    {/* RENDERIZADO */}
                    {mostrarJuego && (
                        <div className="w-100 d-flex justify-content-center p-3 bg-dark rounded shadow-lg mt-2">
                            <Dash />
                        </div>
                    )}
                </li>
            </ul>
        </div>
    )
}
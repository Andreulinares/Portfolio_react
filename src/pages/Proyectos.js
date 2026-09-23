export default function Proyectos(){
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
            </ul>
        </div>
    )
}
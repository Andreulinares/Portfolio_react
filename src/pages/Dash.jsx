import React, { useEffect, useRef, useState } from 'react';

const GeometryDashGame = () => {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => {
        // Guardar récord en el navegador
        return parseInt(localStorage.getItem('gd_highscore') || '0', 10);
    });

    useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

// CONFIGURACIÓN GLOBAL
const GRAVEDAD = 0.6;
let gameSpeed = 5;
let score = 0;
let currentScore = 0;
let isGameOver = false;
let canRestart = false;

// 1. JUGADOR (El Cubo)
const player = {
    x: 100,
    y: 300,
    size: 40,
    vy: 0,
    jumpForce: -12,
    isGrounded: false,
    angle: 0, // Para la rotación típica de Geometry Dash

    jump() {
        if (this.isGrounded) {
            this.vy = this.jumpForce;
            this.isGrounded = false;
        }
    },

    update() {
        // Aplicar gravedad
        this.vy += GRAVEDAD;
        this.y += this.vy;

        // Límite del suelo (Línea en y = 350)
        const sueloY = canvas.height - 50 - this.size;
        if (this.y >= sueloY) {
            this.y = sueloY;
            this.vy = 0;
            this.isGrounded = true;
        }

        // Rotación estética al saltar
        if (!this.isGrounded) {
            this.angle += 0.08;
        } else {
            // Alinear al cuadrado más cercano cuando toca el suelo
            this.angle = Math.round(this.angle / (Math.PI / 2)) * (Math.PI / 2);
        }
    },

    draw() {
        ctx.save();
        // Mover el origen de coordenadas al centro del cubo para rotar bien
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        ctx.rotate(this.angle);
        
        // Dibujar el cubo
        ctx.fillStyle = "#00ffff";
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        
        // Borde del cubo
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 3;
        ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
        
        ctx.restore();
    }
};

// 2. OBSTÁCULOS (Las Espinas)
class Obstacle {
    constructor(x, y, size, type){
        this.x = x;
        this.y = y;
        this.size = size;
        this.type = type; //tipos de obstaculos
    }

    update() {
        this.x -= gameSpeed;
    }

    draw() {
        ctx.save();
        if (this.type === 'spike') {
            ctx.fillStyle = "#ff0055";
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + this.size);
            ctx.lineTo(this.x + this.size / 2, this.y);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 2;
            ctx.stroke();
        }else if (this.type === 'block') {
            ctx.fillStyle = "#330066";
            ctx.fillRect(this.x, this.y, this.size, this.size);
            ctx.strokeStyle = "#00ffff";
            ctx.lineWidth = 3;
            ctx.strokeRect(this.x, this.y, this.size, this.size);
        }else if (this.type === 'ramp') {
            ctx.fillStyle = "#00ffcc";
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + this.size);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        ctx.restore();
    }
}

let obstacles = [];
let spawnTimer = 0;

// 3. DETECCIÓN DE COLISIONES (AABB Simplificado)
function resolveCollisions(player, obs) {
    const buffer = 4;

    const hitX = player.x < obs.x + obs.size && player.x + player.size > obs.x;
    const hitY = player.y < obs.y + obs.size && player.y + player.size > obs.y;

    if (hitX && hitY) {
        if (obs.type === 'spike'){
            isGameOver = true;
            canRestart = false;
            setTimeout(() => {
                canRestart = true;
            }, 500);
            return;
        }

        if (obs.type === 'block') {
            const colisionSuperior = (player.y + player.size - player.vy <= obs.y + buffer);

            if (colisionSuperior && player.vy >= 0){
                player.y = obs.y - player.size;
                player.vy = 0;
                player.isGrounded = true;
            }else{
                isGameOver = true;
            }
        }

        if (obs.type === 'ramp'){
            let relX = (player.x + player.size) - obs.x;
            if (relX > obs.size) relX = obs.size;
            if (relX < 0) relX = 0;

            let alturaRampa = obs.y + obs.size - relX;

            if (player.y + player.size >= alturaRampa) {
                player.y = alturaRampa - player.size;
                player.vy = 0;
                player.isGrounded = true;
            }
        }
    }
}
    

// 4. SUELO Y FONDO
function drawBackground() {
    // Línea del suelo
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - 50);
    ctx.lineTo(canvas.width, canvas.height - 50);
    ctx.stroke();

    // Dibujar cuadrícula de fondo simulada (Opcional, estilo retro)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    let offsetX = (-score * gameSpeed) % 40;
    for (let x = offsetX; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height - 50);
        ctx.stroke();
    }
}

const PATRONES = [
    [{ tipo: 'spike', distancia: 0 }],
    
    
    [{ tipo: 'block', distancia: 0 }, { tipo: 'block', distancia: 50 }],
    
    
    [{ tipo: 'ramp', distancia: 0 }, { tipo: 'spike', distancia: 50 }],
    
   
    [{ tipo: 'spike', distancia: 0 }, { tipo: 'spike', distancia: 130 }],
    
    [{ tipo: 'block', distancia: 0 }, { tipo: 'spike', distancia: 80 }]
];

// Variable para controlar cuándo toca lanzar el siguiente patrón
let tiempoProximoSpawn = 100; 

// 5. BUCLE PRINCIPAL DEL JUEGO
function gameLoop() {
    if (isGameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#fff";
        ctx.font = "40px Arial";
        ctx.textAlign = "center";
        ctx.fillText("¡GAME OVER!", canvas.width / 2, canvas.height / 2);
       if (canRestart) {
            ctx.font = "20px Arial";
            ctx.fillText("Presiona Espacio o Clic para reiniciar", canvas.width / 2, canvas.height / 2 + 50);
        }
        return;
    }

    // Limpiar pantalla
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();

    // Actualizar y dibujar jugador
    player.update();
    player.draw();

    // Controlar aparicion de obstaculos (Rango aleatorio para que no sea monotono)
    spawnTimer++;
    if (spawnTimer > tiempoProximoSpawn) {
        const patronAleatorio = PATRONES[Math.floor(Math.random() * PATRONES.length)];
        
        // 2. Inyectar todos los obstaculos de ese patron
        patronAleatorio.forEach(elemento => {
            const yPos = canvas.height - 50 - 40; 
            // La posicion X inicial es el borde del canvas + la distancia interna del patron
            const xPos = canvas.width + elemento.distancia;
            
            obstacles.push(new Obstacle(xPos, yPos, 40, elemento.tipo));
        });
        spawnTimer = 0;
        tiempoProximoSpawn = Math.random() * 40 + (120 - gameSpeed * 4);
    }

    // Gestionar obstáculos
    for (let i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].update();
        obstacles[i].draw();
        resolveCollisions(player, obstacles[i]);

        if (obstacles[i].x + obstacles[i].size < 0) {
            obstacles.splice(i, 1);
            currentScore++;
            setScore(currentScore);
            
            setHighScore(prev => {
                if (currentScore > prev) {
                    localStorage.setItem('gd_highscore', currentScore.toString());
                    return currentScore;
                }
                return prev;
            });

            const velocidadBase = 5;
            const incremento = Math.floor(currentScore / 3) * 0.4; 
            const velocidadMaxima = 12;

            gameSpeed = Math.min(velocidadBase + incremento, velocidadMaxima);
        }
    }

    requestAnimationFrame(gameLoop);
}

// 6. CONTROLES / INPUTS
function handleJump() {
    if (isGameOver) {
        if (!canRestart) return; 
        // Reiniciar juego
        obstacles = [];
        currentScore = 0;
        setScore(0);
        gameSpeed = 5;
        player.y = 300;
        player.vy = 0;
        player.angle = 0;
        spawnTimer = 0;
        tiempoProximoSpawn = 100;
        isGameOver = false;
        canRestart = false;
        gameLoop();
    } else {
        player.jump();
    }
}

const handleKeyDown = (e) => {
    if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleJump();
    }
};

const handleCanvasClick = () => { handleJump(); };

window.addEventListener("keydown", handleKeyDown);
canvas.addEventListener("mousedown", handleCanvasClick);

// Iniciar el juego por primera vez
gameLoop();

    return () => {
            window.removeEventListener("keydown", handleKeyDown);
            if (canvas) canvas.removeEventListener("mousedown", handleCanvasClick);
            cancelAnimationFrame(animationFrameId); 
        };
    }, []);

    return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: '#111', 
      color: 'white', 
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      borderRadius: '10px'
    }}>
      <canvas 
        ref={canvasRef} 
        width={800}
        height={400}
        style={{
        border: '4px solid #fff',
        background: 'linear-gradient(to bottom, #1a0033, #4d004d)',
        boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
        cursor: 'pointer',
        maxWidth: '100%', // Para que sea responsivo
        height: 'auto'
        }}
        />
                <div style={{ marginTop: '15px', fontSize: '1.2rem', textAlign: 'center' }}>
                    Presiona Espacio o Haz Clic para saltar.
                    <br />
                    Puntuación Actual: <span style={{ color: '#00ffff', fontWeight: 'bold' }}>{score}</span> |
                    Récord: <span style={{ color: '#ff0055', fontWeight: 'bold' }}>{highScore}</span>
                </div>
            </div>
        );
        };
        export default Dash; 
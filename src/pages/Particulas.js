import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { loadSlim } from "tsparticles-slim";


export default function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: { value: 0.5 },
          size: { value: 2 },
        },
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
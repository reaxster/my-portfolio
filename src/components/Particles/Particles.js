import React from "react";
import Particles from "react-tsparticles";
import "./Particles.css";

export default () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="PP"
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: false,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 1,
              duration: 0.1,
            },
          },
        },
        particles: {
          color: {
            value: "#02408d",
          },
          links: {
            color: "#98a7c4",
            distance: 200,
            enable: true,
            opacity: 0.6,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 350,
            },
            value: 30,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        zLayers: 1,
      }}
    />
  );
};

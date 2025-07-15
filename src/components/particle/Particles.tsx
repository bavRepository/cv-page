import { useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

export const Particle = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {})
  }, [])
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const particlesLoaded = (container) => {
    console.log(container)
  }

  return (
    <Particles
      id="tsparticles"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      particlesLoaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              area: 1000,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 0.2, max: 1 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

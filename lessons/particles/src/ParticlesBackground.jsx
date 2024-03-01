import React, { useEffect, useRef } from 'react';
import './ParticlesBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  let ctx;
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: Math.random() * 2 + 1,
        color: 'white',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        particles.forEach(p => {
          const dx = particle.x - p.x;
          const dy = particle.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.stroke();
            ctx.closePath();
          }
        });
      });

      requestAnimationFrame(draw);
    };

    draw();

    const resizeHandler = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas"></canvas>;
};

export default ParticleBackground;

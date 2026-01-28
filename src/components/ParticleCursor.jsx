import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { IoStarSharp } from "react-icons/io5";

export default function ParticleCursor() {

    const canvasRef = useRef(null);
    const particles = useRef([]);
    const mouse = useRef({x:0, y:0});

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        class Particle{
            constructor(x,y){
                this.x = x;
                this.y = y;
                this.size = Math.random() * 5 + 1;
                this.alpha = 1;
                this.life = 1;

                gsap.to(this, {
                    x: this.x + (Math.random() * 3 - 1.5) * 20,
                    y: this.y + (Math.random() * 3 - 1.5) * 20,
                    alpha: 0,
                    size: 0,
                    duration: 0.8,
                    ease: "none"
                });
            };

            draw(){
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = "#fff";
                ctx.shadowBlur = 15;
                ctx.shadowColor = "#ff9e4fff";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 4);
                ctx.fill();
                ctx.restore();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.current.forEach((p, i) => {
                p.draw();
                if (p.alpha <= 0) {
                    particles.current.splice(i, 1);
                }
            });
            requestAnimationFrame(animate);
        }
        animate();

        const handleMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            
            for (let i = 0; i < 3; i++) {
                particles.current.push(
                    new Particle(mouse.current.x, mouse.current.y)
                );
            }
        };
        window.addEventListener("mousemove", handleMove);

        return() => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("resize", resize);
        };
        
    });
  return (
    <div>
        <canvas ref={canvasRef}/>
        {/* <i className='cursor'><IoStarSharp /></i> */}
    </div>
    
  )
}

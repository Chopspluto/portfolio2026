import { motion } from "framer-motion"
import Layer1 from "../assets/bgLayer1.png";
import Layer2 from "../assets/bgLayer2.png";
import Layer3 from "../assets/bgLayer3.png";
import Layer4 from "../assets/bgLayer4.png";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {

  const containerRef = useRef();
  const layer1 = useRef();
  const layer2 = useRef();
  const layer3 = useRef();
  const layer4 = useRef();

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const layers = [
      { el: layer1.current, strength: 10 },
      { el: layer2.current, strength: 20 },
      { el: layer3.current, strength: 30 },
      { el: layer4.current, strength: 40 },
    ];

    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);

      layers.forEach(({ el, strength }) => {
        gsap.to(el, {
          x: x * strength,
          y: y * strength,
          duration: 0.6,
          ease: "power3.out",
        });
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <section>
      <div className="hero" ref={containerRef}>
        <img ref={layer1} className="bg" src={Layer1} />
        <img ref={layer2} className="bg" src={Layer2} />
        <img ref={layer3} className="bg" src={Layer3} />
        <img ref={layer4} className="bg" src={Layer4} />
      </div>
      <div className="main">
        <h1>Kanishka Pieris</h1>
        <h4>Creative Developer & Designer</h4>
      </div>
        
    </section>
  )
}

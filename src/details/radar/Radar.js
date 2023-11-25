import { motion } from "framer-motion"
import { useRef, useState } from "react";
import estyle from "./Radar.module.scss"

function Radar({props}) {

    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX, y: middleY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };
    
    const { x, y } = position;

    const radaranim = {
        ready: { opacity:0, scale:0, rotate:props.rotate },
        start: { opacity:1, scale:1, rotate:(360 + props.rotateto), 
            transition: {
                opacity: {
                    delay:props.delay,
                    duration:.3
                },
                scale: {
                    delay:props.delay,
                    duration:.5,
                    type:'tween',
                    ease:'backOut'
                },
                rotate: { 
                    delay: props.delay, 
                    duration: props.rotateduration, 
                    type:'tween', 
                    ease:'easeOut' 
                },
            }}
    }

    const radarhoveranim = {
        rest: {rotate: 0, fill: 'black' },
        hover: {rotate: 200, fill: 'red' },
            transition: {
                rotate: {
                    duration:1,
                    type: 'tween',
                    ease: 'backInOut'
                },
                fill: {
                   duration:1
                }
            }
    }

    return (
        <motion.div
            className={estyle.container}
            initial="rest" 
            whileHover="hover" 
            animate="rest"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={{ x, y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                variants={radarhoveranim}
            >
                <motion.svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                    variants={radaranim}
                    initial="ready"
                    animate="start"
                >
                    <path 
                        d="M12.3342 23.5558C18.6578 23.5558 23.7842 18.4294 23.7842 12.1058C23.7842 5.7821 18.6578 0.655762 12.3342 0.655762C6.01051 0.655762 0.884155 5.7821 0.884155 12.1058C0.884155 18.4294 6.01051 23.5558 12.3342 23.5558Z" 
                        stroke={props.color} strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path 
                        d="M20.2447 3.50665L11.7594 11.992L12.4665 12.6991L20.9518 4.21378L20.2447 3.50665Z" fill={props.color}/>
                </motion.svg>
            </motion.div>
        </motion.div>
    )
}

export default Radar;

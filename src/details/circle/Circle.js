import { motion } from "framer-motion";
import estyle from "./Circle.module.scss"

function Circle({props}) {

    const sizew = props.radius * 2;
    const sizeh = props.radius * 2;
    const posx = sizew / 2;
    const posy = sizeh / 2;
    const thedelay = props.delay;
    const theduration = props.duration;

    function springy(delay=props.delay, duration=props.duration, damping=16, stiffness=300, restDelta=0.01){
        return{
            type:"spring",
            delay:delay,
            duration:duration,
            damping:damping,
            stiffness:stiffness,
            restDelta:restDelta
        }
    }

    return (
    <div>
        <motion.svg 
            className={estyle[props.circlecolor]}
            height={sizeh} 
            width={sizew}
            initial={{opacity:0, scale:0}}
            animate={{opacity:1, scale:1}}
            transition={{
                opacity:{
                    delay:props.delay,
                    duration:props.duration,
                },
                //skip items in a function springy(...Array(1), 2, 3, 4) the 1 is skipped
                scale: springy()
            }}
        >
            <circle cx={posx} cy={posy} r={props.radius} stroke={props.strokecolor} stroke-width={props.strokewidth}/>
        </motion.svg> 
    </div>
  );
}

export default Circle;
import { motion, useAnimate } from "framer-motion"
import estyle from "./CircleRing.module.scss"
import { useContext, useEffect } from 'react';
import NavContext from '../../NavContext'

function CircleRing({props}) {

    const sizew = props.ringradius * 2;
    const sizeh = props.ringradius * 2;
    const posx = sizew / 2;
    const posy = sizeh / 2;
    
    const [scope, animate] = useAnimate()
    const { currentnav } = useContext(NavContext)

    useEffect(() => {

        let currnavname = '';
        let currwaittime = 0;

        for(let {navname, waittime} of currentnav) {
            
            currnavname = `${navname}`
            currwaittime = `${waittime}`
        }

        if(currnavname === props.navlabel.toLowerCase()){
            animate(scope.current, {fill: props.circlecoloron})
        }
        else
        {
            animate(scope.current, {fill: props.circlecoloroff})
        }

    }, [currentnav])

    const svgVariants = {
        hidden: { rotate: 0 },
        visible: { rotate: 0, transition: { delay: props.delay, duration : 1 }}
    }
      
    const pathVariants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: { opacity: 1, pathLength: 1, transition: { delay:props.delay, duration: .8, ease: "easeInOut" }}
    };
    
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
        <div className={estyle.container}>
            <motion.svg 
                width={props.ringradius}
                height={props.ringradius}
                className={estyle.thestroke}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="50 50 100 100"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.path
                    fill="none"
                    strokeWidth={props.strokewidth}
                    stroke={props.strokecoloroff}
                    d="M 100, 100
                    m 75, 0
                    a 75,75 0 1,0 -150,0
                    a 75,75 0 1,0  150,0"
                    variants={pathVariants}
                />
            </motion.svg>

            <motion.svg 
                className={estyle.circle}
                ref={scope}
                fill="none"
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
                <circle cx={posx} cy={posy} r={props.circleradius} stroke="null" strokeWidth="null"/>
            </motion.svg> 
        </div>
    </div>
  );
}

export default CircleRing;
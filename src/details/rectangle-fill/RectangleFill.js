import { motion } from "framer-motion"
// import estyle from "./RectangleFill.module.scss"

function RectangleFill({props}) {

    const barborder = {
        ready: { opacity: 0 },
        start: { opacity: 1, transition: { delay: props.delay, duration : 1 }}
    }

    const barfillmask = {
        ready: { x: 0 },
        start: { x: 0,
            transition: { 
                duration: props.lineduration, 
                delay: props.linedelay, 
                type:'tween', 
                ease:'easeOut' 
            }   
        }
    }

    const barfill = {
        ready: { x: -110 },
        start: { x: 0,
            transition: { 
                duration: props.lineduration, 
                delay: props.linedelay, 
                type:'tween', 
                ease:'easeOut'
            }   
        }
    }

    return (
        <div>
            <svg width="101" height="6" viewBox="0 0 101 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                {/*  clippath animates from left to right to reveal the area that shows the bar */}
                <defs>
                    <clipPath id="fillmask">
                    <motion.rect 
                        height="10" 
                        width="500"
                        variants={barfillmask}
                        initial="ready"
                        animate="start"
                    />
                    </clipPath>
                </defs>

                {/*  path animates from left to right to be in view of the mask, could be view box issues */}
                <motion.path 
                    variants={barfill}
                    initial="ready"
                    animate="start"
                    clipPath="url(#fillmask)" id="barfill" d="M80.559 0.722412H0.560425V5.72232H80.559V0.722412Z" fill={props.color}/>

                <motion.path
                variants={barborder}
                initial="ready"
                animate="start"
                d="M100.562 0.722412H0.563477V5.72232H100.562V0.722412Z" stroke={props.color} strokeWidth="0.32024" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}
export default RectangleFill;
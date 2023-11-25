import { motion } from "framer-motion"
// import estyle from "./AngleLine2.module.scss"

function AngleLine2({props}) {

    const svgVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: props.delay, duration : 1 }}
    }

    const startdot = {
        ready: { opacity:0, scale:0 },
        start: { opacity:1, scale:1, 
            transition: {
                scale:{ 
                    delay: props.dot1delay, 
                    duration: props.dot1duration, 
                    type:'spring', 
                    bounce:1, 
                    velocity:1, 
                    stiffness:200, 
                    mass:1, 
                    damping:8 
                },
            }}
    }

    const enddot = {
        ready: { opacity:0, scale:0 },
        start: { opacity:1, scale:1, 
            transition: {
                scale:{ 
                    delay: props.dot2delay, 
                    duration: props.dot2duration, 
                    type:'spring', 
                    bounce:1, 
                    velocity:1, 
                    stiffness:200, 
                    mass:1, 
                    damping:8 
                },
            }}
    }

    const startline = {
        ready: { y:900, x: 0 },
        start: { y: 0, 
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
            <motion.svg width="58" height="557" viewBox="0 0 58 557" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
                <defs>
                    <clipPath id="myclippath">
                    <motion.rect 
                        height="600" 
                        width="200"
                        variants={startline}
                        initial="ready"
                        animate="start"
                    />
                    </clipPath>
                </defs>

                <motion.path id="startdot" 
                 variants={startdot}
                 initial="ready"
                 animate="start"
                d="M43.4366 554.376C43.4366 553.271 42.5413 552.376 41.4368 552.376C40.3324 552.376 39.437 553.271 39.437 554.376C39.437 555.48 40.3324 556.376 41.4368 556.376C42.5413 556.376 43.4366 555.48 43.4366 554.376Z" fill={props.color}/>
                
                <path clipPath="url(#myclippath)" d="M41.1787 72.4357L41.1787 552.438H41.6787L41.6787 72.4357H41.1787Z" fill={props.color}/>
                <path clipPath="url(#myclippath)" fillRule="evenodd" clipRule="evenodd" d="M11.985 53.251L41.505 72.381V72.9811L11.985 53.8411V53.251Z" fill={props.color}/>
                <path clipPath="url(#myclippath)" d="M11.9137 3.74308L11.9137 53.7429H12.4137L12.4137 3.74308H11.9137Z" fill={props.color}/>
                <motion.path
                variants={enddot}
                initial="ready"
                animate="start"
                d="M14.1465 2.00291C14.1465 0.898452 13.2512 0.00310016 12.1468 0.00310016C11.0423 0.00310016 10.147 0.898452 10.147 2.00291C10.147 3.10736 11.0423 4.00269 12.1468 4.00269C13.2512 4.00269 14.1465 3.10736 14.1465 2.00291Z" fill={props.color}/>
                
            </motion.svg>
        </div>
    )
}
export default AngleLine2;


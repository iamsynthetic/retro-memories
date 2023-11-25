import { motion } from "framer-motion"
// import estyle from "./LineDot.module.scss"

function LineDot({props}) {

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
            <svg width="5" height="538" viewBox="0 0 5 538" fill="none" xmlns="http://www.w3.org/2000/svg"
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

                <g clipPath="url(#clip0_64_26)">
                <motion.path 
                    variants={startdot}
                    initial="ready"
                    animate="start"
                    d="M4.14655 535.412C4.14655 534.307 3.25122 533.412 2.14677 533.412C1.04231 533.412 0.146973 534.307 0.146973 535.412C0.146973 536.516 1.04231 537.412 2.14677 537.412C3.25122 537.412 4.14655 536.516 4.14655 535.412Z" fill="black"/>
                <motion.path 
                    variants={enddot}
                    initial="ready"
                    animate="start"
                    d="M3.9986 1.99979C3.9986 0.895339 3.10327 -1.26362e-05 1.99882 -1.26362e-05C0.894363 -1.26362e-05 -0.000976563 0.895339 -0.000976563 1.99979C-0.000976563 3.10425 0.894363 3.99957 1.99882 3.99957C3.10327 3.99957 3.9986 3.10425 3.9986 1.99979Z" fill="black"/>
                <path clipPath="url(#myclippath)" d="M1.88867 53.4716L1.88867 533.474H2.38869L2.38869 53.4716H1.88867Z" fill="black"/>
                <path clipPath="url(#myclippath)" d="M2.21521 54.0149L2.21521 4.01508H1.71519L1.71519 54.0149H2.21521Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_64_26">
                <rect width="5" height="538" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    )
}
export default LineDot;
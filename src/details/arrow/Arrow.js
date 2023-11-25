import { motion } from "framer-motion"
import estyle from "./Arrow.module.scss"

function Arrow({props}) {

    const svgVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: props.delay, duration : 1 }}
    }

    return (
        <div>
            <motion.svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
  
            <path d="M1.09478 42.8596L22.308 21.6464L21.9544 21.2929L0.741217 42.5061L1.09478 42.8596Z" fill={props.color}/>
            <path d="M1.09496 0.433312L22.3082 21.6465L22.6617 21.293L1.44853 0.0797481L1.09496 0.433312Z"  fill={props.color}/>
            </motion.svg>
        </div>
    )
}
export default Arrow;

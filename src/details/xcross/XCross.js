import { motion } from "framer-motion"
import estyle from "./XCross.module.scss"

function XCross({props}) {

    const svgVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: props.delay, duration : 1 }}
    }

    return (
        <div>
            <motion.svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
  
            <path d="M0.0940479 0.432915L21.3073 21.6461L21.6608 21.2926L0.447612 0.0793513L0.0940479 0.432915Z" fill={props.color}/>
            <path d="M21.3073 0.0793918L0.0941162 21.2926L0.44768 21.6462L21.6609 0.432956L21.3073 0.0793918Z" fill={props.color}/>
            </motion.svg>
        </div>
    )
}
export default XCross;

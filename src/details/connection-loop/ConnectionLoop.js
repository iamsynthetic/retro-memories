import { motion } from "framer-motion"
import estyle from "./ConnectionLoop.module.scss"

function ConnectionLoop({props}) {

    const svgVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: props.delay, duration : 1 }}
    }

    return (
        <div className={estyle.container}>
            <motion.div className={estyle.connection} 
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
                CONNECTION
            </motion.div>
            <motion.div className={estyle.loop} 
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
                LOOP
            </motion.div>
        </div>
    )
}
export default ConnectionLoop;

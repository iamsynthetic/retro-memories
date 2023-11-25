import { motion } from "framer-motion"
import estyle from "./VerticleLine.module.scss"

function VerticleLine({props}) {

    const svgVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: props.delay, duration : 1 }}
    }

    return (
        <div>
            <motion.div className={estyle.verticalline} 
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            />
        </div>
    )
}
export default VerticleLine;

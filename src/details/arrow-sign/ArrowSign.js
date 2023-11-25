import { motion } from "framer-motion"
import estyle from "./ArrowSign.module.scss"

function ArrowSign({props}) {

    const svgVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: props.delay, duration : 1 }}
    }

    return (
        <div>
            <motion.svg width="52" height="21" viewBox="0 0 52 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
  
                <path d="M40.1696 0.721924H0.170288V20.7215H40.1696V0.721924Z" fill={props.color}/>
                <path fillRule="evenodd" clipRule="evenodd" d="M40.14 20.7266V0.726761L51.2944 10.7267L40.14 20.7266Z" fill={props.color}/>
            </motion.svg>
        </div>
    )
}
export default ArrowSign;

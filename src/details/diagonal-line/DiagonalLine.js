import { motion } from "framer-motion"
import estyle from "./DiagonalLine.module.scss"

function DiagonalLine({props}) {

    const startLine = {
        ready: { opacity:0, scale:0 },
        start: { opacity:1, scale:1,
            transition: {
                scale: {
                    delay: props.delay,
                    duration: .5
                },
                opacity: {
                    delay: props.delay,
                    duration: .4
                }
            }
        }
    }

    return (
        <div>
            <motion.svg className={estyle.diagonalline} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={startLine}
                initial="ready"
                animate="start"
            >
            <path d="M11.3656 0.38544L0.758972 10.9921L1.11254 11.3456L11.7192 0.739003L11.3656 0.38544Z" fill={props.color}/>
            </motion.svg>
        </div>
    )
}
export default DiagonalLine;


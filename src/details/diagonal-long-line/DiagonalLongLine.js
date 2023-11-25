import { motion } from "framer-motion"
import estyle from "./DiagonalLongLine.module.scss"

function DiagonalLongLine({props}) {

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
            <motion.svg className={estyle.diagonallongline} width="20" height="31" viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={startLine}
                initial="ready"
                animate="start"
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M19.8872 0.628784L0.757202 30.1488H0.157104L19.2971 0.628784H19.8872Z" fill={props.color}/>
            </motion.svg>
        </div>
    )
}
export default DiagonalLongLine;

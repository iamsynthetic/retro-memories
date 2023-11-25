import { motion, useAnimationControls } from "framer-motion"
import estyle from "./GreyRectangle.module.scss"
import { useEffect } from "react"

function GreyRectangle({props}) {

    useEffect(() => {
        const greyrectanglesequence = async () => {
            await greyrectangleControls.start('fadein')
        }
        
        greyrectanglesequence()
    })

    const greyrectangleControls = useAnimationControls();


    const greyrectangleanim = {
        ready: { opacity: 0, width:"0px", height:"18px", backgroundColor: "#CCCCCB"},
        fadein: { opacity:1, width:props.width, backgroundColor: "#CCCCCB",
            transition: {
                opacity: { delay:props.delay, duration: .2 },
                width: { delay:props.delay, duration:.3, type:'tween', ease:'backInOut' }
            }
        },

    }

    return (
        <motion.div className={estyle.greyrectangle}
            variants={greyrectangleanim}
            initial="ready"
            animate="fadein"
        >
        
        </motion.div>
    )
}
export default GreyRectangle;
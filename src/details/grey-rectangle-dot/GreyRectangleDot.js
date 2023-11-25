import { motion, useAnimationControls } from "framer-motion"
import estyle from "./GreyRectangleDot.module.scss"
import { useEffect } from "react"

function GreyRectangleDot({props}) {

    useEffect(() => {
        
        const dotsequence = async () => {
            await dotControls.start('fadein')
        }
        
        dotsequence()
    })

    const dotControls = useAnimationControls();

    const dotanim = {
        ready: { opacity: 0, height:0, width:0, backgroundColor: "#000000"},
        fadein: { opacity:1, height:props.height, width:props.width, backgroundColor: "#000000",
            transition: {
                opacity: { delay:props.delay, duration: .5 },
                width: { delay:props.delay },
                height: { delay:props.delay }
            }
        }
    }

    return (

        <motion.div className={estyle.dot}
            variants={dotanim}
            initial="ready"
            animate={dotControls}
        >
        </motion.div>
    )
}
export default GreyRectangleDot;
import { motion, useAnimationControls } from "framer-motion"
import estyle from "./HorizontalLine.module.scss"
import { useEffect } from "react"

function HorizontalLine({props}) {

    useEffect(() => {
        
        const sequence = async () => {
            await divControls.start('fadein')
            await divControls.start('flash1')
            await divControls.start('flash2')
            await divControls.start('flash3')
            await divControls.start('flash4')
            await divControls.start('flash5')
            await divControls.start('start')
            divControls.start('start2')
        }
        
        sequence()
    })

    const divControls = useAnimationControls();
    
    const hrlinenim = {
        ready: { y:0, x: 60, width:5, opacity:0, borderTop: '1px solid #000000' },
        fadein: { opacity:1, width:5,
            transition: {
                opacity: { delay:props.delay, duration: .2 },
                width: { delay: props.delay, duration: .2, type:'tween', ease:'easeInOut' }
            }
        },

        flash1: { borderTop: '1px solid #ffffff',
            transition: {
                backgroundColor: {delay: 0, duration: .05}
            }
        },
        flash2: { borderTop: '1px solid #000000',
            transition: {
                borderTop: {delay: 0, duration: .05}
            }
        },
        flash3: { borderTop: '1px solid #ffffff',
            transition: {
                borderTop: {delay: 0, duration: .05}
            }
        },
        flash4: { borderTop: '1px solid #000000',
            transition: {
                borderTop: {delay: 0, duration: .05}
            }
        },
        flash5: { borderTop: '1px solid #ffffff',
            transition: {
                borderTop: {delay: 0, duration: .05}
            }
        },

        start: { x: 20, width:110,
            transition: { 
                x: { delay: 0, duration: .2, type:'tween', ease:'easeInOut' },
                width: { delay: 0, duration: .2, type:'tween', ease:'easeInOut' }
            }    
        },
        start2: { x: 0, width:50, borderTop:'1px solid #000000',
            transition: { 
                x: { delay: 0, duration: .125, type:'tween', ease:'easeInOut' },
                width: { delay: 0, duration: .125, type:'tween', ease:'easeInOut' },
                borderTop: {delay: 0, duration: .125}
            }    
        }
    }

    return (
        <div>
            <motion.hr 
                className={estyle.horizontalline}
                variants={hrlinenim}
                initial="ready"
                animate={divControls}
            />
        </div>
    )
}
export default HorizontalLine;

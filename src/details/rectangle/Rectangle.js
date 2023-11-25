import { motion, useAnimationControls } from "framer-motion"
import estyle from "./Rectangle.module.scss"
import { useEffect } from "react"

function Rectangle({props}) {
    
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

    const rectangleAnim = {
        ready: { y:0, x:props.xposstart, width:0, opacity:0, backgroundColor: '#000000' },
        fadein: { opacity:1, width:12,
            transition: {
                opacity: { delay:props.delay, duration: .2 },
                x: { delay: props.delay, duration: .2, type:'tween', ease:'easeInOut' },
                width: { delay: props.delay, duration: .2, type:'tween', ease:'easeInOut' }
            }
        },

        flash1: { backgroundColor: '#ffffff',
            transition: {
                backgroundColor: {delay: 0, duration: .05}
            }
        },
        flash2: { backgroundColor: '#000000',
            transition: {
                backgroundColor: {delay: 0, duration: .05}
            }
        },
        flash3: { backgroundColor: '#ffffff',
            transition: {
                backgroundColor: {delay: 0, duration: .05}
            }
        },
        flash4: { backgroundColor: '#000000',
            transition: {
                backgroundColor: {delay: 0, duration: .05}
            }
        },
        flash5: { backgroundColor: '#ffffff',
            transition: {
                backgroundColor: {delay: 0, duration: .05}
            }
        },
        
        start: { x: props.xposend, width:props.rectwidth,
            transition: { 
                x: { delay: 0, duration: .2, type:'tween', ease:'easeInOut' },
                width: { delay: 0, duration: .2, type:'tween', ease:'easeInOut' }
            }    
        },
        start2: { x: 0, width:12, backgroundColor:'#000000',
            transition: { 
                x: { delay: 0, duration: .125, type:'tween', ease:'easeInOut' },
                width: { delay: 0, duration: .125, type:'tween', ease:'easeInOut' },
                backgroundColor: {delay: 0, duration: .125}
            }    
        }
    }
    
    return (
        <div >
            <motion.svg className={estyle.thesvg} width="12" height="4" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={rectangleAnim}
                initial="ready"
                animate={divControls}
            >
  
                <path clipPath="url(#myclippath)" id="startline" d="M10.5426 0.801636H0.542664V2.8015H10.5426V0.801636Z" fill="null" stroke={props.color} strokeWidth="0" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}
export default Rectangle;
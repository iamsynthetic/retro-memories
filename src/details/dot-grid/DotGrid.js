import { motion } from "framer-motion"
import estyle from "./DotGrid.module.scss"

function DotGrid({props}) {

    const dot1 = {
        ready: { opacity: 0, scale:0 },
        start: { opacity: 1, scale:1,
            transition: { 
                opacity: { delay: props.delay, duration : .2 },
                scale: { delay: props.delay, duration:1, type:'tween', ease:'backInOut' }
            }
        }

    }

    const dot2 = {
        ready: { opacity: 0, scale:0 },
        start: { opacity: 1, scale:1,
            transition: { 
                opacity: { delay: props.delay + .1, duration : .2 },
                scale: { delay: props.delay+ .1, duration:1, type:'tween', ease:'backInOut' }
            }
        }
    }

    const dot3 = {
        ready: { opacity: 0, scale:0 },
        start: { opacity: 1, scale:1,
            transition: { 
                opacity: { delay: props.delay + .2, duration : .2 },
                scale: { delay: props.delay+ .2, duration:1, type:'tween', ease:'backInOut' }
            }
        }
    }

    return (
        <div>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path  className={estyle.dot1} 
                    variants={dot1}
                    initial="ready"
                    animate="start"
                    d="M13.1046 2.70901C13.6569 2.70901 14.1045 2.26135 14.1045 1.70912C14.1045 1.1569 13.6569 0.709229 13.1046 0.709229C12.5524 0.709229 12.1047 1.1569 12.1047 1.70912C12.1047 2.26135 12.5524 2.70901 13.1046 2.70901Z" fill={props.color}/>
                    
                <motion.path className={estyle.dot2} 
                    variants={dot2}
                    initial="ready"
                    animate="start"
                    d="M13.1046 8.70901C13.6569 8.70901 14.1045 8.26135 14.1045 7.70912C14.1045 7.1569 13.6569 6.70923 13.1046 6.70923C12.5524 6.70923 12.1047 7.1569 12.1047 7.70912C12.1047 8.26135 12.5524 8.70901 13.1046 8.70901Z" fill={props.color}/>
                <motion.path className={estyle.dot3} 
                    variants={dot3}
                    initial="ready"
                    animate="start"
                    d="M13.1046 14.709C13.6569 14.709 14.1045 14.2614 14.1045 13.7091C14.1045 13.1569 13.6569 12.7092 13.1046 12.7092C12.5524 12.7092 12.1047 13.1569 12.1047 13.7091C12.1047 14.2614 12.5524 14.709 13.1046 14.709Z" fill={props.color}/>
            </svg>
        </div>
    )
}
export default DotGrid;
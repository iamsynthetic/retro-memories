import { motion, animate } from "framer-motion"
import estyle from "./Preloader.module.scss"

const Preloader = ({props}) => {

    // const svgVariants = {
    //     ready: { opacity: 0 },
    //     start: { opacity: 1, transition: { delay: props.delay1, duration : props.duration1 }}
    // }

    // const tophalfintro = {
    //     ready: { scale:.8, y:200 },
    //     start: { scale:1, y:0,
    //         transition: {
    //             scale: { duration:props.duration1, type:'tween', ease:'anticipate' },
    //             y:{ delay:props.delay2, duration: props.duration2, type:'tween', ease:'anticipate'}
    //         }}
    // }

    // const bottomhalfintro = {
    //     ready: { scale:.8, y:-200 },
    //     start: { scale:1, y:0, 
    //         transition: {
    //             scale: { duration: props.duration1, type:'tween', ease:'anticipate' },
    //             y:{ delay:props.delay2, duration: props.duration2, type:'tween', ease:'anticipate'}
    //         }}
    // }

    const animateoutdelay = props.delay + props.duration + 1;

    const preloaderOutlineBarAnim = {
        ready: {opacity:0},
        start: { opacity: 1, transition: { delay: props.delay, duration: props.duration, type:'tween', ease:'anticipate' }}
    }

    const preloaderBarAnim = {
        ready: {scaleX:0},
        start: { scaleX: 1,
            transition: { 
                scaleX: { delay: props.delay + (.4), duration:props.fillduration, type:'tween', ease:'circInOut' }
            }
        }
    }

    // const preloaderPercentAnim = {
    //     ready: {x:0},
    //     start: { x: 700,
    //         transition: { 
    //             x: { delay: props.delay, duration:props.fillduration, type:'tween', ease:'circInOut' }
    //         }
    //     }
    // }

    const preloaderContainerAnim = {
        ready: {opacity:1, y:0},
        start: { opacity:0, y:10,
            transition: {
                opacity: {delay: animateoutdelay, duration:props.duration, type:'tween', ease:'anticipate'},
                y: {delay:animateoutdelay, duration:props.duration, type:'tween', ease:'anticipate'}
            }
        }
    }

    return (
        <div>
            <motion.div 
                className={estyle.preloadercontainer}
                variants={preloaderContainerAnim}
                initial="ready"
                animate="start"
            >
                <motion.div 
                    className={estyle.preloaderoutlinebar}
                    id="preloaderoutlinebar"
                    variants={preloaderOutlineBarAnim}
                    style={{originX: 0, opacity:0}}
                    posiiton="fixed"
                    initial="ready"
                    animate="start" 
                >
                </motion.div>
                
                <div className={estyle.themask}>
                    
                    <motion.div 
                    className={estyle.preloaderbar}
                    id="preloaderbar"
                    variants={preloaderBarAnim}
                    style={{originX: 0}}
                    posiiton="fixed"
                    initial="ready"
                    animate="start" 
                    >
                    </motion.div>
                </div>

                {/* <motion.div className={estyle.preloaderpercent}
                    id="preloaderpercent"
                    variants={preloaderPercentAnim}
                    initial="ready"
                    animate="start" 
                >
                    loading
                </motion.div> */}
            </motion.div>
        </div>
    );
};

export default Preloader;
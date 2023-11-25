import { motion, useAnimate } from "framer-motion"
import estyle from "./MainContentBox.module.scss"
import AnimatedRoutes from "../../navigation/AnimatedRoutes"
import { useContext, useEffect } from "react"
import NavContext from "../../NavContext"

const MainContentBox = ({props}) => {

    const { submodules } = useContext(NavContext)
    const [scope, animate] = useAnimate();
    
    let amountoftime = .7 * 1000

    const svgVariants = {
        ready: { scaleX:.01, scaleY:0, y:50 },
        start: { scaleX:1, scaleY:1, y:0, 
            transition: { 
                scaleY: { delay: 2.35, duration: .25, type:'tween', ease:'easeIn' },
                y: { delay:2.35, duration: .25, type: 'tween', ease:'easeIn' },
                scaleX: { delay: 2.6, duration: .25, type:'tween', ease:'backOut' }
                
            }
        }
    }

    const defaultpanel = async () => {

        animate('#routecontainerid', {opacity:0}, {duration:.2})
        animate(scope.current, { height:"410px" }, {duration: .25, delay:.4 })
        await animate('#routecontainerid', {opacity:1}, {duration:.2, delay:.45})
    }

    const openpanel = () => {
        animate([
            [scope.current, { height:"550px" }, {duration: .25, delay:.2 }]
        ]);
    }

    useEffect(() => {
        submodules.map((item) => {
            switch(item.positionstate) {
                case 1:
                    defaultpanel()
                    break;
                case 2:
                    setTimeout(() => {        
                        openpanel()
                    }, amountoftime)
                    break;
                case 3:
                    break;
                case 4:
                    break;
                    default:
            }
        })
    })

    return (
        <div>
            <motion.div 
                ref={scope}
                className={estyle.maincontentbox}
                id="maincontentboxid"
                style={{ height:"410px" }}
                variants={svgVariants}
                initial="ready"
                animate="start"
            >
                <div className={estyle.routecontainer} id="routecontainerid">
                    <AnimatedRoutes />
                </div>
            </motion.div>
        </div>
    );
};

export default MainContentBox;
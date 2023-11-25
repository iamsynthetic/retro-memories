import { motion, useAnimate } from "framer-motion"
import estyle from "./Partners.module.scss"
import NavContext from "../../NavContext"
import { useContext, useEffect, useState } from "react"

function Partners({props}) {

    const [bgimagename, setBgImageName] = useState('/images/sections/partners.jpg');

    let pretitle = 'OUR'
    let title = 'PARTNERS'
    let bodycopy0 = "WITHOUT OUR PARTNERS \nWE WOULDN'T BE ABLE TO \nCREATE THE AMAZING \nTECHNOLOGY THAT WE MAKE. \n \nOUR POINT OF VIEW IS THAT \nOUR PARTNERS ARE ON THIS  \nJOURNEY WITH US, THROUGH \nIT ALL OUR PARTNERS  \nARE THERE TO GUIDE AND HELP \nUS ACHIEVE THE GOALS WE \nSET TO ACHIEVE. "
    let bodycopy1 = '“ I visualize a time when we will be to robots what dogs \nare to humans, and I’m rooting for the machines. \n \n—Claude Shannon"'
    let thedelay = 0;
    let theduration = .25;

    const [scope, animate] = useAnimate();
    const { currentnav, changeDeepLinkName } = useContext(NavContext)

    useEffect(() => {
        currentnav.map((navitem) => {
            thedelay = navitem.waittime
            theduration = navitem.duration
            changeDeepLinkName('partners')
        })
    }, [])

    const svgVariants = {
        ready: { opacity:0 },
        start: { opacity:1, 
            transition: { 
                opacity: { delay:1, duration:theduration }
            }
        },
        exit: {opacity:0, transition: {delay:0, duration:0.1}}
    }

    const backgroundanim = {
        ready: { opacity:0 },
        start: { opacity:1,
            transition: {
                opacity: {delay:thedelay, duration:theduration}
            }
        }
    }

    const nextanim = async () => { 
        await animate('#bg', { opacity:1, x:0})
    }

    return (
        <motion.div className={estyle.container}  ref={scope} 
        variants={svgVariants}
        initial="ready"
        animate="start"
        exit="exit"
        style={{opacity:1}}>

        <motion.div 
            variants={backgroundanim}
            initial="ready"
            animate="start"
            onAnimationComplete={definition => {nextanim(.5)}}
        >  
            <div className={`${estyle.bgcontainer}`} id="bg" style={{ backgroundImage:`url(${bgimagename})`, opacity:0 }}/>
            <div className={estyle.contentcontainer}>
                <div className={estyle.thecontent}>
                    <div className={estyle.therow}>
                        <h1 className={estyle.pretitle}>{pretitle}</h1>
                    </div>
                    <div className={estyle.therow}>
                        <h1 className={estyle.title}>{title}</h1>
                    </div>
                    <motion.div className={estyle.therow} id="contentsection" style={{ opacity:1 }}>
                        <p className={estyle.cssfix}>{bodycopy0}</p>
                    </motion.div>
                </div>
                <div className={estyle.thespacer} />
                <div className={estyle.thequote}>
                    <motion.div className={estyle.therow} id="contentsection" style={{ opacity:1 }}>
                        <p className={estyle.cssfix}>{bodycopy1}</p>
                    </motion.div>
                </div>
            </div>
        </motion.div> 
    </motion.div>
    )
}
export default Partners;
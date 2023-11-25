import { motion, useAnimate } from "framer-motion"
import estyle from "./Clients.module.scss"
import NavContext from "../../NavContext"
import { useContext, useEffect, useState } from "react"

function Clients({props}) {

    const [bgimagename, setBgImageName] = useState('/images/sections/clients.jpg');

    let pretitle = 'OUR'
    let title = 'CLIENTS'
    let bodycopy0 = "WE CAN'T EXPRESS HOW PROUD \nWE ARE TO HAVE WORKED WITH \nTHESE GREAT COMPANIES AND \nLOOK FORWARD TO CONTINUED \nPARTNERSHIPS IN THE FUTURE."
    let thelist = ['X', 'IBM', 'META', 'GOOGLE', 'ADOBE ILLUSTRATOR']
    let thedelay = 0;
    let theduration = .25;

    const [scope, animate] = useAnimate();
    const { currentnav, changeDeepLinkName } = useContext(NavContext)

    useEffect(() => {
        currentnav.map((navitem) => {
            thedelay = navitem.waittime
            theduration = navitem.duration
            changeDeepLinkName('clients')
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

    const listofcompanies = []
    for(let i = 0; i < thelist.length; i++) {
        listofcompanies.push(
            <li className={estyle.listitems}>{thelist[i]}</li>
        )
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
                <motion.ul className={estyle.thelist} id="contentsection" style={{ opacity:1 }}>
                    {listofcompanies}
                </motion.ul>
            </div>
        </motion.div> 
    </motion.div>
    )
}
export default Clients;
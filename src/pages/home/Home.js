import { motion, useAnimate } from "framer-motion"
import estyle from "./Home.module.scss"
import NavContext from "../../NavContext"
import { useContext, useEffect } from "react"

function Home({props}) {

    let thedelay = 0;
    let theduration = .25;

    const [scope, animate] = useAnimate();
    const { currentnav, homepagevisible } = useContext(NavContext)

    const fadeIn = async (delayamount) => {

        animate('#bg', {x:-100})
        animate('#title', {x:-100})
        await animate('#bg', { opacity:1, x:0}, {delay:delayamount})
        await animate('#title', { x:0, opacity:1 })
    }

    currentnav.map((navitem) => {
        thedelay = navitem.waittime
        theduration = navitem.duration
    })

    useEffect(() => {
        
        homepagevisible.map((item) => {
            if(item.isfirsttime === true)
            {
                fadeIn(6)
            }
            else if(item.isfirsttime === false)
            {
                fadeIn(1)
            }
        })
    }, [homepagevisible])

    return (
        <motion.div className={estyle.container}  ref={scope} style={{opacity:1}}>
            
            <div className={estyle.bgcontainer} id="bg" style={{opacity:0}}/>
            <div className={estyle.contentcontainer}>
                <div className={estyle.col}>
                    <div className={estyle.title} id="title" style={{opacity:0}}><span className={estyle.pinkletter}>A</span>TOM<span className={estyle.pinkletter}>I</span></div>
                </div>
            </div>

        </motion.div>
    )
}
export default Home;
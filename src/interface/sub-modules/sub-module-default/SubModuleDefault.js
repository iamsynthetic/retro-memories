import { motion, useAnimate } from "framer-motion"
import estyle from "./SubModuleDefault.module.scss"
import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom"
import NavContext from "../../../NavContext"

function SubModuleDefault({props}) {

    const themodule = props.themodule;
    const { submodules, changesubmodule, changenav, homepagevisible, changeHomePage } = useContext(NavContext)
    const [enablebutton, setEnableButton] = useState(false)
    const [isFirstTime, setIsFirstTime] = useState(true)
    const count = useRef(0);
    const [scope, animate] = useAnimate();
    const navigate = useNavigate()
    const showcollapsebutton = []
    const whichsection = []

    let amountoftime = .9 * 1000
    let delaybeforenavchange = .1
    let linkpos = 0
    
    const svgVariants = {
        ready: { opacity: 0 },
        start: { opacity: 1, transition: { delay: props.delay, duration : props.duration }}
    }

    const openState = () => {
        setEnableButton(false)
        setTimeout(() => {        
            visibleState()
        }, amountoftime)
    }

    const collapsedState = async () => {
        
        await animate("#allcontent", { y:0, opacity:0 })
        setTimeout(() => {        
            showExpandButton()
        }, amountoftime)
    }

    const invisibleState = () => {
        animate([
            ["#allcontent", { opacity:0 }]
        ])
    }

    const visibleState = async () => {
        await animate("#allcontent", { y:0, visibility:"visible" })
        await animate("#allcontent", { opacity:1 })
    }

    const showExpandButton = () => {
        setEnableButton(true)
    }

    useEffect(()=>{
        submodules.map((item) => {
            if(isFirstTime === true)
            {
                setIsFirstTime(false)
            }
            else
            {
                switch(item.positionstate) {
                    case 1:
                        openState()
                        break;
                    case 2:
                        collapsedState()
                        break;
                    case 3:
                        invisibleState()
                        break;
                    case 4:
                        visibleState()
                        break;
                        default:
                } 
            }
        })
    }, [changesubmodule])

    const handleExpandClick = (e) => {
        changesubmodule("home", false, 1)
        let delay = .25 * 1000
        setTimeout(() => {        
            navigate(`/retro-memories/`);
            changeHomePage(true, false)
            changenav('', props.waittime, delaybeforenavchange)
        }, delay)
    }

    const handleClick = (e) => {
        submodules.map((item) => {
            if(item.positionstate !== null){
                changesubmodule(e, true, 3)
            }
        })
    }

    const handleHoverVariant = {
        hoveranim: {
            color:"#03FFFA"
        }
    }

    if(themodule === '1')
    {
        linkpos = 0
        whichsection.push
        (
            <div key={1} className={estyle.contentarea}>
                <div className={estyle.module1col1}>
                   <motion.div className={estyle.contenttitle} id="contenttitle" style={{opacity:1}}>
                        {props.subtitle}
                    </motion.div>
                    <motion.div className={estyle.contentbody} id="contentbody" style={{opacity:1}}>
                        {props.subbody}
                    </motion.div>

                    <motion.div className={`${estyle.contentlink} ${estyle.contentlink1}`} id="contentlink" style={{opacity:1, y:0, x:0}} whileHover={{ color:"#03FFFA" }} onClick={() => {handleClick('testimonials')}}>
                        {props.button}
                    </motion.div>
                </div>   
            </div>
        )    
    }
    else
    {
        linkpos = -100
        showcollapsebutton.push
        (
            <div className={estyle.expandbuttoncontainer}>
                {enablebutton ?
                    <motion.div style={{color:"#292728"}} className={estyle.expandbutton} variants={handleHoverVariant} whileHover={"hoveranim"} onClick={() => {handleExpandClick('handleExpandClick')}}>
                        expand<motion.span className={estyle.expandarrow} variants={handleHoverVariant}>&#8594;</motion.span>
                    </motion.div> :
                <div/>
                }
            </div>
        )
        whichsection.push
        (
            <div key={2} className={estyle.contentarea}>
                <div className={estyle.module2col1}>
                    <motion.div className={estyle.contentimage} id="contentimage" style={{opacity:1}}>
                    </motion.div>
                </div>
                <div className={estyle.module2col2}>
                    <motion.div className={estyle.contenttitle} id="contenttitle" style={{opacity:1}}>
                        {props.subtitle}
                    </motion.div>
                    <motion.div className={estyle.contentbody} id="contentbody" style={{opacity:1}}>
                        {props.subbody}
                    </motion.div>
                    <motion.div className={`${estyle.contentlink} ${estyle.contentlink2}`} id="contentlink" style={{opacity:1, y:0, x:0}} whileHover={{ color:"#03FFFA" }} onClick={() => {handleClick('press')}}>
                       {props.button}
                    </motion.div>
                </div>   
            </div> 
        )
    }
    
    return (
        <motion.div className={estyle.container}
            ref={scope}
            style={{ y:0, opacity:0 }}
            variants={svgVariants}
            initial="ready"
            animate="start"
        >
            {showcollapsebutton}
            <div id="allcontent">
                <div className={estyle.title}>
                    {props.title}
                </div>
                <div className={estyle.subline} />
                {whichsection}
            </div>
        </motion.div>
    )
}
export default SubModuleDefault;
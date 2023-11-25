import { motion, useAnimate } from "framer-motion"
import estyle from "./SubModuleContainer.module.scss"
import { useContext, useEffect, useState } from "react";
import SubModulePress from "../sub-module-press/SubModulePress"
import SubModuleTestimonials from "../sub-module-testimonials/SubModuleTestimonials"
import NavContext from "../../../NavContext"

function SubModuleContainer({props}) {
    
    const [showPress, setShowPress] = useState(false)
    const [showSection, setShowSection] = useState(false)
    const [scope, animate] = useAnimate();
    const { submodules, changesubmodule } = useContext(NavContext)

    let whichmodule = ["1"]
    let whichsection = []
    let theclosebtn = []

    const showPressFunction = (section) => {
        if(section === 'press')
        {
            setShowPress(true)
        }
        else
        {
            setShowPress(false)
        }
    }

    const openState = async () => {
        await animate(scope.current, { opacity:1 })
        await animate("#containerid", { height:"550px", y:-410 }, {duration: .25 })
        await animate("#pressid", { opacity:1 })
        await animate("#closeid", { opacity:1 })
    }

    const closeState = async () => {
        
        await animate("#pressid", { opacity:0 })
        await animate("#containerid", { height:"137px", y:0 }, {duration:.25 })
    }

    const collapseState = async () => {
        animate(scope.current, { y:0, opacity:0 })
    }

    const changeWhatHappens = () => {

        submodules.map((item) => {
            switch(item.positionstate) {

                case 1:
                    setShowSection(false)
                    closeState()
                    break;
                case 2:
                    setShowSection(false)
                    collapseState()
                    break;
                case 3:
                    setShowSection(true)
                    showPressFunction(item.submodule)
                    openState()
                    break;
                case 4:
                    setShowSection(false)
                    closeState()
                    break;
                    default:
            } 
        })
    }

    useEffect(()=>{
            changeWhatHappens()
	}, [changesubmodule])

    const handleCloseClick = (e) => {
        closeState()
        setTimeout(() => {        
            changesubmodule('', false, 4)
        }, 600)
    }

    const svgVariants = {
        ready: { opacity: 0 },
        start: { opacity: 1, transition: { delay: props.delay, duration : props.duration }}
    }

    const renderCloseButton = () => {
        theclosebtn = []
        theclosebtn.push
        (  
            <div className={estyle.closebutton}> 
            <motion.div id="closeid" style={{ opacity:0 }} 
                    whileHover={{scale:1.2, color:props.hovercolor, transition: { duration: props.hoverduration }}} 
                    onClick={(e) => handleCloseClick(e)}
            >
                x
            </motion.div>
            </div>
        )
    }

    const renderSubModules = () => {
        whichmodule = []
        if(showPress === true){
            whichmodule.push
            (
                <SubModulePress props={{delay:0, duration:1}}/> 
            )
        }
        else if(showPress === false){
            whichmodule.push
            (
                <SubModuleTestimonials props={{delay:0, duration:1}}/>
            )
        }
    }

    const renderSection = () => {
        whichsection = []
        if(showSection === true){
            whichsection.push
            (
                <motion.div id="pressid" style={{opacity:0}}>
                    {theclosebtn}
                    {whichmodule}
                </motion.div>
            )
        }
        else if(showSection === false){
            whichsection.push 
            (
                <motion.div id="pressid" style={{opacity:1}}>
                </motion.div>
            )    
        }
    }

    renderCloseButton()
    renderSubModules()
    renderSection()
    
    return (
        <div ref={scope}>
            <motion.div id="containerid" className={estyle.container} style={{ height: "137px", y:0 }} variants={svgVariants} initial="ready" animate="start">
                {whichsection}
            </motion.div>
        </div>
    )
}
export default SubModuleContainer;
import estyle from "./Projects.module.scss"
import { motion, useAnimate } from "framer-motion"
import NavContext from "../../NavContext"
import { useContext, useEffect, useState } from "react"

function Projects({props}) {

    const [showSection0, setShowSection0] = useState(true)
    const [showSection1, setShowSection1] = useState(false)
    const [isButtonDisabled, setButtonDisabled] = useState('button1'); 
    const [bgimagename, setBgImageName] = useState('https://raw.githubusercontent.com/iamsynthetic/retro-memories/gh-pages/images/sections/projects-creating-creation.jpg');
    const [menupos, setMenuPos] = useState(0)
    
    let whichsection = []
    let pretitle = 'THE'
    let title = 'PROJECTS'
    let menu = ['CREATING CREATION', 'THE SMARTEST AI']
    let bodycopy0 = "At Atomi, we pride ourselves in creating things that previously didn't exist. Our goal \nis to create technology that enriches the world and the humans in it, by advancing \nAI to a point where the customer, eventually will barely have to think about \nsomething before one of our creations grant it to them. You can Trust Atomi \nto improve life as we know it."
    let bodycopy1 = "Atomi has long been known for its innovative and creative approach to tackling \nobstacles and capturing opportunity. In recent years, the organization has decided to \nfocus its attention on building the smartest AI to date. To this end, the company has \nset up a project team specifically dedicated to the task."

    let thedelay = 0;
    let theduration = .25;

    const [scope, animate] = useAnimate();
    const { currentnav, changeDeepLinkName } = useContext(NavContext)

    useEffect(() => {
        currentnav.map((navitem) => {
            thedelay = navitem.waittime
            theduration = navitem.duration
            changeDeepLinkName('projects')
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

    const handleHover = (label) => {

        if(isButtonDisabled !== label)
        {
            let newlabel = '#' + label
            animate(newlabel, { color:'#03FFFA' })
        }
    }

    const handleLeave = (label) => {

        if(isButtonDisabled !== label)
        {
            let newlabel = '#' + label
            animate(newlabel, { color:'#ffffff' })
        }
    }

    const removeDisabledColor = (label) => {

        let newlabel = '#' + label
        animate(newlabel, { color:'#ffffff' })
    }

    const switchBg = async (bg) => {
        setTimeout(() => {        
            setBgImageName(bg)
        }, 500)

        await animate('#bg', {opacity:0, x:5, duration:.5})
        await animate('#bg', {x:5, delay:1})
        await animate('#bg', {opacity:1, x:0, duration:.5, delay:1})
    }

    const handleClick = (e, label, num) => {

        if(num === menupos)
        {
        }
        else
        {

            setMenuPos(num)

            switch(num) {
                case 0:
                    setShowSection0(true)
                    setShowSection1(false)
                    switchBg('https://raw.githubusercontent.com/iamsynthetic/retro-memories/gh-pages/images/sections/projects-creating-creation.jpg')
                    setButtonDisabled('button1');
                    removeDisabledColor('button2')
                    renderSection()
                    break;
                case 1:
                    setShowSection0(false)
                    setShowSection1(true)
                    switchBg('https://raw.githubusercontent.com/iamsynthetic/retro-memories/gh-pages/images/sections/projects-the-smartest-ai.jpg')
                    setButtonDisabled('button2');
                    removeDisabledColor('button1')
                    renderSection()
                    break;
                default:
            }
        }
    }

    const renderSection = () => {
        whichsection = []

        if(showSection0 === true) {
            whichsection.push
            (
                <p className={estyle.cssfix}>{bodycopy0}</p>
            )
        }
        else if(showSection1 === true){
            whichsection.push
            (
                <p className={estyle.cssfix}>{bodycopy1}</p>
            )
        }
    }

    renderSection()
    
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
        </motion.div>

        <div className={estyle.allthecontent}>

            <div className={estyle.row1}>
                <h1 className={estyle.pretitle}>{pretitle}</h1>
                <h1 className={estyle.title}>{title}</h1>
            </div>
            
            <div className={estyle.row2}>
                <div className={estyle.subrow1}>
                <motion.div 
                    className={`${estyle.menuitem} ${(isButtonDisabled === 'button1' ? estyle.disabledButton : estyle.menu)}`}
                    id="button1"
                    onMouseEnter={() => handleHover('button1')}
                    onMouseLeave={() => handleLeave('button1')}
                    onClick={(e) => handleClick(e, menu[0], 0)}
                >
                    {menu[0]}
                </motion.div>
                <motion.div 
                    className={`${estyle.menuitem} ${(isButtonDisabled === 'button2' ? estyle.disabledButton : estyle.menu)}`}
                    id="button2"
                    onMouseEnter={() => handleHover('button2')}
                    onMouseLeave={() => handleLeave('button2')}
                    onClick={(e) => handleClick(e, menu[1], 1)}
                >
                    {menu[1]}
                </motion.div>
                </div>

                <div className={estyle.subrow2}>
                    <motion.div className={estyle.therow} id="contentsection" style={{ opacity:1 }}>
                        {whichsection}
                    </motion.div>    
                </div>
            </div>

        </div>
    </motion.div>
    )
}
export default Projects;
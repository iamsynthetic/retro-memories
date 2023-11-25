import { motion, useAnimate } from "framer-motion"
import estyle from "./Future.module.scss"
import NavContext from "../../NavContext"
import { useContext, useEffect, useState } from "react"

function Future({props}) {

    const [showSection0, setShowSection0] = useState(true)
    const [showSection1, setShowSection1] = useState(false)
    const [showSection2, setShowSection2] = useState(false)
    const [isButtonDisabled, setButtonDisabled] = useState('button1'); 
    const [bgimagename, setBgImageName] = useState('/images/sections/future-future-of-company.jpg');

    const [menupos, setMenuPos] = useState(0)
    
    let whichsection = []

    let pretitle = 'THE'
    let title = 'FUTURE'
    let menu = ['THE FUTURE OF ATOMI', 'THE FUTURE OF AI', 'THE FUTURE OF TECH']
    let bodycopy0 = "We are a leading artificial intelligence technology company, dedicated to helping businesses and organizations harness the power of AI to improve their operations and drive their success. Our team of experienced AI engineers and researchers are passionate about developing innovative solutions that can enable businesses to leverage the potential of AI to increase efficiency."
    let bodycopy1 = "The AI company landscape is rapidly evolving and developing, with more startups sprouting up in this space every year. As the world turns to Artificial Intelligence for a wide range of solutions, AI companies have been able to tap into many opportunities. AI companies have a promising future, with innovative thinking and advanced technology being applied to make AI solutions even more efficient, and Atomi is at the forefront of it all."
    let bodycopy2 = "The future of technology is very exciting to contemplate. We are currently living in an era where technological innovation is occurring at a rapid rate, and this trend is expected to continue in the years to come. As technology continues to evolve and become more advanced, society can expect to reap the benefits that it provides. In the near future, we can look forward to advancements in artificial intelligence, robotics, big data, cloud computing, virtual reality and augmented \nreality technology."

    let thedelay = 0;
    let theduration = .25;

    const [scope, animate] = useAnimate();
    const { currentnav, changeDeepLinkName } = useContext(NavContext)

    useEffect(() => {
        currentnav.map((navitem) => {
            thedelay = navitem.waittime
            theduration = navitem.duration
            changeDeepLinkName('future')
        })
    }, [])

    const svgVariants = {
        ready: { opacity:0 },
        start: { opacity:1, 
            transition: {
                opacity: { delay:1, duration:theduration }
            }
        },
        // exit: {opacity:0, transition: {delay:0, duration:theduration}}

        exit: {opacity:0, transition: {delay:0, duration:0.1}}    }

    const backgroundanim = {
        ready: { opacity:0 },
        start: { opacity:1,
            transition: {
                opacity: {delay:thedelay, duration:theduration}
            }
        }
    }

    const nextanim = async (delay) => { 
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
                    setShowSection2(false)
                    switchBg('/images/sections/future-future-of-company.jpg')
                    setButtonDisabled('button1');
                    removeDisabledColor('button2')
                    removeDisabledColor('button3')
                    renderSection()
                    break;
                case 1:
                    setShowSection0(false)
                    setShowSection1(true)
                    setShowSection2(false)
                    switchBg('/images/sections/future-future-of-ai.jpg')
                    setButtonDisabled('button2');
                    removeDisabledColor('button1')
                    removeDisabledColor('button3')
                    renderSection()
                    break;
                case 2:
                    setShowSection0(false)
                    setShowSection1(false)
                    setShowSection2(true)
                    switchBg('/images/sections/future-future-of-tech.jpg')
                    setButtonDisabled('button3');
                    removeDisabledColor('button1')
                    removeDisabledColor('button2')
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
        else if(showSection2 === true){
            whichsection.push
            (
                <p className={estyle.cssfix}>{bodycopy2}</p>
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
            <div className={estyle.contentcontainer}>
                <div className={estyle.backgroundshapescontainer}>
                    <div className={estyle.backgroundshaperectangle} />
                </div>  
            </div>
        </motion.div>

        <div className={estyle.allthecontent}>

            <div className={estyle.row1}>
                <h1 className={estyle.pretitle}>{pretitle}</h1>
                <h1 className={estyle.title}>{title}</h1>
            </div>
            
            <div className={estyle.row2}>
                
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
                <motion.div 
                    className={`${estyle.menuitem} ${(isButtonDisabled === 'button3' ? estyle.disabledButton : estyle.menu)}`}
                    id="button3"
                    onMouseEnter={() => handleHover('button3')}
                    onMouseLeave={() => handleLeave('button3')}
                    onClick={(e) => handleClick(e, menu[2], 2)}
                >
                    {menu[2]}
                </motion.div>
            
                <motion.div className={estyle.row3} id="contentsection" style={{ opacity:1 }}>
                    {whichsection}
                </motion.div>    
            </div>
        </div>  
    </motion.div>
    )
}
export default Future;
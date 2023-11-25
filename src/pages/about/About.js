import { motion, useAnimate } from "framer-motion"
import estyle from "./About.module.scss"
import NavContext from "../../NavContext"
import { useContext, useEffect, useState } from "react"

function About({props}) {

    const [showSection0, setShowSection0] = useState(true)
    const [showSection1, setShowSection1] = useState(false)
    const [showSection2, setShowSection2] = useState(false)
    const [isButtonDisabled, setButtonDisabled] = useState('button1'); 
    const [bgimagename, setBgImageName] = useState('/images/sections/about-who-we-are.jpg');

    const [menupos, setMenuPos] = useState(0)
    
    let whichsection = []
    let pretitle = 'THE'
    let title = 'COMPANY'
    let menu = ['WHO WE ARE', 'OUR APPROACH', 'OUR VISION']
    let bodycopy0 = "We are a leading artificial intelligence technology \ncompany, dedicated to helping businesses and \norganizations harness the power of AI to improve their\noperations and drive their success. Our team of\nexperienced AI engineers and researchers are\npassionate about developing innovative solutions that \ncan enable businesses to leverage the potential of \nAI to increase efficiency,"
    let bodycopy1 = "When designing and developing artificial \nintelligence, companies no longer have to \nfocus solely on the nitty-gritty technical \ndetails. Instead, a holistic approach is \nneeded to ensure success. Additionally, they \nmust ensure that all laws and regulations \nrelating to data privacy and technology are \nadhered to and must focus on protecting users \nfrom unintended consequences. At Atomi, we do \nall that and more. Contact us to find out \nwhat exactly that ‘more’ is."
    let bodycopy2 = "Atomi’s vision for artificial intelligence \ncan guide future strategies and support \nlong-term growth. We believe the current \nand future potential of AI should be leveraged \nto drive meaningful progress, not only for our \norganization but for society and humanity as \na whole. We strive to lead the industry in \nAI-driven solutions while delivering end-user \nbenefits such as convenience, flexibility, and \nsecurity across our product lines"

    let thedelay = 0;
    let theduration = .25;

    const [scope, animate] = useAnimate();
    const { currentnav, changeDeepLinkName } = useContext(NavContext)
    
    useEffect(() => {
        currentnav.map((navitem) => {
            thedelay = navitem.waittime
            theduration = navitem.duration
            changeDeepLinkName('about')
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
            animate(newlabel, { color:'#FFD62A' })
        }
    }

    const handleLeave = (label) => {

        if(isButtonDisabled !== label)
        {
            let newlabel = '#' + label
            animate(newlabel, { color:'#000000' })
        }
    }

    const removeDisabledColor = (label) => {

        let newlabel = '#' + label
        animate(newlabel, { color:'#000000' })
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
                    switchBg('/images/sections/about-who-we-are.jpg')
                    setButtonDisabled('button1');
                    removeDisabledColor('button2')
                    removeDisabledColor('button3')
                    renderSection()
                    break;
                case 1:
                    setShowSection0(false)
                    setShowSection1(true)
                    setShowSection2(false)
                    switchBg('/images/sections/about-our-approach.jpg')
                    setButtonDisabled('button2');
                    removeDisabledColor('button1')
                    removeDisabledColor('button3')
                    renderSection()
                    break;
                case 2:
                    setShowSection0(false)
                    setShowSection1(false)
                    setShowSection2(true)
                    switchBg('/images/sections/about-our-vision.jpg')
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
                    <div className={estyle.backgroundshapecircle} />
                </div>  
                <div className={estyle.thecontent}>
                    <div className={estyle.therow}>
                        <h1 className={estyle.pretitle}>{pretitle}</h1>
                    </div>
                    <div className={estyle.therow}>
                        <h1 className={estyle.title}>{title}</h1>
                    </div>
                    <div className={`${estyle.therow} ${estyle.menugroup}`}>                   
                        <div className={estyle.col}>
                            <motion.div 
                                className={`${estyle.menuitem} ${(isButtonDisabled === 'button1' ? estyle.disabledButton : estyle.menu)}`}
                                id="button1"
                                onMouseEnter={() => handleHover('button1')}
                                onMouseLeave={() => handleLeave('button1')}
                                onClick={(e) => handleClick(e, menu[0], 0)}
                            >
                                {menu[0]}
                            </motion.div>
                        </div>
                        <div className={estyle.col}>
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
                        <div className={estyle.col}>
                            <motion.div 
                                className={`${estyle.menuitem} ${(isButtonDisabled === 'button3' ? estyle.disabledButton : estyle.menu)}`}
                                id="button3"
                                onMouseEnter={() => handleHover('button3')}
                                onMouseLeave={() => handleLeave('button3')}
                                onClick={(e) => handleClick(e, menu[2], 2)}
                            >
                                {menu[2]}
                            </motion.div>
                        </div>
                    </div>
                    <motion.div className={estyle.therow} id="contentsection" style={{ opacity:1 }}>
                        {whichsection}
                    </motion.div>
                </div>
                  
            </div>
        </motion.div> 
    </motion.div>
    )
}
export default About;
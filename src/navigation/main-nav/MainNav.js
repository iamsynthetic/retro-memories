import { motion } from "framer-motion"
import estyle from "./MainNav.module.scss"
import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import NavContext from '../../NavContext'

function MainNav({props}) {

    const menudisabledamount = props.disablemenuamount * 1000
    const [enablebutton, setEnableButton] = useState(true)
    const [isPrevActive, setPrevActive] = useState('')
    const [isActive, setActive] = useState('home');
    const { currentnav, changenav, submodules, changesubmodule, changeHomePage, homepagevisible, deeplinkname } = useContext(NavContext)
    const navlabels = ["ABOUT", "PROJECTS", "CLIENTS", "PARTNERS", "FUTURE", "CONTACT"]
    const thenav = []
    const navigate = useNavigate()
    
    let delaybeforenavchange = .1

    const handleHoverVariant = {
        fromselected: {color: '#03FFFA'},
        tounselected: { color:'#292728', 
            transition: { 
                color:{ duration: props.hoveranimduration }
            }
        },
        hoveranim: {
            color:props.hovercolor,
            transition:{ duration:props.hoveranimduration }
        }
    }

    const handleClick = (e, waittime, duration, label) => {
        if(isActive !== label)
        {
            setEnableButton(false)
            
            setTimeout(() => {        
                setEnableButton(true)
            }, menudisabledamount)
            
            setPrevActive(isActive)
            setActive(label);
                    
            submodules.map((item) => {
                if(item.positionstate !== null){
                    if(homepagevisible === true)
                    {
                        changeHomePage(false, false)
                        
                        setTimeout(() => {        
                            changesubmodule('', false, 2)
                            if(e !== null)
                            {
                                navigatetourl(`/${e.target.childNodes[0].data.toLowerCase()}`, e.target.childNodes[0].data.toLowerCase(), waittime, duration, .5)
                            }
                        }, 700)
                    }
                    else
                    {
                        changesubmodule('', false, 2)
                        if(e !== null)
                        {
                            navigatetourl(`/${e.target.childNodes[0].data.toLowerCase()}`, e.target.childNodes[0].data.toLowerCase(), waittime, duration, .5)
                        }
                    }
                }
            })
        }
    }

    const navigatetourl = (url, label, waittime, duration, thedelay) => {
        let delay = thedelay * 1000
        setTimeout(() => {        
            navigate(url);
            changenav(label, waittime, duration)
        }, delay)
    }

    useEffect(() => {
        changesubmodule('', false)
    }, [])

    useEffect(() => {

        currentnav.map((item) => {
            if(item.navname === undefined)
            {
                deeplinkname.map((item) => {
                    handleClick(null, props.sectiondelay, props.sectionduration, item.deeplinkname)
                })
            }
            setActive(item.navname)
        })
    },[currentnav, deeplinkname])

    for(let i = 0; i < navlabels.length; i++) {
        thenav.push(
            <motion.li key={i} className={estyle.mainnavbtn}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay:props.delay + (i*.2), duration: props.duration }}
            >
                {enablebutton ?
                    <div className={`
                            ${estyle.thelink} ${navlabels[i].toLowerCase()} 
                            ${(isActive === navlabels[i].toLowerCase() ? null : estyle.selected)}`} 
                            onClick={(e) => handleClick(e, props.sectiondelay, props.sectionduration, navlabels[i].toLowerCase())}
                    >
                        {isPrevActive === navlabels[i].toLowerCase() ?
                        <motion.div 
                            className={estyle.thelink}
                            variants={handleHoverVariant}
                            initial="fromselected"
                            animate="tounselected"
                            whileHover={"hoveranim"}
                        >
                        {navlabels[i]}
                        </motion.div> :
                        <motion.div
                            className={`${estyle.thelink} ${(isActive === navlabels[i].toLowerCase() ? estyle.selected : null)}`}
                            variants={handleHoverVariant}
                            whileHover={"hoveranim"}
                            
                        >
                            {navlabels[i]}
                        </motion.div> 
                        }
                    </div> :
                    <div className={`${estyle.thelink} ${(isPrevActive === navlabels[i].toLowerCase() ? estyle.selected : null)} ${(isActive === navlabels[i].toLowerCase() ? estyle.selected : null )}`}>{navlabels[i]}</div>
                }
            </motion.li>
        )
    }

    return (
        <nav>
            <ul className={estyle.mainnav}>
                {thenav}
            </ul>
        </nav>
    )
}
export default MainNav;
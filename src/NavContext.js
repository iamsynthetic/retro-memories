import { createContext, useState } from "react";

const NavContext = createContext();

export function NavProvider({children}){

    const [currentnav, setNav] = useState([{}])
    const [navlabels, setNavLabels] = useState(["HOME", "ABOUT", "PROJECTS", "CLIENTS", "PARTNERS", "FUTURE", "CONTACT"])
    const [submodules, setSubModules] = useState([])
    const [homepagevisible, setHomePageVisible] = useState([{homepagevisible:true, isfirsttime:true}])
    const [deeplinkname, setDeepLinkName] = useState([{}])

    const changenav = (navname, waittime) => {
        setNav(() => [{navname:navname, waittime:waittime}])
    }

    const changesubmodule = (submodule, yesopen, positionstate=1) => {
        setSubModules(() => [{submodule:submodule, yesopen:yesopen, positionstate:positionstate}])
    }

    const changeHomePage = (homepagevisible, isfirsttime) => {
        setHomePageVisible(() => [{homepagevisible:homepagevisible, isfirsttime:isfirsttime}])
    }
    
    const changeDeepLinkName = (deeplinkname) => {
        setDeepLinkName(() => [{deeplinkname:deeplinkname}])
    }

    return(
        <NavContext.Provider value={{
            currentnav, changenav, 
            navlabels, setNavLabels, 
            submodules, changesubmodule, 
            homepagevisible, changeHomePage,
            deeplinkname, changeDeepLinkName
            }}
        >
            {children}
        </NavContext.Provider>
    )
}
export default NavContext;
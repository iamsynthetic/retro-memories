import { motion, useAnimate } from "framer-motion"
import estyle from "./VerticleRectangles.module.scss"
import { useEffect, useState } from "react"

function VerticleRectangles({props}) {

    async function path1animate(){
        await animate("#path1", {opacity:0}, { delay:2, duration:.1})
        await animate("#path1", {opacity:1}, { delay:0, duration:.1})
        await animate("#path1", {opacity:0}, { delay:0, duration:.1})
        await animate("#path1", {opacity:1}, { delay:0, duration:.1})
        await animate("#path1", {opacity:0}, { delay:0, duration:.1})
        await animate("#path1", {opacity:1}, { delay:0, duration:.1})
        await animate("#path1", {opacity:0}, { delay:0, duration:.1})
        await animate("#path1", {opacity:1}, { delay:0, duration:.1})
        await animate("#path1", {opacity:0}, { delay:0, duration:.1})
        await animate("#path1", {opacity:1}, { delay:0, duration:.1})
    }

    async function path2animate(){
        await animate("#path2", {opacity:0}, { delay:2.3, duration:.1})
        await animate("#path2", {opacity:.3}, { delay:0, duration:.1})
        await animate("#path2", {opacity:0}, { delay:0, duration:.1})
        await animate("#path2", {opacity:.3}, { delay:0, duration:.1})
        await animate("#path2", {opacity:0}, { delay:0, duration:.1})
        await animate("#path2", {opacity:.3}, { delay:0, duration:.1})
        await animate("#path2", {opacity:0}, { delay:0, duration:.1})
        await animate("#path2", {opacity:.3}, { delay:0, duration:.1})
        await animate("#path2", {opacity:0}, { delay:0, duration:.1})
        await animate("#path2", {opacity:.3}, { delay:0, duration:.1})
    }
    async function path3animate(){
        await animate("#path3", {opacity:0}, { delay:2.9, duration:.1})
        await animate("#path3", {opacity:.5}, { delay:0, duration:.1})
        await animate("#path3", {opacity:1}, { delay:0, duration:.1})
        await animate("#path3", {opacity:.5}, { delay:0, duration:.1})
        await animate("#path3", {opacity:1}, { delay:0, duration:.1})
        await animate("#path3", {opacity:.5}, { delay:0, duration:.1})
        await animate("#path3", {opacity:1}, { delay:0, duration:.1})
        await animate("#path3", {opacity:.5}, { delay:0, duration:.1})
        await animate("#path3", {opacity:1}, { delay:0, duration:.1})
    }
    async function path4animate(){
        await animate("#path4", {opacity:0}, { delay:2.5, duration:.1})
        await animate("#path4", {opacity:.2}, { delay:0, duration:.1})
        await animate("#path4", {opacity:1}, { delay:0, duration:.1})
        await animate("#path4", {opacity:.2}, { delay:0, duration:.1})
        await animate("#path4", {opacity:1}, { delay:0, duration:.1})
        await animate("#path4", {opacity:.2}, { delay:0, duration:.1})
        await animate("#path4", {opacity:1}, { delay:0, duration:.1})
        await animate("#path4", {opacity:.2}, { delay:0, duration:.1})
        await animate("#path4", {opacity:1}, { delay:0, duration:.1})
    }
    async function path5animate(){
        await animate("#path5", {opacity:0}, { delay:2.7, duration:.1})
        await animate("#path5", {opacity:.8}, { delay:0, duration:.1})
        await animate("#path5", {opacity:1}, { delay:0, duration:.1})
        await animate("#path5", {opacity:.8}, { delay:0, duration:.1})
        await animate("#path5", {opacity:1}, { delay:0, duration:.1})
        await animate("#path5", {opacity:.8}, { delay:0, duration:.1})
        await animate("#path5", {opacity:1}, { delay:0, duration:.1})
        await animate("#path5", {opacity:.8}, { delay:0, duration:.1})
        await animate("#path5", {opacity:1}, { delay:0, duration:.1})
    }

    const [scope, animate] = useAnimate()
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setTimeout(() => {        
            setIsReady(true)
        }, 2400)
        path1animate();
        path2animate();
        path3animate();
        path4animate();
        path5animate();
    }, [])

    return (
        <div>
            <svg ref={scope} width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path1"
                    d="M0.543152 0.801877L0.543152 8.80183H1.54309V0.801877H0.543152Z" fill={props.color} stroke={props.color} strokeWidth="0.820946" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                <motion.path 
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path2"
                    d="M20.5432 0.801877V8.80183H21.5431V0.801877H20.5432Z" fill={props.color} stroke={props.color} strokeWidth="0.820946" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                <motion.path 
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path3"
                    d="M45.5432 0.801877V8.80183H46.5431V0.801877H45.5432Z" fill={props.color} stroke={props.color} strokeWidth="0.820946" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                <motion.path 
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path4"
                    d="M55.5432 0.801877V8.80183H56.5431V0.801877H55.5432Z" fill={props.color} stroke={props.color} strokeWidth="0.820946" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                <motion.path 
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path5"
                    d="M80.5432 0.801877V8.80183H81.5431V0.801877H80.5432Z" fill={props.color} stroke={props.color} strokeWidth="0.820946" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}
export default VerticleRectangles;
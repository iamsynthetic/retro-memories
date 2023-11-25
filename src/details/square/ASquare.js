import { motion, useAnimate } from "framer-motion"
import estyle from "./ASquare.module.scss"
import { useEffect } from "react"

function ASquare({props}) {

    async function path1animate(){
        await animate("#path1", {opacity:0}, { delay:0, duration:.1})
        await animate("#path1", {opacity:1}, { delay:props.delay, duration:.1})
        await animate("#path1", {opacity:0}, { delay:0, duration:.1})
        await animate("#path1", {opacity:1}, { delay:0, duration:.1})
        await animate("#path1", {opacity:0}, { delay:0, duration:.1})
        await animate("#path1", {opacity:1}, { delay:0, duration:.1})
        await animate("#path1", {opacity:0}, { delay:0, duration:.1})
        await animate("#path1", {opacity:1}, { delay:0, duration:.1})
        await animate("#path1", {opacity:0}, { delay:0, duration:.1})
        await animate("#path1", {opacity:1}, { delay:0, duration:.1})
    }

    const [scope, animate] = useAnimate()

    useEffect(() => {
        path1animate();
    }, [])

    const handleEnter = (theid) => {
        animate('#path1', {opacity:.2}, {duration:.1})
    }

    const handleLeave = (theid) => {
        animate('#path1', {opacity:1}, {duration:.1})
    }

    return (
        <div ref={scope}>
            <motion.div 
                className={`${estyle.thesquare}`}
                id="path1"
                style={{opacity:1}}
                onMouseEnter={() => {handleEnter(props.id)}}
                onMouseLeave={() => {handleLeave(props.id)}}
             />
        </div>
    )
}
export default ASquare;
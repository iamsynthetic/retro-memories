import { motion, useAnimate, useAnimationControls } from "framer-motion"
import estyle from "./OutlineVerticalRect.module.scss"
import { useEffect, useState } from "react"

function OutlineVerticalRect({props}) {
    
    // useEffect(() => {
        
    //     const sequence = async () => {
    //         await divControls.start('flash1')
    //         await divControls.start('flash2')
    //         await divControls.start('flash3')
    //         await divControls.start('flash4')
    //         await divControls.start('flash5')
    //         await divControls.start('flash6')
    //         await divControls.start('flash7')
    //         await divControls.start('flash8')
    //         await divControls.start('flash9')
    //     }
       
    //     sequence()

    //     const sequence2 = async () => {
    //         await divControls2.start('flash1')
    //         await divControls2.start('flash2')
    //         await divControls2.start('flash3')
    //         await divControls2.start('flash4')
    //         await divControls2.start('flash5')
    //         await divControls2.start('flash6')
    //         await divControls2.start('flash7')
    //         await divControls2.start('flash8')
    //         await divControls2.start('flash9')
    //     }
       
    //     sequence2()

    //     const sequence3 = async () => {
    //         await divControls3.start('flash1')
    //         await divControls3.start('flash2')
    //         await divControls3.start('flash3')
    //         await divControls3.start('flash4')
    //         await divControls3.start('flash5')
    //         await divControls3.start('flash6')
    //         await divControls3.start('flash7')
    //         await divControls3.start('flash8')
    //         await divControls3.start('flash9')
    //     }
       
    //     sequence3()

    //     const sequence4 = async () => {
    //         await divControls4.start('flash1')
    //         await divControls4.start('flash2')
    //         await divControls4.start('flash3')
    //         await divControls4.start('flash4')
    //         await divControls4.start('flash5')
    //         await divControls4.start('flash6')
    //         await divControls4.start('flash7')
    //         await divControls4.start('flash8')
    //         await divControls4.start('flash9')
    //     }
       
    //     sequence4()

    //     const sequence5 = async () => {
    //         await divControls5.start('flash1')
    //         await divControls5.start('flash2')
    //         await divControls5.start('flash3')
    //         await divControls5.start('flash4')
    //         await divControls5.start('flash5')
    //         await divControls5.start('flash6')
    //         await divControls5.start('flash7')
    //         await divControls5.start('flash8')
    //         await divControls5.start('flash9')
    //     }
       
    //     sequence5()

    //     const sequence6 = async () => {
    //         await divControls6.start('flash1')
    //         await divControls6.start('flash2')
    //         await divControls6.start('flash3')
    //         await divControls6.start('flash4')
    //         await divControls6.start('flash5')
    //         await divControls6.start('flash6')
    //         await divControls6.start('flash7')
    //         await divControls6.start('flash8')
    //         await divControls6.start('flash9')
    //     }
       
    //     sequence6()
    // })

    // const divControls = useAnimationControls();
    // const divControls2 = useAnimationControls();
    // const divControls3 = useAnimationControls();
    // const divControls4 = useAnimationControls();
    // const divControls5 = useAnimationControls();
    // const divControls6 = useAnimationControls();

    // const objanim1 = {

    //     ready: { opacity: 0, },
    //     flash1: { opacity: 1, transition: { opacity: {delay: props.delay, duration: .05}}},
    //     flash2: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash3: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash4: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash5: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash6: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash7: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash8: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash9: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    // }

    // const objanim2 = {
    //     ready: { opacity: 0, },
    //     flash1: { opacity: 1, transition: { opacity: {delay: props.delay + .3, duration: .05}}},
    //     flash2: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash3: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash4: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash5: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash6: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash7: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash8: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash9: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    // }

    // const objanim3 = {
    //     ready: { opacity: 0, },
    //     flash1: { opacity: 1, transition: { opacity: {delay: props.delay + .9, duration: .05}}},
    //     flash2: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash3: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash4: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash5: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash6: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash7: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash8: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash9: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    // }

    // const objanim4 = {
    //     ready: { opacity: 0, },
    //     flash1: { opacity: 1, transition: { opacity: {delay: props.delay + .5, duration: .05}}},
    //     flash2: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash3: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash4: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash5: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash6: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash7: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash8: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash9: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    // }

    // const objanim5 = {
    //     ready: { opacity: 0, },
    //     flash1: { opacity: 1, transition: { opacity: {delay: props.delay + .7, duration: .05}}},
    //     flash2: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash3: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash4: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash5: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash6: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash7: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash8: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash9: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    // }

    // const objanim6 = {
    //     ready: { opacity: 0, },
    //     flash1: { opacity: 1, transition: { opacity: {delay: props.delay + .5, duration: .05}}},
    //     flash2: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash3: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash4: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash5: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash6: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash7: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash8: { opacity: 0, transition: { opacity: {delay: 0, duration: .05}}},
    //     flash9: { opacity: 1, transition: { opacity: {delay: 0, duration: .05}}},
    // }

    async function path1animate(){
        await animate("#path1", {opacity:0}, { delay:2.6, duration:.1})
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
        await animate("#path2", {opacity:0}, { delay:2.9, duration:.1})
        await animate("#path2", {opacity:1}, { delay:0, duration:.1})
        await animate("#path2", {opacity:0}, { delay:0, duration:.1})
        await animate("#path2", {opacity:1}, { delay:0, duration:.1})
        await animate("#path2", {opacity:0}, { delay:0, duration:.1})
        await animate("#path2", {opacity:1}, { delay:0, duration:.1})
        await animate("#path2", {opacity:0}, { delay:0, duration:.1})
        await animate("#path2", {opacity:1}, { delay:0, duration:.1})
        await animate("#path2", {opacity:0}, { delay:0, duration:.1})
        await animate("#path2", {opacity:1}, { delay:0, duration:.1})
    }
    async function path3animate(){
        await animate("#path3", {opacity:0}, { delay:3.5, duration:.1})
        await animate("#path3", {opacity:1}, { delay:0, duration:.1})
        await animate("#path3", {opacity:0}, { delay:0, duration:.1})
        await animate("#path3", {opacity:1}, { delay:0, duration:.1})
        await animate("#path3", {opacity:0}, { delay:0, duration:.1})
        await animate("#path3", {opacity:1}, { delay:0, duration:.1})
        await animate("#path3", {opacity:0}, { delay:0, duration:.1})
        await animate("#path3", {opacity:1}, { delay:0, duration:.1})
    }
    async function path4animate(){
        await animate("#path4", {opacity:0}, { delay:3.1, duration:.1})
        await animate("#path4", {opacity:1}, { delay:0, duration:.1})
        await animate("#path4", {opacity:0}, { delay:0, duration:.1})
        await animate("#path4", {opacity:1}, { delay:0, duration:.1})
        await animate("#path4", {opacity:0}, { delay:0, duration:.1})
        await animate("#path4", {opacity:1}, { delay:0, duration:.1})
        await animate("#path4", {opacity:0}, { delay:0, duration:.1})
        await animate("#path4", {opacity:1}, { delay:0, duration:.1})
        await animate("#path4", {opacity:0}, { delay:0, duration:.1})
        await animate("#path4", {opacity:1}, { delay:0, duration:.1})
    }
    async function path5animate(){
        await animate("#path5", {opacity:0}, { delay:3.3, duration:.1})
        await animate("#path5", {opacity:1}, { delay:0, duration:.1})
        await animate("#path5", {opacity:0}, { delay:0, duration:.1})
        await animate("#path5", {opacity:1}, { delay:0, duration:.1})
        await animate("#path5", {opacity:0}, { delay:0, duration:.1})
        await animate("#path5", {opacity:1}, { delay:0, duration:.1})
        await animate("#path5", {opacity:0}, { delay:0, duration:.1})
        await animate("#path5", {opacity:1}, { delay:0, duration:.1})
        await animate("#path5", {opacity:0}, { delay:0, duration:.1})
        await animate("#path5", {opacity:1}, { delay:0, duration:.1})
    }
    async function path6animate(){
        await animate("#path6", {opacity:0}, { delay:3.1, duration:.1})
        await animate("#path6", {opacity:1}, { delay:0, duration:.1})
        await animate("#path6", {opacity:0}, { delay:0, duration:.1})
        await animate("#path6", {opacity:1}, { delay:0, duration:.1})
        await animate("#path6", {opacity:0}, { delay:0, duration:.1})
        await animate("#path6", {opacity:1}, { delay:0, duration:.1})
        await animate("#path6", {opacity:0}, { delay:0, duration:.1})
        await animate("#path6", {opacity:1}, { delay:0, duration:.1})
        await animate("#path6", {opacity:0}, { delay:0, duration:.1})
        await animate("#path6", {opacity:1}, { delay:0, duration:.1})
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
        path6animate();
    }, [])

    return (
        <div>
            <svg ref={scope} width="106" height="12" viewBox="0 0 106 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path1"
                    d="M1.42688 0.772221L1.42688 10.7722H5.42661L5.42661 0.772221H1.42688Z" stroke={props.color} strokeOpacity="0.5" strokeWidth="0.990389" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                <motion.path 
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path2"
                    d="M21.4269 0.772221V10.7722H25.4266V0.772221H21.4269Z" stroke={props.color} strokeWidth="0.990389" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                <motion.path 
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path3"
                    d="M41.4269 0.772221V10.7722H45.4266V0.772221H41.4269Z" stroke={props.color} strokeOpacity="0.5" strokeWidth="0.990389" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                <motion.path 
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path4"
                    d="M61.4269 0.772221V10.7722H65.4266V0.772221H61.4269Z" stroke={props.color} strokeWidth="0.990389" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                <motion.path 
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path5"
                    d="M81.4269 0.772221V10.7722H85.4266V0.772221H81.4269Z" stroke={props.color} strokeOpacity="0.5" strokeWidth="0.990389" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                <motion.path 
                    className={(isReady === true ? estyle.isnotvisible : estyle.isvisible)}
                    id="path6"
                    d="M101.427 0.772221V10.7722H105.427V0.772221H101.427Z" stroke={props.color} strokeOpacity="0.5" strokeWidth="0.990389" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}
export default OutlineVerticalRect;
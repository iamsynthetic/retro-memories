import { motion } from "framer-motion"

function TwobgRDarkFill({props}) {

    const svgVariants = {
        ready: { opacity: 0, x:props.xstart },
        start: { opacity:1, x:props.xend, 
        transition: {
            opacity:{
                delay:props.delay,
                duration:props.duration
            },
            x:{ 
                delay: props.delay, 
                duration: props.duration,
                type: 'tween', 
                ease:'backInOut'
            },
        }}
    }

    return (
        <div>
            <motion.svg width="250" height="397" viewBox="0 0 250 397" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="ready"
                animate="start"
            >
                <g filter="url(#filter0_d_45_28)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M157.644 332.734H56.744V56.577H146.694L185.504 81.527V314.825L157.644 332.734Z" fill="#000000"/>
                </g>
                <defs>
                    <filter id="filter0_d_45_28" x="0.744019" y="0.577026" width="248.76" height="396.157" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="4"/>
                        <feGaussianBlur stdDeviation="30"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_28"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_28" result="shape"/>
                    </filter>
                </defs>
            </motion.svg>
        </div>
    )
}
export default TwobgRDarkFill;
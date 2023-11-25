import { motion } from "framer-motion"

function TwobgLDarkFill({props}) {

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
            <motion.svg width="218" height="556" viewBox="0 0 218 556" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="ready"
                animate="start"
            >
                <g filter="url(#filter0_d_45_30)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M61.469 429.369L61.469 118.039L157.088 56.5681L157.088 490.838L61.469 429.369Z" fill="black"/>
                </g>
                <defs>
                    <filter id="filter0_d_45_30" x="0.968994" y="0.0680542" width="216.619" height="555.27" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="30"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_30"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_30" result="shape"/>
                    </filter>
                </defs>     
            </motion.svg>
        </div>
    )
}
export default TwobgLDarkFill;
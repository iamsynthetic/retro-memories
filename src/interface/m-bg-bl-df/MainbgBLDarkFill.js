import { motion } from "framer-motion"

function MainbgBLDarkFill({props}) {

    const svgVariants = {
        ready: { opacity: 0, y:props.ystart },
        start: { opacity:1, y:props.yend, 
            transition: {
                opacity:{
                    delay:props.delay,
                    duration:props.duration
                },
                y:{ 
                    delay: props.delay, 
                    duration: props.duration,
                    type: 'tween', 
                    ease:'backInOut'
                },
            }}
    }

    return (
        <div>
            <motion.svg width="610" height="216" viewBox="0 0 610 216" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                variants={svgVariants}
                initial="ready"
                animate="start"
            >
                <g filter="url(#filter0_d_41_21)">
                    <rect x="60" y="56" width="490" height="96" fill="url(#pattern0)"/>
                </g>
                <defs>
                    <filter id="filter0_d_41_21" x="0" y="0" width="610" height="216" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="30"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_21"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_21" result="shape"/>
                    </filter>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_41_21" transform="scale(0.00204082 0.0104167)"/>
                    </pattern>
                    <image id="image0_41_21" width="490" height="96" xlinkHref="data:image/png;base64,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"/>
                </defs>
            </motion.svg>
        </div>
    )
}
export default MainbgBLDarkFill;
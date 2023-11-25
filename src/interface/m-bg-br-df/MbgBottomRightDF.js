import { motion } from "framer-motion"

function MbgBottomRightDF({props}) {

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
            <motion.svg width="478" height="216" viewBox="0 0 478 216" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                variants={svgVariants}
                initial="ready"
                animate="start"
            >
                <g filter="url(#filter0_d_41_19)">
                <rect x="60" y="56" width="358" height="96" fill="url(#pattern0)"/>
                </g>
                <defs>
                <filter id="filter0_d_41_19" x="0" y="0" width="478" height="216" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="30"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_19"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_19" result="shape"/>
                </filter>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_41_19" transform="scale(0.0027933 0.0104167)"/>
                </pattern>
                <image id="image0_41_19" width="358" height="96" xlinkHref="data:image/png;base64,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"/>
                </defs>
            </motion.svg>
        </div>
    )
}
export default MbgBottomRightDF;
import { motion } from "framer-motion"

function TwobgBottom({props}) {

    const svgVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: props.delay, duration : 1 }}
    }
    
    return (
        <div>
            <motion.svg width="809" height="243" viewBox="0 0 809 243" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
  
                <g filter="url(#filter0_d_45_32)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M163.078 152.238H117.476L56.0043 56.6195H744.944L683.474 152.238H505.874L488.784 178.824H180.17L163.078 152.238Z" fill="#000000"/>
                </g>
                <defs>
                    <filter id="filter0_d_45_32" x="0.0043335" y="0.619507" width="808.94" height="242.205" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="4"/>
                        <feGaussianBlur stdDeviation="30"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_32"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_32" result="shape"/>
                    </filter>
                </defs> 
            </motion.svg>
        </div>
    )
}
export default TwobgBottom;

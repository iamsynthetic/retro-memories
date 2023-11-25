import { motion } from "framer-motion"

function Secondbg({props}) {

    const svgVariants = {
        hidden: { opacity: 0, scale:0 },
        visible: { opacity: 1, scale:1,
            transition: {
                opacity: { delay: props.delay1, duration:props.duration1 },
                scale: { delay: props.delay1, duration:props.duration2, type:'tween', ease:'anticipate' },
            }
        }
    }

    return (
        <div>
            <motion.svg width="1070" height="753" viewBox="0 0 1070 753" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
            >
  
                <g filter="url(#filter0_d_45_34)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M55.999 178.714V85.3965H582.424L601.324 56.0005H898.314L954.864 143.972H957.764L992.234 197.583V417.677L1005.97 426.511V571.026L992.234 579.86V654.529L992.244 654.534V688.117H705.674L698.014 676.195H151.876L144.211 688.117H55.999V457.722L67.6 450.264V186.171L55.999 178.714Z" fill="#EBEBEB"/>
                </g>
                <defs>
                    <filter id="filter0_d_45_34" x="-0.000976562" y="0.000488281" width="1069.97" height="752.117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="4"/>
                        <feGaussianBlur stdDeviation="30"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_34"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_34" result="shape"/>
                    </filter>
                </defs>
            </motion.svg>
        </div>
    )
}
export default Secondbg;
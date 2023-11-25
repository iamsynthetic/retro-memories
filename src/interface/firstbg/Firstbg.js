import { motion } from "framer-motion"
import estyle from "./Firstbg.module.scss"

const Firstbg = ({props}) => {
    const svgVariants = {
        ready: { opacity: 0 },
        start: { opacity: 1, transition: { delay: props.delay1, duration : props.duration1 }}
    }

    const tophalfintro = {
        ready: { scale:.8, y:200 },
        start: { scale:1, y:0,
            transition: {
                scale: { duration:props.duration1, type:'tween', ease:'anticipate' },
                y:{ delay:props.delay2, duration: props.duration2, type:'tween', ease:'anticipate'}
            }}
    }

    const bottomhalfintro = {
        ready: { scale:.8, y:-200 },
        start: { scale:1, y:0, 
            transition: {
                scale: { duration: props.duration1, type:'tween', ease:'anticipate' },
                y:{ delay:props.delay2, duration: props.duration2, type:'tween', ease:'anticipate'}
            }}
    }

    return (
        <div>
            
                <motion.svg width="1243" height="902" viewBox="0 0 1243 902" fill="none" xmlns="http://www.w3.org/2000/svg"
                    variants={svgVariants}
                    initial="ready"
                    animate="start"
                >
    
                    <g filter="url(#filter0_d_45_55)">
                        <motion.path
                            className={estyle.tophalf} 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M59.999 473.929V239.953L85.563 223.519V171.714L146.1 77.549H146.092L147.733 74.997H482.457L494.67 56H821.452L846.192 94.474H969.132L993.872 56H1071.73L1078.37 66.325H1143.79L1162.04 94.707L1178.5 120.301L1182.88 127.122V222.748L1167.68 232.521V451.869L1133.36 473.929H59.999Z" 
                            fill="#DFDFDE"
                            variants={tophalfintro}
                            initial="ready"
                            animate="start" 
                        />
                        <motion.path 
                            className={estyle.bottomhalf} 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M1133.66 473.999L1126.99 478.287V601.231L1167.68 627.388V721.328L1118.19 798.301H948.742L923.322 837.843H561.874L536.454 798.301H180.248L168.538 780.086H109.976L85.563 742.111V659.738L59.999 643.304V473.999H1133.66Z" 
                            fill="#DFDFDE"
                            variants={bottomhalfintro}
                            initial="ready"
                            animate="start" 
                        />
                    </g>
                    <defs>
                        <filter id="filter0_d_45_55" x="-0.000976562" y="0" width="1242.88" height="901.843" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="30"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_55"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_55" result="shape"/>
                        </filter>
                    </defs>
                </motion.svg>
        </div>
    );
};

export default Firstbg;


/*
const appstyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" };

const tiltstyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "blue", width: "708px", height: "395px" };

const containerstyle = { display: "flex" };

const svgstyle = { height: "50px", padding: "50px", fill: "#c8bdb0", cursor: "pointer" };

export default function App() { const ref = useRef(null); const [position, setPosition] = useState({ x: 0, y: 0 });

const handleMouse = (e) => { const { clientX, clientY } = e; const { height, width, left, top } = ref.current.getBoundingClientRect(); const middleX = clientX - (left + width / 2); const middleY = clientY - (top + height / 2); setPosition({ x: middleX, y: middleY }); };

const reset = () => { setPosition({ x: 0, y: 0 }); };

const { x, y } = position;

return (
<Tilt style={tiltstyle} options={{ scale: 2, max: 25 }}> 
*/
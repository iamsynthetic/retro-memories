import { motion } from "framer-motion"

function MbgTopRightDF({props}) {

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
                <g filter="url(#filter0_d_41_17)">
                    <rect x="60" y="56" width="358" height="96" fill="url(#pattern0)"/>
                </g>
                <defs>
                    <filter id="filter0_d_41_17" x="0" y="0" width="478" height="216" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="30"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_17"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_17" result="shape"/>
                    </filter>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_41_17" transform="scale(0.0027933 0.0104167)"/>
                    </pattern>
                    <image id="image0_41_17" width="358" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAABgCAYAAAAuCNi/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFeElEQVR4nO3cT49eUxzA8e+j0aZhkjJsmqjUThu6MAldmU2FFQsseAX6Gtp4AbpipWGHvgFhVQkJVpRESTQWLMTOvwWLNixupwbPzNznzjnnd86538+mu5lf08yZ09997nfB/BwEPgdORg8iaU+XgTPAX9GDlHQgeoAA54Dno4eQNMoDwPfAF9GDlLSIHqCwEwz/wLdHDyJptJ8ZfnZ/ih6klNuiByjoAPAGHspSa+4CXo0eoqQ5HcwvAaejh5A0yXPA09FDlDKXVcYx4CpwZ/Qgkib7kWGl8Wv0ILnN4eHfAriEn8KQWrfGsNZ4N3qQ3OZwY34BeDt6CEnJPA58FD1ETr0fzPcA39z8U1IfvgVOAX9GD5JL76uM14HHooeQlNQ6wwcXPogeJJeeb8xPAu9HDyEpi+vABvBl9CA59HowrwFfMXwaQ1KfPmP4H/H16EFS63WV8QrwRPQQkrI6CvwGfBo9SGo93phPAx/T599N0r/9ATwEfBc9SEq9vfl3kOG1aw9laR4OMzzk7+pnvrdVxjmGVzclzUd3BbqefstYjpPmq6sCXS+rDMtx0rx1VaDr5WA+i+U4ae66KdD1sMo4BnwN3BE9iKRwXRToWn/4t1WOOxE9iKQqdFGga/3GbDlO0jJNF+haPpgtx0naSdMFupZXGRexHCdpuXWG8+1y9CBTtHpjfgp4L3oISVW7ATxCgwW6Fg9my3GSxmqyQNfiKsNynKSxmizQtXZjthwnaVXNFehaevPPcpykKZor0LW0yrAcJ2mqpgp0rfwGOQlcwUiRpOl+AR6kgQJdC6sMy3GSUjhCIwW6Fg7ms/giiaQ0mijQ1b7KsBwnKbXqC3Q1P/yzHCcph+oLdDXfmF8E3ooeQlK3NoEPo4dYptaD+V6Gctx69CCSunUNeJgKC3S1rjIuAo9GDyGpa9UW6Gq8MVuOk1RKlQW62g5my3GSSquuQFfbKsNynKTSqivQ1XRjthwnKUpVBbpa3vw7hOU4SXEOM3zooIozqJZVhuU4SdGOU0mBrobfDpbjJNWiigJd9CrDcpykmlRRoIs+mC3HSapNeIEucpVxP3AVy3GS6hNaoIt6+LcA3sFynKQ6hRboom7MluMktWCTgAJdxMFsOU5SK0IKdBGrDMtxkloRUqArfWO2HCepNcULdCUPZstxklpVtEBXcpVxActxktp0FPgd+KTENyt1Y7YcJ6l1xQp0Jd78sxwnqQfFCnQlVhmW4yT1okiBLvfJbzlOUm+yF+hyrjIsx0nq0RHgtZzfIOfBbDlOUq+eBZ7J9cVzrTIsx0nqXbYCXY6Hf5bjJM1BtgJdjhuz5ThJc7JJ4gJd6oPZcpykuUleoEu9yrAcJ2lukhfoUt6YLcdJmqsbwAaJXjxJdTCvMXwK475EX0+SWpOsQJdqlXEBOJPoa0lSi5IV6FLcmC3HSdIgSYFuv2/+WY6TpH8kKdDtd5VxHstxkrTdceAHhoDbJPs51S3HSdJy+yrQTV1lWI6TpJ3tq0A39WC2HCdJu5tcoJuyyrAcJ0njTCrQrfrwz3KcJI03qUC36o3ZcpwkrW6TFQp0qxzMluMkaZprwCmGF1D2tMoqw3KcJE2zzvBhi1EFurE3ZstxkrQ/owt0Yw5my3GSlMaoAt2YVYblOElKY1SBbq8bs+U4SUprzwLdbm/+HQLexENZklLas0C32yrjPMMrhZKktHYt0O10YluOk6S8dizQLVtlWI6TpPx2LNAtO5gtx0lSGUsLdP9dZViOk6Sy/leg2/7wbwFcwnKcJJW0BtzNtgLd9huz5ThJirPJzQLd1sFsOU6SYt0q0G2tMizHSVKsWwW6BZbjJKkWN4CNBfAyw6cxJEnxrvwNwHbdGJSuV68AAAAASUVORK5CYII="/>
                </defs>
            </motion.svg>
        </div>
    )
}
export default MbgTopRightDF;

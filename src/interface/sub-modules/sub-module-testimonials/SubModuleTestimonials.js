import { motion } from "framer-motion"
import estyle from "./SubModuleTestimonials.module.scss"

function SubModuleTestimonials({props}) {
    
    const amountoftestimonials = 4
    const testimonials = []

    const subtitle = [
        "Adrian", "Jenny", "Luke", "Samantha"
    ]

    const subbody = [
        "I recently used [Company/'s] website and I was extremely impressed with the level of technical acumen they had displayed. It was a great experience and I highly recommend them to anyone looking for something special.", 
        "I recently used [Company] for an AI project and I was really impressed with the results. They had a great understanding of the project requirements and were able to provide a creative and futuristic solution that was exactly what I was looking for. I would highly recommend Company for any AI project!", 
        "I'm so glad I chose [Company] for my robot needs! Their robots are going to be great, and the customer service is even better - they have a great sense of the future! Highly recommend!", 
        "I am extremely impressed with [Company/’s] AI product. It is truly remarkable how it makes complex tasks seem effortless. The AI technology is a game-changer and has a positive impact on the world. I highly recommend it to anyone looking for innovative solutions."
    ]

    for(let i = 0; i < amountoftestimonials; i++){
        testimonials.push(
            <div key={i} className={estyle.contentarea}>
                <div className={estyle.module2col2}>
                    <motion.div 
                        className={estyle.contenttitle} 
                        id="contenttitle" 
                        style={{y:20, opacity:0}}
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity: 1, y:0 }}
                        transition={{ delay:(.5+(i*.15)), duration:.25 }}
                    >
                        <b>{subtitle[i]}</b>
                    </motion.div>
                    <motion.div 
                        className={estyle.contentbody} 
                        id="contentbody" 
                        style={{y:20, opacity:0}}
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity: 1, y:0 }}
                        transition={{ delay:(.5+(i*.15)), duration:.25 }}
                    >
                        {subbody[i]}
                    </motion.div>
                </div>   
            </div> 
        )
    }
    
    return (
        <motion.div className={estyle.container}>
            <div>TESTIMONIALS</div>
            {testimonials}
        </motion.div>
    )
}
export default SubModuleTestimonials;
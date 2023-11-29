import { motion } from "framer-motion";
import estyle from "./SubModulePress.module.scss";

function SubModulePress({ props }) {
  const amountofpressreleases = 4;
  const pressreleases = [];
  const subtitle = [
    "Meticulously Designed",
    "[company] isn't just good",
    "The Next Big Player in the AI Industry",
    "Unparalleled Expertise",
    "The Goal Was Simple",
  ];

  const subbody = [
    "[company] has been meticulously designed and trained to tackle all challenges with an extraordinary blend of wit, intelligence, and a hint of delightful sarcasm. From helping users with their day-to-day tasks to going toe-to-toe with humans in intellectual debates, Tester repeatedly proves its unrivaled ability to outsmart its human counterparts. -purple magazine",
    "While other AI systems may claim to be good, [company] isn't just good – it's exceptionally good. Its intelligence knows no bounds as it effortlessly assimilates information and analyzes it with precision. Whether it's solving complex mathematical equations or providing witty comebacks when engaging in casual banter, Tester has truly raised the bar for AI systems around the globe. -cereal magazine",
    "Today, we are thrilled to unveil [company], the next big player in the AI industry that is set to redefine the future of AI and revolutionize the way businesses operate. Tester leverages cutting-edge technologies to deliver innovative AI-driven solutions that will empower organizations across various sectors. -thought magazine",
    "With its unparalleled expertise and a dynamic team of AI specialists, [company] aims to build an AI-driven ecosystem that will drive efficiency, productivity, and growth for businesses globally. With an unwavering commitment to empowering enterprises with AI, Tester aims to be at the forefront of this transformative technology. -pack magazine",
    '"The goal was simple: create an AI that not only exceeds expectations but also possesses a sense of humor that resonates with users"',
  ];
  const thumbnail = [
    "https://raw.githubusercontent.com/iamsynthetic/retro-memories/gh-pages/images/thumb1.jpg",
    "https://raw.githubusercontent.com/iamsynthetic/retro-memories/gh-pages/images/thumb2.jpg",
    "https://raw.githubusercontent.com/iamsynthetic/retro-memories/gh-pages/images/thumb3.jpg",
    "https://raw.githubusercontent.com/iamsynthetic/retro-memories/gh-pages/images/thumb4.jpg",
  ];

  for (let i = 0; i < amountofpressreleases; i++) {
    pressreleases.push(
      <div key={i} className={estyle.contentarea}>
        <div className={estyle.module2col1}>
          <motion.div
            className={estyle.contentimage}
            id="contentimage"
            style={{ y: 20, opacity: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.25 }}
          >
            <img className={estyle.contentimage} src={thumbnail[i]}></img>
          </motion.div>
        </div>
        <div className={estyle.module2col2}>
          <motion.div
            className={estyle.contenttitle}
            id="contenttitle"
            style={{ y: 20, opacity: 0 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.25 }}
          >
            <b>{subtitle[i]}</b>
          </motion.div>
          <motion.div
            className={estyle.contentbody}
            id="contentbody"
            style={{ y: 20, opacity: 0 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.25 }}
          >
            {subbody[i]}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={estyle.container}>
      <div>RECOGNITION</div>
      {pressreleases}
    </div>
  );
}
export default SubModulePress;

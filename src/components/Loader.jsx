import "./static/Loader.css"
import { easeOut, motion } from "framer-motion";
import dbell from "./static/images/dbell.png";
const loaderVariant={
    animate:{
        rotate:[0,720],
        transition:{
            repeat:Infinity,
            ease:easeOut,
            duration:1.5
        }
    }
}

const Loader = () => {
    return (
        <div className="loader">
        <motion.div
            variants={loaderVariant}
            animate="animate"
        className="w-20 invert">
        <img src={dbell} alt="" />
        </motion.div>
        </div>
     );
}
 
export default Loader;
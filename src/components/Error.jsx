import "./static/error.css";
import { motion } from "framer-motion";
import error from "./static/images/error.png";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="all">
            <div className="box">
                <motion.div
                    initial={{scale:0}}
                    animate={{scale:1}}
                    transition={{duration:0.2}}
                className="white">
                    <motion.div
                        initial={{scale:0}}
                        animate={{scale:1}}
                        transition={{duration:0.4}}
                    className="success">
                        <h1 className="text-red-700 text-5xl font-bold my-5">Error Occured!</h1>
                        <p className="text-white text-xl">Please try again later or contact your gym.</p>
                        <button className="home_btn rounded-full p-2 mr-5 mb-5"><Link to={'/'}> Return to Home </Link></button>
                        <button className="re_btn rounded-full p-2 bg-red-500"><Link to={'/subscribe'}>Try Again</Link></button>
                    </motion.div>
                    <motion.img
                    initial={{scale:0}}
                    animate={{scale:0.8}}
                    transition={{duration:0.4}}
                    src={error} alt="" />
                </motion.div>
            </div>
        </div>
    )
}
 
export default Error;
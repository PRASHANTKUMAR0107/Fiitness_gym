import "./static/subscription.css"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Subscription = () => {
    return ( 
        <div className="all">
            <div className="slogan_mem">
                <p>
                "Invest in yourself, both physically and mentally. A gym membership is an investment in your health and well-being."
                </p>
            </div>
            <div className="subs">
                <motion.div
                    animate={{x:0}}
                    initial={{x:-200}} 
                    whileHover={{scale:1.1}}
                    transition={{type:'spring',stiffness:200}}
                className="card">
                    <div className="card_content">
                        <h2>#Beginner</h2>
                        <motion.div
                            whileHover={{height:200,}}
                        className="card_info">
                            <p>one-month</p>
                            <p>$$$$$</p>
                            <button className="rounded-full bg-red-700 hover:bg-red-900 p-2"> <Link to={"/form"}> start your journey </Link> </button>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{x:0}}
                    initial={{x:-200}} 
                    whileHover={{scale:1.1}}
                    transition={{type:'spring',stiffness:200}}
                className="card">
                    <div className="card_content">
                        <h2>#Intermediate</h2>
                        <motion.div
                            whileHover={{height:200,}}
                        className="card_info">
                            <p>three-month</p>
                            <p>$$$$$</p>
                            <button className="rounded-full bg-red-700 hover:bg-red-900 p-2"> <Link to={"/form"}> start your journey </Link> </button>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{x:0}}
                    initial={{x:-200}} 
                    whileHover={{scale:1.1}}
                    transition={{type:'spring',stiffness:200}}
                className="card">
                    <div className="card_content">
                        <h2>#Advanced</h2>
                        <motion.div
                            whileHover={{height:200,}}
                        className="card_info">
                            <p>six-month</p>
                            <p>$$$$$</p>
                            <button className="rounded-full bg-red-700 hover:bg-red-900 p-2"> <Link to={"/form"}> start your journey </Link> </button>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{x:0}}
                    initial={{x:-200}} 
                    whileHover={{scale:1.1}}
                    transition={{type:'spring',stiffness:200}}
                className="card">
                    <div className="card_content">
                        <h2>#Pro</h2>
                        <motion.div
                            whileHover={{height:200,}}
                        className="card_info">
                            <p>twelve-month</p>
                            <p>$$$$$</p>
                            <button className="rounded-full bg-red-700 hover:bg-red-900 p-2"> <Link to={"/form"}> start your journey </Link> </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
     );
}
 
export default Subscription;
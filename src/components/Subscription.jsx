import "./static/subscription.css"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import dbellbg from "./static/images/dbellbg.png"
const Subscription = (props) => {
    const navigate = useNavigate();
    const key={
        one:'One Month',
        three:'Three Months',
        six:'Six Months',
        annual:'Twelve Months'
    }
    const clicked =(e)=>{
        props.durFun(e);
        navigate('/form');
    }

    return ( 
        <>
        
        <div className="all_subs">
            <div className="dbell">
                <img src={dbellbg} alt="" />
            </div>
            <div className="slogan_mem">
                <p >
                "Invest in yourself, both physically and mentally. A gym membership is an investment in your health and well-being."
                </p>
            </div>
            <div className="subs">
                <motion.div onClick={()=>clicked(key.one)}
                    animate={{x:0}}
                    initial={{x:-200}} 
                    whileHover={{scale:1.1}}
                    transition={{type:'spring',stiffness:200}}
                className="card">
                    <div className="card_content beginner">
                        <h2>#Beginner</h2>
                        <motion.div
                            whileHover={{height:150,}}
                        className="card_info">
                            <p className="text-xl">One Month</p>
                            <p>Beginner Pack (30 days)</p>
                            <p className="text-xs font-thin mt-1 mb-1">(Know the prices at our Gym)</p>
                            <button className="rounded-full  hover:bg-gray-700 p-2">start your journey </button>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div onClick={()=>clicked(key.three)}
                    animate={{x:0}}
                    initial={{x:-200}} 
                    whileHover={{scale:1.1}}
                    transition={{type:'spring',stiffness:200}}
                className="card">
                    <div className="card_content intermediate">
                        <h2>#Intermediate</h2>
                        <motion.div
                            whileHover={{height:150,}}
                        className="card_info">
                            <p className="text-xl">Three Months</p>
                            <p>Intermediate Pack (90 days)</p>
                            <p className="text-xs font-thin mt-1 mb-1">(Know the prices at our Gym)</p>
                            <button className="rounded-full hover:bg-gray-700 p-2">start your journey</button>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div onClick={()=>clicked(key.six)}
                    animate={{x:0}}
                    initial={{x:-200}} 
                    whileHover={{scale:1.1}}
                    transition={{type:'spring',stiffness:200}}
                className="card">
                    <div className="card_content advanced">
                        <h2>#Advanced</h2>
                        <motion.div
                            whileHover={{height:150,}}
                        className="card_info">
                            <p className="text-xl">Six Months</p>
                            <p>Advanced Pack (180 days)</p>
                            <p className="text-xs font-thin mt-1 mb-1">(Know the prices at our Gym)</p>
                            <button className="rounded-full hover:bg-gray-700 p-2">start your journey</button>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div onClick={()=>clicked(key.annual)}
                    animate={{x:0}}
                    initial={{x:-200}} 
                    whileHover={{scale:1.1}}
                    transition={{type:'spring',stiffness:200}}
                className="card">
                    <div className="card_content pro">
                        <h2>#Pro</h2>
                        <motion.div
                            whileHover={{height:150,}}
                        className="card_info">
                            <p className="text-xl">Annual</p>
                            <p>Pro (365 days)</p>
                            <p className="text-xs font-thin mt-1 mb-1">(Know the prices at our Gym)</p>
                            <button className="rounded-full hover:bg-gray-700 p-2"> start your journey </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
     );
}
 
export default Subscription;
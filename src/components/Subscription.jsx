import "./static/subscription.css"
import "./static/Subs_form.css"
import { motion } from "framer-motion";
import dbellbg from "./static/images/dbellbg.png"

const Subscription = (props) => {
    const key={
        one:'One Month',
        three:'Three Months',
        six:'Six Months',
        annual:'Twelve Months'
    }
    const clicked =(e)=>{
        props.durFun(e);
    }

    const explore_clicked=()=>{
        props.durFun('');
    }
    
    return ( 
        <>
        {props.dur ?
            <div className="all">
            <div className="subs_form h-screen md:flex">
	            <div className="relative overflow-hidden md:flex w-1/3 i justify-around items-center hidden">
		            <motion.div
						animate={{x:0}}
						initial={{x:-200}}
						transition={{type:'spring',stiffness:200}}
                        className="p-2"
					>
			            <h1 className="text-rose-600 font-bold text-4xl font-sans">Be Fit !</h1>
			            <p className="text-gray-200 mt-1">Shape your body like the way you want it.</p> 
						<p>Join us now! </p>
			            <motion.button onClick={explore_clicked} whileHover={{scale:1.1,backgroundColor:'white'}} type="submit" className="block p-2 bg-gray-200 text-gray-900 mt-4  rounded px-5 font-bold mb-2">Explore More Packs</motion.button>
		            </motion.div>
		        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	        </div>
	        <div className="form_box flex md:w-2/3 justify-center items-center">
		        <motion.form
					animate={{x:0}}
                    initial={{x:-200}} 
                    transition={{type:'spring',stiffness:200}}
					action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSefeH6EjwYIMHrn-ePsh7TqyOjgpRbNN-wM6BME-Z8wnC369Q/formResponse"
					method="POST"
				className="form flex flex-col">
			        <h1 className="text-gray-300 font-bold text-xl mb-1">Hello Again!</h1>
			        <p className="text-sm font-normal text-gray-200 mb-2">"Take care of your body. It's the only place you have to live."</p>
                    <div className="form_input">
                        <input className="name rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="text" name="entry.2005620554" id="" placeholder="Full Name" required autoComplete="off"/>
                        <select className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" id="" name="entry.1522433412">
                            <option value="" selected disabled hidden>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <input className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="number" name="entry.786395591" id="" placeholder="Age" required autoComplete="off"/>
                        <input className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="number" name="entry.1166974658" id="" placeholder="Phone Number" required autoComplete="off"/>
                        <input className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="number" name="entry.1344122487" id="" placeholder="Alternate Phone Number" required autoComplete="off"/>
                        <input className="name rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="text" name="entry.1065046570" id="" placeholder="Address" required autoComplete="off"/>
                        <input className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="email" name="entry.1045781291" id="" placeholder="Email" required autoComplete="off"/>
                        <input className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="text" name="entry.839337160" id="" placeholder="Medical History (if any)" autoComplete="off"/>
                        <input className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="text" name="entry.56646602" id="" placeholder="Experience (if any)"  autoComplete="off"/>
                        <input className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="text" name="entry.1221171984" id="" placeholder="Last Gym Name (if any)"  autoComplete="off"/>
                        <select className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" id="" name="entry.1872652932">
                            <option value={props.dur} selected disabled hidden>{props.dur}</option>
                            <option value="One Month">One Month</option>
                            <option value="Three Months">Three Months</option>
                            <option value="Six Months">Six Months</option>
                            <option value="Twelve Months">Twelve Months</option>
                        </select>
                        {/* <input className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="text" name="entry.1872652932" id="" value={props.dur} placeholder="Duration" required autoComplete="off"/> */}
                        <input className="rounded text-gray-200 pl-2 border-gray-400 border-2 data" type="text" name="entry.1158356603" id="" placeholder="Requirements (Eg : Gain, Loss)" required autoComplete="off"/>
                    </div>
                    <button className="sb_btn rounded p-2 m-1" type="submit">Enroll</button>		
		</motion.form>
		</div>
		</div>
        </div>
        :
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
                        <button className="rounded  hover:bg-gray-700 p-2">start your journey </button>
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
                        <button className="rounded hover:bg-gray-700 p-2">start your journey</button>
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
                        <button className="rounded hover:bg-gray-700 p-2">start your journey</button>
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
                        <button className="rounded hover:bg-gray-700 p-2"> start your journey </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
        </div>
        }
        </>
     );
}
 
export default Subscription;
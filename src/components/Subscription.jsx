import "./static/subscription.css"
import "./static/Subs_form.css"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import dbellbg from "./static/images/dbellbg.png"
import { getCurrentDate } from "./Date";
import dbell from "./static/images/dbell.png";
import { Link } from "react-router-dom";

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
					>
			            <h1 className="text-gray-200 font-bold text-4xl font-sans">Be Fit !</h1>
			            <p className="text-gray-200 mt-1">Shape your body like the way you want it.</p> 
						<p>Join us now! </p>
			            <motion.button onClick={explore_clicked} whileHover={{scale:1.1,backgroundColor:'white'}} type="submit" className="block p-2 bg-gray-200 text-gray-900 mt-4  rounded-2xl font-bold mb-2">Explore More Packs</motion.button>
		            </motion.div>
		        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	        </div>
	        <div className="form_box flex md:w-2/3 justify-center py-10 items-center">
		        <motion.form
					animate={{x:0}}
                    initial={{x:-200}} 
                    transition={{type:'spring',stiffness:200}}
					action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSefeH6EjwYIMHrn-ePsh7TqyOjgpRbNN-wM6BME-Z8wnC369Q/formResponse"
					method="POST"
				className="form">
			        <h1 className="text-gray-300 font-bold text-2xl mb-1">Hello Again!</h1>
			        <p className="text-sm font-normal text-gray-200 mb-7">"Take care of your body. It's the only place you have to live."</p>
			        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
				        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
					        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
				        </svg>
				    <input className="data pl-2 outline-none border-none" type="text" name="entry.2005620554" id="" placeholder="Full name * "  required/>
                    </div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
					        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
				        </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="entry.786395591" id=""  placeholder="Age *" required/>
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
					        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
				        </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="entry.1522433412" id=""  placeholder="Gender *" required/>
      				</div>
				    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="entry.1166974658" id=""  placeholder="Phone Number *" required/>
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="entry.1344122487" id=""  placeholder="Alternate Phone Number *" required/>
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="entry.1065046570" id=""  placeholder="Address *" required/>
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none data" type="text" name="entry.1045781291" id=""  placeholder="Email Address *" required/>
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="entry.839337160" id=""  placeholder="Medical History (if any)" />
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="entry.56646602" id=""  placeholder="Experience (if any)" />
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<img src={dbell} className="h-3 w-5 text-gray-200 invert brightness-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" alt="" />
						<input className="data pl-2 outline-none border-none" type="text" name="entry.1221171984" id=""  placeholder="Last Gym Name (if any)" />
      				</div>
					  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
					  <img src={dbell} className="h-3 w-5 text-gray-200 invert brightness-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" alt="" />
						<input className="data pl-2 outline-none border-none" type="text" name="entry.1872652932" id="" value={props.dur}  placeholder="PackageDuration(eg:3Mon)" required/>
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
						</svg>
						<input className="data pl-2 outline-none border-none" type="text" name="entry.1158356603" id=""  placeholder="Requirements(eg:bulking)* "  required/>
      				</div>
					<button type="submit"  className="sb_btn block w-full bg-blue-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"> <Link to={"/success"}>Enroll</Link></button>
					{/* <span className="warning text-sm ml-2 cursor-pointer rounded-full"> { message } </span> */}
					{/* {response ===200 ? <Navigate to="/success" />:<></>} */}
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
        }
        </>
     );
}
 
export default Subscription;
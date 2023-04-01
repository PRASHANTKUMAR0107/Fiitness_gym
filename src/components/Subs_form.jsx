import "./static/Subs_form.css"
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";
import { getCurrentDate } from "./Date";
import dbell from "./static/images/dbell.png";
import { Link } from "react-router-dom";
const userInitialValues={
    name:'',
	age:'',
	gender:'',
    phone_number:'',
	alternate_phone_number:'',
	email:'',
	address:'',
	medical_history:'',
	experience:'',
	last_gym_name:'',
	requirements:'',
	transaction:'verify and enter the amount',
	duration:'',
	currDate:''
}

let day=getCurrentDate();
const api = axios.create({
    baseURL:"http://localhost:5000"
})

const Subs_form = (props) => {

	const [userData,setUserData] = useState(userInitialValues);

	const onChang=(e)=>{
		setUserData({ ...userData , [e.target.name]:e.target.value })
	}
	const onChangPackage=(e)=>{
		props.durFun(e.target.value);
	}

	const [response,setResponse]=useState('');
	const [loader,setloader]=useState(false);
	const [message,setMessage]=useState('');



	const onClick = async()=>{
		userData.currDate=day;
		if(userData.duration===''){
			userData.duration=props.dur;
		}
		if(userData.name==='' || userData.email==='' || userData.phone_number==='' || userData.alternate_phone_number==='' || userData.address==='' || userData.age==='' || userData.gender==='' || userData.requirements==='' || userData.duration==='' ){
			setMessage(' Please fill all the required fields ! ');
			setTimeout(function() {setMessage('')}, 1000);
			return; 
		}
		setloader(true)
		await api.post("/",userData)
		.then(function (response) {
			setResponse(response.status);
			setloader(false);
			console.log(response.status);
		})
		.catch(function (error) {
			setloader(false);
			console.log(error);
		});
	}

    return ( 
        <div className="all"> 
            <div className="subs_form h-screen md:flex">
	            <div className="relative overflow-hidden md:flex w-1/2 i justify-around items-center hidden">
		            <motion.div
						animate={{x:0}}
						initial={{x:-200}}
						transition={{type:'spring',stiffness:200}}
					>
			            <h1 className="text-gray-200 font-bold text-4xl font-sans">Be Fit !</h1>
			            <p className="text-gray-200 mt-1">Shape your body like the way you want it.</p> 
						<p>Join us now! </p>
			            <motion.button whileHover={{scale:1.1,backgroundColor:'white'}} type="submit" className="block p-2 bg-gray-200 text-gray-900 mt-4  rounded-2xl font-bold mb-2"><Link to={'/subscribe'}> Explore More Packs</Link></motion.button>
		            </motion.div>
		        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	        </div>
	        <div className="form_box flex md:w-1/2 justify-center py-10 items-center">
		        {loader? <div><Loader/></div>: <motion.div
					animate={{x:0}}
                    initial={{x:-200}} 
                    transition={{type:'spring',stiffness:200}}
				className="form">
			        <h1 className="text-gray-300 font-bold text-2xl mb-1">Hello Again!</h1>
			        <p className="text-sm font-normal text-gray-200 mb-7">"Take care of your body. It's the only place you have to live."</p>
			        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
				        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
					        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
				        </svg>
				    <input className="data pl-2 outline-none border-none" type="text" name="name" id="" onChange={onChang} placeholder="Full name * " />
                    </div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
					        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
				        </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="age" id="" onChange={onChang} placeholder="Age *" />
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
					        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
				        </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="gender" id="" onChange={onChang} placeholder="Gender *" />
      				</div>
				    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="phone_number" id="" onChange={onChang} placeholder="Phone Number *" />
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="alternate_phone_number" id="" onChange={onChang} placeholder="Alternate Phone Number *" />
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="address" id="" onChange={onChang} placeholder="Address *" />
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none data" type="text" name="email" id="" onChange={onChang} placeholder="Email Address *" />
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="medical_history" id="" onChange={onChang} placeholder="Medical History (if any)" />
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					    </svg>
						<input className="data pl-2 outline-none border-none" type="text" name="experience" id="" onChange={onChang} placeholder="Experience (if any)" />
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
						<img src={dbell} className="h-3 w-5 text-gray-200 invert brightness-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" alt="" />
						<input className="data pl-2 outline-none border-none" type="text" name="last_gym_name" id="" onChange={onChang} placeholder="Last Gym Name (if any)" />
      				</div>
					  <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 h-9">
					  <img src={dbell} className="h-3 w-5 text-gray-200 invert brightness-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" alt="" />
						<input className="data pl-2 outline-none border-none" type="text" name="duration" id="" value={props.dur} onChange={onChangPackage} placeholder="PackageDuration(eg:3Mon)" />
      				</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl h-9">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
						</svg>
						<input className="data pl-2 outline-none border-none" type="text" name="requirements" id="" onChange={onChang} placeholder="Requirements(eg:bulking)* " />
      				</div>
					<button type="submit" onClick={onClick}  className="sb_btn block w-full bg-blue-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Enroll</button>
					<span className="warning text-sm ml-2 cursor-pointer rounded-full"> { message } </span>
					{response ===200 ? <Navigate to="/success" />:<></>}
		</motion.div>}
		</div>
		</div>
		</div>
    );
}
 
export default Subs_form;
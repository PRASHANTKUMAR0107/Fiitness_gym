import "./static/nav.css";
import logo from "./static/images/fiitness_gym_logo_png1.png";
import menu from "./static/images/4.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
const Navbar = () => {
    const [visi,setVisi]=useState(false);
    useEffect(()=>{
        if(window.screen.width>600){
            setVisi(true);
            console.log("useEffect")
        }
    },[])
    let show_items = ()=>{
        if(visi){
            setVisi(false);
        } else {
            setVisi(true);
        }
    }

const itemvariants = {
    hidden:{
        y:-40,
    },
    visible:{
        y:0,
        transition:{
            type:'spring',
        }
    },
}

    return ( 
        <>
            <nav className="text-white">
                <div className="header">
                    <img className="header_logo" src={logo} alt="logo" /> 
                    <p className="italic">Fiitness Gym</p>
                    <img id="menu_btn" onClick={show_items} className="menu_icon" src={menu} alt="" />
                </div>
                <AnimatePresence>
                {visi &&
                    <motion.div className="items"
                        variants={itemvariants}
                        animate="visible"
                        initial="hidden"
                    >
                        <div className="items_list"> <Link to={"/"}> Home </Link></div>
                        <div className="items_list"><Link to={""}> Diet Chart </Link></div>
                        <div className="items_list"><Link to={""}> Timetable </Link></div>
                        <div className="items_list"> <Link to={"/about"}> About Us </Link></div> 
                        <div className="items_list login"> <Link to={"/subscribe"}> Subscription </Link></div> 
                    </motion.div>
                }
                </AnimatePresence>
            </nav>
        </>
     );
}
 
export default Navbar;
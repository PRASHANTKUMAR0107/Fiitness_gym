import "./static/nav.css";
import logo from "./static/images/fiitness_gym_logo_png1.png";
import menu from "./static/images/4.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import $ from 'jquery';

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

    $(window).scroll(function(){
        if(window.screen.width>600){
            if($(window).scrollTop()>600){
                $("nav").css("background-color",'rgb(32, 32, 32)')
            } else {
                $("nav").css("background-color",'rgba(0, 0, 0, 0.3)')
            }
        }
    })

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
                    <Link to={'/'}><img className="header_logo" src={logo} alt="logo" /></Link>
                    <p className="italic"> <Link to={'/'}> Fiitness Gym </Link> </p>
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
                        <div className="items_list"><Link to={"/about"}> Diet Chart </Link></div>
                        <div className="items_list"><Link to={"/about"}> Timetable </Link></div>
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
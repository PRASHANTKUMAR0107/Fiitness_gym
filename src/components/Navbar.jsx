import "./static/nav.css";
import logo from "./static/images/fiitness_gym_logo_png1.png";
import menu from "./static/images/4.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import $ from 'jquery';
import {HashLink} from "react-router-hash-link";
const Navbar = () => {
    // let width=window.innerWidth;
    const [visi,setVisi]=useState(false);
    useEffect(()=>{
        if(window.screen.width>=1000){
            setVisi(true);
            // console.log("useEffect")
        }
    },[])
    useEffect(()=>{
        if(window.screen.width>=1000){
            setVisi(true);
        }
    },[window.innerWidth])
    let show_items = ()=>{
        if(visi){
            setVisi(false);
        } else {
            setVisi(true);
        }
    }

    $(window).scroll(function(){
        if(window.screen.width<1000){
            if(visi){
                setVisi(false);
            }
        }
        if(window.screen.width>1000){
            if($(window).scrollTop()>50){
                $("nav").css("background-color",'rgb(32, 32, 32)')
            } else {
                $("nav").css("background-color",'rgba(32, 32, 32, 0)')
            }
        }
    })

    const outside=()=>{
        if(window.innerWidth<1000){
            if(visi){
                setTimeout(()=>{
                    setVisi(false);
                },100)
            }
        }
        if(window.innerWidth>1000){
            if(!visi){
                setVisi(true);
            }
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
            <nav onMouseLeave={outside} className="text-white">
                <div className="header">
                    <Link to={'/'}><img className="header_logo" src={logo} alt="logo" /></Link>
                    <p className="italic font-extrabold"> <Link to={'/'}> Fiitness Gym </Link> </p>
                    <img id="menu_btn" onClick={show_items} className="menu_icon" src={menu} alt="" />
                </div>
                {visi &&
                    <motion.div className="items"
                        variants={itemvariants}
                        animate="visible"
                        initial="hidden"
                    >
                        <div className="items_list"> <Link to={"/"}> Home </Link></div>
                        <div className="items_list"><HashLink to={"/about#contact"}> Contact Us </HashLink></div>
                        <div className="items_list"><HashLink to={"/about#time"}> Timmings </HashLink></div>
                        <div className="items_list"> <Link to={"/about"}> About Us </Link></div> 
                        <div className="items_list login font-bold"> <Link to={"/subscribe"}> Subscription </Link></div> 
                    </motion.div>
                }
            </nav>
        </>
     );
}
 
export default Navbar;
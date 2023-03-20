import "./static/nav.css";
import logo from "./static/images/fiitness_gym_logo_png1.png";
import menu from "./static/images/4.png";
import $ from 'jquery';

const Navbar = () => {

    let visi =1;
    let show_items = ()=>{
        console.log("hello")
        if(visi){
            visi=0;
            $(".items").toggleClass("visible_items");
            $(".items_login").toggleClass("visible_items");
            $(".items").removeClass("hide_items");
            $(".items_login").removeClass("hide_items");
        } else {
            visi=1;
            $(".items").toggleClass("visible_items");
            $(".items_login").toggleClass("visible_items");
            $(".items").addClass("hide_items");
            $(".items_login").addClass("hide_items");

        }
    }

    return ( 
        <>
            <nav className="text-white">
                <div className="header">
                    <img className="header_logo" src={logo} alt="logo" /> 
                    <p className="italic">Fiitness Gym</p>
                    <img id="menu_btn" onClick={show_items} className="menu_icon" src={menu} alt="" />
                </div>
                <div className="items">
                    <div className="items_list">Home</div>
                    <div className="items_list">Diet Chart</div>
                    <div className="items_list">Timetable</div>
                    <div className="items_list">About Us</div>
                </div>
                <div className="items_login">
                    <div className="login">Subscription</div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;
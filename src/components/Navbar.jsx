import "./static/nav.css";
import logo from "./static/images/2.png";
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
                    <p>FIITNESS GYM</p>
                    <img id="menu_btn" onClick={show_items} className="menu_icon" src={menu} alt="" />
                </div>
                <div className="items">
                    <div className="items_list">Fitness</div>
                    <div className="items_list">Care</div>
                    <div className="items_list">Mind</div>
                    <div className="items_list">Store</div>
                </div>
                <div className="items_login">
                    <div className="login">Login</div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;
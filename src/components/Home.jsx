import "./static/Home/Home.css";
import logo from "./static/images/2.png";
import explore_more from "./static/images/3.png";
import $ from 'jquery';
$(window).scroll(function(){
  if(window.screen.width>600){
    $("main")
      .css("background-size", (100 + 100 * $(window).scrollTop() / 500) + "%");
  } else {
    $("main")
      .css("background-size", (140 + 100 * $(window).scrollTop() / 500) + "%");
  }
    $(".logo_main")
      .css("margin-top",(0 + 100 * $(window).scrollTop() / 250) + "%");
      $(".main_text")
      .css("margin-top",(0 + 100 * $(window).scrollTop() / 250) + "%");
});

const Home = () => {
    return (
    <div className="all">
    <main>
        <img className="logo_main" src={logo} alt="" />
        <p className="main_text text-7xl text-white">A fitness movement that is worth breaking a sweat for .</p>
        <div className="btn explore_more text-red-800"><button className="rounded-full p-1"> Explore More <span> <img src={explore_more} alt="" /> </span> </button></div>
    </main> 
    <div className="content">
    </div>
    </div>
    );
}
 
export default Home;
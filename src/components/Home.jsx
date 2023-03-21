import "./static/Home/Home.css";
import logo from "./static/images/2NEW.png";
import hero1 from "./static/images/hero_1.png";
import hero2 from "./static/images/hero_2.png";
import hero3 from "./static/images/hero_3.png";
import explore_more from "./static/images/3.png";
import about_gymimg from "./static/images/6.jpg";
import insta from "./static/images/insta.png"
import fb from "./static/images/fb.png"

import $ from 'jquery';
$(window).scroll(function(){
  if(window.screen.width>600){
    $("main")
      .css("background-size", (100 + 100 * $(window).scrollTop() / 500) + "%");
  } else {
    $("main")
      .css("background-size", (120 + 100 * $(window).scrollTop() / 500) + "%");
  }
    $(".logo_main")
      .css("margin-top",(0 + 100 * $(window).scrollTop() / 250) + "%");
    // $(".logo_main")
    //   .css("transform","rotate(" + window.pageYOffset/2 + "deg)");
    $(".logo_main")
      .css("scale",(100 + 100 * window.pageYOffset / 1000) + "%");
    $(".main_text")
      .css("margin-top",(0 + 100 * $(window).scrollTop() / 250) + "%");
});

const Home = () => {
    return (
    <div className="all">
    <main>
        <img className="logo_main" src={logo} alt="loading ..." />
        <p className="main_text text-7xl text-gray-100">A fitness movement that is worth breaking a sweat for .</p>
        <div className="btn explore_more text-red-800"><button className="rounded-full p-1"> Explore More <span> <img src={explore_more} alt="" /> </span> </button></div>
    </main> 
    <div className="content">
      <div className="hero ">
        <div className="hero_items">
          <img className="hero_img" src={hero1} alt="loading ..." />
          <h3>Modern Equipments to Train</h3>
          <p className="text-gray-300">Train using state of the art modern equipment 24/7. Get fit to suiting your timetable and schedule. Workout and drive yourself to your limits at your own pace.</p>
        </div>
        <div className="hero_items two px-2">
          <img className="hero_img" src={hero2} alt="loading ..." />
          <h3>Healthy Diet Plans</h3>
          <p className="text-gray-300">Fitness is all about planning and sticking to routine. Make exercise your habit with small short term goals with an ultimate long-term goal.</p>
        </div>
        <div className="hero_items">
          <img className="hero_img" src={hero3} alt="loading ..." />
          <h3>Healthy Habits</h3>
          <p className="text-gray-300">Enjoy training in a community unified environment. We provide a mixture of focal group classes and personal training session availability's to optimize your health.</p>
        </div>
      </div>
      <div className="about_gym">
        <img className="about_gym_img" src={about_gymimg} alt="loading ..." />
        <div>
          <h3 className="text-9xl my-5">365 </h3>
          <p className="text-gray-300">days of fitness . . . Staying healthy is not always easy, but it is always worth it. When you prioritize your health, you have more energy, feel more confident, and are better equipped to handle whatever challenges come your way. Whether you're looking to lose weight, build muscle, or simply feel better in your own skin, taking care of yourself is the key to achieving your goals. So don't give up, even when it gets tough. Every healthy choice you make is a step in the right direction, and each day is a new opportunity to become the best version of yourself. Remember that you are worth the effort, and that a healthy lifestyle is the best gift you can give yourself. So you can also follow us on other social media platforms to stay motivated and fit.</p>
          <br />
          <div className="social_media">
          <a href="https://www.instagram.com/"> 
            <img className="social_media_img" src={insta} alt="" />
            <p>instahandle</p>
          </a>
          <a href="facebook.com"> 
            <img className="social_media_img" src={fb} alt="" /> 
            <p>fbhandle</p>
          </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}
 
export default Home;
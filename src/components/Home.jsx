import "./static/Home/Home.css";
import logo from "./static/images/2NEW.png";
import hero1 from "./static/images/hero_1.png";
import hero2 from "./static/images/hero_2.png";
import hero3 from "./static/images/hero_3.png";
import explore_more from "./static/images/3.png";
import about_gymimg from "./static/images/6.jpg";
import insta from "./static/images/insta.png"
import wa from "./static/images/wa.png"
import fb from "./static/images/fb.png"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fit from "./static/images/fitnessMAIN.png"
import fitmob from "./static/images/fitmob1.png"
import $ from 'jquery';

$(window).scroll(function(){
  if(window.screen.width>900){
    $("main")
    .css("background-size", (150 + 100 * $(window).scrollTop() / 500) + "%");
    $(".logo_main")
    .css("scale",(100 + 100 * window.pageYOffset / 1000) + "%");
    $(".main_text")
        .css("margin-top",(0 + 100 * $(window).scrollTop() / 250) + "%");
  } else {
    $("main")
    .css("background-size", (120 + 100 * $(window).scrollTop() / 1000) + "%");
  }
  $(".logo_main")
  .css("margin-top",(0 + 100 * $(window).scrollTop() / 250) + "%");
});

    const load=()=>{
      if(window.screen.width<900){
        $("main")
        .css("height",(window.innerHeight));
      }
    }
    
    const animate_main = {
      hidden:{
        x:-200
      },
      visible:{
        x:0,
        transition:{
          type:'spring',
          stiffness:200
    }
  }
}

const animate_hero = {
  hidden:{
      y:80,
      opacity:0
  },
  visible:{
      y:0,
      opacity:1,
      transition:{
          staggerChildren: 0.3,
          duration:0.5
      }
  }
}

const Home = () => {
    return (
    <div className="all">
    <main onLoad={load}>
        {/* <div className="bg_main">
          <img src={bg} alt="" />
        </div> */}
        <motion.img 
          variants={animate_main}
          animate="visible"
          initial="hidden"
        className="logo_main" src={logo} alt="loading ..." />
        <div>
        <motion.div
          variants={animate_main}
          animate="visible"
          initial="hidden"
        className="main_text flex flex-col pt-10">
          <img className="fit_mob invert" src={fitmob} alt="" />
          <img className="fit_main invert my-12 ml-10" src={fit} alt="" />
          <span className="flex my-5 justify-center z-10">
            <Link to={'/subscribe'}> <button className="bg-rose-600 mx-2 hover:bg-rose-700 text-white font-bold py-2 px-12 text-sm mt-2 rounded">  Subcribe </button> </Link>
            <Link to={"/gallery"}> <button className="bg-transparent hover:bg-rose-600 text-gray-200 font-semibold hover:text-white py-2 mt-2 px-12 border border-rose-600 hover:border-transparent text-sm rounded"> Gallery </button> </Link>
          </span>
        </motion.div>
        <motion.div className="social_media_main"
          animate={{x:0}}
          initial={{x:-200}}
          transition={{type:'spring'}}
        >
          <a href="https://wa.me/9958500365" target={'blank'}> 
            <img className="social_media_main_img" src={wa} alt="" />
          </a>
          <a href="https://www.instagram.com/365fiitness_/" target={'blank'}> 
            <img className="social_media_main_img" src={insta} alt="" />
          </a>
          {/* <a href="https://wa.me/9958500365" target={'blank'}> 
            <img className="social_media_main_img" src={fb} alt="" /> 
          </a> */}
          </motion.div>
          </div>
        <div className="btn explore_more"><motion.button 
          whileHover={{zoom:1.2,color:'white'}}
          className="rounded-full hover:text-gray-500 text-rose-600 hover:bg-rose-600 p-1"> <a href="#content"> Explore More </a> <span> <img src={explore_more} alt="" /> </span> </motion.button></div>
    </main> 
    <div id="content" className="content">
      <div className="motivation">
        <p>
        "You don't have to be great to start, but you have to start to be great."
        </p>
      </div>
      <motion.div
        variants={animate_hero}
        whileInView={'visible'}
        initial='hidden'
        viewport={{once:true,amount:0.2}}
      id="hero" className="hero ">
        <motion.div
          variants={animate_hero}
        className="hero_items">
          <img className="hero_img " src={hero1} alt="loading ..." />
          <h3>Modern Equipments to Train</h3>
          <p className="text-gray-300">Train using state of the art modern equipment 24/7. Get fit to suiting your timetable and schedule. Workout and drive yourself to your limits at your own pace.</p>
        </motion.div>
        <motion.div
          variants={animate_hero}
        className="hero_items">
          <img className="hero_img" src={hero2} alt="loading ..." />
          <h3>Healthy Diet Plans</h3>
          <p className="text-gray-300">Fitness is all about planning and sticking to routine. Make exercise your habit with small short term goals with an ultimate long-term goal.</p>
        </motion.div>
        <motion.div
          variants={animate_hero}
        className="hero_items">
          <img className="hero_img" src={hero3} alt="loading ..." />
          <h3>Healthy Habits</h3>
          <p className="text-gray-300">Enjoy training in a community unified environment. We provide a mixture of focal group classes and personal training session availability's to optimize your health.</p>
        </motion.div>
      </motion.div>
      <div className="about_gym">
        <img className="about_gym_img" src={about_gymimg} alt="loading ..." />
        <div>
          <h3 className="text-9xl my-5"> <i className="text-rose-600">365</i><span className="text-5xl">days of fitness.</span> </h3>
          <p className="text-gray-300"> Staying healthy is not always easy, but it is always worth it. When you prioritize your health, you have more energy, feel more confident, and are better equipped to handle whatever challenges come your way. Whether you're looking to lose weight, build muscle, or simply feel better in your own skin, taking care of yourself is the key to achieving your goals. So don't give up, even when it gets tough. Every healthy choice you make is a step in the right direction, and each day is a new opportunity to become the best version of yourself. Remember that you are worth the effort, and that a healthy lifestyle is the best gift you can give yourself. So you can also follow us on other social media platforms to stay motivated and fit.</p>
          <br />
          <div className="social_media">
          <a href="https://www.instagram.com/365fiitness_/" target={'blank'}> 
            <img className="social_media_img" src={insta} alt="loading ..." />
            <p>365fiitness_</p>
          </a>
          <a href="https://wa.me/9958500365" target={'blank'}> 
            <img className="social_media_img" src={wa} alt="loading..." /> 
            <p>WhatsApp Number</p>
          </a>
          <a href="https://wa.me/9667769365" target={'blank'}> 
            <img className="social_media_img" src={wa} alt="loading..." /> 
            <p>Alternate WhatsApp Number</p>
          </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}
 
export default Home;
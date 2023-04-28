import "./static/Gallery.css"
import explore_more from "./static/images/3.png";
import { motion , easeOut } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "./Gallery/Slider";
import $ from 'jquery';
import Collage from "./Gallery/Collage";
const expVariant={
  animate:{
      y:[-20,0],
      transition:{
          repeat:Infinity,
          repeatType: "mirror",
          ease:easeOut,
      }
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

$(window).scroll(function(){

  $("section").css("opacity",(100 - window.pageYOffset/3) + "%")

})

const Gallery = () => {
    return ( 
        <div className="all_gall">
          <section className="relative bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/40 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/50 sm:to-black/5"></div>

  <motion.div
    variants={animate_main}
    animate="visible"
    initial="hidden"
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us be your

        <strong className="block font-extrabold text-rose-700">
          Forever Gym.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to={"/subscribe"}
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Subscribe
        </Link>

        <Link
          to={"/"}
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Explore More
        </Link>
      </div>
    </div>
  </motion.div>
  <motion.div
    variants={expVariant}
    animate="animate"
  className="expmore absolute bottom-0">
    <img className="invert" src={explore_more} alt="" />
    <img className="invert -mt-5" src={explore_more} alt="" />
  </motion.div>
</section>

<div className="collage relative bg-cover bg-center bg-no-repeat pb-10">
  <Slider/>

  <div className="text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl p-10">
        Here are some glaces of your&nbsp; 
        <strong className=" font-extrabold text-rose-700">
        Own Gym.
        </strong>
      </h1>
  </div>
  <Collage/>
</div>
        </div>
     );
}
 
export default Gallery;
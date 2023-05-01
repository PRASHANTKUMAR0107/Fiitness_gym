import { motion } from "framer-motion";
import one from "../static/images/gallery/IMG-20230427-WA0010.jpg"
import two from "../static/images/gallery/IMG-20230427-WA0012.jpg"
import three from "../static/images/gallery/IMG-20230427-WA0013.jpg"
import four from "../static/images/gallery/IMG-20230427-WA0014.jpg"
import five from "../static/images/gallery/IMG-20230427-WA0017.jpg"
import six from "../static/images/gallery/IMG-20230427-WA0020.jpg"
import seven from "../static/images/gallery/IMG-20230427-WA0021.jpg"
const Collage = () => {
    const animateVariants = {
        hidden:{
            y:100,
            opacity:0
        },
        visi:{
            y:0,
            opacity:1,
            transition:{
                duration:1
            }
        }
    }
    return ( 
        <>
            <div className="box grid md:grid-cols-6  gap-5 md:px-20 px-5  text-rose-600 text-9xl">
                <motion.div
                    variants={animateVariants}
                    whileInView={'visi'}
                    initial='hidden'
                    viewport={{once:false,amount:0.25}}
                className="bg-gray-100 md:col-span-3 md:row-span-2">
                    <img className="main_gall_img" src={one} alt="" />
                </motion.div>

                <motion.div
                    variants={animateVariants}
                    whileInView={'visi'}
                    initial='hidden'
                    viewport={{once:false,amount:0.25}}
                className="bg-gray-100 md:col-span-3 md:row-span-1">
                    <img className="main_gall_img" src={two} alt="" />
                </motion.div>

                <motion.div
                    variants={animateVariants}
                    whileInView={'visi'}
                    initial='hidden'
                    viewport={{once:false,amount:0.25}}
                className="bg-gray-100 md:col-span-3 md:row-span-1">
                    <img className="main_gall_img" src={three} alt="" />
                </motion.div>

                <motion.div
                    variants={animateVariants}
                    whileInView={'visi'}
                    initial='hidden'
                    viewport={{once:false,amount:0.25}}
                className="bg-gray-100 md:col-span-2 md:row-span-1">
                    <img className="main_gall_img" src={four} alt="" />
                </motion.div>

                <motion.div
                    variants={animateVariants}
                    whileInView={'visi'}
                    initial='hidden'
                    viewport={{once:false,amount:0.25}}
                className="bg-gray-100 md:col-span-4 md:row-span-1">
                    <img className="main_gall_img" src={five} alt="" />
                </motion.div>

                <motion.div
                    variants={animateVariants}
                    whileInView={'visi'}
                    initial='hidden'
                    viewport={{once:false,amount:0.25}}
                className="bg-gray-100 md:col-span-3 md:row-span-1">
                    <img className="main_gall_img" src={six} alt="" />
                </motion.div>

                <motion.div
                    variants={animateVariants}
                    whileInView={'visi'}
                    initial='hidden'
                    viewport={{once:false,amount:0.25}}
                className="bg-gray-100 md:col-span-3 md:row-span-1">
                    <img className="main_gall_img" src={seven} alt="" />
                </motion.div>
                
            </div>
        </>
     );
}
 
export default Collage;
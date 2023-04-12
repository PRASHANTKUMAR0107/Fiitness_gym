import { motion , useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Collage = () => {
    const {ref,inView} = useInView({
        threshold:0.2
    });
    const animation = useAnimation();
    useEffect(()=>{
        console.log(inView);
        if(inView){
            animation.start({
                y:0,
                opacity:1,
                transition:{
                    duration:0.5
                }
            })
        }
        if(!inView){
            animation.start({
                opacity:0,
                y:300
            })
        }
    },[inView])
    return ( 
        <>
            <div
                ref={ref}
                className="box grid md:grid-cols-4 md:grid-rows-4 gap-5 md:px-20 px-5 text-rose-600 text-9xl">
                <motion.div
                    animate={animation}
                className="bg-gray-100 md:col-span-2 md:row-span-2">1</motion.div>
                <motion.div
                    animate={animation}
                className="bg-gray-100 min-h-[45vh]">2</motion.div>
                <motion.div
                    animate={animation}
                className="bg-gray-100">3</motion.div>
                <motion.div
                    animate={animation}
                className="bg-gray-100 md:col-span-2 md:row-span-2">4</motion.div>
                <motion.div
                    animate={animation}
                className="bg-gray-100">5</motion.div>
                <motion.div
                    animate={animation}
                className="bg-gray-100">6</motion.div>
                <motion.div
                    animate={animation}
                className="bg-gray-100 md:col-span-3">7</motion.div>
                <motion.div
                    animate={animation}
                className="bg-gray-100">8</motion.div>
            </div>
        </>
     );
}
 
export default Collage;
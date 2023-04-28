import "./static/AboutUs.css";
import insta from "./static/images/insta.png"
import wa from "./static/images/wa.png"
import fb from "./static/images/fb.png"
import mail from "./static/images/mail.png"
import $ from 'jquery';

const load=()=>{
    console.log("abtm");
    $(".about_main")
    .css("height",(window.innerHeight));
}

const AboutUs = () => {
    return ( 
    <div onLoad={load} className="all_abt">
        <div  className="about_main flex flex-col justify-between">
            <div className="abt_one">
            <div className="abt_head">
                <p className="text-8xl"> WE ARE THE <span className="text-rose-700"> FIITNESS GYM. </span></p>
            </div>
            <div className="our_mission">
                <h3>OUR MISSION</h3>
                <p className="para text-gray-50"> At Fiitness Gym is to provide a welcoming and inclusive environment for all individuals to achieve their fitness goals. We believe that fitness is a journey, and we are committed to supporting our members every step of the way. We strive to offer the highest quality fitness programs and services, led by certified professionals, that cater to the unique needs and goals of each member. Our goal is to inspire and empower our members to live a healthy and active lifestyle, and to make fitness a sustainable and enjoyable part of their lives. We believe that fitness is not just about physical strength, but also mental and emotional wellbeing. We aim to create a positive and uplifting community that encourages and motivates each other to be the best version of ourselves.Our core values are integrity, excellence, and inclusivity.</p>
            </div>
            </div>
        </div>

        <div className="content_abt">
            <div className="services">
                <div className="serve_head">
                    <h3 className="text-rose-500">SERVICES OFFERED</h3><hr className="mb-5" />
                </div>
                <div className="serve">
                    <div className="serve_card">
                        <h3>Personal Training</h3>
                        <p>At Fiitness Gym, we understand that each person's fitness journey is unique, which is why we offer personalized training programs to help you achieve your individual goals. Our certified personal trainers have the knowledge and experience to develop a customized fitness plan that is tailored to your specific needs, abilities, and preferences. During your personal training sessions, your trainer will work with you to identify your fitness goals and develop a plan that is challenging and effective. They will guide you through each exercise, ensuring that your form and technique are correct and that you are working at an appropriate intensity. Additionally, they will provide you with the support and accountability you need to stay motivated and on track.</p>
                    </div>
                    <div className="serve_card c2">
                        <h3>Diet Plans</h3>
                        <p>At Fiitness Gym, we believe that nutrition is a critical component of any fitness program, which is why we offer nutrition coaching to our members. Our certified nutritionists have the expertise to help you develop a personalized diet plan that is tailored to your specific goals, preferences, and lifestyle. During your nutrition coaching sessions, your coach will work with you to assess your current eating habits and identify areas where you can make improvements. They will help you set realistic and achievable goals, and develop a meal plan that is balanced and sustainable. They can also provide you with guidance on portion control, healthy snacking, and eating out, to ensure that you are making healthy choices wherever you are.</p>
                    </div>
                    <div className="serve_card c2">
                        <h3>Machinery</h3>
                        <p>At Fiitness Gym, we pride ourselves on providing our members with state-of-the-art equipment to help them achieve their fitness goals. Our gym is equipped with the latest and most innovative machines and tools that cater to a wide range of fitness levels and abilities. We offer a variety of cardio equipment, including treadmills, ellipticals, stationary bikes, and rowing machines, to help you improve your cardiovascular health and endurance. Our strength training equipment includes free weights, weight machines, and resistance bands, to help you build and tone your muscles.</p>
                    </div>
                    <div className="serve_card">
                        <h3>Gym Facilities and Amenities</h3>
                        <p>At Fiitness Gym, we strive to provide our members with a top-notch fitness experience. Our gym facilities and amenities are designed to create a comfortable and welcoming environment that will inspire you to reach your fitness goals. Our gym space is spacious, clean, and well-lit, with a variety of state-of-the-art equipment and machines to suit all fitness levels and interests. We offer a wide range of cardio machines, strength training equipment, and functional training tools to help you get the most out of your workout. Our equipment is regularly maintained and upgraded to ensure that it is in optimal condition for your use.</p>
                    </div>
                </div>
            </div>
            <div id="time" className="time">
                <div  className="time_head">
                    <h3 className="text-rose-500">Timmings</h3> <hr className="mb-5"/>
                </div>
                <div className="timming mb-5">
                    <p>5 AM to 12 AM</p>
                    <p>Opens 7days in a Week</p>
                </div>
                {/* <hr /> */}
            </div>
            <div id="contact" className="contact">
                <div className="con_head">
                    <h3 className="text-rose-500">Contact Details</h3> <hr className="mb-5"/>
                </div>
                <div className="address">
                    <div className="addtext text-xl">
                    For Enrolling and general enquiries please feel free to contact our team today. We always look forward to helping new individual reach their health and fitness goals.
                    </div>
                    <div className="phonenum flex flex-col p-2 text-right">
                        <div>
                            <h3 className="text-xl">Phone Number: </h3>
                            <p> 9958500365 <br /> 9667769365</p>
                        </div>
                        <div>
                            <h3 className="text-xl">Address: </h3>
                            <p>E-986 Ground Floor, <br /> CR Park</p>
                        </div>
                    </div>
                </div>
                <div className="concard_grid">
                    <div className="con_card">
                    <a href="https://www.instagram.com/365fiitness_/" target="_blank">
                        <img className="h-8 w-8 m-2" src={insta} alt="" />
                    </a>
                    <a href="https://www.instagram.com/365fiitness_/" target="_blank">
                        <p> <span className="text-lg"> 365fiitness_  </span> <br /> Follow us on Instagram and Stay tuned to the Fiitness.</p>
                    </a>
                    </div>
                    <div className="con_card">
                    <a href="https://wa.me/9958500365" target="_blank">
                        <img className="h-8 w-8 m-2" src={wa} alt="" />
                    </a>
                    <a href="https://wa.me/9958500365" target="_blank">
                        <p> <span className="text-lg">  WhatsApp Link </span> <br /> Click to chat with us now, we will be happy to serve you.</p>
                    </a>
                    </div>
                    <div className="con_card">
                    <a href="https://wa.me/9667769365" target="_blank">
                        <img className="h-8 w-8 m-2" src={wa} alt="" />
                    </a>
                    <a href="https://wa.me/9667769365" target="_blank">
                        <p> <span className="text-lg">  Alternate WhatsApp Link </span> <br /> Click to chat with us now, we will be happy to serve you.</p>
                    </a>
                    </div>
                    <div className="con_card">
                    <a href="" target="_blank">
                        <img className="h-8 w-8 m-2" src={fb} alt="" />
                    </a>
                    <a href="" target="_blank">
                        <p> <span className="text-lg">  Fbhandle </span> <br /> Follow us on Facebook and Stay tuned to the Fiitness.</p>
                    </a>    
                    </div>
                    <div className="con_card mail">
                    <a href="mailto:fiitness365gym@gmail.com" target="_blank">
                        <img className="h-10 w-8 m-2 invert" src={mail} alt="" />
                    </a>
                    <a href="mailto:fiitness365gym@gmail.com" target="_blank">
                        <p> <span className="text-lg"> fiitness365gym @gmail.com </span> <br /> You can mail us about any of your queries.</p>
                    </a>
                    </div>
                </div>
                <hr className=" m-2 mx-10 opacity-20"/>

            </div>
        </div>

    </div> 
    );
}
 
export default AboutUs;
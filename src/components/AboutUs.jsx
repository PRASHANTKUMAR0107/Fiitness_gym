import "./static/AboutUs.css"
const AboutUs = () => {
    return ( 
    <div className="all_abt">
        <div className="about_main flex flex-col justify-between">
            <div className="abt_one">
            <div className="abt_head">
                <p className="text-8xl"> WE ARE THE FIITNESS GYM.</p>
            </div>
            <div className="our_mission">
                <h3>OUR MISSION</h3>
                <p className="para text-gray-50"> At Fiitness Gym is to provide a welcoming and inclusive environment for all individuals to achieve their fitness goals. We believe that fitness is a journey, and we are committed to supporting our members every step of the way. We strive to offer the highest quality fitness programs and services, led by certified professionals, that cater to the unique needs and goals of each member. Our goal is to inspire and empower our members to live a healthy and active lifestyle, and to make fitness a sustainable and enjoyable part of their lives. We believe that fitness is not just about physical strength, but also mental and emotional wellbeing. We aim to create a positive and uplifting community that encourages and motivates each other to be the best version of ourselves.Our core values are integrity, excellence, and inclusivity.</p>
            </div>
            </div>
        </div>

        <div className="services">
            <div className="serve_head">
                <h3>SERVICES OFFERED</h3>
            <p className="para m-8 mb-0 text-lg"> We offer a variety of services to help our members achieve their fitness goals. From group fitness classes to personal training and nutrition coaching, we have everything you need to get in shape and stay healthy. We also offer nutrition coaching to help you fuel your body with the right foods and achieve optimal health. Our nutrition experts will work with you to develop a customized meal plan and provide ongoing support and guidance to help you make healthy choices. At Fiitness Gym, we are committed to providing the highest quality fitness services to our members. We are constantly updating and improving our programs to ensure that we are meeting the needs and goals of our members. Join us today and experience the benefits of a healthier, more active lifestyle!</p>
            </div>
        </div>
    </div> 
    );
}
 
export default AboutUs;
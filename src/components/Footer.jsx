import "./static/Footer.css"
import insta from "./static/images/insta.png"
import wa from "./static/images/wa.png"
import fb from "./static/images/fb.png"
import { Link } from "react-router-dom"
const Footer = () => {
    return ( 
        <>
            <footer class="relative bg-blueGray-200 pt-8 pb-6">
                <div class="container mx-auto px-4">
                  <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-6/12 px-4">
                      <h4 class="text-3xl fonat-semibold text-blueGray-700">"Unleash Your Inner Athlete at Our Gym."</h4>
                      <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                      Unleash your potential with Fiitness Gym - where fitness meets community.
                      </h5>
                      <div class="mt-6 lg:mb-0 mb-6">
                        <button class="bg-gray-900 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center  outline-none focus:outline-none mr-2" type="button">
                          <a href="https://www.instagram.com/365fiitness_/" target={"blank"}><img src={insta} alt="" /></a></button>
                        {/* <button class="bg-gray-900 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center  outline-none focus:outline-none mr-2" type="button">
                          <img src={fb} alt="" /></button> */}
                        <button class="bg-gray-900 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center  outline-none focus:outline-none mr-2" type="button">
                          <a href="https://wa.me/9958500365" target={'blank'}> <img src={wa} alt="" /> </a></button>
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="flex flex-wrap items-top mb-6">
                        <div class="w-full lg:w-4/12 px-4 ml-auto">
                          <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2 underline">Useful Links</span>
                          <ul class="list-unstyled">
                            <li>
                              <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/about"}>About Us</Link>
                            </li>
                            <li>
                              <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/gallery"}>Gallery</Link>
                            </li>
                            <li>
                              <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to={"/subscribe"}>Subscription</Link>
                            </li>
                          </ul>
                        </div>
                        <div class="w-full lg:w-4/12 px-4">
                          <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2 underline">Other Resources</span>
                          <ul class="list-unstyled">
                            <li>
                              <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" target={"blank"} href="https://www.instagram.com/365fiitness_/">Instagram</a>
                            </li>
                            {/* <li>
                              <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" target={"blank"} href="#">Facebook</a>
                            </li> */}
                            <li>
                              <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" target={"blank"} href="https://wa.me/9958500365">Whatsapp</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-6 border-blueGray-300"/>
                  <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                      <div class="text-sm text-blueGray-500 font-semibold py-1">
                        Copyright © <span id="get-current-year">2023</span>
                        <a href="" class="text-blueGray-500 hover:text-blueGray-800"> Fiitness Gym</a>.
                      </div>
                    </div>
                  </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;
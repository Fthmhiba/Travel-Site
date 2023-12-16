import React,{useEffect} from "react";
import './Footer.css'
import { IoIosSend, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import footer from '../../assets/reso/footer.mp4'

import Aos from "aos";
import 'aos/dist/aos.css'






const Footer = () =>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return(
        <>
        <section className="footer">
            <div className="videoDiv">
                <video className="video" src = {footer} loop autoPlay muted type="video/mp4" ></video>
            </div>

            <div className="setContent container">
                <div className="contactDiv flex">
                    <div data-aos='fade-up' className="text">
                        <small className="small">KEEP IN TOUCH</small>
                        <h2 className="h2">Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos='fade-up' className="input" type="text" placeholder="Enter Email Address" />
                        <button data-aos='fade-up' className="btn flex" type="submit" >
                          SEND  <IoIosSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdTravelExplore className="icon" />
                                Travel.
                            </a>
                        </div>

                        <div data-aos='fade-up' className="footerPara">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam architecto nesciunt rerum saepe modi eos incidunt quo et,
                             at obcaecati dicta doloribus beatae veniam. A doloribus, ad, commodi fugiat mollitia ducimus saepe sunt cumque temporibus,
                              corrupti culpa sint consectetur maiores!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                               Magnam architecto nesciunt rerum saepe modi eos incidunt quo et,maiores!
                        </div>

                        <div data-aos='fade-up' className="footerSocial">
                            <IoLogoTwitter className="icon" />
                            <IoLogoYoutube className="icon" />
                            <IoLogoInstagram className="icon" />
                            <FaTripadvisor className="icon" />

                        </div>
                    </div>

                    <div className="footerLink grid">
                        { /* grp 1 */}
                        <div  data-aos='fade-up' data-aos-duration='3000'
                         className="linkGrp">
                            <span className="grpTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li> 
 
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                        </div>

                         {/* grp 2 */}
                         <div  data-aos='fade-up' data-aos-duration='4000'
                          className="linkGrp">
                            <span className="grpTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rentcars
                            </li> 
 
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>

                        </div>

                         {/* grp 3 */}
                         <div  data-aos='fade-up' data-aos-duration='5000'
                          className="linkGrp">
                            <span className="grpTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                California
                            </li> 
 
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Europe
                            </li>

                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small className="small">BEST TRAVEL WEBSITE THEME</small>
                        <small className="small">COPYRIGHTS RESERVED - @ 2023</small>

                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Footer
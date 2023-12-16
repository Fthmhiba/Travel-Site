

import React,{useEffect} from "react";
import './Main.css'
import { GrLocation } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa";
import img from '../../assets/reso/img.jpg'
import img2 from '../../assets/reso/img2.jpg'
import img3 from '../../assets/reso/img3.jpg'
import img4 from '../../assets/reso/img4.jpg'
import img5 from '../../assets/reso/img5.jpg'
import img6 from '../../assets/reso/img6.jpg'
import img7 from '../../assets/reso/img7.jpg'
import img8 from '../../assets/reso/img8.jpg'
import img9 from '../../assets/reso/img9.jpg'

import Aos from "aos";
import 'aos/dist/aos.css'





let data = [
    {
        id:1,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:'Cultural Relax',
        fees:'$700',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium molestiae perferendis a incidunt dignissimos voluptatibus excepturi facere architecto laborum! Perspiciatis."

    },
    {
        id:2,
        imgSrc:img2,
        destTitle:'Great Barrier Reef',
        location:'Australia',
        grade:'Cultural Relax',
        fees:'$700',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium molestiae perferendis a incidunt dignissimos voluptatibus excepturi facere architecto laborum! Perspiciatis."

    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'Machu pichu',
        location:'Peru',
        grade:'Cultural Relax',
        fees:'$600', 
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium molestiae perferendis a incidunt dignissimos voluptatibus excepturi facere architecto laborum! Perspiciatis."

    },
    {
        id:4,
        imgSrc:img4,
        destTitle:'Cinque Terre',
        location:'New Zealand',
        grade:'Cultural Relax',
        fees:'$700',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium molestiae perferendis a incidunt dignissimos voluptatibus excepturi facere architecto laborum! Perspiciatis."

    },
    {
        id:5,
        imgSrc:img5,
        destTitle:'Guana Juato',
        location:'Mexico',
        grade:'Cultural Relax',
        fees:'$1100',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium molestiae perferendis a incidunt dignissimos voluptatibus excepturi facere architecto laborum! Perspiciatis."

    },
    {
        id:6,
        imgSrc:img6,
        destTitle:'Cappadocia',
        location:'Turkey',
        grade:'Cultural Relax',
        fees:'$800',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium molestiae perferendis a incidunt dignissimos voluptatibus excepturi facere architecto laborum! Perspiciatis."

    },
    {
        id:7,
        imgSrc:img7,
        destTitle:'Dumbrovnik',
        location:'Amsterdam',
        grade:'Cultural Relax',
        fees:'$9  40',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium molestiae perferendis a incidunt dignissimos voluptatibus excepturi facere architecto laborum! Perspiciatis."

    },
    {
        id:8,
        imgSrc:img8,
        destTitle:'Angkar Wat',
        location:'Cambodia',
        grade:'Cultural Relax',
        fees:'$790',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium molestiae perferendis a incidunt dignissimos voluptatibus excepturi facere architecto laborum! Perspiciatis."

    },
    {
        id:9,
        imgSrc:img9,
        destTitle:'Bali Island',
        location:'Indonesia',
        grade:'Cultural Relax',
        fees:'$700',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Praesentium molestiae perferendis a incidunt dignissimos voluptatibus excepturi facere architecto laborum! Perspiciatis."

    },
    
]


const Main = () =>{

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return(
        <>
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos='fade-right'
                 className="title">
                    Most visited destinations
                </h3>
            </div>   

            <div className="secContent grid">
                {
                    data.map(({id,imgSrc,destTitle,location,grade,fees,description}) => {
                        return(
                            <div key={id} data-aos='fade-up' className="singleDestination">
                                <div className="imageDiv">
                                    <img className="img" src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}</h4>
                                    <span className="continent flex">
                                        <GrLocation className="icon" />
                                            <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span >{grade}<small className="small">+1</small></span>
                                        </div>

                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <buttton className="btn flex">
                                        DETAILS <FaClipboardList className="icon"/>
                                    </buttton>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </section>
        </>
    )
}

export default Main
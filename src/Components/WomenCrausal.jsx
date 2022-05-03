import React, { useState } from "react";
import '../Style/Crausal.css'
import 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel'
import Slider from "react-slick";
import Crausalwomendata from "../Data/Crausalwomendata";
export default function WomenCrausal() {
    const [data, setData] = useState(Crausalwomendata)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="main-crausal">
         
                <Slider {...settings}>
                    {data.map((value) => {
                        return (
                            <>
                                <div className="full-crausal">
                                    <div className="crausal-img"><img src={value.img} alt="" /></div>
                                    <p className="crausal-heading">{value.name}</p>
                                </div>
                            </>
                        )
                    })}

                </Slider>
            </div>

        </>
    )
}

import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Import Swiper styles


import "./testimonials.css";

const TData = [
  {
    ClientName: "Jhon Cartle",
    avtar: AVTR1,
    review: "ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    ClientName: "Jhon Cartle",
    avtar: AVTR2,
    review: "ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    ClientName: "Jhon Cartle",
    avtar: AVTR3,
    review: "ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    ClientName: "Jhon Cartle",
    avtar: AVTR4,
    review: "ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const testimonials = () => {
  return (
    <section id="testionials">
      <h5>Review for clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="testimonials__container conatainer"
        // install Swiper modules modules=
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {TData.map(({ ClientName, avtar, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avtar} alt={ClientName} />
              </div>
              <h5 className="client__name">{ClientName}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  );
};
export default testimonials;

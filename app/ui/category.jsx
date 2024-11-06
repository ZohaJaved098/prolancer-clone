'use client'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Category() {

  const CustomLeftArrow = ({ onClick }) => (
    <div className="absolute left-2 top-[40%] m-2 p-3 rounded-full bg-gray-400 text-white font-bold cursor-pointer z-50" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );

  const CustomRightArrow = ({ onClick }) => (
    <div className="absolute right-2 top-[40%] m-2 p-3 rounded-full bg-gray-400 text-white font-bold cursor-pointer z-50" onClick={onClick}>
      <FaChevronRight />
    </div>
  );


  const categories = [
    {
      id: 1,
      title: 'Hosting',
      categoryPic: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-10-400x400.jpg',
    },
    {
      id: 2,
      title: 'Link Building',
      categoryPic: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-7-400x400.jpg',
    },
    {
      id: 3,
      title: 'Marketing',
      categoryPic: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-3-400x400.jpg',
    },
    {
      id: 4,
      title: 'Website Development',
      categoryPic: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-1-400x400.jpg',
    },
    {
      id: 5,
      title: 'Customer Support',
      categoryPic: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-4-400x400.jpg',
    },
    {
      id: 6,
      title: 'Graphic Designing',
      categoryPic: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-6-400x400.jpg',
    },
  ];

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    prevArrow: <CustomLeftArrow />,
    nextArrow: <CustomRightArrow />,
    slidesToShow: 4,
    slidesToScroll: 2,
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
        breakpoint: 800,
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
    <div className="bg-white w-full h-screen pt-40">
      <div className="w-[85vw] h-[350px] overflow-x-auto overflow-y-hidden m-auto">
        <Slider
          {...settings}
          className="h-full w-full"
        >
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <div key={category.id} className="relative min-w-[20px] w-[30px] h-[350px] rounded-2xl text-white text-lg font-bold mx-auto">
                <div
                  className="absolute w-full h-full inset-0 rounded-2xl bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${category.categoryPic})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                </div>
                <div className="relative z-10 mt-5">
                  <span className="text-white font-bold text-lg ml-5">{category.title}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-[350px] flex items-center justify-center">
              <p className="text-gray-500 font-semibold text-center text-4xl">No categories available.</p>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
}

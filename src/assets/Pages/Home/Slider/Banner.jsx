import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/fznYyQwC/slider5.jpg",
      title: "🌙 Find Your Partner in Faith",
      subtitle:
        "Begin your journey towards a halal and blessed marriage, rooted in Islamic values and mutual respect.",
    },
    {
      id: 2,

      image: "https://i.ibb.co/C5W3c08q/slider4.jpg",
      title: "💍 Nikah Made Simple & Sacred",
      subtitle:
        "Connect with like-minded individuals who share your faith, goals, and vision for a beautiful future.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/mWN4ZKn/Slider6.jpg",
      title: "🕌 Where Deen Meets Love",
      subtitle:
        "A matrimony platform built for Muslims seeking not just a match, but a meaningful companionship for both Dunya and Akhirah.",
    },
  ];

  return (
    <div className="libre relative z-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[80vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
              <h2 className="text-[#beb052] text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-xl text-[#9c974d] md:text-xl max-w-2xl">
                {slide.subtitle}
              </p>
              <Link to={"/register"}>
                <button className="text-[#8a6c42] text-xl mt-6">Register</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

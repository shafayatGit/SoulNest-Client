import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      title: "Find Your Perfect Life Partner",
      subtitle:
        "Start your beautiful journey today with our trusted Matrimony platform.",
    },
    {
      id: 2,

      image: "https://i.ibb.co/C5W3c08q/slider4.jpg",
      title: "Match Made with Trust & Tradition",
      subtitle: "Connect with verified profiles and make confident choices.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/mWN4ZKn/Slider6.jpg",
      title: "Join Thousands Who Found Love",
      subtitle: "Your story begins here — find your soulmate now.",
    },
  ];

  return (
    <div className="relative z-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[80vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
              <h2 className="text-[#76b0bb] text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg text-[#578b96] md:text-xl max-w-2xl">{slide.subtitle}</p>
              <button
                className="text-[#8a6c42] mt-6"
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

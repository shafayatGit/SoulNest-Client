import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SuccessStories = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const stories = [
    {
      id: 1,
      name: "Ahmed & Ayesha",
      image: "https://i.ibb.co/3mpSGPZ5/8885798.jpg",
      date: "2024-11-05",
      rating: 5,
      story:
        "Alhamdulillah, I found my perfect match here. May Allah bless this platform!",
    },
    {
      id: 2,
      name: "Rahim & Fatima",
      image: "https://i.ibb.co/1GbjHfXN/8885802.jpg",
      date: "2023-08-22",
      rating: 4,
      story:
        "We met here and things just clicked! Thanks to this amazing site.",
    },
    {
      id: 3,
      name: "Karim & Noor",
      image: "https://i.ibb.co/Z6TstKc5/8895216.jpg",
      date: "2022-03-17",
      rating: 5,
      story: "The search ended here! Forever grateful.",
    },
  ];

  const sortedStories = [...stories].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className=" nuni py-16 px-4 lg:px-20">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold  mb-2">
          Success Stories
        </h2>
        <p className="text-xl max-w-xl mx-auto">
          Read beautiful stories from couples who found love through our
          platform.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sortedStories.map((story) => (
          <div
            key={story.id}
            className="border-2 border-[#bda373] p-6 rounded-xl shadow hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-52 h-52 mx-auto rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold ">{story.name}</h3>
            <p className="text-sm  mb-2">
              🗓️ Married on {new Date(story.date).toLocaleDateString("en-GB")}
            </p>
            <div className="flex text-yellow-400 mb-2">
              {[...Array(story.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className=" italic">"{story.story}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;

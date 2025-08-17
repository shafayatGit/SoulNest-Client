import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Award } from 'lucide-react';

const TestimonialsSection= () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Wellness Coach",
      location: "San Francisco, CA",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "SoulNest has completely transformed my approach to mindfulness. The community support and guided sessions have helped me find peace in the chaos of daily life. I've never felt more centered and connected to myself.",
      highlight: "Life-changing experience",
      joinDate: "Member since 2023"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Software Engineer",
      location: "Austin, TX",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "As someone who struggled with work-life balance, SoulNest provided the tools and community I needed. The meditation sessions fit perfectly into my schedule, and the progress tracking keeps me motivated every day.",
      highlight: "Perfect work-life balance",
      joinDate: "Member since 2022"
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Teacher & Mother",
      location: "Portland, OR",
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Being a working mother, I rarely had time for self-care. SoulNest's flexible approach and supportive community helped me prioritize my mental health. My family has noticed the positive change in me.",
      highlight: "Supportive community",
      joinDate: "Member since 2023"
    },
    {
      id: 4,
      name: "David Park",
      role: "Entrepreneur",
      location: "New York, NY",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Running a startup is incredibly stressful, but SoulNest has been my anchor. The mindfulness techniques I've learned here have improved not just my personal well-being, but also my leadership skills.",
      highlight: "Improved leadership",
      joinDate: "Member since 2022"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentTestimonial];

  return (
    <section className="nuni py-20 px-5  relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-amber-300 to-orange-300 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-300 to-amber-300 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-orange-300 to-yellow-300 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-full mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <Heart className="w-5 h-5 mr-2" style={{ color: '#8a6c42' }} />
            <span className="text-sm font-medium" style={{ color: '#8a6c42' }}>Community Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold  mb-6">
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#bda373] to-[#8a6c42]">
              Community Says
            </span>
          </h2>
          
          <p className="text-xl  max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who have transformed their lives through mindfulness and community support.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="">
          <div className=" backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 transform hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
            {/* Background Quote */}
            <Quote className="absolute top-8 right-8 w-24 h-24 transform rotate-12" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
              {/* Profile Section */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl transform hover:scale-110 transition-all duration-300 mx-auto lg:mx-0">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-[#bda373] to-[#8a6c42] rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold  mb-2">{current.name}</h3>
                <p className="text-amber-600 font-semibold mb-1" style={{ color: '#8a6c42' }}>{current.role}</p>
                <p className=" text-sm mb-4">{current.location}</p>
                
                {/* Rating */}
                <div className="flex justify-center lg:justify-start items-center mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="inline-flex items-center px-3 py-1 bg-amber-100 rounded-full text-sm font-medium" style={{ color: '#8a6c42' }}>
                  {current.joinDate}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
                    <span className="text-sm font-semibold" style={{ color: '#8a6c42' }}>
                      "{current.highlight}"
                    </span>
                  </div>
                </div>

                <blockquote className="text-xl lg:text-2xl  leading-relaxed mb-8 font-medium">
                  "{current.text}"
                </blockquote>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? 'bg-amber-600 scale-125'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        style={index === currentTestimonial ? { backgroundColor: '#8a6c42' } : {}}
                      />
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <div
                      onClick={prevTestimonial}
                      className="w-12 h-12   rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 border border-gray-200"
                    >
                      <ChevronLeft className="w-5 h-5 " />
                    </div>
                    <div
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-gradient-to-r from-[#bda373] to-[#8a6c42] rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center /80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="text-3xl font-bold mb-2" style={{ color: '#8a6c42' }}>10,000+</div>
            <div className=" font-medium">Happy Members</div>
          </div>
          <div className="text-center /80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="text-3xl font-bold mb-2" style={{ color: '#8a6c42' }}>4.9/5</div>
            <div className=" font-medium">Average Rating</div>
          </div>
          <div className="text-center /80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="text-3xl font-bold mb-2" style={{ color: '#8a6c42' }}>50,000+</div>
            <div className=" font-medium">Sessions Completed</div>
          </div>
          <div className="text-center /80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <div className="text-3xl font-bold mb-2" style={{ color: '#8a6c42' }}>98%</div>
            <div className=" font-medium">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
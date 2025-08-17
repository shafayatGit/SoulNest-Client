import React, { useState } from 'react';
import { 
  BookOpen, 
  Play, 
  Download,
  Clock,
  Star,
  Users,
  Filter,
  Search,
  ChevronRight,
  Headphones,
  FileText,
  Video,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react';

const ResourcesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'meditations', label: 'Meditations', icon: Headphones },
    { id: 'articles', label: 'Articles', icon: FileText },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'courses', label: 'Courses', icon: Award }
  ];

  const resources = [
    {
      id: 1,
      title: "5-Minute Morning Meditation",
      description: "Start your day with clarity and intention through this gentle guided meditation.",
      type: "meditations",
      duration: "5 min",
      rating: 4.9,
      downloads: 12500,
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Sarah Chen",
      level: "Beginner",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Anxiety: A Complete Guide",
      description: "Comprehensive article exploring the nature of anxiety and practical coping strategies.",
      type: "articles",
      duration: "15 min read",
      rating: 4.8,
      downloads: 8900,
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Marcus Rodriguez",
      level: "Intermediate",
      featured: false
    },
    {
      id: 3,
      title: "Breathwork for Stress Relief",
      description: "Learn powerful breathing techniques to manage stress and find instant calm.",
      type: "videos",
      duration: "12 min",
      rating: 4.9,
      downloads: 15600,
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Emma Thompson",
      level: "Beginner",
      featured: true
    },
    {
      id: 4,
      title: "Mindful Leadership Masterclass",
      description: "8-week comprehensive course on integrating mindfulness into leadership practices.",
      type: "courses",
      duration: "8 weeks",
      rating: 4.9,
      downloads: 3400,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "David Park",
      level: "Advanced",
      featured: true
    },
    {
      id: 5,
      title: "Sleep Stories for Deep Rest",
      description: "Calming bedtime stories designed to help you drift into peaceful sleep.",
      type: "meditations",
      duration: "20-30 min",
      rating: 4.7,
      downloads: 9800,
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Luna Martinez",
      level: "All Levels",
      featured: false
    },
    {
      id: 6,
      title: "The Science of Happiness",
      description: "Research-backed insights into what truly makes us happy and fulfilled.",
      type: "articles",
      duration: "10 min read",
      rating: 4.8,
      downloads: 7200,
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Maya Patel",
      level: "All Levels",
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.type === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'meditations': return Headphones;
      case 'articles': return FileText;
      case 'videos': return Video;
      case 'courses': return Award;
      default: return BookOpen;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-blue-600 bg-blue-100';
      case 'Advanced': return 'text-purple-600 bg-purple-100';
      default: return ' bg-gray-100';
    }
  };

  return (
    <section className="py-20 px-5 nuni relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(138, 108, 66, 0.3), transparent)' }}></div>
        <div className="absolute bottom-32 right-32 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, rgba(138, 108, 66, 0.3), transparent)' }}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: 'rgba(138, 108, 66, 0.1)' }}>
            <BookOpen className="w-5 h-5 mr-2" style={{ color: '#8a6c42' }} />
            <span className="text-sm font-medium" style={{ color: '#8a6c42' }}>Learning Resources</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold  mb-6">
            Expand Your
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #8a6c42, #b8956a)' }}>
              Wellness Knowledge
            </span>
          </h2>
          
          <p className="text-xl  max-w-3xl mx-auto leading-relaxed">
            Access our curated collection of meditations, articles, videos, and courses designed to support your journey.
          </p>
        </div>

        {/* Featured Resources Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold  mb-8 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2" style={{ color: '#8a6c42' }} />
            Featured This Week
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => {
              const TypeIcon = getTypeIcon(resource.type);
              return (
                <div key={resource.id} className="group  rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold  rounded-full" style={{ backgroundColor: '#8a6c42' }}>
                      Featured
                    </div>
                    
                    {/* Play/View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 /90 hover: rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 ml-1" style={{ color: '#8a6c42' }} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <TypeIcon className="w-4 h-4" style={{ color: '#8a6c42' }} />
                        <span className="text-sm font-medium capitalize" style={{ color: '#8a6c42' }}>
                          {resource.type}
                        </span>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(resource.level)}`}>
                        {resource.level}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold  mb-2 group-hover: transition-colors duration-300">
                      {resource.title}
                    </h4>
                    
                    <p className=" text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm  mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{resource.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          <span>{resource.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm ">by {resource.author}</span>
                      <button className="flex items-center px-4 py-2  rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #8a6c42, #b8956a)' }}>
                        Access
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Search and Filter */}
        <div className=" rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            {/* <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 " />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                style={{ focusRingColor: 'rgba(138, 108, 66, 0.5)' }}
              />
            </div> */}
            
            {/* Category Filter */}
            {/* <div className="flex space-x-2 overflow-x-auto">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                      activeCategory === category.id
                        ? ' shadow-lg transform scale-105'
                        : ' bg-gray-100 hover:bg-gray-200'
                    }`}
                    style={activeCategory === category.id ? { background: 'linear-gradient(135deg, #8a6c42, #b8956a)' } : {}}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div> */}
          </div>
        </div>

        {/* Resources Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const TypeIcon = getTypeIcon(resource.type);
            return (
              <div key={resource.id} className=" rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {resource.featured && (
                    <div className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold  rounded-full" style={{ backgroundColor: '#8a6c42' }}>
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <TypeIcon className="w-4 h-4" style={{ color: '#8a6c42' }} />
                      <span className="text-sm font-medium capitalize" style={{ color: '#8a6c42' }}>
                        {resource.type}
                      </span>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(resource.level)}`}>
                      {resource.level}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold  mb-2 group-hover: transition-colors duration-300">
                    {resource.title}
                  </h4>
                  
                  <p className=" text-sm mb-4 leading-relaxed line-clamp-2">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm  mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{resource.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{resource.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm ">by {resource.author}</span>
                    <button className="flex items-center px-3 py-2  rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm" style={{ background: 'linear-gradient(135deg, #8a6c42, #b8956a)' }}>
                      <Heart className="w-4 h-4 mr-1" />
                      Access
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Load More */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-4  hover:bg-gray-50  font-semibold rounded-full shadow-lg border-2 border-gray-200 hover:border-amber-300 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
            Load More Resources
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ResourcesSection;
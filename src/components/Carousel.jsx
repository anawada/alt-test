import { useState, useEffect, useCallback } from 'react';
import caseStudy from '../assets/case-study.png';

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "We have been delighted with our DNS partnership. The club now has direction & delivery on all document processes with a clear road map for the foreseeable future.",
      author: "Paul Johnson",
      title: "Director",
      company: "Nottingham Forest Football Club",
      image: caseStudy
    },
    {
      id: 2,
      quote: "DNS has transformed our IT infrastructure and improved efficiency across all departments.",
      author: "Sarah Williams",
      title: "CTO",
      company: "Tech Innovations Ltd",
      image: "https://picsum.photos/id/33/900/602" 
    },
    {
      id: 3,
      quote: "The document management solution provided by DNS has revolutionized how we handle our paperwork.",
      author: "Michael Chen",
      title: "Operations Manager",
      company: "Global Logistics",
      image: "https://picsum.photos/id/57/900/603"
    },
    {
      id: 4,
      quote: "Exceptional service from start to finish. DNS understood our unique challenges and delivered solutions that work.",
      author: "Emma Thompson",
      title: "Office Manager",
      company: "Lawson & Partners",
      image: "https://picsum.photos/id/58/900/604"
    },
    {
      id: 5,
      quote: "The print management services from DNS have reduced our costs by 30% while improving quality.",
      author: "David Roberts",
      title: "Finance Director",
      company: "Retail Solutions Group",
      image: "https://picsum.photos/id/83/900/605"
    }
  ];

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (activeSlide + 1) % testimonials.length;
      goToSlide(nextSlide);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeSlide, goToSlide, testimonials.length]);

  return (
    <div className="-mb-62 md:mt-10 relative z-10">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Don't just take our word for it...</h2>
          <a href="#" className="underline font-mono text-xs hover:text-brand">View all Case Studies</a>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-xl">
          {/* Testimonial */}
          <div className="relative h-[500px]">
            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
              <img 
                src={testimonials[activeSlide].image} 
                alt={testimonials[activeSlide].company} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Quote Overlay */}
            <div className="absolute inset-0 flex">
              <div className="w-full md:w-2/3 px-10 lg:px-15 py-10 md:py-20 bg-opacity-80 text-white transform transition-transform duration-500 ease-in-out">
                <blockquote className="md:text-3xl/10 font-bold font-gilroy mb-6 drop-shadow-lg">
                  "{testimonials[activeSlide].quote}"
                </blockquote>
                <div className="font-mono text-xs">
                  <p>{testimonials[activeSlide].author}, {testimonials[activeSlide].title}</p>
                  <p>{testimonials[activeSlide].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-10 left-10 lg:left-18 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="transition-all duration-300"
                aria-label={`Go to slide ${index + 1}`}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="21" 
                  height="21" 
                  viewBox="0 0 21 21" 
                  fill="none"
                  className="transition-all duration-300"
                >
                  <circle 
                    cx="10.5" 
                    cy="10.5" 
                    r="10.5" 
                    fill="white"
                    opacity={index === activeSlide ? "1" : "0.3"}
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

import { useState } from 'react';

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "We have been delighted with our DNS partnership. The club now has direction & delivery on all document processes with a clear road map for the foreseeable future.",
      author: "Paul Johnson",
      title: "Director",
      company: "Nottingham Forest Football Club",
      image: "https://picsum.photos/900/600" // Update with actual image path
    },
    {
      id: 2,
      quote: "DNS has transformed our IT infrastructure and improved efficiency across all departments.",
      author: "Sarah Williams",
      title: "CTO",
      company: "Tech Innovations Ltd",
      image: "https://picsum.photos/900/600" 
    },
    {
      id: 3,
      quote: "The document management solution provided by DNS has revolutionized how we handle our paperwork.",
      author: "Michael Chen",
      title: "Operations Manager",
      company: "Global Logistics",
      image: "https://picsum.photos/900/600"
    },
    {
      id: 4,
      quote: "Exceptional service from start to finish. DNS understood our unique challenges and delivered solutions that work.",
      author: "Emma Thompson",
      title: "Office Manager",
      company: "Lawson & Partners",
      image: "https://picsum.photos/900/600"
    },
    {
      id: 5,
      quote: "The print management services from DNS have reduced our costs by 30% while improving quality.",
      author: "David Roberts",
      title: "Finance Director",
      company: "Retail Solutions Group",
      image: "https://picsum.photos/900/600"
    }
  ];

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

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
            <img 
              src={testimonials[activeSlide].image} 
              alt={testimonials[activeSlide].company} 
              className="w-full h-full object-cover"
            />
            
            {/* Quote Overlay */}
            <div className="absolute inset-0 bg-opacity-30 flex">
              <div className="w-full md:w-2/3 px-10 lg:px-20 py-10 md:py-20 bg-opacity-80 text-white">
                <blockquote className="md:text-3xl/10 font-bold font-gilroy leading-tight mb-6">
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
                className={`w-4 h-4 rounded-full ${
                  index === activeSlide ? 'bg-white' : 'bg-white bg-opacity-70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

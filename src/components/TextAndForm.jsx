import React, { useState } from 'react';

function TextAndForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You could send the data to an API or service here
  };

  return (
    <section className="relative">
      {/* Full-width background image for the top portion */}
      {/* Pink section with content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-9">
            {/* Left column with text */}
            <div className="md:w-2/3">
              <h1 className="text-6xl font-bold text-white mb-6">
                We're <span className="font-gilroy font-bold leading-normal text-transparent [-webkit-text-stroke:2px_#FFF]">your</span> IT Services
                problem solvers
              </h1>
              <p className="text-white mb-8 max-w-xxl pe-5">
                Recognising your frustrations with your print environment, IT
                services, document management & communications and finding.
              </p>
              <p className="text-white">
                Get in touch today!
              </p>
            </div>
            
            {/* Right column with form */}
            <div className="md:w-1/2 mt-7">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-4 border border-white bg-transparent text-white placeholder-white focus:outline-none"
                    required
                  />
                  
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-4 border border-white bg-transparent text-white placeholder-white focus:outline-none"
                    required
                  />
                  
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="Telephone"
                    className="w-full p-4 border border-white bg-transparent text-white placeholder-white focus:outline-none"
                  />
                  
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full p-4 border border-white bg-transparent text-white placeholder-white focus:outline-none"
                  />
                  
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I need help with..."
                    className="w-full p-4 border border-white bg-transparent text-white placeholder-white focus:outline-none resize-none"
                  />
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-13 py-4 bg-white text-blue  hover:tex-brand hover:bg-opacity-90 transition-colors"
                    >
                      Submit now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextAndForm; 
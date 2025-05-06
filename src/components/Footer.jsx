import React from 'react';

function Footer() {
  return (
    <footer className="bg-form-bg text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="md:col-span-1">
            <div className="bg-white text-pink-500 inline-block p-2 rounded mb-6">
              <h2 className="text-4xl font-bold">DNS</h2>
              <p className="text-xs font-medium">DOCUMENT</p>
              <p className="text-xs font-medium">NETWORK SERVICES</p>
            </div>
          </div>

          {/* Contact us */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contact us</h3>
            <p className="mb-2">
              <span className="font-bold">E</span> info@dnslimited.co.uk
            </p>
            <p>
              <span className="font-bold">T</span> 0845 034 0895
            </p>
          </div>

          {/* Address */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p className="mb-2">Unit 9</p>
            <p className="mb-2">Royal Scot Road,</p>
            <p className="mb-2">Pride Park, Derby</p>
            <p>DE24 8AJ</p>
          </div>

          {/* Opening hours */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Opening hours</h3>
            <p className="mb-2">Mon - Fri:</p>
            <p>9 am - 5:30 pm</p>
          </div>

          {/* About us and Services */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-4">About us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">CSR</a></li>
                  <li><a href="#" className="hover:underline">Environment & Sustainability</a></li>
                  <li><a href="#" className="hover:underline">Meet the team</a></li>
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">IT Services</a></li>
                  <li><a href="#" className="hover:underline">Communications</a></li>
                  <li><a href="#" className="hover:underline">Managed Print Services</a></li>
                  <li><a href="#" className="hover:underline">Document Management</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-pink-400 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">Design & built by Alt</p>
          <p className="text-sm">© Document Network Services Ltd 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
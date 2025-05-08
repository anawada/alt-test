import React from 'react';
import dnsLogo from '../assets/DNSlogo.png';

function Footer() {
  return (
    <footer className=" text-white pt-12 pb-3 relative font-mono overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-y-10 md:gap-y-0 md:gap-x-0 pb-7 relative">
          {/* Logo */}
          <div className="w-30 flex-shrink-0 flex flex-col items-start mb-6 md:mb-0">
            <img src={dnsLogo} alt="DNS Logo" className="w-20 mb-0 mt-1" />
          </div>

          {/* Contact us */}
          <div className="flex-1 text-sm leading-[1.6] mb-6 md:mb-0 min-w-[150px]">
            <div className="mb-2">Contact us</div>
            <div className="mb-1">E <a href="mailto:info@dnslimited.co.uk" className="">info@dnslimited.co.uk</a></div>
            <div>T <a href="tel:08450340895">0845 034 0895</a></div>
          </div>

          {/* Address */}
          <div className="flex-1 text-sm leading-[1.6] mb-6 md:mb-0 min-w-[150px]">
            <div className="mb-2">Address</div>
            <div>Unit 9</div>
            <div>Royal Scot Road,</div>
            <div>Pride Park, Derby</div>
            <div>DE24 8AJ</div>
          </div>

          {/* Opening hours */}
          <div className="flex-1 text-sm leading-[1.6] mb-6 md:mb-0 min-w-[150px]">
            <div className="mb-2">Opening hours</div>
            <div>Mon – Fri:</div>
            <div>9 am – 5:30 pm</div>
          </div>

          {/* About us */}
          <div className="flex-1 text-sm leading-[1.6] mb-6 md:mb-0 min-w-[180px]">
            <div className="mb-2">About us</div>
            <a href="/csr" className="block">CSR</a>
            <a href="/environment-sustainability" className="block">Environment & Sustainability</a>
            <a href="/meet-the-team" className="block">Meet the team</a>
          </div>

          {/* Services */}
          <div className="flex-1 text-sm leading-[1.6] min-w-[180px]">
            <div className="mb-2">Services</div>
            <a href="/it-services" className="block">IT Services</a>
            <a href="/communications" className="block">Communications</a>
            <a href="/managed-print-services" className="block">Managed Print Services</a>
            <a href="/document-management" className="block">Document Management</a>
          </div>
        </div>
      </div>
      {/* Full-bleed divider */}
      <div className="absolute left-0 right-0 w-screen h-px bg-white/20"  />
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-3 py-4 text-xs font-mono">
          <div className="mb-2 md:mb-0 md:self-start self-start">Design & built by Alt</div>
          <div className="md:self-end self-end">© Document Network Services Ltd 2024</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
import { useState } from 'react';
import logo from '../assets/DNSlogo.png'

function DoubleNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="nav-container">
            <div className="sm:ps-2 sm:pe-8 px-4 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between sm:justify-start flex-shrink-0 min-h-20 lg:h-24">
                <div className="w-full flex justify-between items-center mb-4 sm:hidden">
                    <div>
                        <img src={logo} alt="DNS Logo" className="w-24 h-16" />
                    </div>
                    <button 
                        onClick={toggleMobileMenu}
                        className="text-white p-2"
                        aria-label="Toggle mobile menu"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                
                <div 
                    className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 sm:hidden ${
                        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={toggleMobileMenu}
                />

                <div 
                    className={`fixed top-0 right-0 h-full w-64 bg-brand-secondary z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
                        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="p-6">
                        <div className="flex justify-end mb-8">
                            <button 
                                onClick={toggleMobileMenu}
                                className="text-white p-2"
                                aria-label="Close mobile menu"
                            >
                                <svg 
                                    className="w-8 h-8" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <nav className="space-y-6">
                            <a href="#" className="block text-white hover:text-brand transition-colors">Services</a>
                            <a href="#" className="block text-white hover:text-brand transition-colors">Case Studies</a>
                            <a href="#" className="block text-white hover:text-brand transition-colors">Insights</a>
                            <a href="#" className="block text-white hover:text-brand transition-colors">Contact</a>
                            <a href="#" className="block text-white hover:text-brand transition-colors">About us</a>
                            <a href="#" className="block text-white hover:text-brand transition-colors">Careers</a>
                        </nav>

                        <div className="mt-8">
                            <div className="mb-4 font-mono text-sm">
                                <span className="text-white">Request support</span>
                            </div>
                            <button className="bg-white text-brand-secondary font-bold px-4 py-1 rounded shadow text-sm w-full">
                                Call Me Back
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="hidden sm:block sm:me-10">
                    <img src={logo} alt="DNS Logo" className="w-30 h-20" />
                </div>
                
                <div className="hidden sm:flex flex-col items-center sm:items-start sm:justify-start flex-1">
                    <div className="flex items-center space-x-8 mb-2 sm:mb-3 font-mono text-sm text-white">
                        <a href="tel:08450340895" className="whitespace-nowrap"> 0845 034 0895</a>
                        <a href="#">About us</a>
                        <a href="#">Careers</a>
                    </div>
                    
                    <div className="flex items-center space-x-10 md:space-x-6 font-gilroy text-base sm:text-lg text-white">
                        <a href="#">Services</a>
                        <a href="#">Case Studies</a>
                        <a href="#">Insights</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                
                <div className="hidden sm:flex sm:flex-col sm:items-end md:align-top lg:mt-4 sm:mt-0 sm:ml-8"> 
                    <div className="mb-2 sm:mb-3 font-mono text-sm">
                        <span className="text-white text-sm">Request support</span>
                    </div>
                    
                    <div className="flex items-center space-x-4 font-gilroy text-lg">
                        <button className="bg-white text-brand-secondary font-bold px-4 sm:px-5 py-1 rounded shadow">Call Me Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoubleNavbar;
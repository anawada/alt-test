import logo from '../assets/DNSlogo.png'

function DoubleNavbar() {
    return (
        <div className="container mx-auto px-4 py-6">
            {/* Mobile Layout */}
            <div className="flex flex-col md:hidden">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <img src={logo} alt="DNS Logo" className="w-24 h-16" />
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="mb-2 font-mono text-sm">
                            <span className="text-white text-sm">Request support</span>
                        </div>
                        <div>
                            <button className="bg-white text-brand-secondary font-bold px-4 py-1 rounded shadow text-sm">Call Me Back</button>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4 mb-2 font-mono text-sm text-white">
                        <a href="tel:08450340895" className="whitespace-nowrap">0845 034 0895</a>
                        <a href="#">About us</a>
                        <a href="#">Careers</a>
                    </div>
                    
                    <div className="flex items-center space-x-4 font-gilroy text-base text-white">
                        <a href="#">Services</a>
                        <a href="#">Case Studies</a>
                        <a href="#">Insights</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
            
            {/* Medium and Large Screen Layout */}
            <div className="hidden md:grid grid-cols-12 items-center">
                {/* Logo */}
                <div className="col-span-2">
                    <img src={logo} alt="DNS Logo" className="w-24 h-16 lg:w-28 lg:h-20 xl:w-32 xl:h-22" />
                </div>
                
                {/* Navigation */}
                <div className="col-span-7">
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-6 mb-2 font-mono text-sm text-white">
                            <a href="tel:08450340895" className="whitespace-nowrap">0845 034 0895</a>
                            <a href="#">About us</a>
                            <a href="#">Careers</a>
                        </div>
                        
                        <div className="flex items-center space-x-8 font-gilroy text-base lg:text-lg text-white">
                            <a href="#">Services</a>
                            <a href="#">Case Studies</a>
                            <a href="#">Insights</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
                
                {/* Support Section */}
                <div className="col-span-3 flex flex-col items-end">
                    <div className="mb-2 font-mono text-sm">
                        <span className="text-white text-sm">Request support</span>
                    </div>
                    <div>
                        <button className="bg-white text-brand-secondary font-bold px-5 py-1 rounded shadow">Call Me Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoubleNavbar;
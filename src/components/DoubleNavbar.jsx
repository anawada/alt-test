import logo from '../assets/DNSlogo.png'
function DoubleNavbar() {
    return (
        <div className="nav-container">
            <div className="sm:ps-2 sm:pe-8 px-4 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between sm:justify-start flex-shrink-0 min-h-20 lg:h-24">
                <div className="w-full flex justify-between items-center mb-4 sm:hidden">
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
                
                <div className="hidden sm:block sm:me-10">
                    <img src={logo} alt="DNS Logo" className="w-30 h-20" />
                </div>
                
                <div className="flex flex-col items-center sm:items-start sm:justify-start flex-1">
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
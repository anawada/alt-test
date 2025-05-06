import heroSvgUrl from '../assets/hero.svg'
import heroSvgUrl2 from '../assets/laptop-screen.svg'

function Hero() {
  return (
      <div className="container py-12 pb-42">
        <div className="grid grid-cols-1 text-white md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-7xl leading-tight font-bold">
              We make your
              <br />
              IT work easy.
            </h1>
            <p className="max-w-md">
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them.
            </p>
          </div>
          <div className="flex items-center justify-center relative">
            <img 
              src={heroSvgUrl} 
              alt="IT services illustration"
              className="h-auto max-w-full absolute top-8 right-65 z-10" 
            />
            <img 
              src={heroSvgUrl2} 
              alt="IT services illustration"
              className="h-auto max-w-full absolute top-2 right-0 z-10" 
            />
          </div>
        </div>
      </div>
  );
}

export default Hero;

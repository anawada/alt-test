import heroSvgUrl from '../assets/hero.png';

function Hero() {
  return (
    <div className="container pb-20 md:pb-42">
      <div className="grid grid-cols-1 text-white md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="text-7xl font-bold lg:pe-20">
              We make your IT work easy.
            </h1>
          </div>
          <p className="max-w-xl">
            Recognising your frustrations with your print environment, IT
            services, document management & communications and finding a
            solution to overcome them.
          </p>
        </div>
        <div className="flex items-center justify-center pt-20">
          <img
            src={heroSvgUrl}
            alt="IT services illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

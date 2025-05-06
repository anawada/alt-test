function Banner() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-16">
        {/* Banner Content */}
        <div className="relative grid grid-cols-12">
          {/* Left Column - Network Image */}
          <div className="relative z-10 col-span-12 flex items-center justify-center md:col-span-6">
            <div className="h-full w-full">
              <img
                src="https://picsum.photos/900/600"
                alt="Network equipment"
                className="h-full min-h-[350px] w-full rounded-tr-[10px] rounded-br-[10px] object-cover shadow-md"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="relative z-0 col-span-12 ml-0 flex flex-col justify-center bg-brand-darker p-8 text-white md:col-span-6 md:-ml-16 md:p-10 lg:p-16">
            <div className="mx-auto ps-24">
              <div className="pe-30">
                <h2 className="mb-6 text-4xl leading-tight font-bold md:text-5xl">
                  Turning process frustration into progress since 1996
                </h2>
              </div>
              <p className="text-md max-w-lg pe-8 font-mono leading-relaxed">
                Recognising your frustrations with your print environment, IT
                services, document management & communications and finding a
                solution to overcome them. Recognising your frustrations with
                your print environment, IT services, document management &
                communications and finding a solution to overcome them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

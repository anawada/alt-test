import React from 'react';

function BannerTwoColText() {
  return (
    <div className="relative z-0 bg-black pt-36 pb-24 text-white">
      <div className="mx-auto px-60 pt-50">
        {/* Heading - Centered */}
        <h2 className="mb-16 text-center text-4xl font-bold">
          The business process problem solvers.
        </h2>

        {/* Two Column Text */}
        <div className="grid grid-cols-1 gap-8 font-mono text-sm leading-relaxed md:grid-cols-2">
          {/* Left Column */}
          <div className="mx-auto max-w-xl md:mx-0 px-12">
            <p>
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them. Recognising your frustrations with your
              print environment, IT services, document management &
              communications and finding a solution to overcome them.
            </p>
          </div>

          {/* Right Column */}
          <div className="mx-auto max-w-xl md:mx-0 px-12">
            <p>
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them. Recognising your frustrations with your
              print environment, IT services, document management &
              communications and finding a solution to overcome them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerTwoColText;

import React from 'react';
import InsightsNews from './InsightsNews';
import FAQs from './FAQs';

function InsightsAndFAQs() {
  return (
    <div className="bg-black">
      <div className="container flex flex-col md:flex-row">
        {/* Left Column - Insights & News */}
        <div className="md:w-1/2">
          <InsightsNews />
        </div>

        {/* Right Column - FAQs */}
        <div
          className="bg-opacity-90 bg-black md:w-1/2"
          style={{
            backgroundImage: 'url(/src/assets/images/geometric-dark.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div>
            <FAQs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightsAndFAQs;

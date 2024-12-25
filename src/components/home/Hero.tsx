import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-green-700 min-h-screen">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-50"
          src="https://www.aimim.org/wp-content/themes/twentytwentyfour/assets/video/aimim.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Voice of the People</span>
            <span className="block text-green-200">Progress Through Unity</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-green-100">
            Working towards a stronger, more inclusive society through democratic participation
            and social justice.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/volunteer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
            >
              Join Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-500 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Gradient overlay at the bottom */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent h-32" />
    </div>
  );
};

export default Hero;
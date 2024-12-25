import React from 'react';
import Hero from '../components/home/Hero';
import NewsTicker from '../components/home/NewsTicker';
import QuickNav from '../components/home/QuickNav';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';
import NewsSection from '../components/home/NewsSection';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />
      <NewsTicker />
      <QuickNav />
    
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
                              Latest News
                   </h2>
                <p className="mt-4 text-center text-lg text-gray-600">
            Stay updated with the latest news about Asaduddin Owaisi and our initiatives.
              </p>
              <NewsSection />
                </div>
                  </section>
      
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Join Our Movement"
                subtitle="Be part of the change you want to see in society"
              />
              <p className="mt-4 text-lg text-gray-600">
                We're always looking for passionate individuals who want to make a
                difference in their communities. Join us in our mission to create a
                more inclusive and equitable society.
              </p>
              <div className="mt-8">
                <a
                  href="/volunteer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Become a Volunteer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
                alt="Volunteer"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-green-600 opacity-10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
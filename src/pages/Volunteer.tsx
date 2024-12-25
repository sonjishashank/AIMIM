import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';

const Volunteer = () => {
  return (
    <div>
      <PageHeader
        title="Join Our Movement"
        subtitle="Be part of the change you want to see in society."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              title="Why Volunteer?"
              subtitle="Make a difference in your community"
            />
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </span>
                <span className="ml-3 text-gray-600">
                  Help organize community events and awareness programs
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </span>
                <span className="ml-3 text-gray-600">
                  Participate in social welfare initiatives
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </span>
                <span className="ml-3 text-gray-600">
                  Support education and healthcare programs
                </span>
              </li>
            </ul>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Why do you want to volunteer?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit Application
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
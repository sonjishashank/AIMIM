import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import LeaderCard from '../components/leaders/LeaderCard';
import { leaders } from '../data/leaders';

const Leaders = () => {
  return (
    <div>
      <PageHeader
        title="Our Leaders"
        subtitle="Meet the dedicated individuals leading our movement for change."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaders;
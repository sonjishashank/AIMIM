import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Leader } from '../../types';
import Card from '../shared/Card';

interface LeaderCardProps {
  leader: Leader;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader }) => {
  return (
    <Card>
      <div className="aspect-w-3 aspect-h-4">
        <img
          className="w-full h-[25rem] object-cover"
          src={leader.image}
          alt={leader.name}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
        <p className="text-sm text-green-600 mb-4">{leader.designation}</p>
        <p className="text-gray-600 mb-6">{leader.bio}</p>
        <div className="flex space-x-4">
          {leader.socialLinks.twitter && (
            <a
              href={leader.socialLinks.twitter}
              className="text-gray-400 hover:text-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
          )}
          {leader.socialLinks.facebook && (
            <a
              href={leader.socialLinks.facebook}
              className="text-gray-400 hover:text-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
          )}
          {leader.socialLinks.instagram && (
            <a
              href={leader.socialLinks.instagram}
              className="text-gray-400 hover:text-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default LeaderCard;
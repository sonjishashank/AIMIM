import React from 'react';
import { Users, Briefcase, Heart, Video, PhoneCall } from 'lucide-react';

const QuickNav = () => {
  const navItems = [
    { icon: Users, label: 'Our Leaders', href: '/leaders' },
    { icon: Briefcase, label: 'Our Works', href: '/works' },
    { icon: Heart, label: 'Volunteer', href: '/volunteer' },
    { icon: Video, label: 'Media', href: '/media' },
    { icon: PhoneCall, label: 'Connect', href: '/connect' },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center p-4 text-gray-700 hover:text-green-600 transition-colors group"
            >
              <item.icon className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickNav;
import React from 'react';

const NewsTicker = () => {
  const news = [
    "Owaisi's AIMIM Fields Riot-Accused Tahir Hussain From Mustafabad For Upcoming Delhi Polls",
    "'Polarising elections': BJP slams AIMIM for fielding Delhi riot accused Tahir Hussain",
    'AIMIM chief Owaisi criticises Allahabad HC Justice Shekhar Yadav for taking part in VHP event',
    "'Dangerous & objectionable': Owaisi's jab at CM Yogi's 'DNA remark' linking Sambhal to Bangladesh",
  ];

  return (
    <div className="bg-green-800 text-white py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4">📢</span>
        {news.map((item, index) => (
          <React.Fragment key={index}>
            <span className="mx-4">{item}</span>
            <span className="mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
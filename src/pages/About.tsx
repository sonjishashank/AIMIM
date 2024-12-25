import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import SectionTitle from '../components/shared/SectionTitle';
import Timeline from '../components/about/Timeline';

const About = () => {
  return (
    <div>
      <PageHeader
        title="About AIMIM"
        subtitle="ALL INDIA MAJLIS-E-ITTEHADUL MUSLIMEEN (AIMIM) has its roots in the efforts of the Muslims of Deccan, in the late 1920s, who had come together to unite the community on a common platform. Their objective was to promote the socio-economic and educational development of Muslims. The organization, initially known as Ittehad Bainal Muslimeen, was founded at a meeting of prominent Muslims, including Ulema-e-Mashaeqeen, hosted by Nawab Mahmood Khan Qiledar on 12th November 1927 at Hyderabad."
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              title="Our Mission"
              subtitle="Working towards social justice and equality for all communities."
            />
            <p className="text-gray-600">
              AIMIM is committed to representing and advocating for the rights of minorities
              and marginalized communities. Through democratic participation and inclusive
              policies, we strive to create a more equitable society for all.
            </p>
          </div>
          <div>
            <SectionTitle
              title="Our Vision"
              subtitle="Building a stronger, more inclusive democracy."
            />
            <p className="text-gray-600">
            AIMIM is a political party dedicated to protect and promote the rights of Muslims, Dalits, Adivasis, Other Backward Classes, Other Minorities and all other underprivileged communities in India. It bears true faith and allegiance to the Constitution of India. The party strongly believes in the nation’s secular democracy and strives to protect and enhance its quality by effective representation from local municipal councils to the Parliament.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <SectionTitle
            title="Our Journey"
            subtitle="Key milestones in our history of service and advocacy."
            centered
          />
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default About;
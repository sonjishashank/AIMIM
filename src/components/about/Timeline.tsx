import React from 'react';
import { timelineEvents } from '../../data/timeline';

const Timeline = () => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timelineEvents.map((event, eventIdx) => (
          <li key={event.year}>
            <div className="relative pb-8">
              {eventIdx !== timelineEvents.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center ring-8 ring-white">
                    <span className="text-white text-sm font-medium">{event.year}</span>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <p className="mt-2 text-sm text-gray-500">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
import React, { useState } from 'react';
import arrowup from '../../images/icon-arrow-dark.svg';

const Mobnav = () => {
  const [sections, setSections] = useState([
    {
      title: 'Product',
      links: ['Link 1', 'Link 2', 'Link 3'],
      expanded: false,
    },
    {
      title: 'Company',
      links: ['Link 4', 'Link 5', 'Link 6'],
      expanded: false,
    },
    {
      title: 'Connect',
      links: ['Contact', 'Newsletter', 'LinkedIn'],
      expanded: false,
    },
  ]);

  const toggleSection = (index) => {
    // Delay before updating the expanded state
    setTimeout(() => {
      setSections((prevSections) =>
        prevSections.map((section, i) =>
          i === index ? { ...section, expanded: !section.expanded } : section
        )
      );
    }, 200); // Adjust the delay time (in milliseconds) as needed
  };

  return (
    <div className="menumob bg-gray-100 flex flex-col text-black items-center rounded-xl mt-2 md:hidden pb-8 pt-4">
      {/* Sidebar */}
      {sections.map((section, index) => (
        <div key={index}>
          <div
            className="flex items-center justify-center py-4 px-6 cursor-pointer hover:bg-gray-200"
            onClick={() => toggleSection(index)}
          >
            <span className="font-bold text-lg">{section.title}</span>
            <img
              src={arrowup}
              className={`h-2 w-3 mx-1 ${section.expanded ? 'transform rotate-180' : ''}`}
              fill="none"
            />
          </div>
          {section.expanded && (
            <ul className="flex flex-col items-center space-y-3 bg-slate-200 py-6 w-70v rounded-xl">
              {section.links.map((link, i) => (
                <li key={i} className="py-1 cursor-pointer hover:bg-gray-200">
                  {link}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className="bg-gray-300 w-70v h-px"></div>
      {/* BUTTONS */}
      <div className="mt-8">
        <div className="flex justify-center font-bold text-xl">
          <a href="#">Login</a>
        </div>
        <div className="text-white justify-center flex  text-xl mt-6">
          <a className="bg-lastSign px-8 py-3 rounded-3xl">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Mobnav;

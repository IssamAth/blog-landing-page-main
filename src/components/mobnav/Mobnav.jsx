import React, { useState } from 'react';

const Mobnav = () => {
  const [sections, setSections] = useState([
    {
      title: 'Section 1',
      links: ['Link 1', 'Link 2', 'Link 3'],
      expanded: true,
    },
    {
      title: 'Section 2',
      links: ['Link 4', 'Link 5', 'Link 6'],
      expanded: false,
    },
    {
      title: 'Section 3',
      links: ['Link 7', 'Link 8', 'Link 9'],
      expanded: false,
    },
  ]);

  const toggleSection = (index) => {
    setSections((prevSections) =>
      prevSections.map((section, i) =>
        i === index ? { ...section, expanded: !section.expanded } : section
      )
    );
  };

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        {sections.map((section, index) => (
          <div key={index}>
            <div
              className="flex items-center justify-between py-4 px-6 cursor-pointer hover:bg-gray-200"
              onClick={() => toggleSection(index)}
            >
              <span>{section.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${section.expanded ? 'transform rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            {section.expanded && (
              <ul>
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="pl-10 py-3 cursor-pointer hover:bg-gray-200"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Mobnav;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { SUBJECTS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-64 bg-indigo-800 text-indigo-100">
      <div className="flex items-center justify-center h-16 bg-indigo-900 shadow-lg">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.25c-3.14 0-6-1.56-6-3.75v-6c0-2.19 2.86-3.75 6-3.75s6 1.56 6 3.75v6c0 2.19-2.86 3.75-6 3.75z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v-2.25m0 18V18.25" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 14.25v-8.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 14.25v-8.5" />
        </svg>
        <span className="ml-3 text-xl font-bold tracking-wider">Académie</span>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
              isActive ? 'bg-indigo-700 text-white' : 'hover:bg-indigo-700 hover:text-white'
            }`
          }
        >
          Tableau de Bord
        </NavLink>
        {SUBJECTS.map((subject) => (
          <NavLink
            key={subject.id}
            to={`/subject/${subject.id}`}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive ? 'bg-indigo-700 text-white' : 'hover:bg-indigo-700 hover:text-white'
              }`
            }
          >
            {subject.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

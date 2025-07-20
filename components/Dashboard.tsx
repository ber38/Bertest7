
import React from 'react';
import { Link } from 'react-router-dom';
import { SUBJECTS } from '../constants';

const GuideCharacter = () => (
    <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg border-2 border-indigo-200">
        <img src="https://picsum.photos/seed/guide/120/120" alt="Guide du Savoir" className="w-32 h-32 rounded-full border-4 border-indigo-400" />
        <div className="ml-6">
            <h2 className="text-2xl font-bold text-indigo-700">Bienvenue, jeune explorateur !</h2>
            <p className="mt-2 text-gray-600">Je suis ton guide à l'Académie du Savoir. Ensemble, nous allons transformer chaque leçon en une quête passionnante. Choisis une matière pour commencer ton aventure !</p>
        </div>
    </div>
);


const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <GuideCharacter />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SUBJECTS.map((subject) => (
          <Link
            key={subject.id}
            to={`/subject/${subject.id}`}
            className="group block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform border-t-4 border-indigo-500 hover:border-yellow-400"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
                {subject.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{subject.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{subject.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

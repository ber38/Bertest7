
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SUBJECTS } from '../constants';

const SubjectPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = SUBJECTS.find((s) => s.id === subjectId);

  if (!subject) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-indigo-700">{subject.title}</h1>
        <p className="mt-2 text-gray-600">{subject.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subject.modules.map((module) => (
          <Link
            key={module.id}
            to={`/subject/${subject.id}/${module.id}`}
            className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
            <p className="mt-2 text-gray-500">{module.description}</p>
             <div className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                Commencer la quête &rarr;
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectPage;


import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SUBJECTS } from '../constants';
import GeminiPracticeGenerator from './GeminiPracticeGenerator';

const ModulePage: React.FC = () => {
  const { subjectId, moduleId } = useParams<{ subjectId: string; moduleId: string }>();
  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const module = subject?.modules.find((m) => m.id === moduleId);

  if (!subject || !module) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="space-y-8">
        <div className="text-sm breadcrumbs p-2 bg-white rounded-lg shadow-sm">
            <ul>
                <li><Link to="/" className="text-indigo-600 hover:underline">Tableau de Bord</Link></li> 
                <li><Link to={`/subject/${subject.id}`} className="text-indigo-600 hover:underline">{subject.title}</Link></li> 
                <li>{module.title}</li>
            </ul>
        </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">{module.title}</h1>
        <p className="text-lg text-gray-500 italic mb-6">{module.description}</p>
        
        <div className="prose max-w-none text-gray-700">
          {module.content}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {module.themeExamples.map((example, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{example.title}</h3>
            <p className="text-gray-600">{example.text}</p>
          </div>
        ))}
      </div>
      
      <GeminiPracticeGenerator module={module} />

    </div>
  );
};

export default ModulePage;

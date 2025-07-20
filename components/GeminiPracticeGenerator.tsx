
import React, { useState, useCallback } from 'react';
import { generatePracticeProblem } from '../services/geminiService';
import type { Module } from '../types';
import { SUBJECTS } from '../constants';
import { useParams } from 'react-router-dom';


interface PracticeProblem {
  probleme: string;
  solution: string;
}

interface GeminiPracticeGeneratorProps {
  module: Module;
}

const GeminiPracticeGenerator: React.FC<GeminiPracticeGeneratorProps> = ({ module }) => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = SUBJECTS.find((s) => s.id === subjectId);

  const [theme, setTheme] = useState<'Demon Slayer' | 'Roblox'>('Demon Slayer');
  const [problem, setProblem] = useState<PracticeProblem | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const handleGenerate = useCallback(async () => {
    if (!subject) return;

    setIsLoading(true);
    setError(null);
    setProblem(null);
    setShowSolution(false);
    try {
      const result = await generatePracticeProblem(module, theme, subject.title);
      setProblem(result);
    } catch (e: any) {
      setError(e.message || "Une erreur est survenue.");
    } finally {
      setIsLoading(false);
    }
  }, [module, theme, subject]);

  return (
    <div className="bg-indigo-50 p-8 rounded-2xl shadow-lg border-t-4 border-indigo-500">
      <h2 className="text-2xl font-bold text-indigo-800">Défis de l'Académie</h2>
      <p className="mt-2 text-gray-600">Prêt à tester tes connaissances ? Choisis un thème et génère un défi unique !</p>
      
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center space-x-4">
          <label className="font-semibold text-gray-700">Thème :</label>
          <button onClick={() => setTheme('Demon Slayer')} className={`px-4 py-2 rounded-full font-semibold transition-all ${theme === 'Demon Slayer' ? 'bg-red-600 text-white shadow-md scale-105' : 'bg-white text-gray-700 hover:bg-red-100'}`}>
            Demon Slayer
          </button>
          <button onClick={() => setTheme('Roblox')} className={`px-4 py-2 rounded-full font-semibold transition-all ${theme === 'Roblox' ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white text-gray-700 hover:bg-blue-100'}`}>
            Roblox
          </button>
        </div>
        <button
          onClick={handleGenerate}
          disabled={isLoading || !subject}
          className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all duration-300 disabled:bg-indigo-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Génération...</span>
            </>
          ) : (
            <span>Générer un défi !</span>
          )}
        </button>
      </div>

      {error && <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>}

      {problem && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-inner space-y-4">
          <h3 className="font-bold text-lg text-gray-800">Ton défi sur le thème "{theme}" :</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{problem.probleme}</p>
          <button onClick={() => setShowSolution(!showSolution)} className="text-indigo-600 font-semibold hover:underline">
            {showSolution ? 'Cacher la solution' : 'Voir la solution'}
          </button>
          {showSolution && (
            <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
              <h4 className="font-bold text-green-800">Solution :</h4>
              <p className="text-green-700 whitespace-pre-wrap">{problem.solution}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GeminiPracticeGenerator;

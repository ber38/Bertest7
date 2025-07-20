
import { GoogleGenAI, Type } from "@google/genai";
import type { Module } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        probleme: {
            type: Type.STRING,
            description: "Le problème ou la question à résoudre pour l'élève."
        },
        solution: {
            type: Type.STRING,
            description: "La solution détaillée et expliquée du problème."
        }
    }
};

export const generatePracticeProblem = async (module: Module, theme: string, subjectTitle: string) => {
    const systemInstruction = `Tu es un assistant pédagogique créatif. Tu crées des exercices amusants pour des élèves de 11 ans (niveau CM2 en France ou 6ème primaire en Belgique). Ta réponse doit être uniquement au format JSON, en respectant le schéma fourni. Le problème doit être en français.`;
    
    const prompt = `Crée un problème sur le thème de "${theme}" (par exemple, Demon Slayer ou Roblox) pour la matière "${subjectTitle}". Le problème doit être basé sur le concept suivant du module "${module.title}": "${module.description}". Le problème doit être stimulant mais résolvable pour un enfant de 11 ans. Fournis également une solution claire, expliquée étape par étape.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                systemInstruction,
                responseMimeType: "application/json",
                responseSchema,
                temperature: 0.8,
            }
        });

        const text = response.text;
        if (!text) {
            throw new Error("La réponse de l'API est vide.");
        }
        
        // The response text is already a clean JSON string because of responseSchema
        return JSON.parse(text);

    } catch (error) {
        console.error("Erreur lors de la génération du problème:", error);
        throw new Error("Impossible de générer un défi pour le moment. Veuillez réessayer.");
    }
};

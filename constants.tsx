
import React from 'react';
import { Subject } from './types';
import { MathIcon, FrenchIcon, ScienceIcon, HistoryIcon } from './components/icons';

export const SUBJECTS: Subject[] = [
  {
    id: 'mathematiques',
    title: 'Mathématiques',
    subtitle: 'La Voie du Calcul et de la Géométrie',
    icon: <MathIcon className="h-8 w-8 text-white" />,
    modules: [
      {
        id: 'nombres-et-calculs',
        title: 'Nombres et Calculs',
        description: 'Les Techniques de Respiration du Nombre',
        content: (
          <div className="space-y-4">
            <p>Ce module développe ta compréhension des nombres et t'apprend à les utiliser pour résoudre des problèmes. Nous explorerons les différentes formes de calcul, les nombres entiers, les fractions, les nombres décimaux et les quatre opérations.</p>
            <h4 className="font-semibold text-lg text-indigo-600">Les Formes de Calcul</h4>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Calcul mental :</strong> Pour calculer vite dans ta tête, sans rien écrire !</li>
              <li><strong>Calcul en ligne :</strong> Pour poser des étapes intermédiaires sur papier.</li>
              <li><strong>Calcul posé :</strong> Pour utiliser des techniques précises (algorithmes) pour les multiplications ou divisions complexes.</li>
              <li><strong>Calcul instrumenté :</strong> Pour utiliser la calculatrice ou un ordinateur et vérifier tes résultats.</li>
            </ul>
            <h4 className="font-semibold text-lg text-indigo-600">Nombres Entiers, Fractions et Décimaux</h4>
            <p>Tu apprendras à jongler avec les grands nombres, à comprendre ce qu'est une fraction (une partie d'un tout) et à maîtriser les nombres à virgule pour plus de précision.</p>
          </div>
        ),
        themeExamples: [
          {
            title: 'Exemple "Demon Slayer"',
            text: "Calcule le nombre total de Respirations du Soleil maîtrisées par Yoriichi Tsugikuni s'il a perfectionné 9 formes et chaque forme contient un certain nombre de mouvements complexes (nombres premiers ou composés)."
          },
          {
            title: 'Exemple "Roblox Grow a Garden"',
            text: "Si ton jardin contient 250 parcelles et que tu souhaites les diviser équitablement entre 5 amis, combien de parcelles chacun reçoit-il ? Est-ce que 250 est un multiple de 5 et 10 ? Explique pourquoi."
          }
        ]
      },
      {
        id: 'espace-et-geometrie',
        title: 'Espace et Géométrie',
        description: "L'Art du Mouvement et de la Construction",
        content: (
          <div className="space-y-4">
            <p>La géométrie t'aide à comprendre le monde qui t'entoure. Tu apprendras à reconnaître, décrire et construire des formes, des solides, et même à les transformer !</p>
            <h4 className="font-semibold text-lg text-indigo-600">Figures et Solides</h4>
            <p>Nous allons explorer les propriétés des polygones (triangles, carrés...), construire des patrons pour créer des objets en 3D (cubes, pyramides) et dessiner des objets sous différents angles.</p>
            <h4 className="font-semibold text-lg text-indigo-600">Transformations et Mesures</h4>
            <p>Découvre comment déplacer des figures avec des translations, des rotations et des réflexions. Tu apprendras aussi à utiliser un rapporteur pour mesurer les angles avec précision.</p>
          </div>
        ),
        themeExamples: [
          {
            title: 'Exemple "Demon Slayer"',
            text: "Dessine des motifs de Respiration du Soleil symétriques et identifies-en les axes de symétrie. Est-ce que le motif d'un kimono de pourfendeur est congruent à son reflet dans l'eau ?"
          },
          {
            title: 'Exemple "Roblox Grow a Garden"',
            text: "Conçois un plan de jardin rectangulaire et un en forme de parallélogramme avec la même aire, pour maximiser ton espace de plantation. Trace les différentes vues de ta serre pour la construire."
          }
        ]
      },
      {
        id: 'algebre',
        title: 'Algèbre',
        description: 'Les Formules du Pouvoir',
        content: (
          <div className="space-y-4">
            <p>L'algèbre, c'est comme résoudre des énigmes avec des lettres et des symboles. Tu vas apprendre à penser comme un détective pour trouver des valeurs inconnues et comprendre des règles cachées.</p>
            <p>On utilisera des lettres (comme x ou y) pour représenter des nombres inconnus et on résoudra des équations simples pour découvrir leur valeur. On étudiera aussi des suites de nombres pour trouver la règle qui les gouverne.</p>
          </div>
        ),
        themeExamples: [
          {
            title: 'Exemple "Demon Slayer"',
            text: "Si la Puissance de Démon (P) d'un adversaire est calculée par l'équation P = 2 * X + 5 (où X est le nombre de Lunes Supérieures qu'il a absorbées), et que sa puissance est de 25, combien de Lunes Supérieures a-t-il absorbées ?"
          },
          {
            title: 'Exemple "Roblox Grow a Garden"',
            text: "Tu as planté des Graines Magiques. Chaque jour, elles grandissent selon une séquence : Jour 1 = 3 cm, Jour 2 = 7 cm, Jour 3 = 11 cm. Quelle est la règle de croissance de tes plantes ? Combien mesureront-elles au 10ème jour ?"
          }
        ]
      },
    ]
  },
  {
    id: 'francais',
    title: 'Français',
    subtitle: 'Le Souffle des Mots',
    icon: <FrenchIcon className="h-8 w-8 text-white" />,
    modules: [
       {
        id: 'grammaire',
        title: 'Grammaire et Conjugaison',
        description: 'Construis des phrases parfaites.',
        content: <p>Apprends à maîtriser les règles de la langue française pour t'exprimer avec clarté et précision. Découvre la nature et la fonction des mots, et deviens un maître de la conjugaison !</p>,
        themeExamples: [
          {
            title: 'Exemple "Demon Slayer"',
            text: "Décris la personnalité de Tanjiro ou Nezuko en utilisant des adjectifs précis. Conjugue le verbe 'combattre' à tous les temps que tu connais."
          }
        ]
      },
    ]
  },
  {
    id: 'sciences',
    title: 'Sciences',
    subtitle: 'La Compréhension du Monde',
    icon: <ScienceIcon className="h-8 w-8 text-white" />,
    modules: [
       {
        id: 'cycle-de-vie',
        title: 'Le Cycle de la Vie',
        description: 'De la graine à la plante, de l\'œuf à l\'animal.',
        content: <p>Explore les mystères de la nature, de la croissance des plantes (la photosynthèse !) au fonctionnement incroyable du corps humain. Comment les êtres vivants naissent, grandissent et s'adaptent à leur environnement ?</p>,
        themeExamples: [
          {
            title: 'Exemple "Roblox Grow a Garden"',
            text: "Étudie le cycle de vie d'une 'Fleur Solaire' : de la graine à la floraison, en passant par la photosynthèse. Dessine les étapes et explique le rôle de la lumière et de l'eau."
          }
        ]
      },
    ]
  },
  {
    id: 'histoire-geographie',
    title: 'Histoire & Géographie',
    subtitle: 'Les Légendes du Passé et les Cartes du Présent',
    icon: <HistoryIcon className="h-8 w-8 text-white" />,
    modules: [
      {
        id: 'grandes-periodes',
        title: 'Voyage dans le Temps',
        description: 'Explore les grandes périodes de l\'histoire.',
        content: <p>Remonte le temps pour découvrir les grands événements et les personnages qui ont façonné notre monde. Apprends à lire des cartes pour te repérer et comprendre les paysages qui nous entourent.</p>,
        themeExamples: [
          {
            title: 'Exemple "Demon Slayer"',
            text: "Explore la période Taisho du Japon (contexte de Demon Slayer) : quelles étaient les principales innovations technologiques et les coutumes de l'époque ? Crée une carte des territoires des Lunes Supérieures en respectant les échelles."
          }
        ]
      },
    ]
  }
];

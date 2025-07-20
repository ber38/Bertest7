
import type { ReactNode } from 'react';

export interface ThemeExample {
  title: string;
  text: string;
}

export interface Module {
  id: string;
  title:string;
  description: string;
  content: ReactNode;
  themeExamples: ThemeExample[];
}

export interface Subject {
  id:string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  modules: Module[];
}

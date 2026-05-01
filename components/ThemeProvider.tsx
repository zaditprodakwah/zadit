'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  fontSize: 'text-sm' | 'text-base' | 'text-lg';
  setFontSize: (size: 'text-sm' | 'text-base' | 'text-lg') => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [fontSize, setFontSizeState] = useState<'text-sm' | 'text-base' | 'text-lg'>('text-base');

  useEffect(() => {
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setTheme('light');
    } else {
      // Default to dark as requested
      setTheme('dark');
    }

    // Check local storage for font size
    const savedFontSize = localStorage.getItem('fontSize') as 'text-sm' | 'text-base' | 'text-lg' | null;
    if (savedFontSize) {
      setFontSizeState(savedFontSize);
    }
  }, []);

  useEffect(() => {
    // Apply theme
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Apply font size
    const root = window.document.documentElement;
    root.classList.remove('text-sm', 'text-base', 'text-lg');
    root.classList.add(fontSize);
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, fontSize, setFontSize: setFontSizeState }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

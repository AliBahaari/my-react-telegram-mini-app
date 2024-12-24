import React, { createContext, useState } from "react";

interface LanguageContextType {
  language: string;
  selectLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children?: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem("language") || "en";
  });

  const selectLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, selectLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };

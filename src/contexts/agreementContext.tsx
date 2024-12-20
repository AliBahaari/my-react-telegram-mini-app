import React, { createContext, useState } from "react";

interface AgreementContextType {
  isSigned: boolean;
  setIsSigned: React.Dispatch<React.SetStateAction<boolean>>;
}

const AgreementContext = createContext<AgreementContextType | undefined>(
  undefined
);

interface AgreementProviderProps {
  children?: React.ReactNode;
}

const AgreementProvider: React.FC<AgreementProviderProps> = ({ children }) => {
  const [isSigned, setIsSigned] = useState<boolean>(false);

  return (
    <AgreementContext.Provider value={{ isSigned, setIsSigned }}>
      {children}
    </AgreementContext.Provider>
  );
};

export { AgreementProvider, AgreementContext };

import { Button } from "@/components/ui/button";
import { LanguageContext } from "@/contexts/languageContext";
import { languages } from "@/lib/languages";
import { useContext } from "react";

function LanguageSelection() {
  const { selectLanguage } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h2>Select your Language:</h2>
      <div className="flex flex-col w-full gap-4 px-4">
        {languages.map((language, index) => (
          <Button key={index} onClick={() => selectLanguage(language.name)}>
            {language.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSelection;

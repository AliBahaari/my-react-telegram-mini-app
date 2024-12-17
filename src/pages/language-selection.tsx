import { Button } from "@/components/ui/button";

function LanguageSelection() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h2>Select your Language:</h2>
      <div className="flex flex-col w-full gap-4 px-4">
        <Button>English</Button>
        <Button>Spanish</Button>
        <Button>Chinese</Button>
        <Button>Arabic</Button>
        <Button>Portuguese</Button>
        <Button>Russian</Button>
        <Button>Indonesian</Button>
        <Button>German</Button>
        <Button>Japanese</Button>
        <Button>French</Button>
      </div>
    </div>
  );
}

export default LanguageSelection;

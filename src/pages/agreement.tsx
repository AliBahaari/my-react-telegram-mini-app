import { Button } from "@/components/ui/button";

function Agreement() {
  const agreement = `There's no agreement here`;

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="text-justify border border-black p-4 rounded-sm">
        <pre>{agreement}</pre>
      </div>
      <div className="px-4">
        <Button>I Agree</Button>
      </div>
    </div>
  );
}

export default Agreement;

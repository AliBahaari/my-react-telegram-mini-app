import Default from "@/components/layout/default";

function InvestOnTruedapp() {
  const statement = `Blah blah blah... 
    Blah blah blah...
    Blah blah blah...`;

  return (
    <Default>
      <div className="flex flex-col gap-2">
        <div className="text-justify">
          <pre>{statement}</pre>
        </div>
        <div className="flex justify-center items-center absolute bottom-1 w-full">
          <div className="text-center">Fairytale Program</div>
        </div>
      </div>
    </Default>
  );
}

export default InvestOnTruedapp;

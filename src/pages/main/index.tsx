import Default from "@/components/layout/default";
import { Button } from "@/components/ui/button";

function Main() {
  return (
    <Default>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-2">
          <Button>Invest on TrueDapp</Button>
          <Button>Buy TGM xx% below estimated listing price</Button>
        </div>
        <div className="flex flex-row">
          <Button className="flex-1 h-64 rounded-none">Cash Avalanche</Button>
          <Button className="flex-1 h-64 rounded-none">Long Shot</Button>
        </div>
        <Button className="h-24 my-2 rounded-none">Fairytale Program</Button>

        <div className="flex flex-row w-full">
          <Button className="rounded-none w-1/4">Mates</Button>
          <Button className="rounded-none w-1/4">Tasks</Button>
          <Button className="rounded-none w-1/4">Ranking</Button>
          <Button className="rounded-none w-1/4">Reserved</Button>
        </div>
      </div>
    </Default>
  );
}

export default Main;

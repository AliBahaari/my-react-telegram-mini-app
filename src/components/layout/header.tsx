import { Button } from "../ui/button";

function Header() {
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex flex-row flex-wrap justify-between">
        <Button className="rounded-none">Logo</Button>
        <Button className="rounded-none">Level</Button>
        <Button className="rounded-none">Stats</Button>
        <Button className="rounded-none">Wallet</Button>
        <Button className="rounded-none">Support</Button>
      </div>
      <div className="text-center p-3 border-2 border-black">
        <span>xxxxxx TGM = xxxxx USDT</span>
      </div>
    </div>
  );
}

export default Header;

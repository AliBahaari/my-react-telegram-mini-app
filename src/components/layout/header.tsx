import { useNavigate } from "react-router";
import { Button } from "../ui/button";

function Header() {
  const navigate = useNavigate();

  const onStatsClick = () => {
    navigate("/stats");
  };

  const onWalletClick = () => {
    navigate("/wallet");
  };

  const onSupportClick = () => {
    window.location.href = "https://google.com";
  };

  return (
    <div className="flex gap-2 flex-col">
      <div className="flex flex-row flex-wrap justify-between">
        <Button className="rounded-none">Logo</Button>
        <Button className="rounded-none">Level</Button>
        <Button className="rounded-none" onClick={onStatsClick}>
          Stats
        </Button>
        <Button className="rounded-none" onClick={onWalletClick}>
          Wallet
        </Button>
        <Button className="rounded-none" onClick={onSupportClick}>
          Support
        </Button>
      </div>
      <div className="text-center p-3 border-2 border-black">
        <span>xxxxxx TGM = xxxxx USDT</span>
      </div>
    </div>
  );
}

export default Header;

import Default from "@/components/layout/default";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate();

  const onInvestOnTrueDappClick = () => {
    navigate("/invest-on-truedapp");
  };

  const onBuyClick = () => {
    navigate("/buy-tgm");
  };

  const onTasksClick = () => {
    navigate("/tasks");
  };

  const onRankingClick = () => {
    navigate("/ranking");
  };

  const onMatesClick = () => {
    navigate("/mates");
  };

  return (
    <Default>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-2">
          <Button onClick={onInvestOnTrueDappClick}>Invest on TrueDapp</Button>
          <Button onClick={onBuyClick}>
            Buy TGM xx% below estimated listing price
          </Button>
        </div>
        <div className="flex flex-row">
          <Button className="flex-1 h-64 rounded-none">Cash Avalanche</Button>
          <Button className="flex-1 h-64 rounded-none">Long Shot</Button>
        </div>
        <Button className="h-24 my-2 rounded-none">Fairytale Program</Button>

        <div className="flex flex-row w-full">
          <Button className="rounded-none w-1/4" onClick={onMatesClick}>
            Mates
          </Button>
          <Button className="rounded-none w-1/4" onClick={onTasksClick}>
            Tasks
          </Button>
          <Button className="rounded-none w-1/4" onClick={onRankingClick}>
            Ranking
          </Button>
          <Button className="rounded-none w-1/4">Reserved</Button>
        </div>
      </div>
    </Default>
  );
}

export default Main;

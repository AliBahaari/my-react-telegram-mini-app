import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { thousandCommaSeparator } from "@/lib/utils";

function Wallet() {
  const walletImage = "https://github.com/shadcn.png";
  const connectedAddress = "UQDHy..jKbUZ";
  const steps = [
    {
      name: "Game launched",
      done: true,
    },
    {
      name: "Growing community",
      done: true,
    },
    {
      name: "Blockchain selection",
      done: true,
    },
    {
      name: "Exchange listing",
      done: false,
    },
  ];

  return (
    <div>
      <Card className="pt-6">
        {steps.map((step, index) => (
          <CardContent>
            <div className="flex flex-row items-center gap-3" key={index}>
              <Checkbox id={`${index}`} disabled checked={step.done} />
              <label
                htmlFor={`${index}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {step.name}
              </label>
            </div>
          </CardContent>
        ))}
      </Card>

      <Card className="my-3">
        <div className="flex flex-row py-4">
          <div className="flex flex-1 justify-center items-center">
            <img src={walletImage} width="250px" height="250px" alt="Wallet" />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-col">
              <div>
                <p>Toncoin</p>
              </div>
              <div>
                <span>{thousandCommaSeparator(43253)}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p>W-Coin</p>
              </div>
              <div>
                <span>{thousandCommaSeparator(43253)}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <p>WAI</p>
              </div>
              <div>
                <span>{thousandCommaSeparator(43253)}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className="my-2 px-4">
        <p>
          Account Verified <span></span>
        </p>
        <p>Connected Address: {connectedAddress}</p>

        <Button className="mt-2 w-1/4">Disconnect</Button>
      </div>

      <div className="flex flex-col w-full absolute bottom-0">
        <Button className="w-full rounded-none">
          Buy TGM xx% below estimated listing price
        </Button>
      </div>
    </div>
  );
}

export default Wallet;

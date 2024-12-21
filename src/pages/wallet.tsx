import Default from "@/components/layout/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { thousandCommaSeparator } from "@/lib/utils";

function Wallet() {
  const walletImage = "https://github.com/shadcn.png";
  const connectedAddress = "UQDHy..jKbUZ";
  const steps = [
    {
      name: "App launched",
      done: true,
    },
    {
      name: "Community growing",
      done: true,
    },
    {
      name: "Exchange listing",
      done: false,
    },
  ];

  const wallets = [
    {
      name: "Toncoin",
      amount: 43522,
    },
    {
      name: "Tapcoin",
      amount: 6243,
    },
    {
      name: "Solana",
      amount: 342564,
    },
  ];

  return (
    <Default>
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

      <Card className="my-8">
        <div className="flex flex-row p-4 justify-between">
          {wallets.map((wallet, index) => (
            <div className="flex flex-col" key={index}>
              <div>
                <p>{wallet.name}:</p>
              </div>
              <div className="ps-2">
                <span>{thousandCommaSeparator(wallet.amount)}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <div className="my-2 px-4">
        <p>Connected Wallet: {connectedAddress}</p>

        <Button className="mt-2 w-1/4">Disconnect</Button>
      </div>

      <div className="flex flex-col w-full">
        <Button className="w-full rounded-none">
          Buy TGM xx% below estimated listing price
        </Button>
      </div>
    </Default>
  );
}

export default Wallet;

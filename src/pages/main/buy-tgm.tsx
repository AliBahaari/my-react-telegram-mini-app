import Default from "@/components/layout/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function BuyTGM() {
  const currencies = [
    {
      name: "TON",
      amount: 720.89,
    },
    {
      name: "USDT",
      amount: 12800.0,
    },
  ];
  return (
    <Default>
      <div>
        <div className="flex justify-center items-center py-4">
          <Button>Connect Wallet</Button>
        </div>
        <div>
          <p>Blah blah blah... Blah blah blah...</p>
        </div>
        <div>
          <Card className="mt-6 pt-4">
            {currencies.map((currency, index) => (
              <CardContent key={index}>
                <div className="flex flex-row items-center justify-between">
                  <p>{currency.name}</p>
                  <p>{currency.amount}</p>
                  <Button>Buy TGM</Button>
                </div>
              </CardContent>
            ))}
          </Card>
        </div>
      </div>
    </Default>
  );
}

export default BuyTGM;

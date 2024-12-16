import Default from "@/components/layout/default";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { thousandCommaSeparator } from "@/lib/utils";

function Stats() {
  return (
    <Default>
      <Card className="mt-6">
        <CardHeader>
          <div className="text-center">
            <CardTitle>Stats</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div>
            <h3>Total Amount</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-3xl">{thousandCommaSeparator(73123)}</p>
            </div>
            <div className="text-center my-4">
              <h1 className="text-2xl">Total Tap Investment</h1>
            </div>
            <div>
              <h4>Total Mates</h4>
              <div className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>{thousandCommaSeparator(73123)}</p>
              </div>
            </div>
            <div>
              <h4>Daily Mates</h4>
              <div className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>{thousandCommaSeparator(73123)}</p>
              </div>
            </div>
            <div>
              <h4>Online Mates</h4>
              <div className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>{thousandCommaSeparator(73123)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Default>
  );
}

export default Stats;

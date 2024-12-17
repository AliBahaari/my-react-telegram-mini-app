import Default from "@/components/layout/default";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Mates() {
  return (
    <Default>
      <div className="flex flex-col gap-2 mt-4">
        <div className="border-2 border-black py-2 text-center">
          Referral Program
        </div>
        <div className="border-2 border-black py-2 text-center">
          Invited Friends
        </div>
        <Card className="mt-6">
          <CardHeader>
            <div className="flex flex-row justify-between">
              <CardTitle>My Mates(1)</CardTitle>
              <CardDescription>Total Amount: 0</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Ehsan Abdollahi</p>
              </div>
              <div>
                <span>0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row w-full absolute bottom-0">
        <Button className="rounded-none w-1/2">Invite a Mate</Button>
        <Button className="rounded-none w-1/2">Share a Link</Button>
      </div>
    </Default>
  );
}

export default Mates;

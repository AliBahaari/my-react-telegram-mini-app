import Default from "@/components/layout/default";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Tasks() {
  const tasks = [
    {
      name: "Play 1",
      reward: 20000,
      imageSrc: "https://github.com/shadcn.png",
    },
    {
      name: "Play 2",
      reward: 20000,
      imageSrc: "https://github.com/shadcn.png",
    },
    {
      name: "Play 3",
      reward: 500000,
      imageSrc: "https://github.com/shadcn.png",
    },
  ];

  return (
    <Default>
      <div className="text-center p-6">
        <h3>Earn W-coin rewards by completing simple tasks</h3>
      </div>

      <Card className="pt-6">
        {tasks.map((task, index) => (
          <CardContent key={index}>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-3">
                <Avatar>
                  <AvatarImage src={task.imageSrc} />
                  <AvatarFallback>{task.name}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <div>
                    <p>{task.name}</p>
                  </div>
                  <div>
                    <p>
                      <span>+</span>
                      {task.reward}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Button>Claim</Button>
              </div>
            </div>
          </CardContent>
        ))}
      </Card>
    </Default>
  );
}

export default Tasks;

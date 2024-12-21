import Default from "@/components/layout/default";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { findAll } from "@/services/tasks";
import { Task } from "@/types/task";
import { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await findAll();
      setTasks(result);
    }
    fetchData();
  }, []);

  return (
    <Default>
      <div className="text-center p-6">
        <h3>Earn Truecoins by completing the tasks below:</h3>
      </div>

      <Card className="pt-6">
        {tasks.map((task, index) => (
          <CardContent key={index}>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-3">
                <Avatar>
                  <AvatarImage src={""} />
                  <AvatarFallback>{task.title}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <div>
                    <p>{task.title}</p>
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

import WebApp from "@twa-dev/sdk";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex flex-col gap-4 m-10">
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Button>Click Me</Button>
      <button onClick={() => WebApp.showAlert(`Hello World!`)}>
        Show Alert
      </button>
    </div>
  );
}

export default App;

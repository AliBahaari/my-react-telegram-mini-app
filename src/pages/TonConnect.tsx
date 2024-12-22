import { Button } from "@/components/ui/button";
import { useCounterContract } from "@/hooks/useCounterContract";
import { useTonConnect } from "@/hooks/useTonConnect";
import { TonConnectButton } from "@tonconnect/ui-react";

function TonConnectPage() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  return (
    <>
      <TonConnectButton />

      <div className="mt-10">
        <div>
          <h3 className="text-4xl">Counter</h3>
          <div>
            <b>Address</b>
            <div>{address}</div>
          </div>
          <div>
            <b>Value</b>
            <div>{value ?? "Loading..."}</div>
          </div>
          <Button
            disabled={!connected}
            className={`Button ${connected ? "Active" : "Disabled"}`}
            onClick={() => {
              sendIncrement();
            }}
          >
            Increment
          </Button>
        </div>
      </div>
    </>
  );
}

export default TonConnectPage;

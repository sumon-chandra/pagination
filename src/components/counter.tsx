import { useCounter } from "@/hooks/useCounter";
import { Button } from "./ui/button";

const Counter = () => {
  const { count, decrement, increment, reset } = useCounter();
  return (
    <div className="bg-white shadow p-5 rounded-sm">
      <h3 className="text-center">Counter</h3>
      <h2 className="mx-4 text-9xl font-black text-center text-gray-600">
        {count}
      </h2>
      <div className="flex justify-center gap-5">
        <Button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded-sm"
        >
          Increment
        </Button>
        <Button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-sm"
        >
          Decrement
        </Button>
        <Button
          className="px-4 py-2 bg-gray-400 text-white rounded-sm"
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;

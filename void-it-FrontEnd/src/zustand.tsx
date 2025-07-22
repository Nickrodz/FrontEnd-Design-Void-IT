import { create } from "zustand";
import { Button } from "./components/ui/button";

type Store = {
  count: number;
  inc: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, inc } = useStore();
  return (
    <>
      <div>{count}</div>
      <div>
        <Button onClick={inc}>one up</Button>
      </div>
    </>
  );
}

export default Counter;

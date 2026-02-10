import { useCallback, useEffect, useRef } from "react";

export function useMemoizedFn<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
) {
  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const memoizedFn = useCallback((...args: Args) => fnRef.current(...args), []);

  return memoizedFn as (...args: Args) => Return;
}

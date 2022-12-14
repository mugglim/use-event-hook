// ref : https://github.com/Volune/use-event-callback/blob/master/src/index.ts

import { useLayoutEffect, useMemo, useRef } from 'react';

type Fn<ARGS extends any[], R> = (...args: ARGS) => R;

const useEvent = <A extends any[], R>(fn: Fn<A, R>): Fn<A, R> => {
  let ref = useRef<Fn<A, R>>(() => {
    throw new Error("Can't called");
  });

  useLayoutEffect(() => {
    ref.current = fn;
  });

  return useMemo(
    () =>
      (...args: A): R => {
        const { current } = ref;
        return current(...args);
      },
    [],
  );
};

export default useEvent;

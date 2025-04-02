import { useState, useEffect } from "react";

export const useDebounce = <T,>(
  term: T,
  delay: number,
  getValue = (input: T) => input
) => {
  const [debounceTerm, setDebounceTerm] = useState(term);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceTerm(getValue(term));
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [term, delay, getValue]);

  return debounceTerm;
};

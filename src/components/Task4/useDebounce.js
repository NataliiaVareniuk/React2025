import { useState, useEffect } from "react";

function useDebounce(value, time) {
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setNewValue(value), time);

    return () => clearTimeout(timer);
  }, [value, time]);

  return newValue;
}

export default useDebounce;

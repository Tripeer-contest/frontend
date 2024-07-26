import { useState } from "react";

const useTest = () => {
  const [test, setTest] = useState(null);
  return { test, setTest };
};

export { useTest };

import { createContext } from "react";

const TestContext = createContext({ items: [], setItems: () => {} });

export { TestContext };

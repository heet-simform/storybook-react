import { createContext, useContext } from "react";
import { theme } from "../theme";

const ThemeContext = createContext<typeof theme>(theme);

type ThemeContextProviderProps = {
  children?: React.ReactNode;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

import React, { createContext, useContext } from "react";

// In 1.O we gave null while initializing context but here we will give default values, so that the web app gets a default data when loaded first time.

export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

//  step 2 is to craete a provider for the above context in 1.O we did it in different file by passing children and wraping it with provider but in this we initiaze it in the same file.

export const ThemeProvider = ThemeContext.Provider;

//  creating a custom hookin which we return useContext() sp that we can directly fetch the data by callng this custom hook.

export default function useTheme() {
  return useContext(ThemeContext);
}

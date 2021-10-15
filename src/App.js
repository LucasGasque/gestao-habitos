import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";
import { useState, useCallback } from "react";
import { ToastContainer } from "react-toastify";
import Providers from "./providers";
import Routes from "./routes";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  return (
    <div>
      <Providers>
        <ThemeProvider theme={themes[currentTheme]}>
          <GlobalStyle />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes />
        </ThemeProvider>
      </Providers>
    </div>
  );
};

export default App;

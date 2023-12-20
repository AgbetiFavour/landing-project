import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import 'antd/dist/antd.css';
// import "antd/dist/antd.min.css";
import "animate.css";
import reportWebVitals from "./reportWebVitals";
import { extendTheme, ChakraProvider, Text } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import { useColorMode, useCurrentUser } from "./helpers";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}


const MainApp = () => {
  

 

  return (
    <ChakraProvider
      // theme={isDarkMode && isLoggedIn ? customDarkTheme : customTheme}
    >
      <ToastContainer theme="dark" />
      <App />
    </ChakraProvider>
  );
};
root.render(
  <React.StrictMode>

      
        <BrowserRouter>
          
            <MainApp />
          
        </BrowserRouter>
      

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

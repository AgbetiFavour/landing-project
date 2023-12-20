import "./App.css";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AuthRoute from "./navigations/AuthRoute";
// import NotFound from "./views/notfound";
import { UnAuthenticatedRoute } from "./navigations/unAuthenticatedRoute";
import React, { Suspense, useState } from "react";
import Spinner from "./components/spinner";
import { isEmpty } from "lodash";
import { Global, css } from "@emotion/react";
import { isMacOs, isIOS } from "react-device-detect";
// import { fetchToken, getFirebaseToken, onMessageListener } from "./firebase";

function App() {


  return (
    <>
      {isMacOs || isIOS ? (
        <Global
          styles={css`
            /* Apply global styles for mac only here */
            * {
              font-family: "Poppin", sans-serif;
            }
          `}
        />
      ) : null}
      <Suspense fallback={<Spinner mt="30%" />}>
        <Routes>
          {UnAuthenticatedRoute()}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </>
  );

  // <AuthRoute />;
}

export default App;

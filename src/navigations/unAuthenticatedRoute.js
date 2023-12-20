import { Routes, Route, Outlet, Link } from "react-router-dom";
import React, { lazy } from "react";
import { Urlroutes } from "../utils/routes";
import Home from "../views/home";;



// const  AltBanktERMS = React.lazy(() =>
//   import("../views/conditions/altbankTerms")
// );
// const  AdminNewPin = React.lazy(() =>
//   import("../views/adminnewpin")
// );
// const  AllCondtions = React.lazy(() =>
//   import("../views/conditions/all")
// );
// const  PrivacyConditions = React.lazy(() =>
//   import("../views/conditions/privacy")
// );
// const  Indemnity = React.lazy(() =>
//   import("../views/conditions/indemnity")
// );
// const  TermsAndConditions = React.lazy(() =>
//   import("../views/conditions/termsAndConditions")
// );
// const SafSignupStart = React.lazy(() =>
//   import("../views/signup/safsignupstart")
// );
// const NewignupStart = React.lazy(() =>
//   import("../views/signup/newsignupstart")
// );
// const SwiftSignupStart = React.lazy(() =>
//   import("../views/signup/SwiftSignUp/SwiftSignupStart")
// );
// const RegisterDevice = React.lazy(() =>
//   import("../views/General/registerdevice")
// );
// const SetSecurityQuest = React.lazy(() =>
//   import("../views/General/setsecurityQuest")
// );

// const ContactUs = React.lazy(() => import("../views/contactUs")     );
// // const Faqs = React.lazy(() => import("../views/faqs"));
// const AboutUs = React.lazy(() => import("../views/aboutUs"));


export const UnAuthenticatedRoute = () => {
  return (
    <>
      <Route path={Urlroutes.home} element={<Home />} />
      {/* <Route path={Urlroutes.contact_us} element={<ContactUs />} /> */}
      {/* <Route path={Urlroutes.faqs} element={<Faqs />} />   */}
      {/* <Route path={Urlroutes.about_us} element={<AboutUs />} /> */}
      {/* <Route
        path={Urlroutes.login_set_security}
        element={<SecureQuestLogin />}
      /> */}
    </>
  );
};

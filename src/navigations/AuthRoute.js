// import { Route, useNavigate } from "react-router-dom";
// import React, { lazy } from "react";
// import Layout from "../views/Layout";
// import Cards from "../views/cards";
// // import Services from "../views/hub";
// import Accounts from "../views/accounts";
// import { subPayBills, Urlroutes } from "../utils/routes";
// import Settings from "../views/settings";
// import Livesupport from "../views/livesupport";
// import Accctstatement from "../views/acctstatement";
// import Transactions from "./../views/Transactions";
// import Notification from "../views/Notification/Notification";
// import SuccessSignup from "../views/General/successsignup";
// import { useAuthService, useCustomeToast, useIdle } from "../helpers";
// import { useDispatch } from "react-redux";
// import { logOut } from "../redux/reducers/usersSlice";
// import SavingsAccountStart from "../views/signup/savingssignup/savingsignupstart";
// import FutureAccountStart from "../views/signup/futuresignup/futuresignupstart";
// import SwiftAddStart from "../views/signup/swiftadd/swiftadd";
// import UploadUtilityBill from "../views/Profile/Components/UploadUtilityBill";
// const AccctstatementDownload = React.lazy(() =>
//   import("../views/acctstatementDown")
// );
// const MinorAccountStart = React.lazy(() =>
//   import("../views/signup/minorsignup/minorsignupstart")
// );
// const VirtualCards = React.lazy(() => import("../views/virtualCards"));
// // import { TransactionTable } from "./../views/accounts/subaccounts/TransactionTable"

// const TransactionTable = React.lazy(() =>
//   import("../views/accounts/subaccounts/TransactionTable")
// );
// const Profile = React.lazy(() => import("../views/Profile"));

// const AccountDetail = React.lazy(() =>
//   import("../views/Profile/Components/AccountDetail")
// );
// const EditPersonalInfo = React.lazy(() =>
//   import("../views/Profile/Components/EditPersonalInfo")
// );
// const EditHouseAddress = React.lazy(() =>
//   import("../views/Profile/Components/EditHouseAddress")
// );
// const EditMaritalStatus = React.lazy(() =>
//   import("../views/Profile/Components/EditMaritalStatus")
// );

// //Pay Bills Start

// const SAFHub = lazy(() => import("../views/hub"));
// const Altinvest = lazy(() => import("../views/hub/subpages/Altinvest"));
// const Altmall = lazy(() => import("../views/hub/subpages/Altmall"));
// const Altdrive = lazy(() => import("../views/hub/subpages/Altdrive"));
// const Activ8 = lazy(() => import("../views/hub/subpages/Activ8"));
// const Altpower = lazy(() => import("../views/hub/subpages/Altpower"));
// const Pilgrimage = lazy(() => import("../views/hub/subpages/Pilgrimage"));

// const EditNextOfkinInfo = lazy(() =>
//   import("../views/Profile/Components/EditNextOfKinInfo")
// );
// const Transfer = lazy(() => import("../views/accounts/subaccounts/Transfer"));
// const SendMoney = lazy(() => import("../views/SendMoney"));
// const EnairaLogin = lazy(() =>
//   import("../views/Transactions/components/EnairaLogin")
// );
// const Enaira = lazy(() => import("../views/Transactions/components/Enaira"));
// const EnairaTransfer = lazy(() =>
//   import("../views/Transactions/components/EnairaTransfer")
// );
// const AccountUpgrade = lazy(() =>
//   import("./../views/accounts/subaccounts/AccountUpgrade")
// );

// //Pay Bills Start
// const PayBills = lazy(() => import("../views/PayBills"));
// const Credits = lazy(() => import("../views/Credit"));
// const CreditsDetails = lazy(() => import("../views/Credit/CreditDetails"));
// const MobileTopUp = lazy(() =>
//   import("../views/PayBills/components/pages/MobileTopUp")
// );
// const CableTV = lazy(() =>
//   import("../views/PayBills/components/pages/CableTV")
// );
// const SportAndGame = lazy(() =>
//   import("../views/PayBills/components/pages/SportAndGame")
// );
// const Utilities = lazy(() =>
//   import("../views/PayBills/components/pages/Utilities")
// );
// const Travels = lazy(() =>
//   import("../views/PayBills/components/pages/Travels")
// );

// const Events = lazy(() => import("../views/PayBills/components/pages/Events"));
// const InternetServices = lazy(() =>
//   import("../views/PayBills/components/pages/InternetServices")
// );
// const GovenmentPayment = lazy(() =>
//   import("../views/PayBills/components/pages/GovenmentPayment")
// );
// //Pay Bills End

// const AirtimeData = lazy(() => import("../views/airtime"));
// const Dashboard = lazy(() => import("../views/dashboard"));

// export default function AuthRoute() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { handleLogIn, handleLogout } = useAuthService();
//   const { notify } = useCustomeToast();

//   //inactivity logout
//   const handleLogouts = () => {
//     notify("Session timed out,");
//     setTimeout(() => {
//       handleLogout();
//     }, 3000);

//     // dispatch(logOut());
//     // will touch this later
//     // navigate("/home");
//   };

//   const { isIdle } = useIdle({ onIdle: handleLogouts, idleTime: 1.8 });
//   return (
//     <>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Dashboard />} />
//         <Route path={Urlroutes.cards} element={<Cards />} />
//         <Route path={Urlroutes.virtualCards} element={<VirtualCards />} />
//         <Route
//           path={Urlroutes.account_statement}
//           element={<Accctstatement />}
//         />
//         <Route path={Urlroutes.profile} element={<Profile />} />
//         <Route
//           path={Urlroutes.EditNextOfkinInfo}
//           element={<EditNextOfkinInfo />}
//         />
//         <Route
//           path={Urlroutes.EditMaritalStatus}
//           element={<EditMaritalStatus />}
//         />
//         <Route
//           path={Urlroutes.EditPersonalInfo}
//           element={<EditPersonalInfo />}
//         />

//         <Route
//           path={Urlroutes.EditHouseAddress}
//           element={<UploadUtilityBill />}
//         />
//         <Route path={Urlroutes.profileDetail} element={<AccountDetail />} />
//         {/* <Route path={Urlroutes.hub} element={<SAFHub />} /> */}
//         {/* {HubRoutes()} */}
//         {Settings()}
//         {Livesupport()}
//         {Transactions()}
//         <Route
//           path={Urlroutes.TransactionHistory}
//           element={<TransactionTable />}
//         />

//         {/* Hub Routes start */}
//         <Route path={Urlroutes.hub} element={<SAFHub />} />
//         <Route path={Urlroutes.altinvest} element={<Altinvest />} />
//         <Route path={Urlroutes.altmall} element={<Altmall />} />
//         <Route path={Urlroutes.altdrive} element={<Altdrive />} />
//         <Route path={Urlroutes.activ8} element={<Activ8 />} />
//         <Route path={Urlroutes.altpower} element={<Altpower />} />
//         <Route path={Urlroutes.pilgrimage} element={<Pilgrimage />} />
//         {/* Hub Routes end */}
//         <Route path={Urlroutes.E_Naira} element={<EnairaLogin />} />
//         <Route path={Urlroutes.E_Naira_Dashboard} element={<Enaira />} />
//         <Route path={Urlroutes.E_Naira_Transfer} element={<EnairaTransfer />} />
//         <Route path={Urlroutes.airtime_data} element={<AirtimeData />} />
//         <Route path={Urlroutes.AccountUpgrade} element={<AccountUpgrade />} />
//         <Route path={Urlroutes.AccountTransfer} element={<Transfer />} />
//         <Route path={Urlroutes.SendMoney} element={<SendMoney />} />
//         <Route path={Urlroutes.notification} element={<Notification />} />
//         {/* Pay Bills Routes start */}
//         <Route path={Urlroutes.PayBills} element={<PayBills />} />
//         <Route path={Urlroutes.Credits} element={<Credits />} />
//         <Route path={Urlroutes.Credits+"/"+Urlroutes.CreditsDetails} element={<CreditsDetails />} />
//         <Route path={Urlroutes.topup} element={<MobileTopUp />} />
//         <Route path={Urlroutes.cableTV} element={<CableTV />} />
//         <Route path={Urlroutes.sportsAndGames} element={<SportAndGame />} />
//         <Route
//           path={Urlroutes.internetServices}
//           element={<InternetServices />}
//         />
//         <Route path={Urlroutes.utilities} element={<Utilities />} />
//         <Route path={Urlroutes.travelAndHotel} element={<Travels />} />
//         <Route path={Urlroutes.eventTickets} element={<Events />} />
//         <Route
//           path={Urlroutes.governmentPayment}
//           element={<GovenmentPayment />}
//         />
//         {/* Pay Bills Routes end */}
//         {Accounts()}
//         <Route
//           path={Urlroutes.account_statement_download}
//           element={<AccctstatementDownload />}
//         />
//       </Route>
//       <Route path={Urlroutes.Minorsignup} element={<MinorAccountStart />} />
//       <Route path={Urlroutes.savingsignup} element={<SavingsAccountStart />} />
//       <Route path={Urlroutes.futuresignup} element={<FutureAccountStart />} />
//       <Route path={Urlroutes.SwiftAddStart} element={<SwiftAddStart />} />
//       <Route path={Urlroutes.successSignup} element={<SuccessSignup />} />
//     </>
//   );
// }

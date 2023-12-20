import { Urlroutes } from "./routes";
import settingsImg from "../assets/settings.png";
import accountsImg from "../assets/accounts.png";
import cardImg from "../assets/cards.png";
import transImg from "../assets/transact.png";
import hubImg from "../assets/hub.png";
import { Image } from "@chakra-ui/react";

export const mainmenu = [
  {
    name: "Cards",
    icon: <Image maxW={4} src={cardImg} alt="" />,
    link: Urlroutes.cards,
  },

  {
    name: "Transaction",
    icon: <Image maxW={4} src={transImg} alt="" />,
    link: Urlroutes.Transactions,
  },
  {
    name: "Hub",
    icon: <Image maxW={4} src={hubImg} alt="" />,
    link: Urlroutes.hub,
  },
  {
    name: "Account",
    icon: <Image maxW={4} src={accountsImg} alt="" />,
    link: Urlroutes.account,
  },
  {
    name: "Settings",
    icon: <Image maxW={4} src={settingsImg} alt="" />,
    link: Urlroutes.settings,
  },
];

export const sideSubnmenu = [
  {
    name: "Live Support",
    icon: <Image maxW={4} src={cardImg} alt="" />,
    link: Urlroutes.live_support,
  },
];

export const logoutMenu = {
  name: "Log out",
  icon: <Image maxW={4} src={transImg} alt="" />,
  link: "",
};
export const loginMenu = {
  name: "Log in",
  icon: <Image maxW={4} src={transImg} alt="" />,
  link: Urlroutes.Login
};

import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import {
  Text,
  Box,
  Center,
  CloseButton,
  HStack,
  Image,
  ListItem,
  UnorderedList,
  VStack,
  Divider,
} from "@chakra-ui/react";
import logo from "../assets/logoWhite.png";
import { MdCancel } from "react-icons/md";
import { CopyIcon } from "@chakra-ui/icons";
import { CgHome } from "react-icons/cg";
import MenuItem from "../components/menuitem";
import { CloseIcon } from "@chakra-ui/icons";
import { useCopyToClip } from "../utils/userservice";
import { useLocation, useNavigate } from "react-router-dom";
import { Urlroutes } from "../utils/routes";
import {
  loginMenu,
  logoutMenu,
  mainmenu,
  sideSubnmenu,
} from "../utils/mainmenu";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/reducers/usersSlice";
import { useAuthService } from "../helpers";

// import logo from "../../../assets/logo.svg";
// import { PrivateUrls } from "../../../utils/urls";

export const MobileSideBar = ({ open, showDrawer, onClose, btnRef }) => {
  const [] = useState(false);
  const location = useLocation();
  const { handleLogIn, handleLogout } = useAuthService();
  const [refNumber] = React.useState(" RF35886");
  const dispatch = useDispatch();
  const currentUser = useSelector(({ user }) => user);
  const { copyToClipBoard } = useCopyToClip();
  const [placement, setPlacement] = useState("left");
  const locationArr = location?.pathname?.split("/") || [];
  const navigate = useNavigate();
  const Checkcurrent = (link) => {
    const locationArr = location?.pathname?.split("/") || [];

    if (link) {
      if (link == "/" && location?.pathname == "/") {
        return true;
      }
      const currentRoute = link?.split("/")?.[1];
      if (currentRoute && locationArr.includes(currentRoute)) return true;
    } else {
      return false;
    }
  };

  return (
    <Drawer
      placement={placement}
      width={250}
      onClose={onClose}
      open={open}
      extra={
        <Box flex={1} bg="red">
          {/* <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            OK
          </Button> */}
        </Box>
      }
    >
      <Box>
        <CloseIcon onClick={onClose} color="#ffffff" />
      </Box>
      <Box pt={["30px"]} w={["100%"]} maxh={["90%"]} bg="neutral.700">
        <Center mb={["43px", "80px"]}>
          <a href="/">
            <Image w={["100px", "146px"]} src={logo} alt="" />
          </a>
        </Center>
        <VStack alignItems={["center", "flex-start"]} w="100%">
          <UnorderedList
            // pl={["0", "45px"]}
            p={["0px"]}
            m={["0px"]}
            w="100%"
            listStyleType="none"
          >
            <ListItem
              pl={["8%", "25%"]}
              lineHeight={"40px"}
              mb={["5px", "7px"]}
            >
              <HStack>
                <Text lineHeight={"130%"} fontSize={["12px", "13px"]} color="neutral.1">
                Referral code:
                <br /> {refNumber}
                </Text>
                <CopyIcon
                  onClick={() => copyToClipBoard(refNumber)}
                  cursor={"pointer"}
                  color="neutral.1"
                />
              </HStack>
            </ListItem>
            <ListItem
              onClick={onClose}
              pl={["8%", "15%"]}
              lineHeight={"40px"}
              borderLeftStyle="solid"
              borderLeftWidth={["3px", "7px"]}
              h="40px"
              borderColor={
                Checkcurrent(Urlroutes.dashboard)
                  ? "primary.100"
                  : "neutral.700"
              }
              mb={["4px", "22px"]}
            >
              <MenuItem
                link={Urlroutes.dashboard}
                isSctive={Checkcurrent(Urlroutes.dashboard)}
                icon={
                  <CgHome
                    size={"15"}
                    color={
                      Checkcurrent(Urlroutes.dashboard) ? "#B89645" : "#ffffff"
                    }
                  />
                }
                fontSize={["14px", "18px"]}
                title="Dashboard"
              />
            </ListItem>
            {mainmenu.map((item, index) => (
              <ListItem
                key={index}
                onClick={onClose}
                pl={["8%", "15%"]}
                lineHeight={"40px"}
                h="40px"
                borderLeftStyle="solid"
                borderLeftWidth={["3px", "7px"]}
                borderColor={
                  Checkcurrent(item.link) ? "primary.100" : "neutral.700"
                }
                mb={["3px", "16px"]}
              >
                <MenuItem
                  link={item.link}
                  // icon={<CgHome color={false ? "#B89645" : "#ffffff"} />}
                  icon={item.icon}
                  isSctive={Checkcurrent(item.link)}
                  fontSize={["13px", "16px"]}
                  title={item.name}
                />
              </ListItem>
            ))}
            {sideSubnmenu.map((item) => (
              <ListItem
                onClick={onClose}
                pl={["8%", "15%"]}
                lineHeight={"40px"}
                h="40px"
                borderLeftStyle="solid"
                borderLeftWidth={["3px", "7px"]}
                borderColor={
                  Checkcurrent(item.link) ? "primary.100" : "neutral.700"
                }
                mb={["3px", "16px"]}
              >
                <MenuItem
                  link={item.link}
                  // icon={<CgHome color={false ? "#B89645" : "#ffffff"} />}
                  icon={item.icon}
                  isSctive={Checkcurrent(item.link)}
                  fontSize={["13px", "16px"]}
                  title={item.name}
                />
              </ListItem>
            ))}
            {currentUser?.isLoggedIn ? (
              <ListItem
                pl={["8%", "15%"]}
                lineHeight={"40px"}
                h="40px"
                onClick={() => {
                  handleLogout();
                  onClose();
                }}
                borderLeftStyle="solid"
                borderLeftWidth={["3px", "7px"]}
                mb={["3px", "16px"]}
                borderColor={"neutral.700"}
              >
                <MenuItem
                  link={""}
                  // icon={<CgHome color={false ? "#B89645" : "#ffffff"} />}
                  icon={logoutMenu.icon}
                  fontSize={["13px", "16px"]}
                  title={logoutMenu.name}
                />
              </ListItem>
            ) : (
              <ListItem
                onClick={onClose}
                pl={["8%", "15%"]}
                lineHeight={"40px"}
                h="40px"
                borderLeftStyle="solid"
                borderLeftWidth={["3px", "7px"]}
                mb={["3px", "16px"]}
                borderColor={"neutral.700"}
              >
                <MenuItem
                  link={loginMenu.link}
                  // icon={<CgHome color={false ? "#B89645" : "#ffffff"} />}
                  icon={loginMenu.icon}
                  fontSize={["13px", "16px"]}
                  title={loginMenu.name}
                />
              </ListItem>
            )}
          </UnorderedList>
        </VStack>
      </Box>
    </Drawer>
  );
};

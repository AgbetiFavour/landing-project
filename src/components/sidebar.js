import {
  Box,
  Center,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react"
import React from "react"
import logo from "../assets/logoWhite.png"
import { CgHome } from "react-icons/cg"
import { useNavigate } from "react-router-dom"
import {
  mainmenu,
  sideSubnmenu,
  login,
  logoutMenu,
  loginMenu,
} from "../utils/mainmenu"
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react"
import MenuItem from "../components/menuitem"
import { Urlroutes } from "../utils/routes"
import { useLocation } from "react-router"
import { CopyIcon } from "@chakra-ui/icons"
import { useCopyToClip } from "../utils/userservice"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../redux/reducers/usersSlice"
import { useAuthService } from "../helpers"

const Sidebar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { handleLogIn, handleLogout } = useAuthService()
  const [refNumber] = React.useState("RF35886")
  const currentUser = useSelector(({ user }) => user)
  const { copyToClipBoard } = useCopyToClip()
  const user = useSelector((state) => state?.user?.customerProfile)
  const navigate = useNavigate()
  const Checkcurrent = (link) => {
    const locationArr = location?.pathname?.split("/") || []

    if (link) {
      if (link === "/" && location?.pathname === "/") {
        return true
      }
      const currentRoute = link?.split("/")?.[1]
      if (currentRoute && locationArr.includes(currentRoute)) return true
    } else {
      return false
    }
  }

  // console.log('User', user);
  // console.log('current User', currentUser);

  return (
    <Stack
      display={["none", "block"]}
      direction={["column"]}
      alignItems={["center"]}
      mt="45px"
      pt={["20px", "50px"]}
      borderRadius="0px 20px 20px 0px"
      bg="neutral.700"
      h={["926px"]}
      className="sideBar"
    >
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
          <ListItem pl={["0", "20%"]} lineHeight={"40px"} mb={["5px", "7px"]}>
            <HStack>
              <Text lineHeight={"130%"} fontSize={["12px", "13px"]} color="neutral.1">
                Referral code:
                <br /> {user?.referralCode}
              </Text>
              <CopyIcon
                onClick={() => copyToClipBoard(user?.referralCode)}
                cursor={"pointer"}
                color="neutral.1"
              />
            </HStack>
          </ListItem>
          <ListItem
            pl={["0", "15%"]}
            lineHeight={"40px"}
            borderLeftStyle="solid"
            borderLeftWidth={["3px", "7px"]}
            h="40px"
            borderColor={
              Checkcurrent(Urlroutes.dashboard) ? "primary.100" : "neutral.700"
            }
            mb={["18px", "22px"]}
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
              className="sideBarList"
              pl={["0", "15%"]}
              lineHeight={"40px"}
              h="40px"
              borderLeftStyle="solid"
              borderLeftWidth={["3px", "7px"]}
              borderColor={
                Checkcurrent(item.link) ? "primary.100" : "neutral.700"
              }
              mb={["15px", "16px"]}
              key={index}
            >
              <MenuItem
                className="sideBarListContent"
                link={item.link}
                // icon={<CgHome color={false ? "#B89645" : "#ffffff"} />}
                icon={item.icon}
                isSctive={Checkcurrent(item.link)}
                fontSize={["13px", "16px"]}
                title={item.name}
              />
            </ListItem>
          ))}
          <ListItem mb={["26px"]} mt={["45px"]} pl={["10%"]} pr={["15%"]}>
            <Divider height={"1px"} bg="neutral.2" />
          </ListItem>
          {sideSubnmenu.map((item) => (
            <ListItem
              pl={["0", "15%"]}
              lineHeight={"40px"}
              h="40px"
              borderLeftStyle="solid"
              borderLeftWidth={["3px", "7px"]}
              borderColor={
                Checkcurrent(item.link) ? "primary.100" : "neutral.700"
              }
              mb={["15px", "16px"]}
            >
              <MenuItem
                className="sideBarListContent"
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
              pl={["0", "15%"]}
              lineHeight={"40px"}
              h="40px"
              onClick={handleLogout}
              borderLeftStyle="solid"
              borderLeftWidth={["3px", "7px"]}
              mb={["15px", "16px"]}
              borderColor={"neutral.700"}
            >
              <MenuItem
                className="sideBarListContent"
                link={""}
                // icon={<CgHome color={false ? "#B89645" : "#ffffff"} />}
                icon={logoutMenu.icon}
                fontSize={["13px", "16px"]}
                title={logoutMenu.name}
              />
            </ListItem>
          ) : (
            <ListItem
              pl={["0", "15%"]}
              lineHeight={"40px"}
              h="40px"
              borderLeftStyle="solid"
              borderLeftWidth={["3px", "7px"]}
              mb={["15px", "16px"]}
              borderColor={"neutral.700"}
            >
              <MenuItem
                className="sideBarListContent"
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
    </Stack>
  )
}

export default Sidebar

import {
  Box,
  HStack,
  Input,
  Text,
  Button,
  Center,
  Image,
  PseudoBox,
  Avatar,
} from "@chakra-ui/react"
import { useNavigate, useLocation, Link } from "react-router-dom"
// import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { BiSearch, BiPlus } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"
import logo from "../assets/logo.png"
import { BellIcon, HamburgerIcon } from "@chakra-ui/icons"
import Bell from "../assets/NotificationIcons/bell.svg"
import BellNotification from "../assets/NotificationIcons/bell2.svg"
import { messages } from "../views/Notification/messages"
import { MobileSideBar } from "./MobileSideBar"
import { subAccount, Urlroutes } from "../utils/routes"
import { useEffect, useRef } from "react"
import { useState } from "react"
import dayjs from "dayjs"
import { useDispatch, useSelector } from "react-redux"
import { greetings, useColorMode } from "../helpers"
import { useClientQuery } from "../services/api"
import { endpoints } from "../services/servicelinks"
import { storeData } from "../redux/reducers/notificationsSlice"

// import { Item } from 'rc-menu';

const Navbar = () => {
  const hamburgerBtnRef = useRef()
  const { isDarkMode } = useColorMode()
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }

  const [urlMatch, setURLMatch] = useState(false)
  const user = useSelector((state) => state?.user?.customerProfile)

  const location = useLocation()
  const URLpath = location?.pathname
  const URLmatch = () => {
    if (Urlroutes.notification === URLpath) {
      setURLMatch(true)
    }
  }

  // console.log('URL', location.pathname);
  // console.log('Route', Urlroutes.notification);
  // console.log('URLMatch', URLmatch);

  //This changes the notification icon if there are unread messages and allows to navigation page
  const notifications = useSelector(({ notifications }) => notifications?.data)
  // const unreadMessages = messages.some((item) => item.read === false);

  const onClose = () => {
    setOpen(false)
  }

  const navigate = useNavigate()

  const {
    data,
    isError,
    isLoading,
    // refetch: transactRefetch,
  } = useClientQuery(endpoints.notifications)
  const dispatch = useDispatch()

  useEffect(() => {
    // if (data) {
    //   console.log(data);
    // }

    if (data?.data) {
      dispatch(storeData(data.data))
      // console.log(data.data);
    }
  }, [dispatch, data])

  const unreadMessages = notifications.length > 0
  const handleBellClick = () => {
    // if (unreadMessages) {
    //   navigate(Urlroutes.notification);
    // }
    navigate(Urlroutes.notification)
  }
  return (
    <>
      <HStack
        position={["fixed", "static"]}
        zIndex={3}
        bg={["brand.400"]}
        justifyContent="flex-start"
        pr={["10px", "15px"]}
        pl={["1px", "15px"]}
        py={["5px", "10px"]}
        borderRadius={["5px", "10px"]}
        h={["60px", "63px"]}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        w={["100%", "98%"]}
      >
        <Button
          m={0}
          bg="brand.400"
          ref={hamburgerBtnRef}
          onClick={showDrawer}
          p="6px"
          display={["block", "none", "none"]}
        >
          <HamburgerIcon fontSize={30} />
        </Button>
        <Box transform={"translateY(5px)"} display={["block", "none"]}>
          <a href="/">
            <Image w={["60%"]} src={logo} alt="" />
          </a>
        </Box>
        <HStack
          display={["none", "flex"]}
          w={["90%", "403px"]}
          px={["8px", "18px"]}
          borderRadius={["3px", "8px"]}
          bg="neutral.50"
        >
          {/* <BiSearch display={""}
            color={!isDarkMode ? "neutral.100" : "#828282"}
            size={[20]}
          /> */}
          <Input
            display={"none"}
            border={"none !important"}
            _focus={{
              boxShadow: "none !important",
              outline: "none !important",
              borderColor: "neutral.50",
            }}
          />
        </HStack>

        <Box display="flex" justifyContent={["flex-end"]} flex={1}>
          <HStack alignItems={"center"} display={["none", "flex"]}>
            <Text
              whiteSpace="nowrap"
              pr={["5px", "19px"]}
              color={!isDarkMode ? "neutral.200" : "#828282"}
              fontWeight={["500"]}
              fontFamily="Montserrat"
              fontSize={["12px", "14px"]}
            >
              {/* Monday, 6 November 2021 */}
              {dayjs().format("dddd, MMMM D, YYYY")}
            </Text>
          </HStack>
          <Box pr={["4px", "20px"]} pl={["2px", "33px"]}>
            <Link to={Urlroutes.account + "/" + subAccount.open_account}>
              <Button
                fontSize={["10px", "14px"]}
                fontFamily="Montserrat"
                color="neutral.100"
                bg="neutral.50"
              >
                <BiPlus
                  color={!isDarkMode ? "neutral.100" : "#828282"}
                  size={[20]}
                />
                <Text
                  color={!isDarkMode ? "neutral.100" : "neutral.1"}
                  display={["none", "flex"]}
                >
                  Open a new account
                </Text>
              </Button>
            </Link>
          </Box>
          <Box as="button">
            <Center px={["3px", "33px"]}>
              {/* <BellIcon
                color='neutral.300'
                fontSize={['20px', '30px']}
                onClick={() => {
                  navigate(Urlroutes.notification);
                }}
              /> */}
              <Image
                src={unreadMessages ? BellNotification : Bell}
                onClick={handleBellClick}
              />
            </Center>
          </Box>
          <HStack onClick={() => navigate(Urlroutes.profile)} cursor="pointer">
            <Avatar
              name={`${user.firstName || ''} ${user.lastName || ''}`}
              src={
                user?.imageUrl 
              }
              alignSelf="center"
            />
            <Box display={["none", "block"]}>
              <Text
                fontFamily="Montserrat"
                lineHeight={["100%"]}
                fontSize={["12px", "14px"]}
              >
                {user?.firstName}
              </Text>
              <Text
                whiteSpace="nowrap"
                fontStyle="Montserrat"
                fontSize={["9px", "14px"]}
              >
                {greetings()}👋
              </Text>
            </Box>
          </HStack>
        </Box>
      </HStack>
      <MobileSideBar {...{ open, setOpen, showDrawer, onClose }} />
    </>
  )
}

export default Navbar

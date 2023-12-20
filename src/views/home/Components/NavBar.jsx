import { useEffect, useState } from "react"
import {
	Box,
	Flex,
	Text,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useDisclosure,
	Image,
	useBreakpointValue,
	TabPanels,
	TabPanel,
	TabList,
	Tab,
	Tabs,
} from "@chakra-ui/react"
import { NavLink, useNavigate, Link } from "react-router-dom"
import { FiChevronDown } from "react-icons/fi"
import { MdClear, MdMenu } from "react-icons/md"
import { BsShieldLock, BsShieldCheck } from "react-icons/bs"
// import menuIcon from "./Group 175.png"
import logo from "../../../assets/logo.png"
import "./nav.css"
import { Business } from "./Business"

const NavBar = ({ activeTab, setActiveTab }) => {
	//   const history = useHistory()
	// const [activeTab, setActiveTab] = useState("For Individuals")
	const links = [
		// { name: "Features", route: "/#features" },
		{ name: "About Us", route: "/" },
		{ name: "Contact ", route: "/contact-us" },
		// { name: "FAQs", route: "/faqs" },
	]

	const menuOpen = useBreakpointValue([false, false, false, true])
	const [showMenu, setShowMenu] = useState(null)
	useEffect(() => {
		setShowMenu(menuOpen)
	}, [menuOpen])

	const navigate = useNavigate()

	const handleLinkClick = (tab) => {
		setActiveTab(tab)
		// You can add more logic here if needed
	}

	return (
		<Flex
			id="top"
			px={[5, "150px"]}
			// alignItems={[null, "space-between", "space-between", "center"]}
			// justifyContent={["space-between"]}
			direction={["column", "column", "column", "row"]}
			py={4}>
			<Flex
				alignItems="center"
				flexGrow={1}
				// justifyContent="space-between"
			>
				<Link to={"/"}>
					<Text
						as="h1"
						fontSize="1.5rem"
						color="gray"
						fontFamily="Montserrat"
						cursor="pointer">
						<Image src={logo} alt="Logo" w={["100px", "143px"]} />
					</Text>
				</Link>
				<Box
					display={["block", "block", "block", "none"]}
					onClick={() => setShowMenu(!showMenu)}>
					{showMenu ? (
						<MdClear color="#C9CCD1" size="1.5rem" />
					) : (
						<MdMenu color="#C9CCD1" size="1.5rem" />
					)}
				</Box>

				{/* <Tabs
				px={[0, "24px"]}
				variant="unstyled"
				>
				<TabList>
					<Tab
						color="neutral.10 "
						_focus={{ boxShadow: "none" }}
						// w={["150px", "600px"]}
						fontSize={["14px", "16px"]}
						_selected={{
							borderBottom: "6px solid #25A75C",
							borderBottomRadius: "3px",

							color: "#fff",
						}}
						fontFamily="Montserrat">
						For Individuals
					</Tab>

					<Tab
						color="neutral.10"
						_focus={{ boxShadow: "none" }}
						// w={["150px", "600px"]}
						fontSize={["14px", "16px"]}
						_selected={{
							borderBottom: "6px solid #25A75C",
							borderBottomRadius: "3px",

							color: "#fff",
						}}
						fontFamily="Montserrat">
						For Businesses
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Individuals />
					</TabPanel>
					<TabPanel>
						<Business />
					</TabPanel>
				</TabPanels>
			</Tabs> */}

				<a
					activeClassName="activeLink"
					style={{
						color: "#fff",
						fontFamily: "Montserrat",
						fontSize: "12px",
						fontWeight: "400",
						borderBottom:
							activeTab === "For Individuals" && "6px solid #25A75C",
					}}
					className="nav-link"
					onClick={() => handleLinkClick("For Individuals")}
					href="#">
					For Individuals
				</a>
				<a
					activeClassName="activeLink"
					style={{
						color: "#fff",
						fontFamily: "Montserrat",
						fontSize: "12px",
						fontWeight: "400",
						borderBottom: activeTab === "For Businesses" && "6px solid #25A75C",
					}}
					className="nav-link"
					onClick={() => handleLinkClick("For Businesses")}
					href="#">
					For Businesses
				</a>
			</Flex>
			<Flex
				color="#fff"
				direction={["column", "column", "column", "row"]}
				alignItems={["center ", "center"]}
				display={showMenu ? "flex" : "none"}>
				{/* <a
					activeClassName="activeLink"
					style={{
						color: "#fff",
						fontFamily: "Montserrat",
						fontSize: "12px",
						fontWeight: "400",
						// marginLeft: "60px",
					}}
					className="nav-link"
					href="/#features">
					Features
				</a> */}
				{links.map((link) => {
					return (
						<Text
							activeClassName="activeLink"
							style={{
								color: "#fff",
								fontFamily: "Montserrat",
								fontSize: "12px",
								fontWeight: "400",
							}}
							marginLeft={["0", "0", "0", "40px"]}
							className="nav-link cursor-pointer"
							onClick={() => navigate(`${link.route}`)}
							cursor="pointer"
							_hover={{ color: "primary.100 !important" }}>
							{link.name}
						</Text>
					)
				})}
				<a
					activeClassName="activeLink"
					style={{
						color: "#fff",
						fontFamily: "Montserrat",
						fontSize: "12px",
						fontWeight: "400",
						// marginLeft: "60px",
					}}
					className="nav-link"
					href="/#features">
					|
				</a>
				<a
					activeClassName="activeLink"
					style={{
						color: "#fff",
						fontFamily: "Montserrat",
						fontSize: "12px",
						fontWeight: "400",
						// marginLeft: "60px",
					}}
					className="nav-link"
					href="/#features">
					Login
				</a>
				<Button
					className="bookDemo"
					bg="linear-gradient(to right, #5cb23a, #408002)"
					_hover={{ bg: "linear-gradient(to right, #5cb23a, #408002)" }}
					_focus={{ border: "none" }}
					ml={[null, "50px"]}
					w={["100px", "100px", "211px", "211px"]}
					color="white"
					borderRadius="5px"
					fontFamily="Montserrat"
					fontSize={["10px", "10px", "12px", "12px"]}
					fontWeight="400"
					mt={["1rem", "1rem", "1rem", 0]}
					href="#book-a-demo"
					onClick={() => navigate("/signup_Options")}>
					Create free account
				</Button>
			</Flex>
		</Flex>
	)
}

export default NavBar

import React from "react"
import {
	Flex,
	Box,
	VStack,
	Text,
	Heading,
	ListItem,
	UnorderedList,
	Stack,
	Image,
	HStack,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import logo from "../../../assets/logo.png"
import Instagram from "../../../assets/instagram-ic.svg"

import Twitter from "../../../assets/twitter-ic.svg"
import Facebook from "../../../assets/facebook-ic.svg"
import { AiOutlineMail } from "react-icons/ai"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsTelephone } from "react-icons/bs"
import { Urlroutes } from "../../../utils/routes"

const Footer = () => {
	return (
		<Box px={[5, "150px"]} pt={["130px", "142px"]} background="#fff">
			<Flex
				gridGap={[(0, 10)]}
				justify="space-between"
				align="start"
				flexFlow="row wrap">
				<Flex direction="column" color="#979797FFF">
					<Link to="/">
						<Image src={logo} alt="Logo" w={["100px", "143px"]} />
					</Link>
					<Stack direction={["row"]} mt={["25px", "32px"]} spacing="12px">
						<Image
							src={Instagram}
							alt="instagram"
							width={["24px"]}
							onClick={() =>
								(window.location = "https://instagram.com/altfinanceng")
							}
							cursor="pointer"
						/>
						<Image
							src={Facebook}
							alt="linkedin"
							width={["24px"]}
							onClick={() =>
								(window.location =
									"https://ng.linkedin.com/company/sterlingalternativefinance")
							}
							cursor="pointer"
						/>
						<Image
							src={Twitter}
							alt="twitter"
							width={["24px"]}
							onClick={() =>
								(window.location = "https://twitter.com/AltFinanceNg")
							}
							cursor="pointer"
						/>
						{/* <Image src={YouTube} alt="youtube" width={["30px"]} /> */}
					</Stack>

					<Text
						fontSize={["12px", "16px"]}
						mt={["40px", "49px"]}
						fontFamily="Montserrat"
						mb={20}>
						{/* &copy; */}
						2015-2022 Taxaide Technologies Limited. All rights reserved
					</Text>
				</Flex>
				{/* <Flex flex={[1, 0.8]} justify="space-between" color="#979797" bg='yellow' > */}
				{/* <VStack align="start">
					<Heading
						color="#979797"
						fontSize={["12px", "16px"]}
						fontWeight="600"
						fontFamily="Montserrat">
						Information Links
					</Heading>
					<UnorderedList listStyleType="none">
						<ListItem mt={["20px", "33px"]} fontSize={["12px", "16px"]}>
							<a
								href="https://play.google.com/store/apps/details?id=ng.sterling.altbankv2"
								style={{ color: "#979797", fontFamily: "Montserrat" }}
								target="_blank"
								rel="noreferrer">
								Download
							</a>
						</ListItem>
						<ListItem mt={["22px", "25px"]} fontSize={["12px", "16px"]}>
							<Link
								to="/contact-us"
								href="#top"
								style={{ color: "#979797", fontFamily: "Montserrat" }}>
								Contact Us
							</Link>
						</ListItem>
						<ListItem mt="25px" fontSize={["12px", "16px"]}>
							<Link
								to="/faqs"
								href="#top"
								style={{ color: "#979797", fontFamily: "Montserrat" }}>
								FAQ
							</Link>
						</ListItem>
						<ListItem mt="25px" fontSize={["12px", "16px"]}>
							<a
								// to="#features"
								href="/#features"
								style={{ color: "#979797", fontFamily: "Montserrat" }}>
								Features
							</a>
						</ListItem>
					</UnorderedList>
				</VStack> */}
				<VStack align="start">
					<Heading
						color="#000"
						fontSize={["12px", "16px"]}
						fontWeight="600"
						fontFamily="Montserrat">
						About Us
					</Heading>
					<UnorderedList listStyleType="none">
						<ListItem mt={["12px", "14px"]} fontSize={["12px", "16px"]}>
							<Link
								to={Urlroutes.Login}
								href="#top"
								style={{ color: "#979797", fontFamily: "Montserrat" }}>
								About
							</Link>
						</ListItem>
						<ListItem mt={["10px", "14px"]} fontSize={["12px", "16px"]}>
							<Link
								to={Urlroutes.Login}
								href="#top"
								style={{ color: "#979797", fontFamily: "Montserrat" }}>
								Legal & privacy
							</Link>
						</ListItem>
					</UnorderedList>
				</VStack>
				<VStack align="start">
					<Heading
						color="#000"
						fontSize={["12px", "16px"]}
						fontWeight="600"
						fontFamily="Montserrat">
						Products
					</Heading>
					<UnorderedList listStyleType="none">
						<ListItem mt="14px" fontSize={["12px", "16px"]}>
							<Text color="#979797">TBook®</Text>
						</ListItem>
						<ListItem mt="14px" fontSize={["12px", "16px"]}>
							<Text color="#979797">TaxiTWithhold®</Text>
						</ListItem>
						<ListItem mt="14px" fontSize={["12px", "16px"]}>
							<Text color="#979797">TaxiTPayroll®</Text>
						</ListItem>
					</UnorderedList>
				</VStack>
			</Flex>
		</Box>
	)
}

export default Footer

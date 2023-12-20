import { Box, Center, Circle, Flex, Image, Stack, Text } from "@chakra-ui/react"
import React from "react"
import cardUi from "../../../assets/leftPanel.png"
import { CustomButton } from "../../../components/CustomButton"

import appStore from "../../../assets/appstore.svg"
import playStore from "../../../assets/googleplay.svg"

export const CardUi = () => {
  return (
		<Flex justify="center" px={[5, 5, 0, 0]} mt={["80px", "199px"]}>
			<Box pr={"79px"} display={[" none", "block"]}>
				{/* <Box w={["320px", "", "", "400px"]}> */}
				<Image src={cardUi} w="403px" />
				{/* </Box> */}
			</Box>
			<Flex
				direction="column"
				//   flexBasis={["100%", "80%", "80%", "50%"]}
				justifyContent="center">
				<Text
					fontFamily="Montserrat"
					fontWeight="700"
					fontSize={["30px", "30px", "40px", "48px"]}
					//   lineHeight={1.2}
					color="#4F4F4F"
					mb={"5px"}>
					Transact on the go
				</Text>
				<Text
					fontFamily="Montserrat"
					w={["100%", "100%", "395px", "395px"]}
					fontSize={["12px", "16px"]}
					fontWeight="400"
					color="#000000">
					Stay on top of your business with our easy-to-use app
				</Text>
				<CustomButton
					btnText={"Get Started"}
					w="190px"
					borderRadius="10px"
					bg="linear-gradient(to right, #5cb23a, #408002)"
					_hover={{
						background: "linear-gradient(to right, #5cb23a, #408002)",
					}}
					color="#fff"
					mt="39px"
				/>
				<Stack spacing="17px" direction={["row"]} mb={[10, 10, 10, 0]} mt={'39px'}>
					<a
						href="https://apps.apple.com/ng/app/altbank/id6461120800"
						target="_blank"
						rel="noreferrer">
						<Image
							src={appStore}
							alt="appStore"
							w={["100px", "100px", "150px", "150px"]}
						/>
					</a>
					<a
						href="https://play.google.com/store/apps/details?id=ng.sterling.altbankv2"
						target="_blank"
						rel="noreferrer">
						<Image
							src={playStore}
							alt="playStore"
							w={["100px", "100px", "150px", "150px"]}
						/>
					</a>
				</Stack>
			</Flex>
		</Flex>
	)
}

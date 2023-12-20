import { Box, Center, Circle, Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import React from "react"
import money from "../../../assets/Money.svg"
import sec from "../../../assets/Security.svg"
import clock from "../../../assets/EMI.svg"

export const OpenAccount = () => {
  return (
		<VStack justify="center" px={[5, 5, 0, 10]} mt={["80px", "100px"]} >
			<Text fontSize={"36px"}>Payments tools designed for you</Text>
			<Text fontSize={"18px"} fontWeight={"400"}>
				Explore payment features that provides you with every possible solution
			</Text>
			<HStack >
				<Box
					justifyContent="center"
					width={"402px"}
					height={"388px"}
					borderRadius={"8"}
					border="1px solid #5CB23A45"
					borderStyle={"dotted"}
					px="10px">
					<Stack my={10}>
						<Image src={money} alt="money" w="80px" />
						<Text fontSize="22px" fontWeight={"500"} mt="20px" t>
							User Friendly
						</Text>
						<Text fontSize={"18px"} fontWeight="400">
							Highly responsive and easy to <br /> navigate
						</Text>
					</Stack>
				</Box>
				<Box
					justifyContent="center"
					width={"402px"}
					height={"388px"}
					borderRadius={"8"}
					border="1px solid #5CB23A45"
					borderStyle={"dotted"}
					px="10px">
					<Stack my={10}>
						<Image src={sec} alt="money" w="80px" />
						<Text fontSize="22px" fontWeight={"500"} mt="20px" t>
							Secure
						</Text>
						<Text fontSize={"18px"} fontWeight="400">
							Your data is secure. It is continuously monitored, audited, and
							stored in an encrypted form.
						</Text>
					</Stack>
				</Box>
				<Box
					justifyContent="center"
					width={"402px"}
					height={"388px"}
					borderRadius={"8"}
					border="1px solid #5CB23A45"
					borderStyle={"dotted"}
					px="10px">
					<Stack my={10}>
						<Image src={clock} alt="money" w="80px" />
						<Text fontSize="22px" fontWeight={"500"} mt="20px" t>
							Fast
						</Text>
						<Text fontSize={"18px"} fontWeight="400">
							Transacting takes only a few <br /> seconds - it's convenient and safe.
						</Text>
					</Stack>
				</Box>
			</HStack>
		</VStack>
	)
}

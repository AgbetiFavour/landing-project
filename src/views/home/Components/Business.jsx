import { Box, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import { CustomButton } from "../../../components/CustomButton"
import banner from "../../../assets/banner.svg"

export const Business = () => {
	return (
		<Flex
			direction={["column", "column", "row", "row"]}
			justify="center"
			align="center"
			mt={["50px", "50px", "50px", "8px"]}
			px={[5, 5, 5, 0]}
			>
			<Flex
				direction="column"
				justifyContent="center"
				textAlign="center"
				mb={["20px", "20px", "20px", "32px"]}  mt={20}>
				<Text
					fontFamily="Montserrat"
					fontSize={["20px", "20px", "50px", "46px"]}
					fontWeight="700"
					lineHeight={1.2}
					color="#fff"
					mb={["12px", "12px", "6px", "20px"]}>
					Manage payroll, compliance <br /> & HR in real time
				</Text>
				<Text
					color="#FFFFFF"
					mb={["15px", "15px", "15px", "32px"]}
					fontSize={["14px", "14px", "16px", "16px"]}
					fontFamily="Montserrat"
					fontWeight={"400"}
					w={["100%", "100%", "500px", "600px"]}>
					Make income tax remittances to the state internal revenue service for
					your employees.
				</Text>
				<CustomButton
					btnText={"Create free account"}
					w="190px"
					color="#fff"
					bg="linear-gradient(to right, #5cb23a, #408002)"
					_hover={{
						background: "linear-gradient(to right, #5cb23a, #408002)",
					}}
                    alignSelf="center"
				/>
			</Flex>
		</Flex>
	)
}

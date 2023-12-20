import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
// import phone from "../../../assets/slidePhone.png";
// import appStore from "../../../assets/appStore.svg";
// import playStore from "../../../assets/playStore.svg";
import joinbg from "../../../assets/get.svg";
import { CustomButton } from "../../../components/CustomButton";




export const JoinUs = () => {
  return (
		<>
			<Flex
				// justify={"center"}
				h={["auto", "522px"]}
				backgroundImage={`url(${joinbg})`}
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				borderRadius="20px"
				//   overflow="hidden"

				mt="180px"
				position="relative"
				px={["5px", "70px"]}
				mb="76px"
				// background="linear-gradient(to right, #5cb23a, #408002)"
        >
				<Flex
					// pl={["10", 0]}
					//   py={["30px"]}
					direction="column"
					// py={["50px", 0]}
					justifyContent="center">
					<Text
						fontFamily="Montserrat"
						fontSize={["20px", "40px"]}
						fontWeight="700"
						// lineHeight={1.2}
						color="#fff"
						mb={"18px"}>
						Send funds <br /> Remit taxes <br /> Buy utilities
					</Text>
					<Text
						color="#FFFFFF"
						mb={["20px", "24px"]}
						fontSize={["14px", "20px"]}
						fontFamily="Montserrat"
						fontWeight="400"
						w={["100%", "650px"]}>
						{/* Download the alt App and open an account within minutes */}
					</Text>
					<CustomButton btnText={"Get Started"} w="190px" borderRadius="10px" />
				</Flex>
			
			</Flex>
		</>
	)
};

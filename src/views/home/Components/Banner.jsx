import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { CustomButton } from "../../../components/CustomButton";
import banner from "../../../assets/banner.svg"
// import banner from "../../../assets/phone.png";
// import elipseImg from "../../../assets/elipse.png";
// import appStore from "../../../assets/appStore.svg";
// import playStore from "../../../assets/playStore.svg";

export const Banner = () => {
  return (
		<>
			<Flex
				// h={["auto", "600px"]}
				// bg="rgb(249 245 255 / 0.3)"
				borderRadius="20px"
				flexDirection={["column", "column", "row", "row"]}
				// overflow="hidden"
				mt={["50px", "50px", "50px", "8px"]}
				px={[5, 5, 5, 0]}>
				<Flex
					//   pl={["10", 0]}
					//   py={["30px"]}
					direction="column"
					flexBasis={["80%", "80%", "80%", "60%"]}
					justifyContent="center">
					<Text
						fontFamily="Montserrat"
						fontSize={["20px", "20px", "50px", "46px"]}
						fontWeight="700"
						lineHeight={1.2}
						color="#fff"
						mb={["12px", "12px", "6px", "20px"]}>
						Secure & seamless <br /> online transactions
					</Text>
					<Text
						color="#FFFFFF"
						mb={["15px", "15px", "15px", "32px"]}
						fontSize={["14px", "14px", "16px", "16px"]}
						fontFamily="Montserrat"
						fontWeight={"400"}
						w={["100%", "100%", "500px", "600px"]}>
						Providing you with the best online payment experience
					</Text>
					<CustomButton
						btnText={"Create free account"}
						w="190px"
						color="#fff"
						bg="linear-gradient(to right, #5cb23a, #408002)"
						_hover={{
							background: "linear-gradient(to right, #5cb23a, #408002)",
						}}
					/>
				</Flex>
				<Box
					backgroundRepeat={"no-repeat"}
					backgroundPosition={"center"}
					backgroundSize={["contain", "cover"]}
					// backgroundImage={`url(${elipseImg})`}
					h={["550px", "500px", "750px"]}
					
					//   flexBasis={["50%", "50%", "50%", "50%"]}
					//   justifyContent="center"
					//   pos="relative"
					display="flex"
					justifyContent="center"
					alignItems="center">
					<Image objectFit={"cover"} src={banner} alt="banner" />
				</Box>
			</Flex>
		</>
	)
};

import { Box, Center, Circle, Flex, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useMediaQuery } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import rightPanel from "../../../assets/rightPanel.png"

export const TransferUi = () => {
  	const [orientation, setOrientation] = useState("vertical")
		const [isMobile] = useMediaQuery("(max-width: 700px)")

    useEffect(() => {
			if (isMobile) setOrientation("vertical")
			else {
				setOrientation("vertical")
			}
		}, [isMobile])

	return (
		<Tabs orientation={orientation} px={[5, 5, 0, 0]} mt={["80px", "199px"]}>
			<TabList>
				<Tab
					_focus={{
						boxShadow: "none",
						color: "#5cb23a",
					}}
					fontSize={["14px", "16px"]}
					fontFamily="Montserrat">
					Pay bills
					{/* <span>Paying your bills has never been so easy.</span> */}
				</Tab>
				<Tab
					_focus={{
						boxShadow: "none",
						color: "#5cb23a",
					}}
					fontSize={["14px", "12px"]}
					fontFamily="Montserrat">
					Buy Airtime & Data
				</Tab>
				<Tab
					_focus={{
						boxShadow: "none",
						color: "#5cb23a",
					}}
					fontSize={["14px", "16px"]}
					fontFamily="Montserrat">
					Money Transfer
				</Tab>
				<Tab
					_focus={{
						boxShadow: "none",
						color: "#5cb23a",
					}}
					fontSize={["14px", "16px"]}
					fontFamily="Montserrat">
					Pay Toll Fee
				</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<Box justifyContent={"center"} display={"flex"}>
						<Image src={rightPanel} />
					</Box>
				</TabPanel>
				<TabPanel>
					<Box justifyContent={"center"} display={"flex"}>
						<Image src={rightPanel} />
					</Box>
				</TabPanel>
				<TabPanel>
					<Box justifyContent={"center"} display={"flex"}>
						<Image src={rightPanel} />
					</Box>
				</TabPanel>
				<TabPanel>
					<Box justifyContent={"center"} display={"flex"}>
						<Image src={rightPanel} />
					</Box>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}
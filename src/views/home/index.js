import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Banner } from "./Components/Banner";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Wrapper from "./Components/Wrapper";
import { useLocation } from "react-router-dom";
// import homebg from "../../assets/homebg.png";
import { OpenAccount } from "./Components/OpenAccount";

import { TransferUi } from "./Components/TransferUi";
import { CardUi } from "./Components/CardUI";
import { JoinUs } from "./Components/JoinUs";
// import ScrollAnimation from "react-animate-on-scroll";
import Seo from "../../components/Seo";
import { Business } from "./Components/Business";
import banner from "../../assets/fam.png"
const Home = () => {
	const hashValue = useLocation()
  const [activeTab, setActiveTab] = useState("For Individuals")
	useEffect(() => {
		//scroll to features section of pageif feature has been clicked from other page
		if (hashValue?.hash == "#features") {
			document.getElementById("features").scrollIntoView({
				behavior: "smooth",
			})
		} else {
			window.scrollTo(0, 0)
		}
	}, [])

	// Assuming activeTab is being passed from the parent component or Redux state
	// const activeTab = "For Individuals" // You can replace this with the actual value

	return (
		<>
			<Seo title="The Alternative Bank" />
			<Box
				// backgroundImage={homebg}
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center"
				// clipPath="ellipse(100% 60% at 50% 40%)"
				style={{ "--animate-duration": "4s", "--animate-delay": "0.05s" }}
				className="animate__animated animate__fadeIn"
				h={["auto", "auto", "auto", "730px"]}
				backgroundColor={"#000"}>
				<NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

				<Wrapper>
					{activeTab === "For Individuals" ? <Banner /> : <Business />}
				</Wrapper>
			</Box>

			{activeTab === "For Individuals" ? null : 
			<Box
			backgroundRepeat={"no-repeat"}
			backgroundPosition={"center"}
			backgroundSize={["contain", "cover"]}
			// backgroundImage={`url(${elipseImg})`}
			h={["550px", "500px", "750px"]}
			//   flexBasis={["50%", "50%", "50%", "50%"]}
			//   justifyContent="center"
			//   pos="relativejj"
			
			mt={-40}
			display="flex"
			justifyContent="center"
			alignItems="center"
			>
				<Image objectFit={"cover"} src={banner} alt="banner" />
			</Box>
}
			<Wrapper id="features">
				<OpenAccount />

				<TransferUi />
				<CardUi />
				<JoinUs />
			</Wrapper>

			<Footer />
		</>
	)
};

export default Home;

import { Button } from "@chakra-ui/react"
import React from "react"

export const CustomButton = ({ btnText, ...props }) => {
  return (
		<Button
			// fontSize="14px"

			bg="#fff"
			color="#25A75C"
			_hover={{ bg: "#fff" }}
			{...props}>
			{btnText}
		</Button>
	)
}

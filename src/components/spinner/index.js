import React from "react";
// import { LoadingOutlined } from "@ant-design/icons";
// import { Spin } from "antd";
import { Box, Text } from "@chakra-ui/react";
// import { useColorMode, useCurrentUser } from "../../helpers";

const Spinner = ({ message, ...rest }) => {
  // const { isDarkMode } = useColorMode();
  // let color = isDarkMode ? "grey" : "#161616";
  // const { isLoggedIn } = useCurrentUser();
  return (
    <Box {...rest} textAlign={"center"}>
      {/* <Spin indicator={antIcon('#000')} /> */}
      {message && <Text mt="10px">{message}</Text>}
    </Box>
  );
};
export default Spinner;

import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";
const clrs = ["#5FD0B7", "#9B51E0", "#F79E1B"];

const random = Math.floor(Math.random() * clrs.length);

const TransItems = ({
  icon,
  title,
  amount,
  type = "",
  transDate = "",
  transType,
}) => {
  return (
    <Flex my={["15px", "17px"]} w="100%" h={["50px"]}>
      <HStack w="100%" alignItems="center" justifyContent="space-between">
        <HStack>
          <WrapItem p={["3px"]} bg="#F9FAFB">
            <Avatar
              w="25px"
              h="25px"
              color={clrs[random]}
              bg="#F9FAFB"
              name={title || "Transaction"}
              src={icon || ""}
            />
          </WrapItem>
          <Box alignItems="center">
            <Text
              lineHeight={["150%", "130%"]}
              color="neutral.100"
              fontWeight="600"
              fontFamily="Montserrat"
              fontSize={["12", "14px"]}
            >
              {title || "Transaction"}
            </Text>
            <Text
              lineHeight={["130%", "130%"]}
              color="neutral.900"
              fontWeight="600"
              fontFamily="Montserrat"
              fontSize={["9", "10px"]}
            >
              {transDate
                ? moment(transDate, "MM-DD-YYYY hh:mm:ss").toString()
                : ""}
              {/* 15th May, 2021 04:05pm */}
            </Text>
          </Box>
        </HStack>
        <Box textAlign="right">
          <Text
            lineHeight={["150%", "130%"]}
            color="neutral.100"
            fontWeight="600"
            fontFamily="Montserrat"
            fontSize={["12", "14px"]}
          >
            {amount || "0.0000"}
          </Text>
          <Text
            lineHeight={["130%", "130%"]}
            color="neutral.900"
            fontWeight="600"
            fontFamily="Montserrat"
            fontSize={["9", "10px"]}
          >
            {transType === "D"
              ? "Debit"
              : transType === "C"
              ? "Credit"
              : type || ""}
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
};

export default TransItems;

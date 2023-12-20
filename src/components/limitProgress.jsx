import React from "react";
import { Box, Text, HStack, Avatar, Flex, Spinner } from "@chakra-ui/react";
import { useClientQuery } from "../services/api";
import { endpoints } from "../services/servicelinks";
import { useSelector } from "react-redux";
import { numberWithCommas, useCurrentUser } from "../helpers";

const LimitProgress = ({
  setSaveBeneficiary,
  setSaveBeneficiaryLocalTransfer,
  tabName,
  setSaveBeneficiaryOther,
}) => {
  const userLimit = useSelector(({ user }) => user?.usersLimit);
  // const { data, isError, isLoading, refetch } = useClientQuery(
  //   endpoints.getUserBeneficiaries
  // )
  // console.log(data, "vat")
  const { syncLimitData } = useCurrentUser();
console.log(tabName)
  //for intra bank transfers, eg alt to alt
  const SliderWith = () => {
    let width = 0;
    if (
      userLimit?.intraUserDayLimitAmount != null &&
      (userLimit?.intraTotalTransactionDone != null ||
        userLimit?.intraTotalTransactionDone == "0")
    ) {
      let ratio =
        userLimit?.intraTotalTransactionDone / userLimit?.intraUserDayLimitAmount;
      width = ratio * 100;
      // console.log(width, ratio);
      return width;
    } else {
      return width;
    }
  };

  const SliderWithInterBank = () => {
    let width = 0;
    if (
      userLimit?.interUserDayLimitAmount != null &&
      (userLimit?.interTotalTransactionDone != null ||
        userLimit?.interTotalTransactionDone == "0")
    ) {
      let ratio =
        userLimit?.interTotalTransactionDone / userLimit?.interUserDayLimitAmount;
      width = ratio * 100;
      // console.log(width, ratio);
      return width;
    } else {
      return width;
    }
  };

  React.useEffect(() => {
    syncLimitData();
  }, []);

  return tabName == "other" ? (
    userLimit?.interUserDayLimitAmount == "0" ? null : (
      <Box
        px={["17px", "20px"]}
        mt={["10px", "25px"]}
        py={["8px", "10px"]}
        maxW="425px"
        minH="70px"
        borderRadius="10px"
        // boxShadow="rgba(0, 0, 0, 0.05)"
        boxShadow=" 0px 2px 10px rgba(0, 0, 0, 0.05)"
        overflowY="auto"
      >
        <Box>
          <Text
            fontSize={["11px", "12px"]}
            fontFamily={"Montserrat"}
            fontWeight="400"
            color={"neutral.500"}
          >
            Daily Transaction Limit : N
            {userLimit?.interUserDayLimitAmount
              ? numberWithCommas(userLimit?.interUserDayLimitAmount)
              : "0"}
          </Text>
        </Box>
        <Box
          mt={["3px", "7px"]}
          borderRadius="12px"
          bg="neutral.3"
          w={[`98%`]}
          h={["3px", "5px"]}
        >
          <Box
            transition={"all ease-in 2s"}
            borderRadius="10px"
            bg="brand.500"
            h="100%"
            w={`${SliderWithInterBank()}%`}
          />
        </Box>
        <HStack mt={["2px", "6px"]} justifyContent={"space-between"}>
          <Text
            fontSize={["11px", "12px"]}
            fontFamily={"Montserrat"}
            fontWeight="600"
            color={"brand.500"}
          >
            N{" "}
            {userLimit?.interTotalTransactionDone
              ? numberWithCommas(userLimit?.interTotalTransactionDone)
              : "0"}{" "}
            used
          </Text>
          <Text
            fontSize={["11px", "12px"]}
            fontFamily={"Montserrat"}
            fontWeight="600"
            color={"neutral.10"}
          >
            N
            {userLimit?.interDayBalanceRemains
              ? numberWithCommas(userLimit?.interDayBalanceRemains)
              : "0"}{" "}
            remaining
          </Text>
        </HStack>
      </Box>
    )
  ) : userLimit?.intraUserDayLimitAmount == "0" ? null : (
    <Box
      px={["17px", "20px"]}
      mt={["10px", "25px"]}
      py={["8px", "10px"]}
      maxW="425px"
      minH="70px"
      borderRadius="10px"
      // boxShadow="rgba(0, 0, 0, 0.05)"
      boxShadow=" 0px 2px 10px rgba(0, 0, 0, 0.05)"
      overflowY="auto"
    >
      <Box>
        <Text
          fontSize={["11px", "12px"]}
          fontFamily={"Montserrat"}
          fontWeight="400"
          color={"neutral.500"}
        >
          Daily Transaction Limit : N
          {userLimit?.intraUserDayLimitAmount
            ? numberWithCommas(userLimit?.intraUserDayLimitAmount)
            : "0"}
        </Text>
      </Box>
      <Box
        mt={["3px", "7px"]}
        borderRadius="12px"
        bg="neutral.3"
        w={[`98%`]}
        h={["3px", "5px"]}
      >
        <Box
          transition={"all ease-in 2s"}
          borderRadius="10px"
          bg="brand.500"
          h="100%"
          w={`${SliderWith()}%`}
        />
      </Box>
      <HStack mt={["2px", "6px"]} justifyContent={"space-between"}>
        <Text
          fontSize={["11px", "12px"]}
          fontFamily={"Montserrat"}
          fontWeight="600"
          color={"brand.500"}
        >
          N{" "}
          {userLimit?.intraTotalTransactionDone
            ? numberWithCommas(userLimit?.intraTotalTransactionDone)
            : "0"}{" "}
          used
        </Text>
        <Text
          fontSize={["11px", "12px"]}
          fontFamily={"Montserrat"}
          fontWeight="600"
          color={"neutral.10"}
        >
          N
          {userLimit?.intraDayBalanceRemains
            ? numberWithCommas(userLimit?.intraDayBalanceRemains)
            : "0"}{" "}
          remaining
        </Text>
      </HStack>
    </Box>
  );
};

export default LimitProgress;

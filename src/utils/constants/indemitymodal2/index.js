import {
  Box,
  Text,
  VStack,
  Button,
  FormHelperText,
  FormControl,
  RadioGroup,
  Stack,
  Radio,
  HStack,
} from "@chakra-ui/react";
import { Modal } from "antd";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Select } from "@chakra-ui/react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdLockOutline, MdOutlineVpnKey } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../../components/passwordinput";
import SpinnerWithInfo from "../../../components/spinnerWithInfo";
import { useMutations } from "../../../services/api";
import { endpoints } from "../../../services/servicelinks";
import responseCodes, {
  numberRegExp,
  numberRegExp2,
  useColorMode,
  useCustomeToast,
} from "../../../helpers";
import { useQueryClient } from "react-query";
import Selects from "../../../components/selects";
import Inputs from "../../../components/inputs";
import { Urlroutes } from "../../routes";

const options = [
  { name: "Card", value: "Card" },
  { name: "PIN", value: "PIN" },
];
const IndemityModal2 = ({
  open,
  setOpen,
  title,
  data,
  handleLimitIncrease,
  prePayload,
  values,
}) => {
  const [resInfo, setResInfo] = React.useState({
    status: false,
    message: "",
  });
  const queryClient = useQueryClient();
  const { notify } = useCustomeToast();
  const { mutate, isLoading } = useMutations();
  const { isDarkMode } = useColorMode();
  const navigate = useNavigate();
  const [mounted, setMounted] = React.useState(1);
  const [Accept, setAccept] = React.useState("3");

  // const handleLimitIncrease = async (payload) => {
  //   // console.log(payload)
  //   mutate(
  //     {
  //       key: endpoints.updateusergloballimit,
  //       method: "put",
  //       data: payload,
  //     },
  //     {
  //       onSuccess: (res) => {
  //         console.log(res);
  //         queryClient.invalidateQueries(endpoints?.getusergloballimit);
  //         if (res.responseCode === responseCodes.response_00) {
  //           console.log(res.responseMessage);
  //           notify(res.responseMessage);
  //           setOpen(false);
  //         } else if (res?.responseCode === !responseCodes.response_00) {
  //           setResInfo({
  //             status: false,
  //             message: res?.responseMessage,
  //           });
  //         } else {
  //           setResInfo({
  //             status: false,
  //             message: res?.responseMessage,
  //           });
  //         }
  //       },
  //       onError: (err) => {
  //         console.log(err);
  //       },
  //     }
  //   );
  // };




  // const onSubmit = (values) => {

  //   if (!values?.perTransaction || !values?.perDay) {
  //     return;
  //   }
  //   let payload = {};
  //   let perDay = values.perDay?.split(",")?.join("");
  //   values.perDay = String(perDay);
  //   let perTransaction = values.perTransaction?.split(",")?.join("");
  //   values.perTransaction = String(perTransaction);
  //   if (title === "Sterling to Sterling") {
  //     payload = {
  //       defaultPerTransactionIntraBank: values?.perTransaction,
  //       defaultMaxPerDayIntraBank: values?.perDay,
  //     };
  //   } else if (title === "Other Banks") {
  //     payload = {
  //       defaultPerTransactionInterBank: values?.perTransaction,
  //       defaultMaxPerDayInterBank: values?.perDay,
  //     };
  //   } else if (title === "Airtime") {
  //     payload = {
  //       defaultAirtimePerTransaction: values?.perTransaction,
  //       defaultAirtimePerDay: values?.perDay,
  //     };
  //   } else if (title === "Bill Payment") {
  //     payload = {
  //       defaultBillPaymentPerTransaction: values?.perTransaction,
  //       defaultBillPaymentPerDay: values?.perDay,
  //     };
  //   } else if (title === "Cardless Withdrawal") {
  //     payload = {
  //       cardlessWithdrawalDefaultPerTransaction: values?.perTransaction,
  //       cardlessWithdrawalDefaultPerDay: values?.perDay,
  //     };
  //   }
  //   console.log("Payload Value", payload);
  //   handleLimitIncrease(payload);
  // };

  // const handleStateChange = (setState, name, e) => {
  //   const {
  //     target: { value },
  //   } = e;
  //   if (!value) {
  //     setState(name, "");
  //     return;
  //   }
  //   const formatNumber =
  //     parseInt(value.replace(/,/g, "")).toLocaleString() || "";
  //   if (isNaN(formatNumber?.split(",")?.join(""))) return;

  //   setState(name, formatNumber);
  // };
  const proceed = () => {
    navigate(Urlroutes.CreditsDetails, { state: values });
  };

  return (
    <>
      <Modal
        // title="Modal 1000px width"
        centered
        onCancel={() => setOpen(false)}
        open={open}
        width={733}
        footer={null}
      >
        <VStack mb={["10px"]} pt={["20px"]} minH={["300px"]}>
          <Box textAlign={"center"}>
            <Text
              fontFamily="Montserrat"
              fontWeight="600"
              fontSize={["16px", "20px"]}
            >
              {/* {title} */}
              Agreement to Proceed with Credit Request
            </Text>
          </Box>
          <Box
            css={{
              "&::-webkit-scrollbar": {
                width: "3px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#B89645",
                borderRadius: "24px",
              },
            }}
            maxHeight={"620px"}
            overflowY="auto"
            fontWeight={"300"}
            mt={["8px", "15px"]}
          >
            <Text
              lineHeight={["100%", "22px"]}
              color="neutral.500"
              fontSize={["11px", "13px"]}
            >
              By clicking the "Submit" button to proceed with your credit
              request, you agree to the
              <br /> following terms:
              <br />
              1. You understand that the credit financing service is provided by
              AltBank and that your
              <br /> credit request is subject to approval based on your credit
              score, creditworthiness, and <br />
              other factors.
              <br />
              2. You acknowledge and agree that AltBank may collect, use, and
              disclose your personal
              <br /> and financial information, including but not limited to
              your account information,transaction history, credit score, and
              other relevant data, in order to process and evaluate your credit
              request.
              <br />
              3. You understand and agree that the information provided by
              AltBank is for informational <br />
              purposes only and does not constitute financial, legal, or tax
              advice. You are solely
              <br /> responsible for evaluating your own financial situation and
              determining whether to proceed with your credit request.
              <br /> 4. You represent and warrant that all information provided
              in connection with your credit request is true, accurate, and
              complete, and that you have the legal capacity to enter into this
              Agreement.
              <br />
              5. If your credit request is approved, you agree to repay the loan
              in accordance with the terms and conditions of the loan agreement.
              <br /> 7. You acknowledge and agree that AltBank reserves the
              right to modify, suspend, or terminate the credit financing
              service at any time without prior notice. If you agree to these
              terms, please click the "Accept" button below. If you do not
              agree, please click the “decline” button so you do not proceed
              with your credit request.
            </Text>
            <RadioGroup
              onChange={(xx) => setAccept(xx)}
              mt={["10px", "12px"]}
              defaultValue={Accept}
            >
              <Stack spacing={4} direction="row">
                <Radio colorScheme="orange" value="1">
                  Accept Terms and Condition
                </Radio>
                <Radio colorScheme="orange" value="2">
                  Do no Accept
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box textAlign={"center"} mt={["5px", "24px"]}>
            <Button
              bg="primary.100"
              w={["100%", "250px"]}
              fontWeight={["600"]}
              h="48px"
              fontSize="16px"
              color={!isDarkMode ? "brand.400" : "#ffffff"}
              onClick={proceed}
              isDisabled={Accept != "1"}
            >
              Submit
            </Button>
          </Box>
        </VStack>
      </Modal>
    </>
  );
};

export default IndemityModal2;

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

const options = [
  { name: "Card", value: "Card" },
  { name: "PIN", value: "PIN" },
];
const CardModal = ({ open, setOpen, title, data, setShow, prePayload }) => {
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
  const handleValidatePin = async (payload) => {
    // console.log(payload)
    mutate(
      {
        key: endpoints.validatePin,
        method: "post",
        data: payload,
      },
      {
        onSuccess: (res) => {
          console.log(res);
          queryClient.invalidateQueries(endpoints?.getusergloballimit);
          if (res.responseCode === responseCodes.response_00) {
            setShow(true);
            setOpen(false);
          } else if (res?.responseCode === !responseCodes.response_00) {
            setResInfo({
              status: false,
              message: res?.responseMessage,
            });
          } else {
            setResInfo({
              status: false,
              message: res?.responseMessage,
            });
          }
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  const initialValues = {
    Autentication: "",
    pin: "",
    pan: "",
    expiryDate: "",
    cardPin: "",
    cvv: "",
  };
  const LimitsSchema = Yup.object({
    pin: Yup.string().min(4, "invalid").max(4, "invalid"),
  });
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

  const proceed = () => {
    setMounted(2);
  };

  return (
    <>
      <Modal
        // title="Modal 1000px width"
        centered
        onCancel={() => setOpen(false)}
        open={open}
        width={600}
        footer={null}
      >
        <VStack
          alignItems={"center"}
          mb={["10px"]}
          pt={["20px"]}
          minH={["300px"]}
        >
          <Box textAlign={"center"}>
            <Text
              fontFamily="Montserrat"
              fontWeight="600"
              fontSize={["16px", "20px"]}
            >
              {/* {title} */}
            Provide PIN
            </Text>
          </Box>
          <Box
            w={["100%", "300px"]}
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
            <Formik
              validationSchema={LimitsSchema}
              initialValues={initialValues}
              onSubmit={(values) => {
                handleValidatePin({ pin: values.pin });
              }}
            >
              {({
                isSubmitting,
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
              }) => (
                <Form>
                  <SpinnerWithInfo
                    setResInfo={setResInfo}
                    isLoading={isLoading}
                    message={resInfo.message}
                    status={resInfo.status}
                  />
                  <FormControl>
                    <>
                      <Box
                        mt={["10px !important", "15px !important"]}
                        mb={["10px !important", "15px !important"]}
                      >
                        <PasswordInput
                          title="Transaction Pin"
                          leftIcon={
                            <MdOutlineVpnKey className="site-form-item-icon" />
                          }
                          name="pin"
                          id="pin"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.pin}
                          border={
                            errors.pin && touched.pin
                              ? "1px solid #F10000 !important"
                              : "1px solid #959595 !important"
                          }
                          error={
                            errors.pin && touched.pin ? (
                              <FormHelperText color="error.20">
                                {errors.pin}
                              </FormHelperText>
                            ) : null
                          }
                          showEye
                        />
                      </Box>
                    </>

                    <Box textAlign={"center"} mt={["20px", "100px"]}>
                      <Button
                        bg="primary.100"
                        w={["100%", "250px"]}
                        fontWeight={["600"]}
                        h="48px"
                        fontSize="16px"
                        type="submit"
                        color={!isDarkMode ? "brand.400" : "#ffffff"}
                        // onClick={proceed}
                        isDisabled={!values.pin}
                      >
                        Proceed
                      </Button>
                    </Box>
                  </FormControl>
                </Form>
              )}
            </Formik>
          </Box>
        </VStack>
      </Modal>
    </>
  );
};

export default CardModal;

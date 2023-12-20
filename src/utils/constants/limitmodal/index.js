import {
  Box,
  Text,
  VStack,
  Button,
  FormHelperText,
  FormControl,
} from "@chakra-ui/react";
import { Modal } from "antd";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../../components/passwordinput";
import SpinnerWithInfo from "../../../components/spinnerWithInfo";
import { useMutations } from "../../../services/api";
import { endpoints } from "../../../services/servicelinks";
import responseCodes, { useColorMode, useCustomeToast } from "../../../helpers";
import { useQueryClient } from "react-query";

const LimitModal = ({
  open,
  setOpen,
  title,
  data,
  setPrePayload,
  setOpenIndem,
  selectedAcct,
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

  const handleLimitIncrease = async (payload) => {
    // console.log(payload)
    setPrePayload(payload);
    setOpen(false);
    setOpenIndem(true);
    return;
    mutate(
      {
        key: endpoints.updateusergloballimit,
        method: "put",
        data: payload,
      },
      {
        onSuccess: (res) => {
          console.log(res);
          queryClient.invalidateQueries(endpoints?.getusergloballimit);
          if (res.responseCode === responseCodes.response_00) {
            console.log(res.responseMessage);
            notify(res.responseMessage);
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
    perDay: "",
    perTransaction: "",
    password: "",
  };

  const onSubmit = (values) => {
    if (!values?.perTransaction || !values?.perDay) {
      return;
    }
    let payload = {};
    let perDay = values.perDay?.split(",")?.join("");
    values.perDay = String(perDay);
    let perTransaction = values.perTransaction?.split(",")?.join("");
    values.perTransaction = String(perTransaction);
    if (title === "Sterling to Sterling") {
      payload = {
        defaultPerTransactionIntraBank: values?.perTransaction,
        defaultMaxPerDayIntraBank: values?.perDay,
      };
    } else if (title === "Other Banks") {
      payload = {
        defaultPerTransactionInterBank: values?.perTransaction,
        defaultMaxPerDayInterBank: values?.perDay,
      };
    } else if (title === "Airtime") {
      payload = {
        defaultAirtimePerTransaction: values?.perTransaction,
        defaultAirtimePerDay: values?.perDay,
      };
    } else if (title === "Bill Payment") {
      payload = {
        defaultBillPaymentPerTransaction: values?.perTransaction,
        defaultBillPaymentPerDay: values?.perDay,
      };
    } else if (title === "Cardless Withdrawal") {
      payload = {
        cardlessWithdrawalDefaultPerTransaction: values?.perTransaction,
        cardlessWithdrawalDefaultPerDay: values?.perDay,
      };
    }
    console.log("Payload Value", payload);
    handleLimitIncrease(payload);
  };

  const LimitsValidationSchema = Yup.object({
    perDay: Yup.string()
      // .matches(/^[0-9]+$/, "Must be only digits")
      .min(3, "Should be above  N1,000")
      .max(9, "Invalid Amount")
      .required("Required"),
    perTransaction: Yup.string()
      // .matches(/^[0-9]+$/, "Must be only digits")
      .min(3, "Should be above  N1,000")
      .max(9, "Invalid Amount")
      .required("Required"),
    // password: Yup.string()
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])/,
    //     "Must Contain One Uppercase, One Lowercase and One Special Case Character"
    //   )
    //   .min(7, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Password is Required"),
  });
  const handleStateChange = (setState, name, e) => {
    const {
      target: { value },
    } = e;
    if (!value) {
      setState(name, "");
      return;
    }
    const formatNumber =
      parseInt(value.replace(/,/g, "")).toLocaleString() || "";
    if (isNaN(formatNumber?.split(",")?.join(""))) return;

    setState(name, formatNumber);
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
        <VStack mb={["63px"]} pt={["20px"]} minH={["300px"]}>
          <Box textAlign={"center"}>
            <Text
              fontFamily="Montserrat"
              fontWeight="600"
              fontSize={["16px", "20px"]}
            >
              {/* {title} */}
              Enhance Limit
            </Text>
          </Box>
          <Text>Acct no:  {selectedAcct}</Text>
          <Formik
            validationSchema={LimitsValidationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
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
                <FormControl mt={["12px"]} px={[5, 0]} w={["100%"]}>
                  <Box w={["100%", "300px"]}>
                    <Box mb={["18px"]}>
                      <PasswordInput
                        icon={<FaRegMoneyBillAlt />}
                        title="Enter new transaction limit"
                        leftIcon={<BsCash className="site-form-item-icon" />}
                        name="perDay"
                        id="perDay"
                        onChange={(e) =>
                          handleStateChange(setFieldValue, "perDay", e)
                        }
                        onBlur={handleBlur}
                        value={values?.perDay}
                        border={
                          errors?.perDay && touched?.perDay
                            ? "1px solid #F10000 !important"
                            : "1px solid #959595 !important"
                        }
                        error={
                          errors?.perDay && touched?.perDay ? (
                            <FormHelperText color="error.20">
                              {errors?.perDay}
                            </FormHelperText>
                          ) : null
                        }
                        type="text"
                      />
                    </Box>
                    <Box mb={["18px"]}>
                      <PasswordInput
                        icon={<FaRegMoneyBillAlt />}
                        title="Enter new daily limit"
                        leftIcon={<BsCash className="site-form-item-icon" />}
                        name="perTransaction"
                        id="perTransaction"
                        onChange={(e) =>
                          handleStateChange(setFieldValue, "perTransaction", e)
                        }
                        onBlur={handleBlur}
                        value={values?.perTransaction}
                        border={
                          errors?.perTransaction && touched?.perTransaction
                            ? "1px solid #F10000 !important"
                            : "1px solid #959595 !important"
                        }
                        error={
                          errors?.perTransaction && touched?.perTransaction ? (
                            <FormHelperText color="error.20">
                              {errors?.perTransaction}
                            </FormHelperText>
                          ) : null
                        }
                        type="text"
                      />
                    </Box>
                    {/* <Box mb={["18px"]}>
                      <PasswordInput
                        title="Enter your password"
                        leftIcon={
                          <MdLockOutline className="site-form-item-icon" />
                        }
                        name="password"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.password}
                        border={
                          errors?.password && touched?.password
                            ? "1px solid #F10000 !important"
                            : "1px solid #959595 !important"
                        }
                        error={
                          errors?.password && touched?.password ? (
                            <FormHelperText color="error.20">
                              {errors?.password}
                            </FormHelperText>
                          ) : null
                        }
                        showEye
                      />
                    </Box> */}
                    <Box mt={["20px", "100px"]}>
                      <Button
                        bg="primary.100"
                        w={["100%"]}
                        fontWeight={["600"]}
                        h="48px"
                        fontSize="16px"
                        color={!isDarkMode ? "brand.400" : "#ffffff"}
                        type="submit"
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                </FormControl>
              </Form>
            )}
          </Formik>
        </VStack>
      </Modal>
    </>
  );
};

export default LimitModal;

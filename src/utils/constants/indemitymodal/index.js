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
} from "@chakra-ui/react"
import { Modal } from "antd"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import React from "react"
import { Select } from "@chakra-ui/react"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { MdLockOutline, MdOutlineVpnKey } from "react-icons/md"
import { BsCash } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import PasswordInput from "../../../components/passwordinput"
import SpinnerWithInfo from "../../../components/spinnerWithInfo"
import { useMutations } from "../../../services/api"
import { endpoints } from "../../../services/servicelinks"
import responseCodes, {
  numberRegExp,
  numberRegExp2,
  useColorMode,
  useCustomeToast,
} from "../../../helpers"
import { useQueryClient } from "react-query"
import Selects from "../../../components/selects"
import Inputs from "../../../components/inputs"

const options = [
  { name: "Card", value: "Card" },
  { name: "PIN", value: "PIN" },
]
const IndemityModal = ({
  open,
  setOpen,
  title,
  data,
  handleLimitIncrease,
  prePayload,
}) => {
  const [resInfo, setResInfo] = React.useState({
    status: false,
    message: "",
  })
  const queryClient = useQueryClient()
  const { notify } = useCustomeToast()
  const { mutate, isLoading } = useMutations()
  const { isDarkMode } = useColorMode()
  const navigate = useNavigate()
  const [mounted, setMounted] = React.useState(1)
  const [Accept, setAccept] = React.useState("3")

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
          console.log(res)
          queryClient.invalidateQueries(endpoints?.getusergloballimit)
          if (res.responseCode === responseCodes.response_00) {
            console.log(res.responseMessage)
            if (!prePayload) return
            handleLimitIncrease(prePayload)
          } else if (res?.responseCode === !responseCodes.response_00) {
            setResInfo({
              status: false,
              message: res?.responseMessage,
            })
          } else {
            setResInfo({
              status: false,
              message: res?.responseMessage,
            })
          }
        },
        onError: (err) => {
          console.log(err)
        },
      }
    )
  }
  const handleValidateCard = async (payload) => {
    // console.log(payload);
    mutate(
      {
        key: endpoints.validateCard,
        method: "put",
        data: payload,
      },
      {
        onSuccess: (res) => {
          // console.log(res);
          queryClient.invalidateQueries(endpoints?.getusergloballimit)
          if (res.responseCode === responseCodes.response_00) {
            console.log(res.responseMessage)
            if (!prePayload) return
            handleLimitIncrease(prePayload)
          } else if (res?.responseCode === !responseCodes.response_00) {
            setResInfo({
              status: false,
              message: res?.responseMessage,
            })
          } else {
            setResInfo({
              status: false,
              message: res?.responseMessage,
            })
          }
        },
        onError: (err) => {
          console.log(err)
        },
      }
    )
  }
  const initialValues = {
    Autentication: "",
    pin: "",
    pan: "",
    expiryDate: "",
    cardPin: "",
    cvv: "",
  }
  const LimitsSchema = Yup.object({
    Autentication: Yup.string().required("Required"),
    pin: Yup.string().min(4, "invalid").max(4, "invalid"),
    cardPin: Yup.string().min(4, "invalid").max(4, "invalid"),
    expiryDate: Yup.string().matches(numberRegExp2, "invalid"),
    cvv: Yup.string().min(3, "invalid").max(3, "invalid"),
    pan: Yup.string().matches(numberRegExp, "invalid").min(10, "invalid"),
  })
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
    setMounted(2)
  }

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
        {mounted == 1 ? (
          <VStack mb={["10px"]} pt={["20px"]} minH={["300px"]}>
            <Box textAlign={"center"}>
              <Text
                fontFamily="Montserrat"
                fontWeight="600"
                fontSize={["16px", "20px"]}
              >
                {/* {title} */}
                Terms and Conditions
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
              <Text color="neutral.500" fontSize={["11px", "13px"]}>
                I confirm that my account or debit card details which are being
                used for registration are accurate and Sterling Alternative
                Finance cannot be held liable for any inaccuracy. User
                acknowledges that every information received or accessed by him
                relating to AltBank is confidential and should not be sent to a
                third party. The Alternative Bank will be held liable for
                non-delivery or delay of alerts, e-mails, errors or losses or
                distortion in transmission of alerts and e-mail to the User. The
                Alternative Bank will not be held liable for lack of receipt of
                alerts due to technical defects on customers phone or damage or
                loss incurred by the User as a result of causes not directly
                attributable to the alternative bank. The Alternative Bank shall
                not be liable to the user or to any third party for any drawing,
                transfer, remittance, disclosure or any activity or incidence on
                the users account or debit card whether authorized by the user
                or not. Providing such transaction was authorized or made
                possible by the fact of the knowledge and/or use, or
                manipulation of the users, password/PIN or otherwise negligence.
                User acknowledges that his password and PIN shall always be
                known and kept confidential. In the event of loss or theft of
                the phone or compromise of the security of the provided e-mail
                account, the user call Customer Care Hotline (01-7000555) or
                e-mail help@altbank.ng and immediately notify the bank in writing
                within 24 hours of the loss/theft of device and e-mail/password
                compromise. The Alternative Bank in its absolute discretion and
                without prior notice can temporarily suspend AltBank, any or all
                of the service or terminate them completely.
              </Text>
              <RadioGroup
                onChange={(xx) => setAccept(xx)}
                mt={["10px", "12px"]}
                defaultValue={Accept}
              >
                <Stack spacing={4} direction="row">
                  <Radio colorScheme="orange" value="1">
                    Accept
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
                Proceed
              </Button>
            </Box>
          </VStack>
        ) : mounted == "2" ? (
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
                Enhance Limit
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
                  if (values?.Autentication == "PIN") {
                    handleValidatePin({ pin: values.pin })
                  } else if (values?.Autentication == "Card") {
                    let updated = {
                      expiryDate: values.expiryDate,
                      pan: values.pan,
                      pin: values.cardPin,
                    }
                    handleValidateCard(updated)
                  }
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
                        <Text
                          mb={["8px"]}
                          lineHeight={["16px", "17px"]}
                          fontSize={["12px", "14px"]}
                          fontWeight={"500"}
                          color={"neutral.1"}
                          fontFamily={"Montserrat"}
                        >
                          Choose Autentication
                        </Text>
                        <Select
                          // mb={["2px"]}
                          boxShadow="none !important"
                          className="selectInput"
                          name="Autentication"
                          onChange={(xx) =>
                            setFieldValue("Autentication", xx.target?.value)
                          }
                          onBlur={handleBlur}
                          value={values.Autentication}
                          style={{
                            display: "flex",
                            width: "100%",
                            border: "1.5px solid #828282",
                            borderRadius: "5px",
                            fontSize: "13px",
                          }}
                          color={"neutral.1"}

                          // placeholder="Select option"
                        >
                          <option value="">--</option>
                          {options.map((item) => (
                            <option
                              key={item.value}
                              value={item.value}
                              disabled={item?.disabled}
                            >
                              {item?.name || "options"}
                            </option>
                          ))}
                        </Select>
                        {errors.Autentication && touched.Autentication ? (
                          <FormHelperText color="error.20">
                            {errors.Autentication}
                          </FormHelperText>
                        ) : null}
                      </>
                      {values.Autentication == "PIN" ? (
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
                      ) : values.Autentication == "Card" ? (
                        <>
                          <Box mt={["10px", "15px"]}>
                            <Inputs
                              name={"pan"}
                              fontSize={["12px", "14px"]}
                              errorMsg={errors.pan}
                              error={errors.pan && touched.pan}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.pan}
                              color={"neutral.1"}
                              required={true}
                              maxLength={21}
                              fontFamily={"Montserrat"}
                              textColor="primary.400"
                              fontWeight="400"
                              title="Card PAN"
                            />
                          </Box>
                          <HStack
                            justifyContent={"space-between"}
                            mt={["10px", "15px"]}
                          >
                            <Box w="45%">
                              <Inputs
                                name={"cvv"}
                                fontSize={["12px", "14px"]}
                                errorMsg={errors.cvv}
                                maxLength={3}
                                error={errors.cvv && touched.cvv}
                                onChange={handleChange}
                                // required={true}
                                onBlur={handleBlur}
                                value={values.cvv}
                                color={"neutral.1"}
                                fontFamily={"Montserrat"}
                                textColor="primary.400"
                                fontWeight="400"
                                title="CVV"
                              />
                            </Box>
                            <Box w="45%">
                              <Inputs
                                name={"expiryDate"}
                                fontSize={["12px", "14px"]}
                                required={true}
                                errorMsg={errors.expiryDate}
                                maxLength={5}
                                error={errors.expiryDate && touched.expiryDate}
                                onChange={(e) => {
                                  const text = e.target?.value
                                  setFieldValue(
                                    "expiryDate",
                                    text.length === 3 && !text.includes("/")
                                      ? `${text.substring(
                                          0,
                                          2
                                        )}/${text.substring(2)}`
                                      : text
                                  )
                                }}
                                onBlur={handleBlur}
                                value={values.expiryDate}
                                showPrefix={false}
                                placeholder="mm/yy"
                                color={"neutral.1"}
                                fontFamily={"Montserrat"}
                                textColor="primary.400"
                                fontWeight="400"
                                title="Expiry Date"
                              />
                            </Box>
                          </HStack>
                          <Box
                            mt={["10px !important", "15px !important"]}
                            mb={["10px !important", "15px !important"]}
                          >
                            <PasswordInput
                              title="Card Pin"
                              leftIcon={
                                <MdOutlineVpnKey className="site-form-item-icon" />
                              }
                              id="cardPin"
                              onChange={handleChange}
                              required={true}
                              name="cardPin"
                              onBlur={handleBlur}
                              maxLength={4}
                              value={values.oldPassword}
                              border={
                                errors.cardPin && touched.cardPin
                                  ? "1px solid #F10000 !important"
                                  : "1px solid #959595 !important"
                              }
                              error={
                                errors.cardPin && touched.cardPin ? (
                                  <FormHelperText color="error.20">
                                    {errors.cardPin}
                                  </FormHelperText>
                                ) : null
                              }
                              showEye
                            />
                          </Box>
                        </>
                      ) : null}

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
                          isDisabled={
                            errors.Autentication ||
                            (values.Autentication == "PIN" && !values.pin) ||
                            (values.Autentication == "Card" &&
                              (errors.pan ||
                                // errors.cvv ||
                                errors.expiryDate ||
                                errors.cardPin)) ||
                            (values.Autentication == "Card" &&
                              (!values.cardPin ||
                                !values.pan ||
                                // values.cvv ||
                                !values.expiryDate))
                          }
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
        ) : null}
      </Modal>
    </>
  )
}

export default IndemityModal

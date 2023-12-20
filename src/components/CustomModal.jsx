import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Divider,
} from "@chakra-ui/react"

import { CustomButton } from "./CustomButton"
import { Children, isValidElement, cloneElement } from "react"

export default function CustomModal({
  btnTitle,
  btnIcon,
  title,
  children,
  lgModal,
  showline,
  titlem,
  ...props
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      return cloneElement(child, { onClose })
    }

    return child
  })

  return (
    <>
      <CustomButton
        btnText={btnTitle}
        leftIcon={btnIcon}
        onClick={onOpen}
        {...props}
      />

      <ChakraModal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={lgModal ? lgModal : "lg"}
      
      >
        <ModalOverlay />
        <ModalContent px="auto" py={1}>
          <ModalHeader
            p={["2px"]}
            mt={[titlem ? titlem : "60px"]}
            alignSelf="center"
            fontSize={["14px", "24px"]}
            color="primary.400"
          >
            <b>{title}</b>
          </ModalHeader>
          <ModalCloseButton _focus={{ borderBox: "none" }} />
          {showline && (
            <Divider
              w="80%"
              alignSelf="center"
              borderWidth={"1px"}
              borderColor="#D9D9D9"
              // mt={-3}
            />
          )}
          <ModalBody px={8}>{childrenWithProps}</ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  )
}

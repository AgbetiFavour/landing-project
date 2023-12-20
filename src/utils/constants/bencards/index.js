import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { GrEdit } from "react-icons/gr";
import LimitModal from "../../../utils/constants/limitmodal";
import DeleteBenModal from "../../../views/settings/subsetAccount/manageTransferBen/DeleteBenModal";
import { useColorMode } from "../../../helpers";

const ManTransCard = ({ name = "name", desc = "desc", benId, refetch }) => {
  const [open, setOpen] = React.useState(false);
  const { isDarkMode } = useColorMode();
  return (
    <>
      <DeleteBenModal
        {...{ open, setOpen }}
        title={name}
        desc={desc}
        benId={benId}
        refetch={refetch}
      />
      <Box
        mx={["10px", "15px"]}
        s
        my={["10px", "10px"]}
        position={["relative"]}
        textAlign={"start"}
        p={["10px", "16px"]}
        bg="neutral.15"
        maxH={["200"]}
        borderRadius={["5px"]}
        minH={["79px"]}
        // w={["100%"]}
      >
        <Text
          fontFamily="Montserrat"
          fontSize={["16px", "18px"]}
          color={!isDarkMode ? "brand.400" : "#E6E6E6"}
          fontWeight="600"
        >
          {name}
        </Text>
        <Button
          top={["10px"]}
          right={["10px"]}
          position={["absolute"]}
          bg="neutral.15"
          padding={"2px"}
          height={"20px"}
          onClick={() => setOpen(true)}
        >
          <DeleteIcon color={!isDarkMode ? "brand.400" : "#E6E6E6"} />
        </Button>
        <Text
          fontWeight="600"
          fontFamily="Montserrat"
          mt={["9px"]}
          fontSize={["13px", "12px"]}
          color={!isDarkMode ? "brand.400" : "#E6E6E6"}
        >
          {desc}
        </Text>
        {/* <Text mt={["16px"]} fontSize={["13px", "14px"]} color="brand.400">
          Single Transaction Limit: ₦ {single}
        </Text> */}
      </Box>
    </>
  );
};

export default ManTransCard;

import { Flex, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const MenuItem = ({
  link,
  url,
  icon,
  title,
  textSytle,
  onClick,
  isSctive,
  ...rest 
}) => {
  return (
    <Link onClick={onClick || null} to={link}>
      <Flex alignItems={["center"]}>
        {icon || <Text>""</Text>}
        <Text
          pl={["9px", "10px"]}
          color={isSctive ? "primary.100" : "#ffffff"}
          fontWeight="500"
          fontFamily="Montserrat"
          fontSize={["13px", "18px"]}
          {...rest}
        >
          {title || "Dashboard"}
        </Text>
      </Flex>
    </Link>
  );
};

export default MenuItem;

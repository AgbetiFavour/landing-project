import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./buttons";
import { ImCircleLeft } from "react-icons/im";
import { useColorMode } from "../helpers";

const BackButton = ({ onclick }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useColorMode();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <ImCircleLeft
        onClick={onclick || goBack}
        style={{
          cursor: "pointer",
          margin: "10px",
          color: isDarkMode ? "#E6E6E6" : "",
        }}
        fontSize={20}
      />
    </>
  );

  //   <Buttons onClick={goBack} title="Back" />;
};

export default BackButton;

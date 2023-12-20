import { extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

const colors = {
  brand: {
    500: "#B89645",
    400: "#ffffff",
    200: "#FAFAFA",
    600: "rgba(255, 255, 255,0.9)",
  },
  secondary: {
    50: "#FEF2DE",
    100: "#000000",
    200: "#FCD99B",
    300: "#FBCD7A",
    400: "#FBC059",
    500: "#F9AB21",
    600: "#E99706",
    700: "#976204",
    800: "#603E03",
    900: "#231600",
  },
  primary: {
    100: "#B89645",
    200: "#E7E2D5",
    300: "rgba(184, 150, 69, 0.1)",
    400: "#000000",
  },
  neutral: {
    1: "#828282",
    2: "#E6E6E6",
    3:"rgba(237, 237, 237, 0.8)",
    5: "#BDBDBD",
    10: "#949599",
    15: "#515357",
    20: "#C9CCD1",
    25: "#858585",
    30: "#979797",
    35: "#CFCFCF",
    40: "#BEBEBE",
    50: "#F0F1F5",
    60: "#A9A9A9",
    100: "#2A3447",
    200: "#0E0D0C",
    300: "#A0A9BC",
    400: "#C4C4C4",
    500: "#4B4B4B",
    700: "#161616",
    800: "#000000",
    900: "#60708F",
  },
  error: {
    20: "#F10000",
    50: "#FFE0E0",
    100: "#DA2127",
    200: "#FFB2B2",
    300: "#FF8484",
    400: "#FF5656",
    500: "#FF3F3F",
    600: "#FF1F1F",
    700: "#CF0000",
    800: "#9F0000",
    900: "#6F0000",
  },
  success: {
    5: "#38C779",
    20: "#38C779",
    50: "#DCFFEA",
    100: "#219653",
    200: "#8AFFB9",
    300: "#5BFF9D",
    400: "#0AFF6C",
    500: "#00DA57",
    600: "#00C44E",
    700: "#00A341",
    800: "#007830",
    900: "#005723",
  },
  accent: {
    white: "#ffffff",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  // heading: "'Circular Std', sans-serif",
  // body: "'Circular Std', sans-serif",
};

const styles = {
  global: () => ({
    body: {
      color: "neutral.100",
      fontVariant: "normal",
    },
  }),
};

const CustomSteps = {
  ...Steps,
  baseStyle: (props) => {
    return {
      ...Steps.baseStyle(props),
      labelContainer: {
        ...Steps.baseStyle(props).labelContainer,
        fontWeight: "bold",
        _activeStep: {
          ...Steps.baseStyle(props).labelContainer._activeStep,
          color: "#EA6F06",
        },
      },
      label: {
        ...Steps.baseStyle(props).label,
        fontWeight: "bold",
        // bg: "#B89645",
        color: "#fff",
      },

      stepIconContainer: {
        ...Steps.baseStyle(props).stepIconContainer,
        bg: "#949599",
        fontWeight: "bold",
        _activeStep: {
          ...Steps.baseStyle(props).stepIconContainer._activeStep,
          bg: "#B89645",
          borderColor: "#B89645",
          color: "white ",
        },
      },
      description: {
        ...Steps.baseStyle(props).description,
        "font-weight": "500 !important",
        maxWidth: "6rem",
        "font-size": "10px",
        marginTop: ".3rem",

        color: "#2A3447",
        fontFamily: "Montserrat",
      },
    };
  },
};

const customTheme = extendTheme({
  colors,
  styles,
  components: {
    Steps: CustomSteps,
  },
});

export default customTheme;

import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    main: "#274C77",
  },
  secondary: {
    main: "#6096BA",
  },
  tertiary: {
    main: "#E7ECEF",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
